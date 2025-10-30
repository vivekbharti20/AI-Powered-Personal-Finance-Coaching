export default function AboutPage() {
  return (
    <div className="container">
      <h1>About</h1>
      <p style={{ color: '#6b7280', fontSize: '1.125rem', marginBottom: '2rem' }}>
        This is where you'll share your background, education, and why you're passionate
        about philosophy and economics.
      </p>

      <div style={{ maxWidth: '800px' }}>
        <h2>Your Story</h2>
        <p style={{ color: '#4b5563', lineHeight: 1.8 }}>
          Replace this placeholder text with your own background. Consider including:
        </p>
        <ul style={{ color: '#4b5563', lineHeight: 1.8, marginTop: '1rem' }}>
          <li>Your educational background</li>
          <li>Professional experience</li>
          <li>What sparked your interest in philosophy and economics</li>
          <li>Your approach to analyzing these subjects</li>
          <li>What readers can expect from your writing</li>
        </ul>

        <h2 style={{ marginTop: '2rem' }}>Philosophy</h2>
        <p style={{ color: '#4b5563', lineHeight: 1.8 }}>
          Describe your philosophical interests and perspectives here.
        </p>

        <h2 style={{ marginTop: '2rem' }}>Economics</h2>
        <p style={{ color: '#4b5563', lineHeight: 1.8 }}>
          Describe your economic interests and perspectives here.
        </p>
      </div>
    </div>
  )
}
