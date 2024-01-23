import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Menu from './components/Menu'
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
      </head>
      <body className={inter.className}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  )
}
