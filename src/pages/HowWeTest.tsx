import { Link } from 'react-router-dom'
import { Activity, Volume2, Shield, Droplet, DollarSign } from 'lucide-react'
import SEOHelmet from '@/seo/SEOHelmet'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function HowWeTest() {
  return (
    <>
      <SEOHelmet
        title="How We Test"
        description="Our rigorous testing methodology for product reviews. Learn about our calibrated equipment, testing protocols, and transparent standards."
        canonical="/how-we-test"
      />

      <div className="bg-background py-8">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'How We Test', href: '/how-we-test' }]} />
        </div>
      </div>

      <article className="bg-white py-12">
        <div className="container-custom max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-h1 font-sans font-bold mb-4">How We Test</h1>
            <p className="text-xl text-foreground opacity-80 leading-relaxed">
              We use calibrated equipment, documented procedures, and real-world testing
              to verify manufacturer claims and measure what actually matters to you.
            </p>
          </header>

          {/* Testing Methodology Sections */}
          <div className="space-y-12">
            {/* Noise Testing */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-fitness bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Volume2 className="text-fitness" size={24} />
                </div>
                <h2 className="text-h2 font-sans font-semibold">Noise Testing</h2>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-sans font-semibold text-foreground mb-3">
                  Equipment
                </h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  We use a calibrated BAFX Products Type 2 sound level meter, verified
                  annually against NIST standards. Measurements are taken in a quiet
                  room with ambient noise below 30 dB.
                </p>
                <h3 className="font-sans font-semibold text-foreground mb-3">
                  Protocol
                </h3>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>
                    Measure at 1 meter distance at ear height (for fitness equipment)
                  </li>
                  <li>Test at minimum, medium, and maximum settings</li>
                  <li>Record peak and average decibels over 30-second intervals</li>
                  <li>Test under load conditions (not just idle)</li>
                  <li>Document ambient room noise as baseline</li>
                </ul>
              </div>
            </section>

            {/* Durability Testing */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-fitness bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Shield className="text-fitness" size={24} />
                </div>
                <h2 className="text-h2 font-sans font-semibold">Durability Testing</h2>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-sans font-semibold text-foreground mb-3">
                  Long-Term Testing
                </h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Products are tested over a minimum of 30 days with regular use
                  patterns that simulate 6-12 months of typical consumer usage.
                </p>
                <h3 className="font-sans font-semibold text-foreground mb-3">
                  Build Quality Assessment
                </h3>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>Inspect materials and construction quality</li>
                  <li>Test moving parts for wear and play</li>
                  <li>Evaluate fastener quality and potential failure points</li>
                  <li>Assess repairability and part availability</li>
                  <li>Document any defects or quality issues</li>
                </ul>
              </div>
            </section>

            {/* Performance Testing */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-fitness bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Activity className="text-fitness" size={24} />
                </div>
                <h2 className="text-h2 font-sans font-semibold">
                  Performance Testing
                </h2>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-sans font-semibold text-foreground mb-3">
                  Category-Specific Metrics
                </h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  Each product category has specific performance metrics we test:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>
                    <strong>Massage Guns:</strong> Stall force (lbs), amplitude (mm),
                    battery life under load
                  </li>
                  <li>
                    <strong>Headphones:</strong> Frequency response (20Hz-20kHz), THD,
                    isolation (dB)
                  </li>
                  <li>
                    <strong>Kitchen Products:</strong> Material safety, cleaning ease,
                    longevity
                  </li>
                </ul>
              </div>
            </section>

            {/* Mold & Safety Testing */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-eco bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Droplet className="text-eco" size={24} />
                </div>
                <h2 className="text-h2 font-sans font-semibold">
                  Mold & Safety Testing
                </h2>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-sans font-semibold text-foreground mb-3">
                  For Kitchen & Home Products
                </h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  We test products prone to moisture exposure for mold resistance and
                  material safety.
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>30-day moisture exposure test in typical use conditions</li>
                  <li>Visual inspection for mold, mildew, or material degradation</li>
                  <li>Verify material safety certifications (FDA, LFGB, etc.)</li>
                  <li>Test cleaning protocols and material durability</li>
                  <li>Document drying time and maintenance requirements</li>
                </ul>
              </div>
            </section>

            {/* Cost Analysis */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-tech bg-opacity-10 rounded-lg flex items-center justify-center">
                  <DollarSign className="text-tech" size={24} />
                </div>
                <h2 className="text-h2 font-sans font-semibold">Cost Analysis</h2>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-sans font-semibold text-foreground mb-3">
                  Total Cost of Ownership
                </h3>
                <p className="text-foreground mb-4 leading-relaxed">
                  We calculate the true 5-year cost including purchase price, expected
                  maintenance, replacement parts, and energy consumption where
                  applicable.
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>Initial purchase price from major retailers</li>
                  <li>Replacement parts costs and availability</li>
                  <li>Expected lifespan based on build quality</li>
                  <li>Energy consumption (for powered devices)</li>
                  <li>Maintenance requirements and costs</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Our Standards */}
          <section className="mt-16 bg-charcoal text-white p-8 rounded-lg">
            <h2 className="text-h2 font-sans font-semibold mb-4">Our Standards</h2>
            <div className="space-y-4">
              <p className="leading-relaxed">
                <strong>Independence:</strong> We purchase all products at retail price
                or decline review samples that come with restrictions.
              </p>
              <p className="leading-relaxed">
                <strong>Transparency:</strong> All testing procedures are documented
                and repeatable. We disclose equipment used and testing conditions.
              </p>
              <p className="leading-relaxed">
                <strong>Expertise:</strong> Our team includes former lab technicians,
                certified personal trainers, and audiophiles with 10+ years of
                experience.
              </p>
              <p className="leading-relaxed">
                <strong>Updates:</strong> We retest products when significant updates
                are released and clearly date all reviews.
              </p>
            </div>
          </section>

          {/* Back Link */}
          <div className="pt-8 mt-8 border-t border-rule">
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
