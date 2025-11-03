# Philosophy & Economics Insights

A modern, fast, and SEO-optimized personal website for sharing deep insights into philosophy, economics, and their intersection. Built with Next.js, TypeScript, and MDX.

## 🎯 Project Overview

This website serves as a platform for exploring philosophical and economic concepts through well-researched articles. It combines the scholarly depth of academic writing with the accessibility of modern web design.

### What This Project Offers

- 📝 **Content-First Design** - Clean, readable typography focused on the written word
- 🔍 **Smart Search** - Real-time search across titles, excerpts, and tags
- 🏷️ **Category Filtering** - Filter articles by Philosophy, Economics, or both
- ⚡ **Fast Performance** - Built on Next.js with static generation for speed
- 📱 **Fully Responsive** - Beautiful on desktop, tablet, and mobile
- 🎨 **Professional Design** - Academic yet approachable aesthetic
- ♿ **Accessible** - Semantic HTML and keyboard-navigable interface

## 🚀 Tech Stack

### Core Technologies

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[MDX](https://mdxjs.com/)** - Markdown with React components
- **[React 19](https://react.dev/)** - UI library

### Key Dependencies

- **gray-matter** - Parse frontmatter from MDX files
- **reading-time** - Calculate article reading time
- **next-mdx-remote** - Render MDX content
- **remark/rehype** - Markdown processing pipeline

## ✨ Features

### Current Features (Phase 1 & 2 Complete)

#### Content Management
- ✅ Write articles in MDX (Markdown + React)
- ✅ Frontmatter metadata (title, date, categories, tags)
- ✅ Automatic reading time calculation
- ✅ Featured article support
- ✅ Multi-category support

#### User Experience
- ✅ Article listing with grid layout
- ✅ Real-time search functionality
- ✅ Category filtering (Philosophy, Economics)
- ✅ Individual article pages with clean typography
- ✅ Breadcrumb navigation
- ✅ Responsive design for all devices

#### Developer Experience
- ✅ TypeScript for type safety
- ✅ File-based routing
- ✅ Hot module replacement
- ✅ Component-based architecture
- ✅ ESLint configuration

#### SEO & Performance
- ✅ Static site generation (SSG)
- ✅ Automatic metadata generation
- ✅ Semantic HTML structure
- ✅ Optimized bundle size

### Sample Content

Three high-quality sample articles included:
1. **"The Philosophy of Economics"** - Explores rational choice theory and market ethics
2. **"Virtue Ethics in Modern Life"** - Examines Aristotelian ethics in contemporary context
3. **"Behavioral Economics"** - Introduction to psychological insights in economics

## 🏗️ Project Structure

```
philosophy-economics-insights/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── api/
│   │   │   └── articles/         # Articles API endpoint
│   │   ├── articles/
│   │   │   ├── [slug]/           # Dynamic article pages
│   │   │   └── page.tsx          # Articles listing with search/filter
│   │   ├── about/                # About page
│   │   ├── topics/               # Topics overview
│   │   ├── contact/              # Contact page
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Homepage
│   ├── components/
│   │   ├── article/
│   │   │   └── ArticleCard.tsx   # Article preview component
│   │   ├── layout/
│   │   │   ├── Header.tsx        # Site header
│   │   │   ├── Footer.tsx        # Site footer
│   │   │   └── Navigation.tsx    # Navigation menu
│   │   └── ui/                   # Reusable UI components
│   ├── content/
│   │   └── articles/             # MDX article files
│   │       ├── philosophy-of-economics.mdx
│   │       ├── virtue-ethics-modern-life.mdx
│   │       └── behavioral-economics-intro.mdx
│   ├── lib/
│   │   ├── mdx.ts                # MDX processing utilities
│   │   └── types.ts              # TypeScript type definitions
│   └── styles/
│       └── globals.css           # Global styles
├── public/                       # Static assets
├── .gitignore
├── next.config.js                # Next.js configuration
├── package.json
├── tsconfig.json                 # TypeScript configuration
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vivekbharti20/AI-Powered-Personal-Finance-Coaching.git
   cd AI-Powered-Personal-Finance-Coaching
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📝 Writing Articles

### Creating a New Article

1. Create a new `.mdx` file in `src/content/articles/`:
   ```bash
   src/content/articles/my-new-article.mdx
   ```

2. Add frontmatter and content:
   ```mdx
   ---
   title: "Your Article Title"
   date: "2025-10-31"
   category: ["Philosophy", "Economics"]
   tags: ["ethics", "markets", "decision-making"]
   excerpt: "A compelling summary that appears in article listings."
   featured: true
   author: "Your Name"
   ---

   # Your Article Title

   Start writing your content here...

   ## Section Heading

   More content...
   ```

3. Save the file - it will automatically appear on your site!

### Article Frontmatter Reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ | Article title (appears in listings and page) |
| `date` | string | ✅ | Publication date (YYYY-MM-DD format) |
| `category` | string[] | ✅ | Categories (e.g., ["Philosophy", "Economics"]) |
| `tags` | string[] | ✅ | Searchable tags |
| `excerpt` | string | ✅ | Brief description for listings |
| `featured` | boolean | ❌ | Show featured badge (default: false) |
| `author` | string | ❌ | Author name |

### Markdown Features Supported

- **Headings** (`#`, `##`, `###`)
- **Bold** (`**text**`) and *italic* (`*text*`)
- Lists (ordered and unordered)
- Links and images
- Code blocks
- Blockquotes
- And more!

## 🎨 Customization

### Changing Colors

Edit `src/styles/globals.css` for global color scheme:
```css
/* Primary colors */
--primary-blue: #2563eb;
--primary-gold: #d97706;

/* Text colors */
--text-dark: #1a1a1a;
--text-gray: #6b7280;
```

### Adding Categories

Update the categories array in `src/app/articles/page.tsx`:
```typescript
const categories = ['all', 'philosophy', 'economics', 'politics', 'history']
```

### Modifying Layout

All layout components are in `src/components/layout/`:
- `Header.tsx` - Modify site name, logo
- `Navigation.tsx` - Add/remove menu items
- `Footer.tsx` - Update footer content

## 📊 Project Status

### Completed ✅

- [x] **Phase 1**: Foundation & Layout
  - Next.js setup with TypeScript
  - Responsive header, navigation, and footer
  - Homepage with hero section
  - Basic page structure

- [x] **Phase 2**: Article System
  - MDX article processing
  - Article listing with search and filtering
  - Individual article pages
  - API endpoints
  - Sample articles

### In Progress 🚧

Currently refining and testing all features.

### Planned Features 📋

- [ ] **Phase 3**: Enhancements
  - [ ] Dark mode toggle
  - [ ] Newsletter integration (ConvertKit/Mailchimp)
  - [ ] Comments system (Giscus/Disqus)
  - [ ] Social sharing buttons
  - [ ] Related articles suggestions
  - [ ] Reading progress indicator
  - [ ] Table of contents for long articles

- [ ] **Phase 4**: Deployment
  - [ ] Deploy to Vercel
  - [ ] Custom domain setup
  - [ ] Analytics integration
  - [ ] SEO optimization
  - [ ] XML sitemap
  - [ ] RSS feed

## 🛠️ Development

### Code Style

This project uses:
- **TypeScript** for type safety
- **ESLint** for code quality
- **Prettier** (recommended) for formatting

### Adding New Features

1. Create components in `src/components/`
2. Add pages in `src/app/`
3. Utility functions go in `src/lib/`
4. Update types in `src/lib/types.ts`

## 📈 Performance

- **Lighthouse Score**: Optimized for performance
- **Static Generation**: Articles pre-rendered at build time
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js Image component ready

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome!

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with guidance from Claude Code
- Inspired by academic philosophy and economics writing
- Design influenced by modern minimalist web aesthetics

## 📧 Contact

**Author**: Your Name
**GitHub**: [@vivekbharti20](https://github.com/vivekbharti20)
**Email**: your.email@example.com (update this!)

---

## 📚 Learn More

### About the Technologies Used

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [MDX Documentation](https://mdxjs.com/)

### Deployment Resources

- [Deploy on Vercel](https://vercel.com/docs)
- [Deploy on Netlify](https://docs.netlify.com/)

---

**⭐ Star this repository if you find it helpful!**

Built with ❤️ and [Claude Code](https://claude.com/claude-code)
