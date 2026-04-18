'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>()

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
    }

    const animateRing = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top = ring.current.y + 'px'
      }
      rafRef.current = requestAnimationFrame(animateRing)
    }

    document.addEventListener('mousemove', onMouseMove)
    rafRef.current = requestAnimationFrame(animateRing)

    // Hover grow effect on interactive elements
    const interactives = document.querySelectorAll(
      'button, a, .bag-btn, .toggle-btn, .lifestyle-card, .prod-card-mini'
    )
    const growCursor = () => {
      if (cursorRef.current) { cursorRef.current.style.width = '28px'; cursorRef.current.style.height = '28px' }
      if (ringRef.current)   { ringRef.current.style.width = '60px';   ringRef.current.style.height = '60px' }
    }
    const shrinkCursor = () => {
      if (cursorRef.current) { cursorRef.current.style.width = '16px'; cursorRef.current.style.height = '16px' }
      if (ringRef.current)   { ringRef.current.style.width = '40px';   ringRef.current.style.height = '40px' }
    }

    interactives.forEach(el => {
      el.addEventListener('mouseenter', growCursor)
      el.addEventListener('mouseleave', shrinkCursor)
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', growCursor)
        el.removeEventListener('mouseleave', shrinkCursor)
      })
    }
  }, [])

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  )
}
