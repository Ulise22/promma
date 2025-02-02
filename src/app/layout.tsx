import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Menu from './components/Menu'
import Link from 'next/link'
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FULLMMA',
  description: 'Todo lo relacionado con las MMA en un mismo sitio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/logo.png' />
        <meta name="google-adsense-account" content="ca-pub-9270621638584149" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9270621638584149"
     crossOrigin="anonymous"></script>

      </head>
      <body className={inter.className}>
        <Menu />
        {children}
        <GoogleAnalytics gaId="G-5FLC9WWZD8" />
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
