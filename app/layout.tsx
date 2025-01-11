import './globals.css'
import { Amiri } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from './components/ThemeProvider'
import { SelectionsProvider } from './components/SelectionsProvider'

const amiri = Amiri({ subsets: ['arabic'], weight: ['400', '700'] })

export const metadata = {
  title: 'السياحة العربية في روسيا',
  description: 'اكتشف روسيا مع أفضل الخدمات السياحية للسياح العرب',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={amiri.className}>
        <ThemeProvider>
          <SelectionsProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              {children}
              <Footer />
            </div>
          </SelectionsProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

