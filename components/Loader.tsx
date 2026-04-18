'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="loader"
          initial={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.77, 0, 0.18, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--text)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {/* Brand Name Dramatic Reveal */}
          {/* [NOTE: Replace [BRAND NAME] with your actual brand name] */}
          <div className="brand-reveal">
            {['[BRAND', '\u00a0', 'NAME]'].map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.77, 0, 0.18, 1],
                }}
                style={{ display: 'inline-block' }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Tagline */}
          <motion.div
            className="tagline-loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Upgrade Your Lifestyle
          </motion.div>

          {/* Progress Bar */}
          <div className="progress-bar">
            <div className="progress-fill" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
