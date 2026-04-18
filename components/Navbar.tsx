'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  // [NOTE: Replace bagCount with real cart item count from your store state]
  const [bagCount] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      id="navbar"
      className={`nav${scrolled ? ' scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '1.2rem 4%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.4s ease',
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.9, duration: 0.6, ease: [0.77, 0, 0.18, 1] }}
    >
      {/* Logo */}
      {/* [NOTE: Replace [BRAND NAME] with your actual brand name] */}
      <a
        href="#"
        style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800,
          fontSize: '1.4rem',
          color: 'var(--text)',
          textDecoration: 'none',
          letterSpacing: '-0.02em',
          cursor: 'none',
        }}
      >
        [BRAND NAME]
      </a>

      {/* Nav Links */}
      {/* [NOTE: Replace # with your actual page routes] */}
      <div
        style={{
          display: 'flex',
          gap: '0.3rem',
          background: 'rgba(255,255,255,0.3)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.5)',
          borderRadius: '50px',
          padding: '0.4rem',
        }}
        className="nav-links-wrap"
      >
        {['Home', 'Shop', 'About'].map((link, i) => (
          <a
            key={link}
            href={link === 'Home' ? '#' : link === 'Shop' ? '#lifestyle' : '#about'}
            style={{
              textDecoration: 'none',
              color: 'var(--text)',
              fontSize: '0.85rem',
              fontWeight: 500,
              padding: '0.4rem 1.1rem',
              borderRadius: '50px',
              transition: 'all 0.3s',
              letterSpacing: '0.01em',
              background: i === 0 ? 'var(--text)' : 'transparent',
              ...(i === 0 ? { color: 'var(--bg)' } : {}),
              cursor: 'none',
            }}
            className="nav-link-item"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Right: Backpack icon with badge */}
      {/* [NOTE: This is a BACKPACK icon, not a cart icon — intentional brand decision] */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div
          className="bag-btn"
          title="Your Bag"
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.4)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'none',
            transition: 'all 0.3s',
            position: 'relative',
          }}
        >
          {/* Backpack SVG icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {/* Backpack shape */}
            <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10H4V10z"/>
            <path d="M9 6V5a3 3 0 0 1 6 0v1"/>
            <line x1="4" y1="15" x2="20" y2="15"/>
            <path d="M9 15v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2"/>
          </svg>
          {/* Bag count badge */}
          <div
            className="bag-count"
            style={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              background: 'var(--text)',
              color: 'var(--bg)',
              fontSize: '0.6rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {bagCount}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
