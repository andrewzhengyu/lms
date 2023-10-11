import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import { ToasterProvider } from '@/components/providers/ToasterProvider'
import ConfettiProvider from '@/components/providers/ConfettiProvider'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oomgandrew Learning Management System',
  description: 'Developed by Andrew Zheng 2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body className={urbanist.className}>
        <ConfettiProvider/>
        <ToasterProvider/>
        {children}
      </body>
    </html>
    </ClerkProvider>
  )
}
