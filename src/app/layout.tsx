import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Philosophy & Economics Insights',
  description: 'A personal website exploring the intersection of philosophical thought and economic theory',
  keywords: ['philosophy', 'economics', 'ethics', 'political philosophy', 'behavioral economics'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={styles.main}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

const styles = {
  main: {
    minHeight: 'calc(100vh - 400px)',
    padding: '2rem 0',
  },
}
