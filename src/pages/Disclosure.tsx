import { Link } from 'react-router-dom'
import { DollarSign, Shield, Info } from 'lucide-react'
import SEOHelmet from '@/seo/SEOHelmet'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function Disclosure() {
  return (
    <>
      <SEOHelmet
        title="Affiliate Disclosure"
        description="Full disclosure of how Honest Selects earns revenue and maintains editorial independence. Learn about our affiliate relationships and testing policies."
        canonical="/disclosure"
      />

      <div className="bg-background py-8">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'Disclosure', href: '/disclosure' }]} />
        </div>
      </div>

      <article className="bg-white py-12">
        <div className="container-custom max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-h1 font-sans font-bold mb-4">Affiliate Disclosure</h1>
            <p className="text-xl text-foreground opacity-80 leading-relaxed">
              Honest Selects maintains strict editorial independence while earning
              revenue through affiliate partnerships. Here's exactly how it works.
            </p>
          </header>

          {/* How We Earn Revenue */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-fitness bg-opacity-10 rounded-lg flex items-center justify-center">
                <DollarSign className="text-fitness" size={24} />
              </div>
              <h2 className="text-h2 font-sans font-semibold">How We Earn Revenue</h2>
            </div>
            <div className="bg-background p-6 rounded-lg space-y-4">
              <p className="text-foreground leading-relaxed">
                Honest Selects participates in affiliate marketing programs, including
                Amazon Associates, Best Buy Affiliate Program, and direct partnerships
                with select retailers.
              </p>
              <p className="text-foreground leading-relaxed">
                <strong>What this means:</strong> When you click a "Buy" button or
                product link on our site and make a purchase, we may earn a small
                commission at no extra cost to you. This commission helps cover our
                testing equipment, product purchases, and operational costs.
              </p>
              <p className="text-foreground leading-relaxed">
                <strong>Typical commission rates:</strong> We earn 1-5% on most
                purchases, depending on the retailer and product category. These
                commissions have zero impact on our editorial decisions or testing
                methodology.
              </p>
            </div>
          </section>

          {/* Editorial Independence */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-fitness bg-opacity-10 rounded-lg flex items-center justify-center">
                <Shield className="text-fitness" size={24} />
              </div>
              <h2 className="text-h2 font-sans font-semibold">
                Editorial Independence
              </h2>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <h3 className="font-sans font-semibold text-foreground mb-3">
                Our Principles
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-fitness font-bold mt-1">1.</span>
                  <span className="text-foreground leading-relaxed">
                    <strong>We buy products at retail price</strong> whenever possible.
                    If we accept a review sample, we only do so if there are no
                    editorial restrictions or requirements for positive coverage.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fitness font-bold mt-1">2.</span>
                  <span className="text-foreground leading-relaxed">
                    <strong>Affiliate earnings never influence our ratings.</strong> We
                    test and rate products objectively based on performance, not
                    potential commission.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fitness font-bold mt-1">3.</span>
                  <span className="text-foreground leading-relaxed">
                    <strong>We recommend products we genuinely believe in.</strong> If a
                    product doesn't meet our standards, we won't recommend it—even if it
                    offers higher commissions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fitness font-bold mt-1">4.</span>
                  <span className="text-foreground leading-relaxed">
                    <strong>We provide multiple purchase options.</strong> When
                    possible, we link to several retailers so you can choose based on
                    price, shipping, or preference.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fitness font-bold mt-1">5.</span>
                  <span className="text-foreground leading-relaxed">
                    <strong>We clearly label affiliate links.</strong> All product
                    purchase buttons and links are clearly marked as affiliate links.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* FTC Compliance */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-fitness bg-opacity-10 rounded-lg flex items-center justify-center">
                <Info className="text-fitness" size={24} />
              </div>
              <h2 className="text-h2 font-sans font-semibold">FTC Compliance</h2>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <p className="text-foreground leading-relaxed mb-4">
                In accordance with FTC guidelines, Honest Selects clearly discloses all
                material connections with brands, retailers, and affiliate networks.
              </p>
              <p className="text-foreground leading-relaxed">
                <strong>What counts as a material connection:</strong> Any financial,
                employment, personal, or family relationship that could affect how you
                evaluate our recommendations. This includes affiliate commissions, free
                products, sponsored content, or direct payments from brands.
              </p>
            </div>
          </section>

          {/* Specific Relationships */}
          <section className="mb-12">
            <h2 className="text-h2 font-sans font-semibold mb-4">
              Current Affiliate Relationships
            </h2>
            <div className="bg-background p-6 rounded-lg">
              <p className="text-foreground leading-relaxed mb-4">
                As of our last update, Honest Selects participates in the following
                affiliate programs:
              </p>
              <ul className="space-y-2 text-foreground">
                <li>
                  • <strong>Amazon Associates:</strong> We earn commissions on purchases
                  made through Amazon.com links
                </li>
                <li>
                  • <strong>Best Buy Affiliate Program:</strong> We earn commissions on
                  purchases made through BestBuy.com links
                </li>
                <li>
                  • <strong>Other retail partners:</strong> We may participate in
                  additional affiliate programs from time to time
                </li>
              </ul>
              <p className="text-foreground leading-relaxed mt-4">
                We do not currently accept direct payments from brands for product
                reviews or sponsored content. If this changes, we will clearly label
                sponsored content and update this disclosure.
              </p>
            </div>
          </section>

          {/* Your Support */}
          <section className="mb-12">
            <h2 className="text-h2 font-sans font-semibold mb-4">
              How You Can Support Us
            </h2>
            <div className="bg-background p-6 rounded-lg">
              <p className="text-foreground leading-relaxed mb-4">
                By using our affiliate links when making purchases, you help support our
                testing and content creation at no extra cost to you. Your support
                allows us to:
              </p>
              <ul className="space-y-2 text-foreground">
                <li>• Purchase more products for testing at retail price</li>
                <li>• Invest in calibrated testing equipment</li>
                <li>• Conduct long-term durability testing</li>
                <li>• Maintain editorial independence</li>
                <li>• Create free, unbiased content for all readers</li>
              </ul>
            </div>
          </section>

          {/* Questions */}
          <section className="bg-fitness bg-opacity-10 border-l-4 border-fitness p-8 rounded-r-lg">
            <h2 className="text-h2 font-sans font-semibold mb-3">Questions?</h2>
            <p className="text-foreground leading-relaxed mb-4">
              If you have questions about our affiliate relationships, testing
              independence, or revenue model, please don't hesitate to reach out.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-fitness text-white font-sans font-semibold rounded-lg hover:bg-opacity-90 transition-all"
            >
              Contact Us
            </Link>
          </section>

          {/* Last Updated */}
          <div className="mt-8 pt-8 border-t border-rule">
            <p className="text-sm text-foreground opacity-60 mb-4">
              Last updated: January 15, 2024
            </p>
            <Link
              to="/"
              className="text-fitness font-sans font-semibold link-underline"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
