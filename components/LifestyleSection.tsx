'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface LifestyleCard {
  id: string
  emoji: string
  title: string
  desc: string
  tags: string[]
  placeholderEmoji: string
  noteNum: number
  noteText: string
  bgClass: string
  borderColor: string
  bg: string
}

const CARDS: LifestyleCard[] = [
  {
    id: 'listen',
    emoji: '🎧',
    title: 'Listen',
    desc: 'Your audio setup, elevated. Keep your gear clean, your vibe cleaner.',
    tags: ['Headphone Stand', 'Earbud Holder', 'Cable Organizer'],
    placeholderEmoji: '🎧',
    noteNum: 2,
    noteText: 'Replace with Meshy AI GLB — headphone stand 3D model',
    bgClass: 'lc-listen',
    borderColor: 'rgba(74,144,196,0.2)',
    bg: 'linear-gradient(135deg, #D6E8F5, #BDD4EC)',
  },
  {
    id: 'study',
    emoji: '📚',
    title: 'Study',
    desc: 'Make your study space look as good as your grades. Aesthetic meets function.',
    tags: ['Laptop Stand', 'Desk Clock', 'Phone Stand'],
    placeholderEmoji: '💻',
    noteNum: 3,
    noteText: 'Replace with Meshy AI GLB — laptop stand 3D model',
    bgClass: 'lc-study',
    borderColor: 'rgba(232,201,122,0.3)',
    bg: 'linear-gradient(135deg, #F5E6C8, #EDD6A8)',
  },
  {
    id: 'workspace',
    emoji: '🖥️',
    title: 'Workspace',
    desc: 'Your desk is your canvas. Make it a vibe with gear that actually works.',
    tags: ['Laptop Cover', 'Desk Organizer', 'Cable Mgmt'],
    placeholderEmoji: '🖥️',
    noteNum: 4,
    noteText: 'Replace with Meshy AI GLB — desk organizer 3D model',
    bgClass: 'lc-work',
    borderColor: 'rgba(100,140,60,0.2)',
    bg: 'linear-gradient(135deg, #E8F0D6, #D4E4BD)',
  },
  {
    id: 'upgrade',
    emoji: '✨',
    title: 'Upgrade',
    desc: 'The extras that make you, you. Small details. Big personality.',
    tags: ['Keychains', 'Cool Misc', 'New Drops'],
    placeholderEmoji: '🔑',
    noteNum: 5,
    noteText: 'Replace with Meshy AI GLB — keychain 3D model',
    bgClass: 'lc-upgrade',
    borderColor: 'rgba(196,74,138,0.2)',
    bg: 'linear-gradient(135deg, #F5D6E8, #ECC4D8)',
  },
]

function LifestyleCard({ card, index }: { card: LifestyleCard; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 14
    const y = ((e.clientY - r.top)  / r.height - 0.5) * -14
    el.style.transform = `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) translateY(-8px) scale(1.02)`
  }
  const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = ''
  }

  return (
    <motion.div
      ref={ref}
      className={`lifestyle-card`}
      style={{
        background: card.bg,
        border: `1px solid ${card.borderColor}`,
        opacity: 0,
      }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.77, 0, 0.18, 1],
      }}
      onMouseMove={handleTilt}
      onMouseLeave={resetTilt}
    >
      {/* Glassmorphism overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.1))',
          borderRadius: '28px',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <span style={{ fontSize: '2.2rem', marginBottom: '1rem', display: 'block', position: 'relative', zIndex: 1 }}>
        {card.emoji}
      </span>
      <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--text)', position: 'relative', zIndex: 1 }}>
        {card.title}
      </div>
      <p style={{ fontSize: '0.9rem', color: 'var(--text2)', marginBottom: '1.5rem', position: 'relative', zIndex: 1, lineHeight: 1.6 }}>
        {card.desc}
      </p>
      <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
        {card.tags.map(tag => (
          <span
            key={tag}
            style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              background: 'rgba(255,255,255,0.5)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.7)',
              color: 'var(--text)',
              padding: '0.35rem 0.9rem',
              borderRadius: '50px',
              textTransform: 'uppercase' as const,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 3D Model Placeholder */}
      {/*
        [NOTE {noteNum}]: {noteText}
        Replace this placeholder div with a <model-viewer> component pointing to your GLB file.
        Example:
        <model-viewer src="/your-product.glb" auto-rotate camera-controls shadow-intensity="0.6" style={{width:'100px',height:'100px'}} />
      */}
      <motion.div
        style={{
          position: 'absolute',
          right: '1.5rem',
          bottom: '1.5rem',
          width: '100px',
          height: '100px',
          borderRadius: '20px',
          background: 'rgba(255,255,255,0.3)',
          backdropFilter: 'blur(10px)',
          border: '1px dashed rgba(44,31,14,0.2)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.8rem',
          gap: '0.3rem',
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        {card.placeholderEmoji}
        <div style={{ fontSize: '0.5rem', color: 'var(--text2)', textAlign: 'center', letterSpacing: '0.05em', textTransform: 'uppercase', lineHeight: 1.4 }}>
          3D Model<br />Replace GLB
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function LifestyleSection() {
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section
      id="lifestyle"
      style={{
        padding: '6rem 4%',
        background: 'var(--bg)',
      }}
    >
      {/* Section header */}
      <motion.div
        ref={headRef}
        style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 1rem' }}
        animate={headInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: [0.77, 0, 0.18, 1] }}
      >
        <span className="section-label">Pick Your Vibe</span>
        <h2 className="section-title">Shop by Lifestyle</h2>
        <p style={{ color: 'var(--text2)', lineHeight: 1.7 }}>
          Not just products — a whole mood. Find accessories that match how you live.
        </p>
      </motion.div>

      {/* 2×2 grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
          maxWidth: '1200px',
          margin: '3rem auto 0',
        }}
        className="lifestyle-grid-responsive"
      >
        {CARDS.map((card, i) => (
          <LifestyleCard key={card.id} card={card} index={i} />
        ))}
      </div>

      {/* Responsive style override */}
      <style jsx>{`
        @media (max-width: 900px) {
          .lifestyle-grid-responsive {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
