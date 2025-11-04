import { Link } from 'react-router-dom'
import { useState, FormEvent } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle email subscription
    console.log('Email subscription:', email)
    setEmail('')
  }

  return (
    <footer className="bg-charcoal text-white mt-16">
      <div className="container-custom py-12">
        {/* Email Capture */}
        <div className="max-w-md mx-auto text-center mb-12">
          <h3 className="text-h3 mb-3">Stay Updated</h3>
          <p className="text-white opacity-80 mb-4">
            Get our latest reviews and buying guides in your inbox
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:border-opacity-40"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-fitness text-white font-sans font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Sitemap */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-sans font-semibold mb-3">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/fitness" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  Fitness
                </Link>
              </li>
              <li>
                <Link to="/eco-home" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  Eco Home
                </Link>
              </li>
              <li>
                <Link to="/tech" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  Tech
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-semibold mb-3">Content</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/how-we-test" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  How We Test
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/disclosure" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  Disclosure
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white border-opacity-20 text-center text-white opacity-60 text-sm">
          <p>&copy; {new Date().getFullYear()} Honest Selects. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
