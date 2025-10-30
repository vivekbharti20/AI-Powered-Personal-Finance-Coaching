import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div className="container">
          <h1 style={styles.heroTitle}>
            Exploring the Intersection of Philosophy and Economics
          </h1>
          <p style={styles.heroSubtitle}>
            Deep insights into ethical frameworks, rational choice theory, market philosophy,
            and the fundamental questions that shape economic thought.
          </p>
          <div style={styles.heroButtons}>
            <Link href="/articles" style={styles.primaryButton}>
              Read Articles
            </Link>
            <Link href="/about" style={styles.secondaryButton}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section style={styles.section}>
        <div className="container">
          <h2 style={styles.sectionTitle}>Welcome</h2>
          <p style={styles.introText}>
            This is a space dedicated to exploring the profound connections between philosophical
            inquiry and economic analysis. Whether you're interested in moral philosophy's role in
            markets, the epistemology of economic models, or behavioral insights that challenge
            traditional assumptions, you'll find thoughtful analysis here.
          </p>
        </div>
      </section>

      {/* Content Categories */}
      <section style={styles.section}>
        <div className="container">
          <h2 style={styles.sectionTitle}>What You'll Find Here</h2>
          <div style={styles.grid}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Philosophy</h3>
              <p style={styles.cardText}>
                Ethics, political philosophy, epistemology, and the fundamental questions
                about human nature and society.
              </p>
              <Link href="/topics" style={styles.cardLink}>
                Explore Topics →
              </Link>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Economics</h3>
              <p style={styles.cardText}>
                Behavioral economics, market theory, policy analysis, and the science
                of human decision-making and resource allocation.
              </p>
              <Link href="/topics" style={styles.cardLink}>
                Explore Topics →
              </Link>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>The Intersection</h3>
              <p style={styles.cardText}>
                How philosophical frameworks inform economic thinking, and how economic
                insights challenge philosophical assumptions.
              </p>
              <Link href="/articles" style={styles.cardLink}>
                Read Articles →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={styles.ctaSection}>
        <div className="container">
          <h2 style={styles.ctaTitle}>Stay Updated</h2>
          <p style={styles.ctaText}>
            Subscribe to receive new articles and insights directly in your inbox.
          </p>
          <form style={styles.form}>
            <input
              type="email"
              placeholder="Enter your email"
              style={styles.input}
              required
            />
            <button type="submit" style={styles.submitButton}>
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

const styles = {
  hero: {
    backgroundColor: '#f9fafb',
    padding: '4rem 0',
    textAlign: 'center' as const,
    borderBottom: '1px solid #e5e7eb',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 700,
    marginBottom: '1.5rem',
    color: '#1a1a1a',
    lineHeight: 1.2,
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    color: '#6b7280',
    maxWidth: '800px',
    margin: '0 auto 2rem',
    lineHeight: 1.6,
  },
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
  },
  primaryButton: {
    backgroundColor: '#2563eb',
    color: '#ffffff',
    padding: '0.875rem 2rem',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    fontWeight: 600,
    transition: 'background-color 0.2s ease',
    display: 'inline-block',
  },
  secondaryButton: {
    backgroundColor: '#ffffff',
    color: '#2563eb',
    padding: '0.875rem 2rem',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    fontWeight: 600,
    border: '2px solid #2563eb',
    transition: 'all 0.2s ease',
    display: 'inline-block',
  },
  section: {
    padding: '4rem 0',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 600,
    marginBottom: '2rem',
    textAlign: 'center' as const,
  },
  introText: {
    fontSize: '1.125rem',
    color: '#4b5563',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: 1.8,
    textAlign: 'center' as const,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '2rem',
  },
  card: {
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    padding: '2rem',
    transition: 'box-shadow 0.2s ease',
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '1rem',
    color: '#1a1a1a',
  },
  cardText: {
    color: '#6b7280',
    lineHeight: 1.6,
    marginBottom: '1.5rem',
  },
  cardLink: {
    color: '#2563eb',
    fontWeight: 600,
    textDecoration: 'none',
  },
  ctaSection: {
    backgroundColor: '#f9fafb',
    padding: '4rem 0',
    textAlign: 'center' as const,
    borderTop: '1px solid #e5e7eb',
  },
  ctaTitle: {
    fontSize: '2rem',
    fontWeight: 600,
    marginBottom: '1rem',
  },
  ctaText: {
    fontSize: '1.125rem',
    color: '#6b7280',
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    gap: '1rem',
    maxWidth: '500px',
    margin: '0 auto',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
  },
  input: {
    flex: '1',
    minWidth: '250px',
    padding: '0.875rem 1rem',
    borderRadius: '0.5rem',
    border: '1px solid #d1d5db',
    fontSize: '1rem',
  },
  submitButton: {
    backgroundColor: '#2563eb',
    color: '#ffffff',
    padding: '0.875rem 2rem',
    borderRadius: '0.5rem',
    border: 'none',
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.2s ease',
  },
}
