import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'

const work = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'platycertified',
  description: 'coming soon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={work.className}>{children}</body>
    </html>
  )
}
