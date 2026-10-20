'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { X, Send, ChevronDown } from 'lucide-react'
import { useWidget } from '@/contexts/WidgetContext'

type Message = { role: 'user' | 'assistant'; content: string }

const STARTERS = [
  "What services do you offer?",
  "Do you accept my insurance?",
  "How do I get my child started?",
  "Where are you located?",
]

const FORM_URL = '/new-patient-request-form'

export default function ChatWidget() {
  const pathname = usePathname()
  const { openPanel, toggle } = useWidget()
  const open = openPanel === 'chat'
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [chatEnded, setChatEnded] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  if (pathname?.startsWith('/admin')) return null

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  function clearChat() {
    setMessages([])
    setChatEnded(false)
  }

  async function sendMessage(text: string) {
    if (!text.trim() || loading || chatEnded) return
    const userMsg: Message = { role: 'user', content: text.trim() }
    const next = [...messages, userMsg]
    setMessages(next)
    setInput('')
    setTimeout(() => inputRef.current?.focus(), 50)
    setLoading(true)
    setMessages(prev => [...prev, { role: 'assistant', content: '' }])

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })

      if (!res.ok || !res.body) {
        setMessages(prev => {
          const u = [...prev]
          u[u.length - 1] = { role: 'assistant', content: "Something went wrong! Please call us at (904) 372-4070 or fill out the new patient form." }
          return u
        })
        setLoading(false)
        return
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let fullText = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value, { stream: true })
        for (const line of chunk.split('\n')) {
          if (!line.startsWith('data: ')) continue
          const raw = line.slice(6)
          if (raw === '[DONE]') break
          try {
            const parsed = JSON.parse(raw)
            if (parsed.text) {
              fullText += parsed.text
              const cleaned = fullText.replace('[CHAT_ENDED]', '').trim()
              setMessages(prev => {
                const u = [...prev]
                u[u.length - 1] = { role: 'assistant', content: cleaned }
                return u
              })
              if (fullText.includes('[CHAT_ENDED]')) setChatEnded(true)
            }
          } catch { /* skip */ }
        }
      }
    } catch {
      setMessages(prev => {
        const u = [...prev]
        u[u.length - 1] = { role: 'assistant', content: "Something went wrong! Please call us at (904) 372-4070 or fill out the new patient form." }
        return u
      })
    }
    setLoading(false)
    setTimeout(() => inputRef.current?.focus(), 10)
  }

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3" style={{ zIndex: 10000 }}>
      {open && (
        <div
          className="flex flex-col rounded-2xl shadow-2xl overflow-hidden"
          style={{ width: 340, height: 500, backgroundColor: '#fff', border: '1px solid #B8E4F0' }}
        >
          {/* Header */}
          <div style={{ backgroundColor: '#1e3a4a' }}>
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(36,181,208,0.2)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#24B5D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-none">Coastal Therapy</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>Ask us anything</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {messages.length > 0 && (
                  <button onClick={clearChat} className="text-xs px-2.5 py-1 rounded transition-colors hover:bg-white/10" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    Clear
                  </button>
                )}
                <button onClick={() => toggle('chat')} className="p-1 rounded hover:bg-white/10 transition-colors">
                  <ChevronDown size={18} color="rgba(255,255,255,0.7)" />
                </button>
              </div>
            </div>
            {/* Call bar */}
            <a
              href="tel:9043724070"
              className="flex items-center justify-center gap-2 py-2 text-xs font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#24B5D0', color: '#fff' }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 10.5 19.79 19.79 0 0 1 1.61 2 2 2 0 0 1 3.6 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call Now — (904) 372-4070
            </a>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3" style={{ backgroundColor: '#f8fdff' }}>
            {messages.length === 0 && (
              <div>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#4a7a8a' }}>
                  Hi there! 👋 I can answer quick questions about our therapy services, locations, and how to get your child started. What can I help you with?
                </p>
                <div className="flex flex-col gap-2">
                  {STARTERS.map(s => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="text-left text-xs px-3 py-2.5 rounded-lg border transition-colors hover:bg-[#EAF6FB]"
                      style={{ borderColor: '#B8E4F0', color: '#1e3a4a' }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div
                  className="px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed max-w-[85%]"
                  style={m.role === 'user'
                    ? { backgroundColor: '#1e3a4a', color: '#fff', borderBottomRightRadius: 4 }
                    : { backgroundColor: '#fff', color: '#333', border: '1px solid #B8E4F0', borderBottomLeftRadius: 4 }
                  }
                >
                  {m.content}
                </div>
                {m.role === 'assistant' && m.content && i === messages.length - 1 && (
                  <a
                    href={FORM_URL}
                    className="mt-2 text-xs font-semibold px-3 py-1.5 rounded-lg transition-opacity hover:opacity-90"
                    style={{ backgroundColor: '#24B5D0', color: '#fff' }}
                  >
                    New Patient Form →
                  </a>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="px-4 py-3 rounded-2xl text-sm" style={{ backgroundColor: '#fff', border: '1px solid #B8E4F0', borderBottomLeftRadius: 4 }}>
                  <div className="flex gap-1 items-center">
                    {[0, 150, 300].map(d => (
                      <span key={d} className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ backgroundColor: '#24B5D0', animationDelay: `${d}ms` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 border-t shrink-0" style={{ borderColor: '#B8E4F0', backgroundColor: '#fff' }}>
            {chatEnded ? (
              <div className="text-center">
                <p className="text-xs mb-2" style={{ color: '#aaa' }}>This chat session has ended.</p>
                <button onClick={clearChat} className="text-xs font-semibold px-4 py-2 rounded-lg" style={{ backgroundColor: '#1e3a4a', color: '#fff' }}>
                  Start a New Chat
                </button>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); sendMessage(input) }} className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  disabled={loading}
                  className="flex-1 text-sm px-3 py-2.5 rounded-lg border outline-none disabled:opacity-50"
                  style={{ borderColor: '#B8E4F0', color: '#1e3a4a' }}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 disabled:opacity-40 transition-opacity"
                  style={{ backgroundColor: '#24B5D0' }}
                >
                  <Send size={14} color="#fff" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => toggle('chat')}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
        style={{ background: 'radial-gradient(circle at 35% 30%, #3ab5d0, #1e3a4a 60%)', border: '1px solid rgba(255,255,255,0.15)', boxShadow: '0 4px 20px rgba(36,181,208,0.4)' }}
        aria-label="Chat with us"
      >
        {open ? (
          <X size={22} color="#fff" />
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
      </button>
    </div>
  )
}
