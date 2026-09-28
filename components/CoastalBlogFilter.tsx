'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const categoryColors: Record<string, string> = {
  'Speech Therapy': '#1e7faa',
  'Occupational Therapy': '#2a9d8f',
  'Physical Therapy': '#e76f51',
  'Community': '#6a4c93',
  'Family Stories': '#f4a261',
  'Parent Tips': '#457b9d',
}

function getColor(cat: string) {
  return categoryColors[cat] || '#1e7faa'
}

function formatDate(d: string | null) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

interface Post {
  slug: string
  title: string
  category: string | null
  feature_image: string | null
  meta_description: string | null
  published_at: string | null
  hero_position: string | null
}

interface Props {
  posts: Post[]
  categories: string[]
}

export default function CoastalBlogFilter({ posts, categories }: Props) {
  const [active, setActive] = useState<string | null>(null)

  const filtered = active ? posts.filter(p => p.category === active) : posts
  const featured = filtered[0] ?? null
  const rest = filtered.slice(1)

  return (
    <>
      {/* Category filter bar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
        <button
          onClick={() => setActive(null)}
          style={{
            padding: '6px 16px',
            borderRadius: '999px',
            fontSize: '0.8rem',
            fontWeight: 700,
            border: '1.5px solid',
            cursor: 'pointer',
            transition: 'all 0.15s',
            borderColor: active === null ? '#1e7faa' : '#d1e5ef',
            backgroundColor: active === null ? '#1e7faa' : '#fff',
            color: active === null ? '#fff' : '#4b5563',
          }}
        >
          All Posts
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat === active ? null : cat)}
            style={{
              padding: '6px 16px',
              borderRadius: '999px',
              fontSize: '0.8rem',
              fontWeight: 700,
              border: '1.5px solid',
              cursor: 'pointer',
              transition: 'all 0.15s',
              borderColor: active === cat ? getColor(cat) : '#d1e5ef',
              backgroundColor: active === cat ? getColor(cat) : '#fff',
              color: active === cat ? '#fff' : '#4b5563',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{ color: '#9ca3af', textAlign: 'center', padding: '3rem 0' }}>No posts in this category yet.</p>
      )}

      {/* Featured post */}
      {featured && (
        <Link href={`/coastal-therapy-blog/${featured.slug}`} style={{ textDecoration: 'none', display: 'block', marginBottom: '2rem' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '14px', border: '1px solid #e2e8f0', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '280px' }}>
            <div style={{ position: 'relative', minHeight: '280px', backgroundColor: '#e8f4f8' }}>
              {featured.feature_image && (
                <Image
                  src={featured.feature_image}
                  alt={featured.title}
                  fill
                  style={{ objectFit: 'cover', objectPosition: featured.hero_position || 'center 20%' }}
                />
              )}
            </div>
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {featured.category && (
                <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: getColor(featured.category), marginBottom: '0.5rem', display: 'block' }}>
                  {featured.category}
                </span>
              )}
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1e3a5f', lineHeight: 1.3, marginBottom: '0.75rem' }}>{featured.title}</h2>
              {featured.meta_description && (
                <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: 1.7, marginBottom: '1rem' }}>{featured.meta_description}</p>
              )}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{formatDate(featured.published_at)}</span>
                <span style={{ fontSize: '0.85rem', color: '#1e7faa', fontWeight: 700 }}>Read more &rsaquo;</span>
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Grid */}
      {rest.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {rest.map(post => (
            <Link key={post.slug} href={`/coastal-therapy-blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: '200px', backgroundColor: '#e8f4f8' }}>
                  {post.feature_image && (
                    <Image
                      src={post.feature_image}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover', objectPosition: post.hero_position || 'center 20%' }}
                    />
                  )}
                  {post.category && (
                    <span style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', backgroundColor: getColor(post.category), color: '#fff', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '4px' }}>
                      {post.category}
                    </span>
                  )}
                </div>
                <div style={{ padding: '1.25rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#1e3a5f', lineHeight: 1.4, marginBottom: '0.6rem', flexGrow: 1 }}>{post.title}</h2>
                  {post.meta_description && (
                    <p style={{ fontSize: '0.875rem', color: '#4b5563', lineHeight: 1.65, marginBottom: '1rem' }}>{post.meta_description}</p>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                    <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{formatDate(post.published_at)}</span>
                    <span style={{ fontSize: '0.8rem', color: '#1e7faa', fontWeight: 700 }}>Read &rsaquo;</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
