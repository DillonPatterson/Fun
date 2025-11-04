import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock } from 'lucide-react'
import SEOHelmet from '@/seo/SEOHelmet'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getBlogPostBySlug } from '@/data'
import { formatDate } from '@/lib/utils'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogPostBySlug(slug) : undefined

  if (!post) {
    return (
      <div className="container-custom py-16">
        <div className="text-center">
          <h1 className="text-h1 font-sans font-bold mb-4">Post Not Found</h1>
          <p className="text-foreground opacity-80 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-fitness font-sans font-semibold link-underline"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate || post.publishedDate,
    author: {
      '@type': 'Organization',
      name: 'Honest Selects',
    },
  }

  // Simple markdown-to-HTML conversion
  const renderContent = (content: string) => {
    // Split by paragraphs
    const paragraphs = content.split('\n\n')

    return paragraphs.map((para, index) => {
      // Handle headings
      if (para.startsWith('### ')) {
        return (
          <h3 key={index} className="text-h3 font-sans font-semibold mt-8 mb-4">
            {para.replace('### ', '')}
          </h3>
        )
      }
      if (para.startsWith('## ')) {
        return (
          <h2 key={index} className="text-h2 font-sans font-semibold mt-10 mb-4">
            {para.replace('## ', '')}
          </h2>
        )
      }

      // Handle lists
      if (para.includes('\n- ')) {
        const items = para.split('\n- ').filter(Boolean)
        return (
          <ul key={index} className="list-disc list-inside space-y-2 mb-6">
            {items.map((item, i) => (
              <li key={i} className="text-foreground leading-relaxed">
                {item.replace(/^- /, '')}
              </li>
            ))}
          </ul>
        )
      }

      // Regular paragraph
      if (para.trim()) {
        return (
          <p key={index} className="text-foreground leading-relaxed mb-6">
            {para}
          </p>
        )
      }

      return null
    })
  }

  return (
    <>
      <SEOHelmet
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        type="article"
        image={post.image}
        schema={articleSchema}
      />

      <div className="bg-background py-8">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title, href: `/blog/${post.slug}` },
            ]}
          />
        </div>
      </div>

      <article className="bg-white py-12">
        <div className="container-custom max-w-3xl">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-h1 font-sans font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground opacity-60">
              <span>Published {formatDate(post.publishedDate)}</span>
              {post.updatedDate && (
                <span>Updated {formatDate(post.updatedDate)}</span>
              )}
              <span className="flex items-center gap-1">
                <Clock size={16} />
                {post.readTime} min read
              </span>
            </div>
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-auto" />
            </div>
          )}

          {/* Excerpt */}
          <div className="bg-background border-l-4 border-fitness p-6 mb-8 rounded-r-lg">
            <p className="text-foreground leading-relaxed font-medium">{post.excerpt}</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {renderContent(post.content)}
          </div>

          {/* Back Link */}
          <div className="pt-8 mt-12 border-t border-rule">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-fitness font-sans font-semibold link-underline"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
