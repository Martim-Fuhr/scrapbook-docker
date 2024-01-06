import type { Metadata } from 'next'
import './globals.css'

import StyledComponentsRegistry from './../lib/registry'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Scrapbook',
  description: 'Your todo list!',
  icons: {
    icon: '/favicon/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <StyledComponentsRegistry>
        <body
          className="min-h-screen flex flex-col"
          style={{ backgroundColor: '#333' }}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}
