import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Souvagya Karmakar | Full Stack Developer & AI Systems Engineer',
  description: 'Portfolio of Souvagya Karmakar - Full Stack Developer specializing in AI Systems, IoT, and building intelligent solutions that solve real-world problems.',
  keywords: ['Full Stack Developer', 'AI Engineer', 'IoT', 'React', 'Next.js', 'Machine Learning', 'Portfolio'],
  authors: [{ name: 'Souvagya Karmakar' }],
  openGraph: {
    title: 'Souvagya Karmakar | Full Stack Developer & AI Systems Engineer',
    description: 'Building intelligent systems that solve real-world problems',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
