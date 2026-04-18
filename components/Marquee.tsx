'use client'

const MARQUEE_ITEMS = [
  'FREE SHIPPING', '✦', 'NEW DROP', '✦', 'UPGRADE YOUR LIFESTYLE', '✦',
  'BE COOL', '✦', 'REAL PROBLEMS. REAL SOLUTIONS.', '✦', 'GEN-Z APPROVED', '✦',
  // Duplicated to create seamless infinite loop
  'FREE SHIPPING', '✦', 'NEW DROP', '✦', 'UPGRADE YOUR LIFESTYLE', '✦',
  'BE COOL', '✦', 'REAL PROBLEMS. REAL SOLUTIONS.', '✦', 'GEN-Z APPROVED', '✦',
]

export default function Marquee() {
  return (
    <div
      style={{
        padding: '1.2rem 0',
        overflow: 'hidden',
        background: 'var(--text)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      {/* Forward direction */}
      <div
        className="marquee-track"
        style={{ display: 'flex', gap: 0, whiteSpace: 'nowrap' }}
      >
        {MARQUEE_ITEMS.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: item === '✦' ? 'var(--accent)' : 'var(--bg)',
              padding: '0 2.5rem',
              opacity: item === '✦' ? 1 : 0.85,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
