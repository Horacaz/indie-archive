import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'
const inter = Inter({ subsets: ['latin'] })
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'The Indie Archive',
  description: 'Most Wholesome Indie Games of America',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
