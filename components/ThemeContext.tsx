'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export type Mode = 'all' | 'boy' | 'girl'

interface ThemeContextType {
  mode: Mode
  setMode: (mode: Mode) => void
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'all',
  setMode: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>('all')

  const setMode = (newMode: Mode) => {
    setModeState(newMode)
    // Apply theme class to body for CSS variable switching
    document.body.classList.remove('theme-all', 'theme-boy', 'theme-girl')
    document.body.classList.add(`theme-${newMode}`)
  }

  useEffect(() => {
    document.body.classList.add('theme-all')
  }, [])

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
