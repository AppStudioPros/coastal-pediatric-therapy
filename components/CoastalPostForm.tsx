'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

const CoastalTiptapEditor = dynamic(() => import('./CoastalTiptapEditor'), { ssr: false })
const CoastalImageUploader = dynamic(() => import('./CoastalImageUploader'), { ssr: false })
const CoastalPostPreviewModal = dynamic(() => import('./CoastalPostPreviewModal'), { ssr: false })

function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80)
}

interface PostFormProps {
  initialData?: {
    id?: string
    title?: string
    slug?: string
    status?: 'draft' | 'published'
    meta_description?: string
    feature_image?: string
    body_top?: string
    mid_image?: string
    body_bottom?: string
    cta_text?: string
    category?: string
    keywords?: string
    hero_position?: string
    cta_url?: string
  }
  isEdit?: boolean
}

export default function CoastalPostForm({ initialData, isEdit }: PostFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showPreview, setShowPreview] = useState(false)

  const [title, setTitle] = useState(initialData?.title || '')
  const [slug, setSlug] = useState(initialData?.slug || '')
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(!!initialData?.slug)
  const [status, setStatus] = useState<'draft' | 'published'>(initialData?.status || 'draft')
  const [metaDescription, setMetaDescription] = useState(initialData?.meta_description || '')
  const [featureImage, setFeatureImage] = useState(initialData?.feature_image || '')
  const [bodyTop, setBodyTop] = useState(initialData?.body_top || '')
  const [midImage, setMidImage] = useState(initialData?.mid_image || '')
  const [ctaText, setCtaText] = useState(initialData?.cta_text || 'Request an Evaluation')
  const [ctaUrl, setCtaUrl] = useState(initialData?.cta_url || 'https://coastaltherapy.net/new-patient-request-form')
  const [category, setCategory] = useState(initialData?.category || '')
  const [keywords, setKeywords] = useState(initialData?.keywords || '')
  const [heroPosition, setHeroPosition] = useState(initialData?.hero_position || '50% 20%')
  const [dbCategories, setDbCategories] = useState<{ id: string; name: string }[]>([])
  const [newCategory, setNewCategory] = useState('')
  const [addingCategory, setAddingCategory] = useState(false)

  useEffect(() => {
    fetch('/api/admin/categories')
      .then(r => r.json())
      .then(setDbCategories)
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (!slugManuallyEdited) {
      setSlug(slugify(title))
    }
  }, [title, slugManuallyEdited])

  async function handleSave(publishStatus: 'draft' | 'published') {
    setError('')
    if (!title.trim()) { setError('Title is required.'); return }
    if (!slug.trim()) { setError('Slug is required.'); return }

    setLoading(true)
    try {
      const payload = {
        title: title.trim(),
        slug: slug.trim(),
        status: publishStatus,
        meta_description: metaDescription,
        feature_image: featureImage,
        body_top: bodyTop,
        mid_image: midImage,
        cta_text: ctaText,
        cta_url: ctaUrl,
        category: category || null,
        keywords: keywords || null,
        hero_position: heroPosition || '50% 20%',
      }

      let res: Response
      if (isEdit && initialData?.id) {
        res = await fetch(`/api/admin/posts/${initialData.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      } else {
        res = await fetch('/api/admin/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      }

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Save failed')
      }

      router.push('/admin/dashboard')
      router.refresh()
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = 'w-full border rounded-lg px-4 py-2.5 text-sm outline-none transition-all bg-white'

  return (
    <>
    <div className="max-w-3xl mx-auto">
      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
          {error}
        </div>
      )}

      <div className="flex flex-col gap-6">
        {/* Post Details */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: '#6b7280' }}>
            Post Details
          </h2>

          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: '#1e3a5f' }}>
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={inputClass}
                style={{ borderColor: '#d1e5ef' }}
                placeholder="e.g. How to Help Your Child With Sensory Play"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: '#1e3a5f' }}>
                Slug
              </label>
              <div className="flex items-center gap-2">
                <span className="text-sm" style={{ color: '#888' }}>/coastal-therapy-blog/</span>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => {
                    setSlug(slugify(e.target.value))
                    setSlugManuallyEdited(true)
                  }}
                  className={`${inputClass} flex-1`}
                  style={{ borderColor: '#d1e5ef' }}
                  placeholder="auto-generated"
                />
              </div>
              <p className="text-xs mt-1" style={{ color: '#aaa' }}>
                Preview: /coastal-therapy-blog/{slug || 'your-slug'}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: '#1e3a5f' }}>
                Meta Description (SEO)
              </label>
              <textarea
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                rows={3}
                className={inputClass}
                style={{ borderColor: '#d1e5ef' }}
                placeholder="Brief description for search engines (150-160 chars)"
              />
              <p className="text-xs mt-1" style={{ color: '#aaa' }}>
                {metaDescription.length}/160 characters
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#1e3a5f' }}>
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => {
                    if (e.target.value === '__add__') {
                      setAddingCategory(true)
                    } else {
                      setCategory(e.target.value)
                    }
                  }}
                  className={inputClass}
                  style={{ borderColor: '#d1e5ef' }}
                >
                  <option value="">No category</option>
                  {dbCategories.map(c => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                  <option value="__add__">+ Add new category...</option>
                </select>
                {addingCategory && (
                  <div className="flex gap-2 mt-2">
                    <input
                      type="text"
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className={`${inputClass} flex-1`}
                      style={{ borderColor: '#d1e5ef' }}
                      placeholder="New category name"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={async () => {
                        if (!newCategory.trim()) return
                        const res = await fetch('/api/admin/categories', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ name: newCategory.trim() }),
                        })
                        if (res.ok) {
                          const cat = await res.json()
                          setDbCategories(prev => [...prev, cat].sort((a, b) => a.name.localeCompare(b.name)))
                          setCategory(cat.name)
                          setNewCategory('')
                          setAddingCategory(false)
                        }
                      }}
                      className="px-3 py-2 text-sm font-semibold text-white rounded-lg"
                      style={{ backgroundColor: '#1e7faa' }}
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      onClick={() => { setAddingCategory(false); setNewCategory('') }}
                      className="px-3 py-2 text-sm rounded-lg border"
                      style={{ borderColor: '#d1e5ef', color: '#888' }}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#1e3a5f' }}>
                  SEO Keywords
                </label>
                <input
                  type="text"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  className={inputClass}
                  style={{ borderColor: '#d1e5ef' }}
                  placeholder="speech therapy, Jacksonville Beach, pediatric"
                />
                <p className="text-xs mt-1" style={{ color: '#aaa' }}>Separate with commas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: '#6b7280' }}>
            Content
          </h2>

          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              <CoastalImageUploader label="Feature Image" value={featureImage} onChange={setFeatureImage} />
              <CoastalImageUploader label="Mid-Section Image" value={midImage} onChange={setMidImage} optional />
            </div>

            {featureImage && (
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#1e3a5f' }}>Hero Position</label>
                <input
                  type="text"
                  value={heroPosition}
                  onChange={(e) => setHeroPosition(e.target.value)}
                  className={inputClass}
                  style={{ borderColor: '#d1e5ef' }}
                  placeholder="50% 20%"
                />
                <p className="text-xs mt-1" style={{ color: '#aaa' }}>CSS object-position value (e.g. &quot;50% 20%&quot; or &quot;center top&quot;)</p>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: '#1e3a5f' }}>
                Post Content
              </label>
              <CoastalTiptapEditor
                value={bodyTop}
                onChange={setBodyTop}
                placeholder="Write your post content here..."
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: '#6b7280' }}>
            Call to Action (optional)
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: '#1e3a5f' }}>CTA Button Text</label>
              <input
                type="text"
                value={ctaText}
                onChange={(e) => setCtaText(e.target.value)}
                className={inputClass}
                style={{ borderColor: '#d1e5ef' }}
                placeholder="Request an Evaluation"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: '#1e3a5f' }}>CTA URL</label>
              <input
                type="url"
                value={ctaUrl}
                onChange={(e) => setCtaUrl(e.target.value)}
                className={inputClass}
                style={{ borderColor: '#d1e5ef' }}
                placeholder="https://..."
              />
            </div>
          </div>
        </div>

        {/* Save buttons */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => setShowPreview(true)}
              className="px-5 py-2.5 rounded-lg border text-sm font-semibold transition-colors hover:bg-gray-50"
              style={{ borderColor: '#d1e5ef', color: '#6b7280' }}
            >
              Preview
            </button>
            <button
              type="button"
              onClick={() => handleSave('draft')}
              disabled={loading}
              className="px-5 py-2.5 rounded-lg border text-sm font-semibold transition-colors hover:bg-gray-50 disabled:opacity-60"
              style={{ borderColor: '#d1e5ef', color: '#1e3a5f' }}
            >
              {loading ? 'Saving...' : 'Save Draft'}
            </button>
            <button
              type="button"
              onClick={() => handleSave('published')}
              disabled={loading}
              className="px-5 py-2.5 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90 disabled:opacity-60"
              style={{ backgroundColor: '#1e7faa' }}
            >
              {loading ? 'Saving...' : isEdit && initialData?.status === 'published' ? 'Update' : 'Publish'}
            </button>
          </div>
        </div>
      </div>
    </div>

    {showPreview && (
      <CoastalPostPreviewModal
        data={{
          title,
          slug,
          feature_image: featureImage,
          hero_position: heroPosition,
          meta_description: metaDescription,
          category,
          body_top: bodyTop,
          mid_image: midImage,
          cta_text: ctaText,
          cta_url: ctaUrl,
        }}
        onClose={() => setShowPreview(false)}
      />
    )}
    </>
  )
}
