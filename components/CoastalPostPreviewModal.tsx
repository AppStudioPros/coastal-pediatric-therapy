'use client'

import { useState } from 'react'
import { X, Calendar } from 'lucide-react'

interface PreviewData {
  title: string
  slug: string
  feature_image: string
  hero_position: string
  meta_description: string
  category: string
  body_top: string
  mid_image: string
  cta_text: string
  cta_url: string
}

interface Props {
  data: PreviewData
  onClose: () => void
}

function CardPreview({ data }: { data: PreviewData }) {
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

  return (
    <div className="flex justify-center p-8" style={{ backgroundColor: '#f0f7fb' }}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm w-80">
        {data.feature_image ? (
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src={data.feature_image}
              alt={data.title}
              className="w-full h-full object-cover"
              style={{ objectPosition: data.hero_position || '50% 20%' }}
            />
          </div>
        ) : (
          <div className="h-48 flex items-center justify-center" style={{ backgroundColor: '#e8f4f8' }}>
            <span className="text-4xl font-bold opacity-20" style={{ color: '#1e7faa' }}>CT</span>
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            {data.category && (
              <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full" style={{ backgroundColor: '#e8f4f8', color: '#1e7faa' }}>
                {data.category}
              </span>
            )}
            <div className="flex items-center gap-1.5 text-xs" style={{ color: '#888' }}>
              <Calendar size={12} />
              <span>{today}</span>
            </div>
          </div>
          <h2 className="text-lg font-semibold leading-snug mb-3" style={{ color: '#1e3a5f' }}>
            {data.title || 'Post Title'}
          </h2>
          {data.meta_description && (
            <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: '#555' }}>
              {data.meta_description}
            </p>
          )}
          <span className="inline-block text-sm font-semibold" style={{ color: '#1e7faa', borderBottom: '2px solid #FFD940' }}>
            Read More
          </span>
        </div>
      </div>
    </div>
  )
}

function PostPreview({ data }: { data: PreviewData }) {
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

  return (
    <div className="overflow-y-auto" style={{ maxHeight: '70vh' }}>
      {data.feature_image && (
        <div className="relative w-full overflow-hidden" style={{ height: '240px' }}>
          <img
            src={data.feature_image}
            alt={data.title}
            className="w-full h-full object-cover"
            style={{ objectPosition: data.hero_position || '50% 20%' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(30,58,95,0.6) 100%)' }} />
        </div>
      )}

      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          {data.category && (
            <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: '#e8f4f8', color: '#1e7faa' }}>
              {data.category}
            </span>
          )}
          <div className="flex items-center gap-1.5 text-sm" style={{ color: '#888' }}>
            <Calendar size={14} />
            <span>{today}</span>
          </div>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-8" style={{ color: '#1e3a5f' }}>
          {data.title || 'Post Title'}
        </h1>

        {data.body_top && (
          <div className="prose" dangerouslySetInnerHTML={{ __html: data.body_top }} />
        )}

        {data.mid_image && (
          <div className="my-8 rounded-xl overflow-hidden">
            <img src={data.mid_image} alt="" className="w-full object-cover" style={{ maxHeight: '300px' }} />
          </div>
        )}

        {data.cta_text && (
          <div className="mt-10 p-6 rounded-xl text-center" style={{ backgroundColor: '#1e7faa' }}>
            <span className="inline-block px-6 py-3 rounded font-semibold text-sm" style={{ backgroundColor: '#FFD940', color: '#1e3a5f' }}>
              {data.cta_text}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function CoastalPostPreviewModal({ data, onClose }: Props) {
  const [tab, setTab] = useState<'card' | 'post'>('card')

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
      <div className="bg-white rounded-2xl shadow-2xl w-full overflow-hidden" style={{ maxWidth: '720px', maxHeight: '90vh' }}>
        <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: '#e2e8f0' }}>
          <div className="flex gap-1 rounded-lg overflow-hidden border text-sm font-medium" style={{ borderColor: '#e2e8f0' }}>
            <button
              onClick={() => setTab('card')}
              className="px-4 py-1.5 transition-colors"
              style={{ backgroundColor: tab === 'card' ? '#1e7faa' : '#fff', color: tab === 'card' ? '#fff' : '#888' }}
            >
              Card View
            </button>
            <button
              onClick={() => setTab('post')}
              className="px-4 py-1.5 transition-colors"
              style={{ backgroundColor: tab === 'post' ? '#1e7faa' : '#fff', color: tab === 'post' ? '#fff' : '#888' }}
            >
              Post View
            </button>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <X size={18} style={{ color: '#888' }} />
          </button>
        </div>

        <div style={{ maxHeight: 'calc(90vh - 64px)', overflow: 'auto' }}>
          {tab === 'card' ? <CardPreview data={data} /> : <PostPreview data={data} />}
        </div>
      </div>
    </div>
  )
}
