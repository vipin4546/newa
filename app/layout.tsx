import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: '[BRAND NAME] — Upgrade Your Lifestyle',
  description: 'Cool lifestyle accessories for Gen-Z. We don\'t sell accessories — we upgrade your lifestyle.',
  keywords: 'lifestyle accessories, gen-z accessories, phone stand, laptop stand, desk accessories, headphone stand',
  openGraph: {
    title: '[BRAND NAME] — Upgrade Your Lifestyle',
    description: 'Cool lifestyle accessories for Gen-Z. Built different. Built for you.',
    type: 'website',
    // [NOTE: Replace with your actual domain]
    url: 'https://yourdomain.com',
    images: [
      {
        // [NOTE: Replace with your actual OG image path in /public]
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '[BRAND NAME] Lifestyle Accessories',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '[BRAND NAME] — Upgrade Your Lifestyle',
    description: 'Cool lifestyle accessories for Gen-Z.',
    // [NOTE: Replace with your actual OG image path]
    images: ['/og-image.jpg'],
  },
  // [NOTE: Replace with your actual domain for canonical links]
  alternates: {
    canonical: 'https://yourdomain.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* @google/model-viewer — loaded as a module script */}
        {/* [NOTE: model-viewer is a web component, must load as type="module"] */}
        <Script
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
          type="module"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  )
}
