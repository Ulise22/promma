import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Menu from './components/Menu'
import Script from 'next/script'
import dynamic from 'next/dynamic'
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FULLMMA',
  description: 'Todo lo relacionado con las MMA en un mismo sitio',
}

const Footer = dynamic(() => import('./components/Footer'))

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
      {/* Google Analytics Script */}
      <Script strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-5FLC9WWZD8" />
        

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
        <Script async strategy='afterInteractive' src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9270621638584149" crossOrigin="anonymous"></Script>
      </body>
    </html>
  )
}
