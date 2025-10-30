import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <div style={styles.section}>
          <h3 style={styles.heading}>Philosophy & Economics Insights</h3>
          <p style={styles.description}>
            Exploring the intersection of philosophical thought and economic theory.
          </p>
        </div>

        <div style={styles.section}>
          <h4 style={styles.subheading}>Quick Links</h4>
          <ul style={styles.linkList}>
            <li><Link href="/articles" style={styles.link}>Articles</Link></li>
            <li><Link href="/topics" style={styles.link}>Topics</Link></li>
            <li><Link href="/about" style={styles.link}>About</Link></li>
            <li><Link href="/contact" style={styles.link}>Contact</Link></li>
          </ul>
        </div>

        <div style={styles.section}>
          <h4 style={styles.subheading}>Connect</h4>
          <ul style={styles.linkList}>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.link}>LinkedIn</a></li>
            <li><a href="mailto:your.email@example.com" style={styles.link}>Email</a></li>
          </ul>
        </div>
      </div>

      <div style={styles.copyright}>
        <div className="container">
          <p style={styles.copyrightText}>
            © {currentYear} Philosophy & Economics Insights. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#f9fafb',
    borderTop: '1px solid #e5e7eb',
    marginTop: '4rem',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    padding: '3rem 1.5rem',
  },
  section: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  heading: {
    fontSize: '1.25rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
    color: '#1a1a1a',
  },
  subheading: {
    fontSize: '1rem',
    fontWeight: 600,
    marginBottom: '1rem',
    color: '#1a1a1a',
  },
  description: {
    color: '#6b7280',
    fontSize: '0.95rem',
    lineHeight: 1.6,
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem',
  },
  link: {
    color: '#6b7280',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.2s ease',
  },
  copyright: {
    backgroundColor: '#f3f4f6',
    padding: '1.5rem 0',
    borderTop: '1px solid #e5e7eb',
  },
  copyrightText: {
    textAlign: 'center' as const,
    color: '#6b7280',
    fontSize: '0.875rem',
    margin: 0,
  },
}
