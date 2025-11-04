import { Link } from 'react-router-dom'
import { Award, Users, Target, CheckCircle } from 'lucide-react'
import SEOHelmet from '@/seo/SEOHelmet'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function About() {
  return (
    <>
      <SEOHelmet
        title="About Us"
        description="Honest Selects: Real testing, clear recommendations. Learn about our team, methodology, and commitment to editorial independence."
        canonical="/about"
      />

      <div className="bg-background py-8">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />
        </div>
      </div>

      <article className="bg-white py-12">
        <div className="container-custom max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-h1 font-sans font-bold mb-4">About Honest Selects</h1>
            <p className="text-xl text-foreground opacity-80 leading-relaxed">
              We test products and tell you what matters. No fluff, just facts backed by
              real measurements and transparent methodology.
            </p>
          </header>

          {/* Mission */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-fitness bg-opacity-10 rounded-lg flex items-center justify-center">
                <Target className="text-fitness" size={24} />
              </div>
              <h2 className="text-h2 font-sans font-semibold">Our Mission</h2>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <p className="text-foreground leading-relaxed mb-4">
                Honest Selects was founded on a simple idea: product reviews should be
                based on real testing, not marketing hype. We measure what matters—noise
                levels, durability, build quality—and present our findings clearly.
              </p>
              <p className="text-foreground leading-relaxed">
                We focus on three categories where testing makes a real difference:
                quiet fitness equipment for apartment living, sustainable home products
                that last, and quality tech under $500.
              </p>
            </div>
          </section>

          {/* E-E-A-T Framework */}
          <section className="mb-12">
            <h2 className="text-h2 font-sans font-semibold mb-6">
              Our Commitment to Quality
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Experience */}
              <div className="bg-background p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="text-fitness" size={24} />
                  <h3 className="font-sans font-semibold text-foreground">
                    Experience
                  </h3>
                </div>
                <p className="text-foreground leading-relaxed">
                  Our team has tested hundreds of products across fitness, home, and
                  tech categories over the past 5+ years. We document every test,
                  maintain testing logs, and update reviews when products change.
                </p>
              </div>

              {/* Expertise */}
              <div className="bg-background p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="text-fitness" size={24} />
                  <h3 className="font-sans font-semibold text-foreground">Expertise</h3>
                </div>
                <p className="text-foreground leading-relaxed">
                  Our reviewers include former lab technicians, certified personal
                  trainers (NASM, ACE), and audiophiles with 10+ years of experience.
                  We invest in calibrated testing equipment and ongoing training.
                </p>
              </div>

              {/* Authoritativeness */}
              <div className="bg-background p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="text-fitness" size={24} />
                  <h3 className="font-sans font-semibold text-foreground">
                    Authoritativeness
                  </h3>
                </div>
                <p className="text-foreground leading-relaxed">
                  We publish our testing methodology, disclose all equipment used, and
                  provide measurement data. Our reviews are cited by fitness
                  professionals and featured in consumer guides.
                </p>
              </div>

              {/* Trustworthiness */}
              <div className="bg-background p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="text-fitness" size={24} />
                  <h3 className="font-sans font-semibold text-foreground">
                    Trustworthiness
                  </h3>
                </div>
                <p className="text-foreground leading-relaxed">
                  We maintain strict editorial independence, purchase products at
                  retail, and clearly disclose affiliate relationships. See our{' '}
                  <Link to="/disclosure" className="link-underline text-fitness">
                    full disclosure policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Testing Standards */}
          <section className="mb-12">
            <h2 className="text-h2 font-sans font-semibold mb-4">
              Our Testing Standards
            </h2>
            <div className="bg-background p-6 rounded-lg">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-fitness flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">
                    <strong>Buy at retail:</strong> We purchase products at full retail
                    price or decline samples with editorial restrictions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-fitness flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">
                    <strong>Real testing:</strong> Minimum 30 days of real-world use
                    plus calibrated measurements
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-fitness flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">
                    <strong>Transparent methods:</strong> All testing procedures are
                    documented and repeatable
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-fitness flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">
                    <strong>Regular updates:</strong> Reviews are updated when products
                    change or new testing reveals issues
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-fitness flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground">
                    <strong>Clear disclosure:</strong> All affiliate relationships and
                    potential conflicts are disclosed
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Team */}
          <section className="mb-12">
            <h2 className="text-h2 font-sans font-semibold mb-4">Our Team</h2>
            <div className="bg-background p-6 rounded-lg">
              <p className="text-foreground leading-relaxed mb-4">
                Honest Selects is run by a small team of product testers and writers
                who are passionate about helping people make informed purchase
                decisions. Our reviewers include:
              </p>
              <ul className="space-y-2 text-foreground">
                <li>
                  • Former electronics lab technician (5 years at consumer testing lab)
                </li>
                <li>
                  • NASM-certified personal trainer specializing in home fitness (8
                  years)
                </li>
                <li>
                  • Audiophile and audio engineer with 12+ years of headphone testing
                </li>
                <li>
                  • Sustainability consultant focused on home products and materials
                </li>
              </ul>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="bg-fitness bg-opacity-10 border-l-4 border-fitness p-8 rounded-r-lg">
            <h2 className="text-h2 font-sans font-semibold mb-3">Get in Touch</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Have questions about our testing methodology? Want to suggest a product
              for review? We'd love to hear from you.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-fitness text-white font-sans font-semibold rounded-lg hover:bg-opacity-90 transition-all"
            >
              Contact Us
            </Link>
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
