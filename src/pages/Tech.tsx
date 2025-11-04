import { Link } from 'react-router-dom'
import { Cpu, ArrowRight } from 'lucide-react'
import SEOHelmet from '@/seo/SEOHelmet'
import Breadcrumbs from '@/components/Breadcrumbs'
import Card from '@/components/Card'
import StarRating from '@/components/StarRating'
import { getReviewsByCategory, getLatestBlogPosts } from '@/data'

export default function Tech() {
  const techReviews = getReviewsByCategory('tech')
  const latestReviews = techReviews.slice(0, 6)
  const latestBlogs = getLatestBlogPosts(3)

  // Get quick picks
  const bestOverall = techReviews[0]
  const bestValue = techReviews[1] || techReviews[0]
  const bestUnder500 = techReviews[0]

  return (
    <>
      <SEOHelmet
        title="Tech - Audiophile Headphones Under $500"
        description="Quality tech reviews with real measurements. Audiophile-approved headphones, cables, and accessories under $500."
        canonical="/tech"
      />

      <div className="bg-background py-8">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'Tech', href: '/tech' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-tech text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Cpu size={48} />
              <h1 className="text-h1 font-sans font-bold">Tech</h1>
            </div>
            <p className="text-xl opacity-90 mb-6">
              Audiophile-approved headphones and quality tech under $500. We measure
              frequency response, test build quality, and cut through marketing hype.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Picks */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-h2 font-sans font-semibold mb-8">Quick Picks</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {bestOverall && (
              <Link
                to={`/reviews/${bestOverall.slug}`}
                className="bg-background rounded-lg overflow-hidden card-hover"
              >
                {bestOverall.images[0] && (
                  <img
                    src={bestOverall.images[0]}
                    alt={bestOverall.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-tech text-white text-sm font-sans font-semibold rounded-full mb-3">
                    Best Overall
                  </span>
                  <h3 className="font-sans font-semibold text-foreground mb-2">
                    {bestOverall.title}
                  </h3>
                  <StarRating rating={bestOverall.honestScore} />
                  <p className="text-foreground opacity-80 mt-2 text-sm line-clamp-2">
                    {bestOverall.verdict}
                  </p>
                </div>
              </Link>
            )}

            {bestValue && bestValue !== bestOverall && (
              <Link
                to={`/reviews/${bestValue.slug}`}
                className="bg-background rounded-lg overflow-hidden card-hover"
              >
                {bestValue.images[0] && (
                  <img
                    src={bestValue.images[0]}
                    alt={bestValue.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-tech text-white text-sm font-sans font-semibold rounded-full mb-3">
                    Best Value
                  </span>
                  <h3 className="font-sans font-semibold text-foreground mb-2">
                    {bestValue.title}
                  </h3>
                  <StarRating rating={bestValue.honestScore} />
                  <p className="text-foreground opacity-80 mt-2 text-sm line-clamp-2">
                    {bestValue.verdict}
                  </p>
                </div>
              </Link>
            )}

            {bestUnder500 && (
              <Link
                to={`/reviews/${bestUnder500.slug}`}
                className="bg-background rounded-lg overflow-hidden card-hover"
              >
                {bestUnder500.images[0] && (
                  <img
                    src={bestUnder500.images[0]}
                    alt={bestUnder500.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-tech text-white text-sm font-sans font-semibold rounded-full mb-3">
                    Best Under $500
                  </span>
                  <h3 className="font-sans font-semibold text-foreground mb-2">
                    {bestUnder500.title}
                  </h3>
                  <StarRating rating={bestUnder500.honestScore} />
                  <p className="text-foreground opacity-80 mt-2 text-sm line-clamp-2">
                    {bestUnder500.verdict}
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Latest Reviews */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <h2 className="text-h2 font-sans font-semibold mb-8">Latest Reviews</h2>
          {latestReviews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestReviews.map((review) => (
                <Card
                  key={review.slug}
                  title={review.title}
                  excerpt={review.verdict}
                  category={review.category}
                  publishedDate={review.publishedDate}
                  href={`/reviews/${review.slug}`}
                  image={review.images[0]}
                />
              ))}
            </div>
          ) : (
            <p className="text-foreground opacity-60">More tech reviews coming soon!</p>
          )}
        </div>
      </section>

      {/* Latest Blogs */}
      {latestBlogs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-h2 font-sans font-semibold">Latest Guides</h2>
              <Link
                to="/blog"
                className="text-tech font-sans font-semibold link-underline"
              >
                View all
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {latestBlogs.map((post) => (
                <Card
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  category="tech"
                  publishedDate={post.publishedDate}
                  readTime={post.readTime}
                  href={`/blog/${post.slug}`}
                  image={post.image}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Buyer Guide Excerpt */}
      <section className="py-16 bg-background">
        <div className="container-custom max-w-3xl">
          <div className="bg-white p-8 rounded-lg border-l-4 border-tech">
            <h2 className="text-h2 font-sans font-semibold mb-4">
              Buying Guide: What to Look For
            </h2>
            <p className="text-foreground mb-4 leading-relaxed">
              When buying headphones under $500, prioritize neutral frequency response,
              comfort for long listening sessions, and replaceable parts. Avoid models
              with excessive bass boost or harsh treble. We measure frequency response
              with calibrated equipment and test for long-term comfort.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-tech font-sans font-semibold link-underline"
            >
              Read our guides <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
