export default function ArticlesPage() {
  return (
    <div className="container">
      <h1>Articles</h1>
      <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>
        This page will display all your philosophy and economics articles.
        We'll build the article listing and individual article pages in Phase 2.
      </p>
      <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem' }}>
        <h3>Coming Soon:</h3>
        <ul style={{ marginTop: '1rem', color: '#4b5563' }}>
          <li>Article listing with filtering</li>
          <li>Search functionality</li>
          <li>Category and tag filters</li>
          <li>Reading time estimates</li>
        </ul>
      </div>
    </div>
  )
}
