'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Link from '@tiptap/extension-link'
import {
  Bold, Italic, Underline as UnderlineIcon,
  Heading2, Heading3,
  List, ListOrdered,
  Quote, Minus, Strikethrough,
  AlignLeft, AlignCenter, AlignRight,
  Link2, RemoveFormatting,
} from 'lucide-react'
import { useEffect, useCallback } from 'react'

interface TiptapEditorProps {
  value: string
  onChange: (html: string) => void
  placeholder?: string
}

export default function CoastalTiptapEditor({ value, onChange, placeholder }: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: value || '',
    onUpdate({ editor }) {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm max-w-none min-h-[200px] px-4 py-3 outline-none',
      },
    },
  })

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '', { emitUpdate: false })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  const setLink = useCallback(() => {
    if (!editor) return
    const url = window.prompt('Enter URL:')
    if (!url) return
    editor.chain().focus().setLink({ href: url }).run()
  }, [editor])

  if (!editor) return null

  const btn = (active: boolean) =>
    `p-1.5 rounded transition-colors ${active ? 'text-white' : 'text-gray-600 hover:bg-gray-100'}`

  const btnStyle = (active: boolean) => active ? { backgroundColor: '#1e7faa' } : {}

  const Divider = () => (
    <div className="w-px h-5 mx-1 shrink-0 bg-gray-200" />
  )

  return (
    <div className="border rounded-lg" style={{ borderColor: '#d1e5ef' }}>
      {/* Toolbar */}
      <div
        className="flex flex-wrap items-center gap-0.5 px-3 py-2 border-b rounded-t-lg"
        style={{ borderColor: '#d1e5ef', backgroundColor: '#f0f7fb' }}
      >
        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={btn(editor.isActive('bold'))} style={btnStyle(editor.isActive('bold'))} title="Bold"><Bold size={15} /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={btn(editor.isActive('italic'))} style={btnStyle(editor.isActive('italic'))} title="Italic"><Italic size={15} /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()} className={btn(editor.isActive('underline'))} style={btnStyle(editor.isActive('underline'))} title="Underline"><UnderlineIcon size={15} /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleStrike().run()} className={btn(editor.isActive('strike'))} style={btnStyle(editor.isActive('strike'))} title="Strikethrough"><Strikethrough size={15} /></button>

        <Divider />

        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={btn(editor.isActive('heading', { level: 2 }))} style={btnStyle(editor.isActive('heading', { level: 2 }))} title="Heading 2"><Heading2 size={15} /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={btn(editor.isActive('heading', { level: 3 }))} style={btnStyle(editor.isActive('heading', { level: 3 }))} title="Heading 3"><Heading3 size={15} /></button>

        <Divider />

        <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={btn(editor.isActive('bulletList'))} style={btnStyle(editor.isActive('bulletList'))} title="Bullet list"><List size={15} /></button>
        <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} className={btn(editor.isActive('orderedList'))} style={btnStyle(editor.isActive('orderedList'))} title="Numbered list"><ListOrdered size={15} /></button>

        <Divider />

        <button type="button" onClick={() => editor.chain().focus().toggleBlockquote().run()} className={btn(editor.isActive('blockquote'))} style={btnStyle(editor.isActive('blockquote'))} title="Blockquote"><Quote size={15} /></button>
        <button type="button" onClick={() => editor.chain().focus().setHorizontalRule().run()} className={btn(false)} title="Horizontal rule"><Minus size={15} /></button>

        <Divider />

        <button type="button" onClick={() => editor.chain().focus().setTextAlign('left').run()} className={btn(editor.isActive({ textAlign: 'left' }))} style={btnStyle(editor.isActive({ textAlign: 'left' }))} title="Align left"><AlignLeft size={15} /></button>
        <button type="button" onClick={() => editor.chain().focus().setTextAlign('center').run()} className={btn(editor.isActive({ textAlign: 'center' }))} style={btnStyle(editor.isActive({ textAlign: 'center' }))} title="Align center"><AlignCenter size={15} /></button>
        <button type="button" onClick={() => editor.chain().focus().setTextAlign('right').run()} className={btn(editor.isActive({ textAlign: 'right' }))} style={btnStyle(editor.isActive({ textAlign: 'right' }))} title="Align right"><AlignRight size={15} /></button>

        <Divider />

        <button type="button" onClick={setLink} className={btn(editor.isActive('link'))} style={btnStyle(editor.isActive('link'))} title="Add link"><Link2 size={15} /></button>
        <button type="button" onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()} className={btn(false)} title="Clear formatting"><RemoveFormatting size={15} /></button>
      </div>

      {/* Editor area */}
      <div className="relative rounded-b-lg" style={{ minHeight: '200px', maxHeight: '500px', overflowY: 'auto', backgroundColor: '#fff' }}>
        {!editor.getText() && placeholder && (
          <p className="absolute pointer-events-none px-4 py-3 text-sm" style={{ color: '#aaa' }}>
            {placeholder}
          </p>
        )}
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}
