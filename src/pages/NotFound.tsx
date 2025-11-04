import { Link } from 'react-router-dom'
import { Home, Search } from 'lucide-react'
import SEOHelmet from '@/seo/SEOHelmet'

export default function NotFound() {
  return (
    <>
      <SEOHelmet
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist."
        canonical="/404"
      />

      <div className="min-h-[60vh] bg-background flex items-center justify-center py-16">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            {/* 404 Graphic */}
            <div className="mb-8">
              <h1 className="text-9xl font-sans font-bold text-fitness opacity-20">
                404
              </h1>
            </div>

            {/* Content */}
            <div className="mb-8">
              <h2 className="text-h1 font-sans font-bold text-foreground mb-4">
                Page Not Found
              </h2>
              <p className="text-xl text-foreground opacity-80 mb-6">
                Sorry, we couldn't find the page you're looking for. It may have been
                moved, deleted, or never existed.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-fitness text-white font-sans font-semibold rounded-lg hover:bg-opacity-90 transition-all"
              >
                <Home size={20} />
                Back to Home
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-fitness border-2 border-fitness font-sans font-semibold rounded-lg hover:bg-fitness hover:text-white transition-all"
              >
                <Search size={20} />
                Search Reviews
              </Link>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-8 border-t border-rule">
              <p className="text-foreground opacity-60 mb-4">Popular pages:</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/fitness"
                  className="text-fitness font-sans font-semibold link-underline"
                >
                  Fitness
                </Link>
                <Link
                  to="/eco-home"
                  className="text-eco font-sans font-semibold link-underline"
                >
                  Eco Home
                </Link>
                <Link
                  to="/tech"
                  className="text-tech font-sans font-semibold link-underline"
                >
                  Tech
                </Link>
                <Link
                  to="/blog"
                  className="text-foreground font-sans font-semibold link-underline"
                >
                  Blog
                </Link>
                <Link
                  to="/how-we-test"
                  className="text-foreground font-sans font-semibold link-underline"
                >
                  How We Test
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
