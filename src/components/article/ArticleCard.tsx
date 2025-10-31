import Link from 'next/link'
import { ArticlePreview } from '@/lib/types'

interface ArticleCardProps {
  article: ArticlePreview
}

export default function ArticleCard({ article }: ArticleCardProps) {
  // Format date
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article style={styles.card}>
      {/* Categories */}
      <div style={styles.categories}>
        {article.category.map((cat) => (
          <span key={cat} style={styles.categoryBadge}>
            {cat}
          </span>
        ))}
        {article.featured && (
          <span style={styles.featuredBadge}>★ Featured</span>
        )}
      </div>

      {/* Title */}
      <h2 style={styles.title}>
        <Link href={`/articles/${article.slug}`} style={styles.titleLink}>
          {article.title}
        </Link>
      </h2>

      {/* Excerpt */}
      <p style={styles.excerpt}>{article.excerpt}</p>

      {/* Meta information */}
      <div style={styles.meta}>
        <time style={styles.date}>{formattedDate}</time>
        <span style={styles.separator}>•</span>
        <span style={styles.readingTime}>{article.readingTime}</span>
      </div>

      {/* Tags */}
      {article.tags.length > 0 && (
        <div style={styles.tags}>
          {article.tags.slice(0, 3).map((tag) => (
            <span key={tag} style={styles.tag}>
              #{tag}
            </span>
          ))}
          {article.tags.length > 3 && (
            <span style={styles.tag}>+{article.tags.length - 3} more</span>
          )}
        </div>
      )}

      {/* Read more link */}
      <Link href={`/articles/${article.slug}`} style={styles.readMore}>
        Read Article →
      </Link>
    </article>
  )
}

const styles = {
  card: {
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    transition: 'all 0.2s ease',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
    height: '100%',
  },
  categories: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap' as const,
  },
  categoryBadge: {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: 500,
  },
  featuredBadge: {
    backgroundColor: '#fef3c7',
    color: '#92400e',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: 500,
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.3,
    margin: 0,
  },
  titleLink: {
    color: '#1a1a1a',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  },
  excerpt: {
    color: '#4b5563',
    lineHeight: 1.6,
    flex: '1',
    margin: 0,
  },
  meta: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem',
    color: '#6b7280',
  },
  date: {
    color: '#6b7280',
  },
  separator: {
    color: '#d1d5db',
  },
  readingTime: {
    color: '#6b7280',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '0.5rem',
  },
  tag: {
    backgroundColor: '#f3f4f6',
    color: '#6b7280',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    fontSize: '0.75rem',
  },
  readMore: {
    color: '#2563eb',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '0.95rem',
    alignSelf: 'flex-start',
  },
}
