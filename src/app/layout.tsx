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
import Script from 'next/script'
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
      {/* Google Analytics Script */}
      <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-5FLC9WWZD8"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5FLC9WWZD8');
            `,
          }} />

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
