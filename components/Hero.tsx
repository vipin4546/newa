'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme, Mode } from './ThemeContext'

// Mode config: bgText, 3D model src, note text
const MODES: Record<Mode, { bgText: string; src: string; note: string }> = {
  all:  { bgText: 'UPGRADE',   src: '/girl1.glb',  note: 'Drag to rotate 360°' },
  boy:  { bgText: 'BE COOL',   src: '',            note: '⚠️ Boy GLB coming soon — add boy.glb from Meshy AI' },
  // [NOTE: boy.glb not uploaded yet — add boy.glb when ready from Meshy AI]
  girl: { bgText: 'AESTHETIC', src: '/girl2.glb',  note: 'Drag to rotate 360°' },
}

function Particle({ style }: { style: React.CSSProperties }) {
  return <div className="particle" style={style} />
}

export default function Hero() {
  const { mode, setMode } = useTheme()
  const containerRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<React.CSSProperties[]>([])
  const [modelVisible, setModelVisible] = useState(true)

  // Generate particles on mount (client-only to avoid hydration mismatch)
  useEffect(() => {
    const ps = Array.from({ length: 18 }, () => {
      const s = Math.random() * 8 + 4
      return {
        width:  `${s}px`,
        height: `${s}px`,
        left:   `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 12 + 8}s`,
        animationDelay:    `${Math.random() * 8}s`,
      } as React.CSSProperties
    })
    setParticles(ps)
  }, [])

  // Swap model with fade transition on mode change
  const handleModeSwitch = (newMode: Mode) => {
    setModelVisible(false)
    setTimeout(() => {
      setMode(newMode)
      setModelVisible(true)
    }, 300)
  }

  const currentMode = MODES[mode]

  // Card tilt handler
  const handleCardTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const r = card.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 14
    const y = ((e.clientY - r.top)  / r.height - 0.5) * -14
    card.style.transform = `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) translateY(-8px) scale(1.02)`
  }
  const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = ''
  }

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '7rem 4% 4rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background var(--transition)',
      }}
    >
      {/* Floating Particles */}
      <div id="particles" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {particles.map((s, i) => <Particle key={i} style={s} />)}
      </div>

      {/* Background watermark text */}
      <div className="hero-bg-text" id="heroBgText">
        {currentMode.bgText}
      </div>

      {/* BOY / ALL / GIRL Toggle */}
      <motion.div
        className="toggle-wrap"
        style={{
          display: 'flex',
          gap: '0.3rem',
          background: 'rgba(255,255,255,0.35)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255,255,255,0.6)',
          borderRadius: '50px',
          padding: '0.4rem',
          marginBottom: '3rem',
          zIndex: 2,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.0, duration: 0.6, ease: [0.77, 0, 0.18, 1] }}
      >
        {(['boy', 'all', 'girl'] as Mode[]).map((m) => (
          <motion.button
            key={m}
            className="toggle-btn"
            data-mode={m}
            onClick={() => handleModeSwitch(m)}
            animate={{
              background: mode === m ? 'var(--text)' : 'transparent',
              color:      mode === m ? 'var(--bg)'   : 'var(--text)',
              scale:      mode === m ? 1.05           : 1,
            }}
            transition={{ duration: 0.4, ease: [0.77, 0, 0.18, 1] }}
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '0.9rem',
              padding: '0.6rem 1.8rem',
              borderRadius: '50px',
              border: 'none',
              cursor: 'none',
              letterSpacing: '0.05em',
            }}
          >
            {m.toUpperCase()}
          </motion.button>
        ))}
      </motion.div>

      {/* Hero Stage — 3-column grid */}
      <div
        className="hero-stage"
        style={{
          width: '100%',
          maxWidth: '1100px',
          display: 'grid',
          gridTemplateColumns: '1fr 2fr 1fr',
          gap: '2rem',
          alignItems: 'center',
          zIndex: 2,
          minHeight: '460px',
        }}
      >
        {/* LEFT product cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { icon: '🎧', name: 'Headphone Stand', tag: 'New' },
            { icon: '📱', name: 'Phone Stand',     tag: null  },
          ].map((p, i) => (
            <motion.div
              key={p.name}
              className="prod-card-mini animate-float"
              style={{
                background: 'var(--card-glass)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--card-border)',
                borderRadius: '20px',
                padding: '1rem 1.2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'all 0.3s',
                cursor: 'none',
                animationDelay: i === 1 ? '-2s' : '0s',
              }}
              onMouseMove={handleCardTilt}
              onMouseLeave={resetTilt}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.1 + i * 0.1, duration: 0.6, ease: [0.77, 0, 0.18, 1] }}
            >
              <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: 'rgba(44,31,14,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0 }}>
                {p.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem' }}>{p.name}</div>
                {/* [NOTE: Add price below] */}
                <div style={{ fontSize: '0.75rem', color: 'var(--text2)', marginTop: '2px' }}></div>
              </div>
              {p.tag && (
                <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', background: 'var(--text)', color: 'var(--bg)', padding: '3px 8px', borderRadius: '20px', textTransform: 'uppercase' }}>
                  {p.tag}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CENTER: 3D Model + hero text */}
        <div style={{ textAlign: 'center' }}>
          {/* 3D Model Viewer */}
          <div
            id="modelWrap"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: currentMode.src ? 1 : 0.3, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.5, ease: [0.77, 0, 0.18, 1] }}
                className="animate-float"
              >
                {/*
                  @google/model-viewer web component
                  [NOTE: girl1.glb → ALL mode | girl2.glb → GIRL mode | boy.glb → BOY mode (add to /public when ready)]
                  Files must be placed in /public folder
                */}
                {/* @ts-ignore */}
                <model-viewer
                  id="centerModel"
                  src={currentMode.src || '/girl1.glb'}
                  alt="3D Character"
                  auto-rotate
                  auto-rotate-delay="0"
                  rotation-per-second="30deg"
                  camera-controls
                  disable-zoom
                  shadow-intensity="0.6"
                  exposure="1.1"
                  style={{
                    width: '220px',
                    height: '340px',
                    borderRadius: '30px',
                    background: 'transparent',
                    opacity: currentMode.src ? 1 : 0.3,
                  }}
                />
              </motion.div>
            </AnimatePresence>
            <div
              id="modelNote"
              style={{ fontSize: '0.65rem', color: 'var(--text2)', textAlign: 'center', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.7 }}
            >
              {currentMode.note}
            </div>
            {/* [NOTE: Boy GLB not uploaded yet — add boy.glb to /public when ready from Meshy AI] */}
          </div>

          {/* Hero Text */}
          <div style={{ marginTop: '2rem' }}>
            <motion.div
              className="hero-eyebrow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.8, ease: [0.77, 0, 0.18, 1] }}
            >
              New Generation. New Lifestyle.
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.4, duration: 0.8, ease: [0.77, 0, 0.18, 1] }}
            >
              <span style={{ display: 'block' }}>We Don&apos;t</span>
              <span style={{ display: 'block' }}>
                Sell <span className="highlight">Stuff.</span>
              </span>
              <span style={{ display: 'block' }}>We Upgrade</span>
              <span style={{ display: 'block' }}>Lifestyles.</span>
            </motion.h1>

            <motion.p
              style={{ fontSize: '1rem', color: 'var(--text2)', maxWidth: '340px', margin: '0 auto 2rem', lineHeight: 1.6 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.6, duration: 0.8, ease: [0.77, 0, 0.18, 1] }}
            >
              Cool accessories for real problems. Built different. Built for you.
            </motion.p>

            <motion.div
              style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.8, duration: 0.8, ease: [0.77, 0, 0.18, 1] }}
            >
              <motion.button
                className="btn-primary"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  padding: '0.9rem 2.2rem',
                  background: 'var(--text)',
                  color: 'var(--bg)',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'none',
                  letterSpacing: '0.05em',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Shop Now →
              </motion.button>
              <motion.button
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  padding: '0.9rem 2.2rem',
                  background: 'rgba(255,255,255,0.35)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.6)',
                  color: 'var(--text)',
                  borderRadius: '50px',
                  cursor: 'none',
                  letterSpacing: '0.05em',
                }}
                whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.6)' }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Vibes
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* RIGHT product cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { icon: '💻', name: 'Laptop Stand', tag: 'Hot' },
            { icon: '⌚', name: 'Desk Clock',   tag: null  },
          ].map((p, i) => (
            <motion.div
              key={p.name}
              className="prod-card-mini animate-float"
              style={{
                background: 'var(--card-glass)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--card-border)',
                borderRadius: '20px',
                padding: '1rem 1.2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'all 0.3s',
                cursor: 'none',
                animationDelay: i === 1 ? '-1s' : '0s',
              }}
              onMouseMove={handleCardTilt}
              onMouseLeave={resetTilt}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.1 + i * 0.1, duration: 0.6, ease: [0.77, 0, 0.18, 1] }}
            >
              <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: 'rgba(44,31,14,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0 }}>
                {p.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.85rem' }}>{p.name}</div>
                {/* [NOTE: Add price below] */}
                <div style={{ fontSize: '0.75rem', color: 'var(--text2)', marginTop: '2px' }}></div>
              </div>
              {p.tag && (
                <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', background: 'var(--text)', color: 'var(--bg)', padding: '3px 8px', borderRadius: '20px', textTransform: 'uppercase' }}>
                  {p.tag}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2, duration: 1 }}
      >
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text2)' }}>
          Scroll
        </span>
        <div
          className="scroll-pulse"
          style={{
            width: '1px',
            height: '50px',
            background: 'linear-gradient(to bottom, var(--text2), transparent)',
          }}
        />
      </motion.div>
    </section>
  )
}
