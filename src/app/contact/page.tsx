export default function ContactPage() {
  return (
    <div className="container">
      <h1>Contact</h1>
      <p style={{ color: '#6b7280', fontSize: '1.125rem', marginBottom: '2rem' }}>
        Get in touch to discuss philosophy, economics, or potential collaborations.
      </p>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label htmlFor="name" style={labelStyle}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="subject" style={labelStyle}>Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="message" style={labelStyle}>Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              style={{ ...inputStyle, resize: 'vertical' as const }}
            />
          </div>

          <button
            type="submit"
            style={buttonStyle}
          >
            Send Message
          </button>
        </form>

        <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Other Ways to Connect</h3>
          <ul style={{ listStyle: 'none', padding: 0, color: '#4b5563' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Email:</strong> your.email@example.com
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Twitter:</strong> @yourhandle
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>LinkedIn:</strong> linkedin.com/in/yourprofile
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const labelStyle = {
  display: 'block',
  marginBottom: '0.5rem',
  fontWeight: 600,
  color: '#1a1a1a',
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  border: '1px solid #d1d5db',
  borderRadius: '0.5rem',
  fontSize: '1rem',
  fontFamily: 'inherit',
}

const buttonStyle = {
  backgroundColor: '#2563eb',
  color: '#ffffff',
  padding: '0.875rem 2rem',
  borderRadius: '0.5rem',
  border: 'none',
  fontSize: '1rem',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
}
