import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'boleto',
  description: 'gateway para boletos',
  generator: 'boleto.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
