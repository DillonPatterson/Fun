import { Link } from 'react-router-dom'
import { Leaf, ArrowRight } from 'lucide-react'
import SEOHelmet from '@/seo/SEOHelmet'
import Breadcrumbs from '@/components/Breadcrumbs'
import Card from '@/components/Card'
import StarRating from '@/components/StarRating'
import { getReviewsByCategory, getLatestBlogPosts } from '@/data'

export default function EcoHome() {
  const ecoHomeReviews = getReviewsByCategory('eco-home')
  const latestReviews = ecoHomeReviews.slice(0, 6)
  const latestBlogs = getLatestBlogPosts(3)

  // Get quick picks
  const bestOverall = ecoHomeReviews[0]
  const bestValue = ecoHomeReviews[1] || ecoHomeReviews[0]
  const mostSustainable = ecoHomeReviews[0]

  return (
    <>
      <SEOHelmet
        title="Eco Home - Sustainable Kitchen & Home Products"
        description="Practical, sustainable kitchen and home products that last. We test for durability, mold resistance, and real-world performance."
        canonical="/eco-home"
      />

      <div className="bg-background py-8">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'Eco Home', href: '/eco-home' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-eco text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Leaf size={48} />
              <h1 className="text-h1 font-sans font-bold">Eco Home</h1>
            </div>
            <p className="text-xl opacity-90 mb-6">
              Practical, sustainable kitchen and home products that last. We test for
              mold resistance, material durability, and verify sustainability claims.
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
                  <span className="inline-block px-3 py-1 bg-eco text-white text-sm font-sans font-semibold rounded-full mb-3">
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
                  <span className="inline-block px-3 py-1 bg-eco text-white text-sm font-sans font-semibold rounded-full mb-3">
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

            {mostSustainable && (
              <Link
                to={`/reviews/${mostSustainable.slug}`}
                className="bg-background rounded-lg overflow-hidden card-hover"
              >
                {mostSustainable.images[0] && (
                  <img
                    src={mostSustainable.images[0]}
                    alt={mostSustainable.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-eco text-white text-sm font-sans font-semibold rounded-full mb-3">
                    Most Sustainable
                  </span>
                  <h3 className="font-sans font-semibold text-foreground mb-2">
                    {mostSustainable.title}
                  </h3>
                  <StarRating rating={mostSustainable.honestScore} />
                  <p className="text-foreground opacity-80 mt-2 text-sm line-clamp-2">
                    {mostSustainable.verdict}
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
            <p className="text-foreground opacity-60">
              More eco-home reviews coming soon!
            </p>
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
                className="text-eco font-sans font-semibold link-underline"
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
                  category="eco-home"
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
          <div className="bg-white p-8 rounded-lg border-l-4 border-eco">
            <h2 className="text-h2 font-sans font-semibold mb-4">
              Buying Guide: What to Look For
            </h2>
            <p className="text-foreground mb-4 leading-relaxed">
              When choosing eco-friendly home products, look for verified certifications
              (FSC, GOTS, etc.), durable materials that will last years not months, and
              companies with transparent supply chains. We test for mold resistance,
              material longevity, and verify sustainability claims.
            </p>
            <Link
              to="/blog/mattress-certifications-explained"
              className="inline-flex items-center gap-2 text-eco font-sans font-semibold link-underline"
            >
              Learn about certifications <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
