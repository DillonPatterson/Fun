import { Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'
import SEOHelmet from '@/seo/SEOHelmet'
import Breadcrumbs from '@/components/Breadcrumbs'
import Card from '@/components/Card'
import { blogPosts } from '@/data'

export default function BlogList() {
  return (
    <>
      <SEOHelmet
        title="Blog - Guides, Tips & Insights"
        description="In-depth buying guides, product explainers, and practical tips for making informed purchases."
        canonical="/blog"
      />

      <div className="bg-background py-8">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-charcoal text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen size={48} />
              <h1 className="text-h1 font-sans font-bold">Blog</h1>
            </div>
            <p className="text-xl opacity-90">
              In-depth buying guides, product explainers, and practical tips for making
              informed purchases.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          {blogPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Card
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  category="fitness"
                  publishedDate={post.publishedDate}
                  readTime={post.readTime}
                  href={`/blog/${post.slug}`}
                  image={post.image}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-foreground opacity-60 mb-4">No blog posts yet.</p>
              <Link to="/" className="text-fitness font-sans font-semibold link-underline">
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
