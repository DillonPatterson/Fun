import { Link } from 'react-router-dom'
import { Search, Zap, Leaf, Cpu, ArrowRight } from 'lucide-react'
import SEOHelmet from '@/seo/SEOHelmet'
import Card from '@/components/Card'
import { getLatestReviews, getEditorsChoiceReviews, getLatestBlogPosts } from '@/data'

export default function Home() {
  const latestReviews = getLatestReviews(6)
  const editorsChoice = getEditorsChoiceReviews().slice(0, 3)
  const latestBlogs = getLatestBlogPosts(6)

  return (
    <>
      <SEOHelmet
        title="Real Reviews. Clear Picks."
        description="Honest, tested reviews of fitness gear, eco-friendly home products, and quality tech. We measure what matters—noise, durability, and real-world performance."
        canonical="/"
      />

      {/* Hero Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-h1 font-sans font-bold text-foreground mb-4 text-balance">
                Real Reviews.<br />Clear Picks.
              </h1>
              <p className="text-xl text-foreground opacity-80 mb-8 text-balance">
                We test products and tell you what matters—noise levels, durability, and long-term value. No fluff, just facts.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  to="/fitness"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-fitness text-white font-sans font-semibold rounded-lg hover:bg-opacity-90 transition-all"
                >
                  <Zap size={20} />
                  Fitness
                </Link>
                <Link
                  to="/eco-home"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-eco text-white font-sans font-semibold rounded-lg hover:bg-opacity-90 transition-all"
                >
                  <Leaf size={20} />
                  Eco Home
                </Link>
                <Link
                  to="/tech"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-tech text-white font-sans font-semibold rounded-lg hover:bg-opacity-90 transition-all"
                >
                  <Cpu size={20} />
                  Tech
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-card p-4">
                <div className="flex items-center gap-2 px-4 py-3 bg-background rounded-lg">
                  <Search size={20} className="text-foreground opacity-40" />
                  <input
                    type="text"
                    placeholder="Search reviews..."
                    className="flex-1 bg-transparent text-foreground placeholder-foreground placeholder-opacity-40 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/fitness" className="group bg-background rounded-lg p-8 card-hover">
              <Zap size={48} className="text-fitness mb-4" />
              <h3 className="text-h3 font-sans font-semibold mb-2">Fitness</h3>
              <p className="text-foreground opacity-80 mb-4">
                Quiet, durable home fitness gear tested for apartment living
              </p>
              <span className="inline-flex items-center gap-2 text-fitness font-sans font-semibold">
                Explore <ArrowRight size={16} />
              </span>
            </Link>
            <Link to="/eco-home" className="group bg-background rounded-lg p-8 card-hover">
              <Leaf size={48} className="text-eco mb-4" />
              <h3 className="text-h3 font-sans font-semibold mb-2">Eco Home</h3>
              <p className="text-foreground opacity-80 mb-4">
                Practical, sustainable kitchen and home products that last
              </p>
              <span className="inline-flex items-center gap-2 text-eco font-sans font-semibold">
                Explore <ArrowRight size={16} />
              </span>
            </Link>
            <Link to="/tech" className="group bg-background rounded-lg p-8 card-hover">
              <Cpu size={48} className="text-tech mb-4" />
              <h3 className="text-h3 font-sans font-semibold mb-2">Tech</h3>
              <p className="text-foreground opacity-80 mb-4">
                Audiophile-approved headphones and quality tech under $500
              </p>
              <span className="inline-flex items-center gap-2 text-tech font-sans font-semibold">
                Explore <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Reviews */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-h2 font-sans font-semibold">Latest Reviews</h2>
            <Link to="/blog" className="text-fitness font-sans font-semibold link-underline">
              View all
            </Link>
          </div>
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

      {/* Editor's Choice */}
      {editorsChoice.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-h2 font-sans font-semibold mb-8">Editor's Choice</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {editorsChoice.map((review) => (
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
      )}

      {/* Latest from Blog */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-h2 font-sans font-semibold">Latest from the Blog</h2>
            <Link to="/blog" className="text-fitness font-sans font-semibold link-underline">
              View all
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Trust Strip */}
      <section className="bg-charcoal text-white py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-sans font-semibold text-xl mb-2">Rigorous Testing</h3>
              <p className="opacity-80">
                We measure decibels, test durability, and verify claims in real-world conditions
              </p>
            </div>
            <div>
              <h3 className="font-sans font-semibold text-xl mb-2">Transparent Methods</h3>
              <p className="opacity-80">
                <Link to="/how-we-test" className="link-underline">See how we test</Link> with calibrated equipment and documented procedures
              </p>
            </div>
            <div>
              <h3 className="font-sans font-semibold text-xl mb-2">Clear Disclosure</h3>
              <p className="opacity-80">
                <Link to="/disclosure" className="link-underline">Full affiliate disclosure</Link> and editorial independence
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
