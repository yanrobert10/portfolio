
import NavBar from './components/navBar/Layout'
import './globals.css'
import { Inter } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sobre mim | Yan Robert',
  description: 'Portfolio feito com a Framework NextJs 13',
  
}

const jetBrains_Mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: '400',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.png"/>
      </head>

      <body className={jetBrains_Mono.className}>
        <NavBar/>

        <main>
          {children}
        </main>
        
      </body>

    </html>
  )
}
