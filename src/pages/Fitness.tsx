import { Link } from 'react-router-dom'
import { Zap, ArrowRight } from 'lucide-react'
import SEOHelmet from '@/seo/SEOHelmet'
import Breadcrumbs from '@/components/Breadcrumbs'
import Card from '@/components/Card'
import StarRating from '@/components/StarRating'
import { getReviewsByCategory, getLatestBlogPosts, comparisons, reviews } from '@/data'

export default function Fitness() {
  const fitnessReviews = getReviewsByCategory('fitness')
  const latestReviews = fitnessReviews.slice(0, 6)
  const latestBlogs = getLatestBlogPosts(3)

  // Get quick picks
  const bestOverall = reviews.find((r) => r.slug === 'best-quiet-massage-guns')
  const bestValue = fitnessReviews[1] || fitnessReviews[0]
  const bestQuiet = fitnessReviews[0]

  // Get featured comparison
  const featuredComparison = comparisons.find((c) => c.slug === 'theragun-vs-hyperice')

  return (
    <>
      <SEOHelmet
        title="Fitness - Quiet, Apartment-Friendly Gear"
        description="Tested reviews of quiet massage guns, low-impact equipment, and fitness gear for apartment dwellers. Real noise measurements and durability testing."
        canonical="/fitness"
      />

      <div className="bg-background py-8">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'Fitness', href: '/fitness' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-fitness text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Zap size={48} />
              <h1 className="text-h1 font-sans font-bold">Fitness</h1>
            </div>
            <p className="text-xl opacity-90 mb-6">
              Quiet, durable home fitness gear tested for apartment living. We measure
              decibels, test stall force, and verify claims with real equipment.
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
                  <span className="inline-block px-3 py-1 bg-fitness text-white text-sm font-sans font-semibold rounded-full mb-3">
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

            {bestValue && (
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
                  <span className="inline-block px-3 py-1 bg-fitness text-white text-sm font-sans font-semibold rounded-full mb-3">
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

            {bestQuiet && (
              <Link
                to={`/reviews/${bestQuiet.slug}`}
                className="bg-background rounded-lg overflow-hidden card-hover"
              >
                {bestQuiet.images[0] && (
                  <img
                    src={bestQuiet.images[0]}
                    alt={bestQuiet.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-fitness text-white text-sm font-sans font-semibold rounded-full mb-3">
                    Best Quiet
                  </span>
                  <h3 className="font-sans font-semibold text-foreground mb-2">
                    {bestQuiet.title}
                  </h3>
                  <StarRating rating={bestQuiet.honestScore} />
                  <p className="text-foreground opacity-80 mt-2 text-sm line-clamp-2">
                    {bestQuiet.verdict}
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Featured Comparison */}
      {featuredComparison && (
        <section className="py-16 bg-background">
          <div className="container-custom">
            <h2 className="text-h2 font-sans font-semibold mb-8">
              Featured Comparison
            </h2>
            <Link
              to={`/compare/${featuredComparison.slug}`}
              className="block bg-white rounded-lg p-8 card-hover"
            >
              <h3 className="text-h3 font-sans font-semibold mb-3">
                {featuredComparison.a.title} vs {featuredComparison.b.title}
              </h3>
              <div className="bg-fitness bg-opacity-10 border-l-4 border-fitness p-4 rounded-r-lg mb-4">
                <p className="font-sans font-semibold text-fitness mb-1">
                  Winner: {featuredComparison.winner}
                </p>
                <p className="text-foreground text-sm">{featuredComparison.whyWinner}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-fitness font-sans font-semibold">
                Read full comparison <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </section>
      )}

      {/* Latest Reviews */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-h2 font-sans font-semibold mb-8">Latest Reviews</h2>
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
        </div>
      </section>

      {/* Latest Blogs */}
      {latestBlogs.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-h2 font-sans font-semibold">Latest Guides</h2>
              <Link
                to="/blog"
                className="text-fitness font-sans font-semibold link-underline"
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
                  category="fitness"
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
      <section className="py-16 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="bg-background p-8 rounded-lg border-l-4 border-fitness">
            <h2 className="text-h2 font-sans font-semibold mb-4">
              Buying Guide: What to Look For
            </h2>
            <p className="text-foreground mb-4 leading-relaxed">
              When shopping for fitness equipment for apartment living, prioritize noise
              levels (under 50 dB is ideal), build quality for long-term durability, and
              warranty coverage. Our testing includes calibrated decibel measurements,
              stress tests, and real-world usage scenarios.
            </p>
            <Link
              to="/blog/massage-gun-buying-guide"
              className="inline-flex items-center gap-2 text-fitness font-sans font-semibold link-underline"
            >
              Read full buying guide <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
