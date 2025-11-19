import { Analytics } from '@vercel/analytics/next'
import { Roboto_Condensed } from 'next/font/google'
import './globals.css'

const robotoCondensed = Roboto_Condensed({ 
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '700'],
  variable: '--font-roboto-condensed'
})

export const metadata = {
  title: 'Монгол Улсын Үндэсний Аюулгүй Байдлын Зөвлөл | National Cyber Security Council of Mongolia',
  description: 'Official website of the National Cyber Security Council of Mongolia',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="mn">
      <body className={`${robotoCondensed.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
