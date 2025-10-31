import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getArticleBySlug, getAllArticleSlugs } from '@/lib/mdx'
import Link from 'next/link'

// Generate static pages for all articles at build time
export async function generateStaticParams() {
  const slugs = getAllArticleSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} | Philosophy & Economics Insights`,
    description: article.excerpt,
    keywords: article.tags.join(', '),
  }
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  // Format date nicely
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article style={styles.article}>
      <div className="container" style={styles.container}>
        {/* Breadcrumb */}
        <nav style={styles.breadcrumb}>
          <Link href="/" style={styles.breadcrumbLink}>Home</Link>
          <span style={styles.breadcrumbSeparator}>/</span>
          <Link href="/articles" style={styles.breadcrumbLink}>Articles</Link>
          <span style={styles.breadcrumbSeparator}>/</span>
          <span style={styles.breadcrumbCurrent}>{article.title}</span>
        </nav>

        {/* Article Header */}
        <header style={styles.header}>
          <h1 style={styles.title}>{article.title}</h1>

          <div style={styles.meta}>
            <time style={styles.date}>{formattedDate}</time>
            <span style={styles.separator}>•</span>
            <span style={styles.readingTime}>{article.readingTime}</span>
            {article.author && (
              <>
                <span style={styles.separator}>•</span>
                <span style={styles.author}>By {article.author}</span>
              </>
            )}
          </div>

          {/* Categories */}
          <div style={styles.categories}>
            {article.category.map((cat) => (
              <span key={cat} style={styles.categoryBadge}>
                {cat}
              </span>
            ))}
          </div>

          {/* Excerpt */}
          <p style={styles.excerpt}>{article.excerpt}</p>
        </header>

        {/* Article Content */}
        <div style={styles.content}>
          <MDXRemote source={article.content} />
        </div>

        {/* Tags */}
        {article.tags.length > 0 && (
          <footer style={styles.footer}>
            <h3 style={styles.tagsHeading}>Tags</h3>
            <div style={styles.tags}>
              {article.tags.map((tag) => (
                <span key={tag} style={styles.tag}>
                  #{tag}
                </span>
              ))}
            </div>
          </footer>
        )}

        {/* Back to Articles */}
        <div style={styles.backLink}>
          <Link href="/articles" style={styles.backButton}>
            ← Back to All Articles
          </Link>
        </div>
      </div>
    </article>
  )
}

const styles = {
  article: {
    paddingBottom: '4rem',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  breadcrumb: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '2rem',
  },
  breadcrumbLink: {
    color: '#2563eb',
    textDecoration: 'none',
  },
  breadcrumbSeparator: {
    margin: '0 0.5rem',
    color: '#9ca3af',
  },
  breadcrumbCurrent: {
    color: '#6b7280',
  },
  header: {
    marginBottom: '3rem',
    paddingBottom: '2rem',
    borderBottom: '1px solid #e5e7eb',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: '1rem',
    color: '#1a1a1a',
  },
  meta: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.95rem',
    color: '#6b7280',
    marginBottom: '1rem',
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
  author: {
    color: '#6b7280',
  },
  categories: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1.5rem',
  },
  categoryBadge: {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: 500,
  },
  excerpt: {
    fontSize: '1.25rem',
    color: '#4b5563',
    lineHeight: 1.6,
    fontStyle: 'italic',
  },
  content: {
    fontSize: '1.125rem',
    lineHeight: 1.8,
    color: '#1f2937',
    marginBottom: '3rem',
  },
  footer: {
    paddingTop: '2rem',
    borderTop: '1px solid #e5e7eb',
    marginBottom: '2rem',
  },
  tagsHeading: {
    fontSize: '1rem',
    fontWeight: 600,
    marginBottom: '0.75rem',
    color: '#4b5563',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '0.5rem',
  },
  tag: {
    backgroundColor: '#f3f4f6',
    color: '#6b7280',
    padding: '0.25rem 0.75rem',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
  },
  backLink: {
    marginTop: '3rem',
  },
  backButton: {
    color: '#2563eb',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '1rem',
  },
}
