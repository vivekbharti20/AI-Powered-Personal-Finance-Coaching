// Article metadata from frontmatter
export interface ArticleMetadata {
  title: string
  date: string
  excerpt: string
  category: string[]
  tags: string[]
  featured?: boolean
  author?: string
}

// Complete article with content
export interface Article extends ArticleMetadata {
  slug: string
  content: string
  readingTime: string
}

// Article preview (for listing pages)
export interface ArticlePreview extends ArticleMetadata {
  slug: string
  readingTime: string
}
