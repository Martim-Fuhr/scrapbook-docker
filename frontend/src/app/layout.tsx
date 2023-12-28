import type { Metadata } from 'next'
import './globals.css'

import StyledComponentsRegistry from './../lib/registry'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Martim Fuhr | Portfolio',
  description: 'Welcome to my Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <StyledComponentsRegistry>
        <body className="bg-sky-400 min-h-screen flex flex-col">
          <Header />
          {children}
          <Footer />
        </body>
      </StyledComponentsRegistry>
    </html>
  )
}
