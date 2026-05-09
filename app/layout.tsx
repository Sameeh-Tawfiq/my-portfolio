import type { Metadata } from 'next'
import { Press_Start_2P, VT323 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const pressStart = Press_Start_2P({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start'
})

const vt323 = VT323({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vt323'
})

export const metadata: Metadata = {
  title: 'Sameeh Tawfik | Software Engineer',
  description: 'Front-End Web Developer Portfolio - 80s Retro Style',
  icons: {
    icon: [
      {
        url: 'href="https://cdn.myportfolio.com/0d406646a252c5f22cb43a048423e032/63d38db3-5aee-4ba0-a718-83691f8f0fad_carw_1x1x32.png?h=506fac63b6f7609de5d36c7e14bd7688"',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'href="https://cdn.myportfolio.com/0d406646a252c5f22cb43a048423e032/63d38db3-5aee-4ba0-a718-83691f8f0fad_carw_1x1x32.png?h=506fac63b6f7609de5d36c7e14bd7688"',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'href="https://cdn.myportfolio.com/0d406646a252c5f22cb43a048423e032/63d38db3-5aee-4ba0-a718-83691f8f0fad_carw_1x1x32.png?h=506fac63b6f7609de5d36c7e14bd7688"',
        type: 'image/svg+xml',
      },
    ],
    apple: 'href="https://cdn.myportfolio.com/0d406646a252c5f22cb43a048423e032/63d38db3-5aee-4ba0-a718-83691f8f0fad_carw_1x1x32.png?h=506fac63b6f7609de5d36c7e14bd7688"',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${pressStart.variable} ${vt323.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
