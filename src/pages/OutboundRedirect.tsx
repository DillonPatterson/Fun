import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ExternalLink, AlertCircle } from 'lucide-react'
import { getOutboundUrl } from '@/lib/outbound'
import { trackAffiliateClick } from '@/lib/analytics'

export default function OutboundRedirect() {
  const { slug } = useParams<{ slug: string }>()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!slug) {
      setError('No redirect slug provided')
      return
    }

    const targetUrl = getOutboundUrl(slug)

    if (!targetUrl) {
      setError(`Invalid redirect link: ${slug}`)
      return
    }

    // Track the affiliate click
    trackAffiliateClick('unknown', slug)

    // Redirect after a brief delay to ensure tracking fires
    const timer = setTimeout(() => {
      window.location.href = targetUrl
    }, 500)

    return () => clearTimeout(timer)
  }, [slug])

  if (error) {
    return (
      <div className="min-h-[60vh] bg-background flex items-center justify-center py-16">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <AlertCircle size={64} className="text-red-500 mx-auto mb-4" />
              <h1 className="text-h1 font-sans font-bold text-foreground mb-4">
                Invalid Link
              </h1>
              <p className="text-xl text-foreground opacity-80 mb-6">
                {error}
              </p>
              <p className="text-foreground opacity-60 mb-8">
                This redirect link may be outdated or incorrect. Please return to our
                site and try again.
              </p>
            </div>

            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-fitness text-white font-sans font-semibold rounded-lg hover:bg-opacity-90 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[60vh] bg-background flex items-center justify-center py-16">
      <div className="container-custom text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <ExternalLink size={64} className="text-fitness mx-auto mb-4 animate-pulse" />
            <h1 className="text-h1 font-sans font-bold text-foreground mb-4">
              Redirecting...
            </h1>
            <p className="text-xl text-foreground opacity-80 mb-6">
              Taking you to the retailer's site.
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-fitness rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-fitness rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-fitness rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>

          <p className="text-sm text-foreground opacity-60 mb-4">
            If you're not redirected automatically,{' '}
            <a
              href={slug ? getOutboundUrl(slug) || '#' : '#'}
              className="text-fitness link-underline"
            >
              click here
            </a>
            .
          </p>

          <div className="mt-8 pt-8 border-t border-rule">
            <p className="text-sm text-foreground opacity-60">
              Note: We may earn a commission from purchases made through our links at
              no extra cost to you.{' '}
              <Link to="/disclosure" className="text-fitness link-underline">
                Learn more
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
