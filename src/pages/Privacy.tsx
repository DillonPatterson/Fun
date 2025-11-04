import { Link } from 'react-router-dom'
import { Lock, Eye, Database, Shield } from 'lucide-react'
import SEOHelmet from '@/seo/SEOHelmet'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function Privacy() {
  return (
    <>
      <SEOHelmet
        title="Privacy Policy"
        description="Honest Selects privacy policy. Learn how we collect, use, and protect your personal information."
        canonical="/privacy"
      />

      <div className="bg-background py-8">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy' }]} />
        </div>
      </div>

      <article className="bg-white py-12">
        <div className="container-custom max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-h1 font-sans font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-foreground opacity-80 leading-relaxed">
              Your privacy matters to us. This policy explains what information we
              collect, how we use it, and your rights regarding your data.
            </p>
          </header>

          {/* Information We Collect */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-fitness bg-opacity-10 rounded-lg flex items-center justify-center">
                <Database className="text-fitness" size={24} />
              </div>
              <h2 className="text-h2 font-sans font-semibold">
                Information We Collect
              </h2>
            </div>
            <div className="bg-background p-6 rounded-lg space-y-4">
              <div>
                <h3 className="font-sans font-semibold text-foreground mb-2">
                  Information You Provide
                </h3>
                <p className="text-foreground leading-relaxed mb-2">
                  When you contact us through our contact form, we collect:
                </p>
                <ul className="list-disc list-inside space-y-1 text-foreground">
                  <li>Your name and email address</li>
                  <li>Subject and message content</li>
                  <li>Any additional information you choose to share</li>
                </ul>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-foreground mb-2">
                  Information Collected Automatically
                </h3>
                <p className="text-foreground leading-relaxed mb-2">
                  When you visit our site, we automatically collect:
                </p>
                <ul className="list-disc list-inside space-y-1 text-foreground">
                  <li>Browser type and version</li>
                  <li>Device type and operating system</li>
                  <li>IP address (anonymized)</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Referring website</li>
                  <li>Click and navigation patterns</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-fitness bg-opacity-10 rounded-lg flex items-center justify-center">
                <Eye className="text-fitness" size={24} />
              </div>
              <h2 className="text-h2 font-sans font-semibold">
                How We Use Your Information
              </h2>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <p className="text-foreground leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-fitness font-bold mt-1">•</span>
                  <span className="text-foreground leading-relaxed">
                    <strong>Respond to inquiries:</strong> To answer your questions and
                    provide customer support
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fitness font-bold mt-1">•</span>
                  <span className="text-foreground leading-relaxed">
                    <strong>Improve our site:</strong> To understand how visitors use
                    our site and make improvements
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fitness font-bold mt-1">•</span>
                  <span className="text-foreground leading-relaxed">
                    <strong>Analytics:</strong> To measure traffic, understand user
                    behavior, and optimize content
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fitness font-bold mt-1">•</span>
                  <span className="text-foreground leading-relaxed">
                    <strong>Security:</strong> To detect and prevent fraud, abuse, and
                    security issues
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Cookies & Tracking */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-fitness bg-opacity-10 rounded-lg flex items-center justify-center">
                <Shield className="text-fitness" size={24} />
              </div>
              <h2 className="text-h2 font-sans font-semibold">
                Cookies & Tracking Technologies
              </h2>
            </div>
            <div className="bg-background p-6 rounded-lg space-y-4">
              <div>
                <h3 className="font-sans font-semibold text-foreground mb-2">
                  What Are Cookies?
                </h3>
                <p className="text-foreground leading-relaxed">
                  Cookies are small text files stored on your device when you visit our
                  site. They help us remember your preferences and understand how you
                  use our site.
                </p>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-foreground mb-2">
                  Cookies We Use
                </h3>
                <ul className="space-y-2 text-foreground">
                  <li>
                    • <strong>Essential cookies:</strong> Required for site
                    functionality
                  </li>
                  <li>
                    • <strong>Analytics cookies:</strong> Help us understand site usage
                    (Google Analytics)
                  </li>
                  <li>
                    • <strong>Affiliate cookies:</strong> Track purchases made through
                    our affiliate links
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-foreground mb-2">
                  Managing Cookies
                </h3>
                <p className="text-foreground leading-relaxed">
                  You can control cookies through your browser settings. Note that
                  disabling cookies may limit site functionality.
                </p>
              </div>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-h2 font-sans font-semibold mb-4">
              Third-Party Services
            </h2>
            <div className="bg-background p-6 rounded-lg">
              <p className="text-foreground leading-relaxed mb-4">
                We use the following third-party services that may collect information:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-fitness font-bold mt-1">•</span>
                  <span className="text-foreground leading-relaxed">
                    <strong>Google Analytics:</strong> For site analytics and traffic
                    measurement. View{' '}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-fitness link-underline"
                    >
                      Google's Privacy Policy
                    </a>
                    .
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fitness font-bold mt-1">•</span>
                  <span className="text-foreground leading-relaxed">
                    <strong>Affiliate Networks:</strong> Amazon Associates, Best Buy,
                    and other retailers may use cookies to track purchases.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fitness font-bold mt-1">•</span>
                  <span className="text-foreground leading-relaxed">
                    <strong>Hosting Provider:</strong> Our site is hosted on secure
                    servers that may collect server logs.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Data Protection */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-fitness bg-opacity-10 rounded-lg flex items-center justify-center">
                <Lock className="text-fitness" size={24} />
              </div>
              <h2 className="text-h2 font-sans font-semibold">
                How We Protect Your Data
              </h2>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <p className="text-foreground leading-relaxed mb-4">
                We take reasonable measures to protect your personal information:
              </p>
              <ul className="space-y-2 text-foreground">
                <li>• SSL/TLS encryption for all data transmission</li>
                <li>• Secure hosting with regular security updates</li>
                <li>• Limited access to personal information</li>
                <li>• Regular security audits and monitoring</li>
                <li>
                  • IP address anonymization in analytics (last octet removed)
                </li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-h2 font-sans font-semibold mb-4">Your Rights</h2>
            <div className="bg-background p-6 rounded-lg">
              <p className="text-foreground leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="space-y-2 text-foreground">
                <li>
                  • <strong>Access:</strong> Request a copy of the data we hold about
                  you
                </li>
                <li>
                  • <strong>Correction:</strong> Request correction of inaccurate data
                </li>
                <li>
                  • <strong>Deletion:</strong> Request deletion of your personal data
                </li>
                <li>
                  • <strong>Opt-out:</strong> Opt out of analytics tracking
                </li>
                <li>
                  • <strong>Portability:</strong> Request your data in a portable format
                </li>
              </ul>
              <p className="text-foreground leading-relaxed mt-4">
                To exercise these rights, please{' '}
                <Link to="/contact" className="text-fitness link-underline">
                  contact us
                </Link>
                .
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-h2 font-sans font-semibold mb-4">Data Retention</h2>
            <div className="bg-background p-6 rounded-lg">
              <p className="text-foreground leading-relaxed mb-4">
                We retain your personal information only as long as necessary:
              </p>
              <ul className="space-y-2 text-foreground">
                <li>
                  • <strong>Contact form submissions:</strong> 2 years after last
                  contact
                </li>
                <li>
                  • <strong>Analytics data:</strong> 26 months (Google Analytics
                  default)
                </li>
                <li>
                  • <strong>Server logs:</strong> 90 days
                </li>
              </ul>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-h2 font-sans font-semibold mb-4">
              Children's Privacy
            </h2>
            <div className="bg-background p-6 rounded-lg">
              <p className="text-foreground leading-relaxed">
                Our site is not directed to children under 13. We do not knowingly
                collect personal information from children under 13. If you believe we
                have collected information from a child under 13, please contact us
                immediately.
              </p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section className="mb-12">
            <h2 className="text-h2 font-sans font-semibold mb-4">
              Changes to This Policy
            </h2>
            <div className="bg-background p-6 rounded-lg">
              <p className="text-foreground leading-relaxed">
                We may update this privacy policy from time to time. We will notify you
                of significant changes by posting a notice on our site. The "Last
                Updated" date at the bottom reflects the most recent changes.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-fitness bg-opacity-10 border-l-4 border-fitness p-8 rounded-r-lg">
            <h2 className="text-h2 font-sans font-semibold mb-3">Questions?</h2>
            <p className="text-foreground leading-relaxed mb-4">
              If you have questions about this privacy policy or how we handle your
              data, please contact us.
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
