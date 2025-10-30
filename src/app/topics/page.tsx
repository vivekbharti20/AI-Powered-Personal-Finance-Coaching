export default function TopicsPage() {
  const topics = {
    philosophy: [
      'Ethics & Moral Philosophy',
      'Political Philosophy',
      'Epistemology',
      'Philosophy of Mind',
      'Metaphysics',
      'Logic & Reasoning',
    ],
    economics: [
      'Behavioral Economics',
      'Microeconomics',
      'Macroeconomics',
      'Market Theory',
      'Development Economics',
      'Economic Policy',
    ],
    intersection: [
      'Philosophy of Economics',
      'Economic Justice',
      'Rational Choice Theory',
      'Ethics of Markets',
      'Social Contract Theory',
    ],
  }

  return (
    <div className="container">
      <h1>Topics</h1>
      <p style={{ color: '#6b7280', fontSize: '1.125rem', marginBottom: '3rem' }}>
        Explore articles organized by topic and category.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div style={cardStyle}>
          <h2 style={{ color: '#2563eb', marginBottom: '1rem' }}>Philosophy</h2>
          <ul style={listStyle}>
            {topics.philosophy.map((topic) => (
              <li key={topic} style={{ marginBottom: '0.5rem', color: '#4b5563' }}>{topic}</li>
            ))}
          </ul>
        </div>

        <div style={cardStyle}>
          <h2 style={{ color: '#d97706', marginBottom: '1rem' }}>Economics</h2>
          <ul style={listStyle}>
            {topics.economics.map((topic) => (
              <li key={topic} style={{ marginBottom: '0.5rem', color: '#4b5563' }}>{topic}</li>
            ))}
          </ul>
        </div>

        <div style={cardStyle}>
          <h2 style={{ color: '#059669', marginBottom: '1rem' }}>The Intersection</h2>
          <ul style={listStyle}>
            {topics.intersection.map((topic) => (
              <li key={topic} style={{ marginBottom: '0.5rem', color: '#4b5563' }}>{topic}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const cardStyle = {
  backgroundColor: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '0.5rem',
  padding: '2rem',
}

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
}
