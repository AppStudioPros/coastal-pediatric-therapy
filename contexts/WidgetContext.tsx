'use client'

import { createContext, useContext, useState } from 'react'

type Panel = 'chat' | 'accessibility' | null

interface WidgetContextType {
  openPanel: Panel
  setOpenPanel: (panel: Panel) => void
  toggle: (panel: 'chat' | 'accessibility') => void
}

const WidgetContext = createContext<WidgetContextType>({
  openPanel: null,
  setOpenPanel: () => {},
  toggle: () => {},
})

export function WidgetProvider({ children }: { children: React.ReactNode }) {
  const [openPanel, setOpenPanel] = useState<Panel>(null)

  function toggle(panel: 'chat' | 'accessibility') {
    setOpenPanel(prev => (prev === panel ? null : panel))
  }

  return (
    <WidgetContext.Provider value={{ openPanel, setOpenPanel, toggle }}>
      {children}
    </WidgetContext.Provider>
  )
}

export function useWidget() {
  return useContext(WidgetContext)
}
