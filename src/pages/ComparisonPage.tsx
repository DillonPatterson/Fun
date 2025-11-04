import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import SEOHelmet from '@/seo/SEOHelmet'
import Breadcrumbs from '@/components/Breadcrumbs'
import ComparisonTable from '@/components/ComparisonTable'
import { getComparisonBySlug } from '@/data'
import { formatDate } from '@/lib/utils'

export default function ComparisonPage() {
  const { slug } = useParams<{ slug: string }>()
  const comparison = slug ? getComparisonBySlug(slug) : undefined

  if (!comparison) {
    return (
      <div className="container-custom py-16">
        <div className="text-center">
          <h1 className="text-h1 font-sans font-bold mb-4">Comparison Not Found</h1>
          <p className="text-foreground opacity-80 mb-8">
            The comparison you're looking for doesn't exist.
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

  const pageTitle = `${comparison.a.title} vs ${comparison.b.title}`

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Product',
        position: 1,
        name: comparison.a.title,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: 4.5,
          bestRating: 5,
          worstRating: 0,
        },
      },
      {
        '@type': 'Product',
        position: 2,
        name: comparison.b.title,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: 4.3,
          bestRating: 5,
          worstRating: 0,
        },
      },
    ],
  }

  return (
    <>
      <SEOHelmet
        title={pageTitle}
        description={`Head-to-head comparison: ${comparison.whyWinner}`}
        canonical={`/compare/${comparison.slug}`}
        type="article"
        schema={itemListSchema}
      />

      <div className="bg-background py-8">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: 'Comparisons', href: '/' },
              { label: pageTitle, href: `/compare/${comparison.slug}` },
            ]}
          />
        </div>
      </div>

      <article className="bg-white py-12">
        <div className="container-custom max-w-5xl">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-h1 font-sans font-bold mb-4">{pageTitle}</h1>
            {comparison.publishedDate && (
              <p className="text-sm text-foreground opacity-60">
                Published {formatDate(comparison.publishedDate)}
              </p>
            )}
          </header>

          {/* Winner Callout */}
          <div className="bg-fitness bg-opacity-10 border-l-4 border-fitness p-6 mb-8 rounded-r-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-h3 font-sans font-semibold text-fitness">
                Winner: {comparison.winner}
              </span>
            </div>
            <p className="text-foreground leading-relaxed">{comparison.whyWinner}</p>
          </div>

          {/* Comparison Table */}
          <div className="mb-12">
            <h2 className="text-h2 font-sans font-semibold mb-6">Side-by-Side</h2>
            <ComparisonTable data={comparison.table} />
          </div>

          {/* Who Should Buy Which */}
          <div className="mb-12">
            <h2 className="text-h2 font-sans font-semibold mb-6">
              Who Should Buy Which?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {comparison.whoShouldBuyWhich.map((item, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-lg border-l-4 border-fitness"
                >
                  <h3 className="font-sans font-semibold text-foreground mb-2">
                    {item.audience}
                  </h3>
                  <p className="text-fitness font-sans font-semibold">
                    → {item.pick}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 5-Year Cost Comparison */}
          <div className="mb-12">
            <h2 className="text-h2 font-sans font-semibold mb-6">
              5-Year Total Cost of Ownership
            </h2>
            <div className="bg-background p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(comparison.fiveYearCost).map(([key, value]) => {
                  const productName =
                    key === 'theragun'
                      ? comparison.a.title
                      : key === 'hyperice'
                      ? comparison.b.title
                      : key
                  return (
                    <div key={key} className="text-center">
                      <h3 className="font-sans font-semibold text-foreground mb-2">
                        {productName}
                      </h3>
                      <p className="text-3xl font-sans font-bold text-fitness">
                        ${value.toLocaleString()}
                      </p>
                      <p className="text-sm text-foreground opacity-60 mt-1">
                        over 5 years
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="mb-12">
            <h2 className="text-h2 font-sans font-semibold mb-6">
              Read Full Reviews
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to={`/reviews/${comparison.a.slug}`}
                className="bg-background p-6 rounded-lg hover:shadow-card transition-shadow"
              >
                <h3 className="font-sans font-semibold text-foreground link-underline">
                  {comparison.a.title}
                </h3>
              </Link>
              <Link
                to={`/reviews/${comparison.b.slug}`}
                className="bg-background p-6 rounded-lg hover:shadow-card transition-shadow"
              >
                <h3 className="font-sans font-semibold text-foreground link-underline">
                  {comparison.b.title}
                </h3>
              </Link>
            </div>
          </div>

          {/* Back Link */}
          <div className="pt-8 border-t border-rule">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-fitness font-sans font-semibold link-underline"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
