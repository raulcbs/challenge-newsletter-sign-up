import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Newsletter sign-up',
  description: 'Newsletter sign-up form with success message by Frontend Mentor',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          href='/favicon.png'
          sizes='any'
        />
      </head>
      <body className={`${roboto.variable} font-roboto`}>{children}</body>
    </html>
  )
}
