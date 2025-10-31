'use client'

import { useEffect, useState } from 'react'
import ArticleCard from '@/components/article/ArticleCard'
import { ArticlePreview } from '@/lib/types'

export default function ArticlesPage() {
  const [articles, setArticles] = useState<ArticlePreview[]>([])
  const [filteredArticles, setFilteredArticles] = useState<ArticlePreview[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [loading, setLoading] = useState(true)

  // Fetch articles on component mount
  useEffect(() => {
    async function loadArticles() {
      try {
        const response = await fetch('/api/articles')
        const data = await response.json()
        setArticles(data)
        setFilteredArticles(data)
        setLoading(false)
      } catch (error) {
        console.error('Error loading articles:', error)
        setLoading(false)
      }
    }
    loadArticles()
  }, [])

  // Filter and search articles whenever inputs change
  useEffect(() => {
    let filtered = articles

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((article) =>
        article.category.some(
          (cat) => cat.toLowerCase() === selectedCategory.toLowerCase()
        )
      )
    }

    // Search by query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query) ||
          article.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    }

    setFilteredArticles(filtered)
  }, [articles, selectedCategory, searchQuery])

  // Get unique categories
  const categories = ['all', 'philosophy', 'economics']

  if (loading) {
    return (
      <div className="container">
        <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '1.125rem' }}>
          Loading articles...
        </p>
      </div>
    )
  }

  return (
    <div className="container">
      <header style={styles.header}>
        <h1 style={styles.title}>Articles</h1>
        <p style={styles.subtitle}>
          Exploring philosophy, economics, and their intersection
        </p>
      </header>

      {/* Search and Filter Controls */}
      <div style={styles.controls}>
        {/* Search Box */}
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
        </div>

        {/* Category Filters */}
        <div style={styles.filters}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                ...styles.filterButton,
                ...(selectedCategory === category
                  ? styles.filterButtonActive
                  : {}),
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div style={styles.resultsCount}>
        {filteredArticles.length === 0 ? (
          <p style={styles.noResults}>
            No articles found. Try adjusting your search or filters.
          </p>
        ) : (
          <p style={styles.count}>
            Showing {filteredArticles.length} article
            {filteredArticles.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 && (
        <div style={styles.grid}>
          {filteredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  )
}

const styles = {
  header: {
    textAlign: 'center' as const,
    marginBottom: '3rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#6b7280',
  },
  controls: {
    marginBottom: '2rem',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  searchContainer: {
    width: '100%',
  },
  searchInput: {
    width: '100%',
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    outline: 'none',
  },
  filters: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap' as const,
  },
  filterButton: {
    padding: '0.5rem 1rem',
    fontSize: '0.95rem',
    fontWeight: 500,
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    backgroundColor: '#ffffff',
    color: '#4b5563',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  filterButtonActive: {
    backgroundColor: '#2563eb',
    color: '#ffffff',
    borderColor: '#2563eb',
  },
  resultsCount: {
    marginBottom: '1.5rem',
  },
  count: {
    color: '#6b7280',
    fontSize: '0.95rem',
  },
  noResults: {
    color: '#6b7280',
    fontSize: '1.125rem',
    textAlign: 'center' as const,
    padding: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '1.5rem',
    marginBottom: '3rem',
  },
}
