import Link from 'next/link'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header style={styles.header}>
      <div className="container" style={styles.container}>
        <Link href="/" style={styles.logo}>
          <h1 style={styles.logoText}>Philosophy & Economics Insights</h1>
        </Link>
        <Navigation />
      </div>
    </header>
  )
}

const styles = {
  header: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e7eb',
    padding: '1.5rem 0',
    position: 'sticky' as const,
    top: 0,
    zIndex: 100,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
    gap: '1rem',
  },
  logo: {
    textDecoration: 'none',
    color: '#1a1a1a',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 700,
    margin: 0,
  },
}
