import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Send } from 'lucide-react'
import SEOHelmet from '@/seo/SEOHelmet'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <SEOHelmet
        title="Contact Us"
        description="Get in touch with the Honest Selects team. Questions about our testing? Product suggestions? We'd love to hear from you."
        canonical="/contact"
      />

      <div className="bg-background py-8">
        <div className="container-custom">
          <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />
        </div>
      </div>

      <section className="bg-white py-12">
        <div className="container-custom max-w-3xl">
          {/* Header */}
          <header className="mb-12 text-center">
            <div className="w-16 h-16 bg-fitness bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-fitness" size={32} />
            </div>
            <h1 className="text-h1 font-sans font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-foreground opacity-80 leading-relaxed">
              Have questions about our testing? Want to suggest a product for review?
              We'd love to hear from you.
            </p>
          </header>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block font-sans font-semibold text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-rule rounded-lg focus:outline-none focus:ring-2 focus:ring-fitness text-foreground"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-sans font-semibold text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-rule rounded-lg focus:outline-none focus:ring-2 focus:ring-fitness text-foreground"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block font-sans font-semibold text-foreground mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-rule rounded-lg focus:outline-none focus:ring-2 focus:ring-fitness text-foreground"
                >
                  <option value="">Select a subject</option>
                  <option value="testing">Question about testing methodology</option>
                  <option value="suggestion">Product suggestion</option>
                  <option value="partnership">Partnership inquiry</option>
                  <option value="correction">Report an error</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block font-sans font-semibold text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-rule rounded-lg focus:outline-none focus:ring-2 focus:ring-fitness text-foreground resize-none"
                  placeholder="Tell us more..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-fitness text-white font-sans font-semibold rounded-lg hover:bg-opacity-90 transition-all"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          ) : (
            <div className="bg-fitness bg-opacity-10 border-l-4 border-fitness p-8 rounded-r-lg text-center">
              <h2 className="text-h2 font-sans font-semibold mb-3 text-fitness">
                Thanks for reaching out!
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                We've received your message and will get back to you within 2-3
                business days.
              </p>
              <Link
                to="/"
                className="inline-block px-6 py-3 bg-fitness text-white font-sans font-semibold rounded-lg hover:bg-opacity-90 transition-all"
              >
                Back to Home
              </Link>
            </div>
          )}

          {/* Additional Contact Info */}
          {!submitted && (
            <div className="mt-12 pt-8 border-t border-rule">
              <h2 className="text-h2 font-sans font-semibold mb-4 text-center">
                Other Ways to Connect
              </h2>
              <div className="bg-background p-6 rounded-lg text-center">
                <p className="text-foreground mb-2">
                  <strong>General inquiries:</strong>{' '}
                  <a
                    href="mailto:hello@honestselects.com"
                    className="text-fitness link-underline"
                  >
                    hello@honestselects.com
                  </a>
                </p>
                <p className="text-foreground mb-2">
                  <strong>Press & partnerships:</strong>{' '}
                  <a
                    href="mailto:press@honestselects.com"
                    className="text-fitness link-underline"
                  >
                    press@honestselects.com
                  </a>
                </p>
                <p className="text-foreground">
                  <strong>Report errors:</strong>{' '}
                  <a
                    href="mailto:corrections@honestselects.com"
                    className="text-fitness link-underline"
                  >
                    corrections@honestselects.com
                  </a>
                </p>
              </div>
            </div>
          )}

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
      </section>
    </>
  )
}
