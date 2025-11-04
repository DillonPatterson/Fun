import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Retailer {
  name: string
  url: string
}

interface BuyButtonsProps {
  retailers: Retailer[]
  productSlug: string
  className?: string
}

export default function BuyButtons({ retailers, productSlug, className }: BuyButtonsProps) {
  const primaryRetailer = retailers[0]
  const secondaryRetailers = retailers.slice(1)

  const handleClick = (retailer: string) => {
    // Track affiliate click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'affiliate_click', {
        retailer,
        product_slug: productSlug,
      })
    }
  }

  return (
    <div className={cn('flex flex-col sm:flex-row gap-3', className)}>
      {primaryRetailer && (
        <a
          href={primaryRetailer.url}
          onClick={() => handleClick(primaryRetailer.name)}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-fitness text-white font-sans font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <span>See best price</span>
          <ExternalLink size={18} />
        </a>
      )}
      {secondaryRetailers.map((retailer) => (
        <a
          key={retailer.name}
          href={retailer.url}
          onClick={() => handleClick(retailer.name)}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-foreground font-sans font-semibold rounded-lg border-2 border-rule hover:border-foreground transition-all duration-300"
        >
          <span>View at {retailer.name}</span>
          <ExternalLink size={18} />
        </a>
      ))}
    </div>
  )
}
