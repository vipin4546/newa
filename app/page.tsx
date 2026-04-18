'use client'

import { ThemeProvider } from '@/components/ThemeContext'
import CustomCursor from '@/components/CustomCursor'
import Loader from '@/components/Loader'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import LifestyleSection from '@/components/LifestyleSection'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <Loader />
      <Navbar />
      <Hero />
      <Marquee />
      <LifestyleSection />
      <About />
      <Footer />
    </ThemeProvider>
  )
}
