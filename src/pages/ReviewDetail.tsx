import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react'
import SEOHelmet from '@/seo/SEOHelmet'
import Breadcrumbs from '@/components/Breadcrumbs'
import StarRating from '@/components/StarRating'
import BuyButtons from '@/components/BuyButtons'
import SubScoreBars from '@/components/SubScoreBars'
import SpecTable from '@/components/SpecTable'
import { getReviewBySlug } from '@/data'
import { formatDate } from '@/lib/utils'

export default function ReviewDetail() {
  const { slug } = useParams<{ slug: string }>()
  const review = slug ? getReviewBySlug(slug) : undefined

  if (!review) {
    return (
      <div className="container-custom py-16">
        <div className="text-center">
          <h1 className="text-h1 font-sans font-bold mb-4">Review Not Found</h1>
          <p className="text-foreground opacity-80 mb-8">
            The review you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-fitness font-sans font-semibold link-underline"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const categoryLabel =
    review.category === 'eco-home'
      ? 'Eco Home'
      : review.category.charAt(0).toUpperCase() + review.category.slice(1)

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: review.title,
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.honestScore,
        bestRating: 5,
        worstRating: 0,
      },
      author: {
        '@type': 'Organization',
        name: 'Honest Selects',
      },
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: review.priceRange.split('–')[0].replace('$', ''),
      highPrice: review.priceRange.split('–')[1].replace('$', ''),
    },
  }

  return (
    <>
      <SEOHelmet
        title={review.title}
        description={review.verdict}
        canonical={`/reviews/${review.slug}`}
        type="article"
        image={review.images[0]}
        schema={productSchema}
      />

      <div className="bg-background py-8">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: categoryLabel, href: `/${review.category}` },
              { label: review.title, href: `/reviews/${review.slug}` },
            ]}
          />
        </div>
      </div>

      <article className="bg-white py-12">
        <div className="container-custom max-w-4xl">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-h1 font-sans font-bold mb-4">{review.title}</h1>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <StarRating rating={review.honestScore} />
              {review.editorsChoice && (
                <span className="px-3 py-1 bg-fitness text-white text-sm font-sans font-semibold rounded-full">
                  Editor's Choice
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-foreground opacity-60">
              {review.publishedDate && (
                <span>Published {formatDate(review.publishedDate)}</span>
              )}
              {review.updatedDate && (
                <span>Updated {formatDate(review.updatedDate)}</span>
              )}
              <span>{review.priceRange}</span>
            </div>
          </header>

          {/* Hero Image */}
          {review.images[0] && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={review.images[0]}
                alt={review.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Verdict */}
          <div className="bg-background border-l-4 border-fitness p-6 mb-8 rounded-r-lg">
            <h2 className="text-h3 font-sans font-semibold mb-3">Our Verdict</h2>
            <p className="text-foreground leading-relaxed">{review.verdict}</p>
          </div>

          {/* Buy Buttons */}
          <div className="mb-12">
            <BuyButtons
              retailers={review.retailers}
              productSlug={review.slug}
              
            />
          </div>

          {/* Sub Scores */}
          <div className="mb-12">
            <h2 className="text-h2 font-sans font-semibold mb-6">Performance Breakdown</h2>
            <SubScoreBars scores={review.subScores} />
          </div>

          {/* Pros and Cons */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-background rounded-lg p-6">
              <h3 className="text-h3 font-sans font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="text-fitness" size={24} />
                Pros
              </h3>
              <ul className="space-y-2">
                {review.pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-fitness mt-1">•</span>
                    <span className="text-foreground">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background rounded-lg p-6">
              <h3 className="text-h3 font-sans font-semibold mb-4 flex items-center gap-2">
                <XCircle className="text-red-500" size={24} />
                Cons
              </h3>
              <ul className="space-y-2">
                {review.cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span className="text-foreground">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Specifications */}
          <div className="mb-12">
            <h2 className="text-h2 font-sans font-semibold mb-6">Specifications</h2>
            <SpecTable specs={review.specs} />
          </div>

          {/* Testing Notes */}
          <div className="mb-12">
            <h2 className="text-h2 font-sans font-semibold mb-4">How We Tested</h2>
            <div className="bg-background p-6 rounded-lg">
              <p className="text-foreground leading-relaxed">{review.testingNotes}</p>
            </div>
          </div>

          {/* Alternatives */}
          {review.alternatives.length > 0 && (
            <div className="mb-12">
              <h2 className="text-h2 font-sans font-semibold mb-4">
                Also Consider
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {review.alternatives.map((alt) => (
                  <Link
                    key={alt.slug}
                    to={`/reviews/${alt.slug}`}
                    className="bg-background p-6 rounded-lg hover:shadow-card transition-shadow"
                  >
                    <h3 className="font-sans font-semibold text-foreground link-underline">
                      {alt.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          {review.faq.length > 0 && (
            <div className="mb-12">
              <h2 className="text-h2 font-sans font-semibold mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {review.faq.map((item, index) => (
                  <div key={index} className="bg-background p-6 rounded-lg">
                    <h3 className="font-sans font-semibold text-foreground mb-2">
                      {item.q}
                    </h3>
                    <p className="text-foreground opacity-80">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back Link */}
          <div className="pt-8 border-t border-rule">
            <Link
              to={`/${review.category}`}
              className="inline-flex items-center gap-2 text-fitness font-sans font-semibold link-underline"
            >
              <ArrowLeft size={20} />
              Back to {categoryLabel}
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
