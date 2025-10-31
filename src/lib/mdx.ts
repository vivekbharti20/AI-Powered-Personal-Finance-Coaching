import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { Article, ArticlePreview, ArticleMetadata } from './types'

// Directory where articles are stored
const articlesDirectory = path.join(process.cwd(), 'src/content/articles')

/**
 * Get all article slugs (filenames without extension)
 * Example: "my-first-article.mdx" -> "my-first-article"
 */
export function getAllArticleSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(articlesDirectory)
    return fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => fileName.replace(/\.mdx$/, ''))
  } catch (error) {
    // Directory might not exist yet
    return []
  }
}

/**
 * Get a single article by its slug
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Parse frontmatter and content
    const { data, content } = matter(fileContents)

    // Calculate reading time
    const { text: readingTimeText } = readingTime(content)

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      category: data.category || [],
      tags: data.tags || [],
      featured: data.featured || false,
      author: data.author,
      content,
      readingTime: readingTimeText,
    }
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error)
    return null
  }
}

/**
 * Get all articles (for listing page)
 * Returns articles sorted by date (newest first)
 */
export async function getAllArticles(): Promise<ArticlePreview[]> {
  const slugs = getAllArticleSlugs()
  const articles = await Promise.all(
    slugs.map(async (slug) => {
      const article = await getArticleBySlug(slug)
      if (!article) return null

      // Return preview (without full content)
      return {
        slug: article.slug,
        title: article.title,
        date: article.date,
        excerpt: article.excerpt,
        category: article.category,
        tags: article.tags,
        featured: article.featured,
        author: article.author,
        readingTime: article.readingTime,
      }
    })
  )

  // Filter out nulls and sort by date
  return articles
    .filter((article): article is ArticlePreview => article !== null)
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}

/**
 * Get articles by category
 */
export async function getArticlesByCategory(
  category: string
): Promise<ArticlePreview[]> {
  const allArticles = await getAllArticles()
  return allArticles.filter((article) =>
    article.category.some((cat) => cat.toLowerCase() === category.toLowerCase())
  )
}

/**
 * Get articles by tag
 */
export async function getArticlesByTag(tag: string): Promise<ArticlePreview[]> {
  const allArticles = await getAllArticles()
  return allArticles.filter((article) =>
    article.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  )
}

/**
 * Get featured articles
 */
export async function getFeaturedArticles(): Promise<ArticlePreview[]> {
  const allArticles = await getAllArticles()
  return allArticles.filter((article) => article.featured)
}

/**
 * Search articles by query (searches title, excerpt, and tags)
 */
export async function searchArticles(query: string): Promise<ArticlePreview[]> {
  const allArticles = await getAllArticles()
  const lowerQuery = query.toLowerCase()

  return allArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(lowerQuery) ||
      article.excerpt.toLowerCase().includes(lowerQuery) ||
      article.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  )
}

/**
 * Get all unique categories
 */
export async function getAllCategories(): Promise<string[]> {
  const allArticles = await getAllArticles()
  const categories = new Set<string>()

  allArticles.forEach((article) => {
    article.category.forEach((cat) => categories.add(cat))
  })

  return Array.from(categories).sort()
}

/**
 * Get all unique tags
 */
export async function getAllTags(): Promise<string[]> {
  const allArticles = await getAllArticles()
  const tags = new Set<string>()

  allArticles.forEach((article) => {
    article.tags.forEach((tag) => tags.add(tag))
  })

  return Array.from(tags).sort()
}
