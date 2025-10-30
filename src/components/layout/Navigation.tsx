import Link from 'next/link'

export default function Navigation() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Articles', href: '/articles' },
    { label: 'Topics', href: '/topics' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav>
      <ul style={styles.navList}>
        {navItems.map((item) => (
          <li key={item.href} style={styles.navItem}>
            <Link href={item.href} style={styles.navLink}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const styles = {
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
    margin: 0,
    padding: 0,
    flexWrap: 'wrap' as const,
  },
  navItem: {
    margin: 0,
  },
  navLink: {
    color: '#4b5563',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 500,
    transition: 'color 0.2s ease',
    cursor: 'pointer',
  },
}
