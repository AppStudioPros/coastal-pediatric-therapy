'use client'

import { useState, useRef } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { Upload, X } from 'lucide-react'

interface ImageUploaderProps {
  label: string
  value: string
  onChange: (url: string) => void
  optional?: boolean
}

export default function CoastalImageUploader({ label, value, onChange, optional }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  async function handleFile(file: File) {
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file.')
      return
    }

    // No size limit — any image size is allowed
    setError('')
    setUploading(true)

    try {
      const ext = file.name.split('.').pop()
      const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`

      const { error: uploadError } = await supabase.storage
        .from('coastal-blog-images')
        .upload(filename, file, { upsert: false })

      if (uploadError) {
        setError('Upload failed. Please try again.')
        return
      }

      const { data } = supabase.storage.from('coastal-blog-images').getPublicUrl(filename)
      onChange(data.publicUrl)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }

  function handleRemove() {
    onChange('')
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div>
      <label className="block text-sm font-medium mb-1.5" style={{ color: '#1e3a5f' }}>
        {label}
        {optional && (
          <span className="text-xs font-normal ml-1" style={{ color: '#aaa' }}>(optional)</span>
        )}
      </label>

      {value ? (
        <div className="relative rounded-lg overflow-hidden border" style={{ borderColor: '#d1e5ef' }}>
          <img src={value} alt="" className="w-full h-40 object-cover" />
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-md hover:bg-red-50 transition-colors"
          >
            <X size={13} style={{ color: '#e53e3e' }} />
          </button>
        </div>
      ) : (
        <div
          className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors hover:bg-blue-50/30"
          style={{ borderColor: uploading ? '#1e7faa' : '#d1e5ef' }}
          onClick={() => !uploading && inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) handleFile(file)
            }}
          />
          <div className="flex flex-col items-center gap-2">
            {uploading ? (
              <>
                <div className="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: '#1e7faa', borderTopColor: 'transparent' }} />
                <p className="text-sm font-medium" style={{ color: '#1e7faa' }}>Uploading...</p>
              </>
            ) : (
              <>
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e8f4f8' }}>
                  <Upload size={17} style={{ color: '#1e7faa' }} />
                </div>
                <p className="text-sm font-medium" style={{ color: '#1e3a5f' }}>Click to upload</p>
                <p className="text-xs" style={{ color: '#aaa' }}>or drag and drop — PNG, JPG, WEBP (no size limit)</p>
              </>
            )}
          </div>
        </div>
      )}

      {error && <p className="text-xs mt-1.5 text-red-500">{error}</p>}
    </div>
  )
}
