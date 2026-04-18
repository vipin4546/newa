'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

// [NOTE 7]: Replace # with real social links
const SOCIAL = [
  { icon: '📷', label: 'Instagram', href: '#' },
  { icon: '▶️', label: 'YouTube',   href: '#' },
  { icon: '📌', label: 'Pinterest', href: '#' },
]

// [NOTE 8]: Replace # with real page links
const QUICK_LINKS = [
  { label: 'Home',    href: '#' },
  { label: 'Shop',    href: '#lifestyle' },
  { label: 'About',   href: '#about' },
  { label: 'Contact', href: '#', note: '[NOTE: Add contact page]' },
]

const LIFESTYLE_LINKS = [
  { label: '🎧 Listen',    href: '#' },
  { label: '📚 Study',     href: '#' },
  { label: '🖥️ Workspace', href: '#' },
  { label: '✨ Upgrade',   href: '#' },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // [NOTE: Wire up newsletter form to your email service (Mailchimp, Klaviyo, etc.)]
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <footer
      style={{
        background: 'var(--bg2)',
        padding: '4rem 8% 2rem',
        borderTop: '1px solid rgba(44,31,14,0.08)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr',
          gap: '3rem',
          marginBottom: '3rem',
        }}
        className="footer-grid-responsive"
      >
        {/* Brand column */}
        <div>
          {/* [NOTE: Replace [BRAND NAME] with your actual brand name] */}
          <a
            href="#"
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: '1.6rem',
              color: 'var(--text)',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
              display: 'block',
              marginBottom: '0.8rem',
              cursor: 'none',
            }}
          >
            [BRAND NAME]
          </a>
          <p style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.7, maxWidth: '220px' }}>
            We don&apos;t sell accessories. We upgrade lifestyles. Built for the new generation.
          </p>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1.2rem' }}>
            {SOCIAL.map(s => (
              <motion.a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(44,31,14,0.06)',
                  border: '1px solid rgba(44,31,14,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  cursor: 'none',
                  textDecoration: 'none',
                  transition: 'background 0.3s',
                }}
                whileHover={{ background: 'var(--text)', scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1.2rem',
              color: 'var(--text)',
            }}
          >
            Quick Links
          </h4>
          {QUICK_LINKS.map(link => (
            <div key={link.label}>
              <a
                href={link.href}
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  color: 'var(--text2)',
                  fontSize: '0.85rem',
                  marginBottom: '0.6rem',
                  transition: 'color 0.3s',
                  cursor: 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}
              >
                {link.label}
                {link.note && (
                  <span style={{ fontSize: '0.6rem', color: 'var(--text2)', marginLeft: '4px' }}>
                    {link.note}
                  </span>
                )}
              </a>
            </div>
          ))}
        </div>

        {/* Lifestyle links */}
        <div>
          <h4
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1.2rem',
              color: 'var(--text)',
            }}
          >
            Lifestyle
          </h4>
          {LIFESTYLE_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{
                display: 'block',
                textDecoration: 'none',
                color: 'var(--text2)',
                fontSize: '0.85rem',
                marginBottom: '0.6rem',
                transition: 'color 0.3s',
                cursor: 'none',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Newsletter */}
        <div>
          <h4
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1.2rem',
              color: 'var(--text)',
            }}
          >
            Stay Updated
          </h4>
          <p style={{ fontSize: '0.82rem', color: 'var(--text2)', marginBottom: '0.8rem' }}>
            New drops. First access. No spam.
          </p>
          {/* [NOTE: Wire up this form to your email service (Mailchimp, Klaviyo, Resend, etc.)] */}
          <form
            onSubmit={handleNewsletterSubmit}
            style={{ display: 'flex', gap: '0.5rem' }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="newsletter-input"
              style={{ flex: 1 }}
            />
            <motion.button
              type="submit"
              style={{
                padding: '0.7rem 1.2rem',
                borderRadius: '50px',
                background: 'var(--text)',
                color: 'var(--bg)',
                border: 'none',
                fontFamily: 'Syne, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'none',
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
              }}
              whileHover={{ opacity: 0.85 }}
              whileTap={{ scale: 0.97 }}
            >
              Join
            </motion.button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(44,31,14,0.08)',
          paddingTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        {/* [NOTE: Replace [BRAND NAME] and year with your actual brand name] */}
        <p style={{ fontSize: '0.78rem', color: 'var(--text2)' }}>
          © 2025 [BRAND NAME]. All rights reserved.
        </p>
        <div
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: '0.8rem',
            color: 'var(--text)',
            letterSpacing: '0.05em',
          }}
        >
          We Upgrade Lifestyles ✦
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .footer-grid-responsive {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid-responsive {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
