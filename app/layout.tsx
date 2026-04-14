import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AZIZVERSE — AI Engineer & Creative Developer',
  description:
    'Portfolio of Aziz — AI Engineer, Creative Developer, and Digital Craftsman building intelligent experiences through code, design, and automation.',
  keywords: ['AI Engineer', 'Web Developer', 'Creative Developer', 'Portfolio', 'Next.js'],
  authors: [{ name: 'Aziz' }],
  openGraph: {
    title: 'AZIZVERSE — AI Engineer & Creative Developer',
    description: 'Building the future with AI, design, and code.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#FAFAF8] text-neutral-900 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
