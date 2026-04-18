'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { num: '100+', label: 'Products' },
  { num: '10K+', label: 'Happy Users' },
  { num: '4.9★', label: 'Rating' },
]

const PILLS = [
  '🔥 Built Different',
  '⚡ Real Innovation',
  '✦ Gen-Z First',
]

export default function About() {
  const leftRef  = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const leftInView  = useInView(leftRef,  { once: true, margin: '-80px' })
  const rightInView = useInView(rightRef, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      style={{
        background: 'var(--text)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
        padding: '6rem 8%',
      }}
      className="about-grid-responsive"
    >
      {/* LEFT — Copy */}
      <motion.div
        ref={leftRef}
        animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: [0.77, 0, 0.18, 1] }}
      >
        <span
          style={{
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(247,237,216,0.5)',
            marginBottom: '0.8rem',
            display: 'block',
          }}
        >
          Who We Are
        </span>

        <h2
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
            color: 'var(--bg)',
            marginBottom: '1rem',
          }}
        >
          We are for the<br />new generation.
        </h2>

        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: 'rgba(247,237,216,0.7)',
            margin: '1.5rem 0 2rem',
          }}
        >
          We build accessories that solve real problems. No boring stuff, no generic products.
          Just cool, innovative gear built specifically for how Gen-Z actually lives, works, and creates.
          Be cool. Be smart. Upgrade.
        </p>

        {/* Pills */}
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {PILLS.map(pill => (
            <span
              key={pill}
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                border: '1px solid rgba(247,237,216,0.2)',
                color: 'rgba(247,237,216,0.8)',
                padding: '0.4rem 1rem',
                borderRadius: '50px',
                textTransform: 'uppercase',
              }}
            >
              {pill}
            </span>
          ))}
        </div>

        <motion.button
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: '0.9rem',
            padding: '0.9rem 2.2rem',
            background: 'var(--accent)',
            color: 'var(--text)',
            border: 'none',
            borderRadius: '50px',
            cursor: 'none',
            letterSpacing: '0.05em',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Our Story →
        </motion.button>
      </motion.div>

      {/* RIGHT — Mascot + Stats */}
      <motion.div
        ref={rightRef}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}
        animate={rightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.77, 0, 0.18, 1] }}
      >
        {/*
          [NOTE 6]: Replace this placeholder with your chosen 3D mascot character GLB file.
          Example:
          <model-viewer src="/mascot.glb" auto-rotate camera-controls shadow-intensity="0.6"
            style={{ width: '240px', height: '300px', borderRadius: '30px', background: 'transparent' }} />
        */}
        <motion.div
          style={{
            width: '240px',
            height: '300px',
            borderRadius: '30px',
            background: 'rgba(247,237,216,0.06)',
            border: '1px dashed rgba(247,237,216,0.2)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}
          animate={{ y: [0, -18, 0], rotate: [-1, 1, -1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div
            style={{
              width: '120px',
              height: '160px',
              borderRadius: '50% 50% 40% 40%',
              background: 'rgba(247,237,216,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
            }}
          >
            🧑
          </div>
          <div
            style={{
              fontSize: '0.7rem',
              color: 'rgba(247,237,216,0.4)',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              padding: '0 1rem',
              lineHeight: 1.5,
            }}
          >
            Brand Mascot Here<br />Replace with GLB
          </div>
        </motion.div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '2rem' }}>
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              style={{ textAlign: 'center' }}
              initial={{ opacity: 0, y: 20 }}
              animate={rightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: [0.77, 0, 0.18, 1] }}
            >
              <span
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: '2rem',
                  color: 'var(--accent)',
                  display: 'block',
                }}
              >
                {s.num}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'rgba(247,237,216,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        @media (max-width: 900px) {
          .about-grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            padding: 4rem 5% !important;
          }
        }
      `}</style>
    </section>
  )
}
