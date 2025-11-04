import { trackAffiliateClick } from './analytics'

// Outbound link mapping
const outboundLinks: Record<string, string> = {
  'bb-quiet-mg': 'https://www.bestbuy.com/example',
  'az-quiet-mg': 'https://www.amazon.com/example',
  // Add more outbound links here
}

export function getOutboundUrl(slug: string): string | null {
  return outboundLinks[slug] || null
}

export function handleOutboundClick(retailer: string, productSlug: string): void {
  trackAffiliateClick(retailer, productSlug)
}

export function addOutboundLink(slug: string, url: string): void {
  outboundLinks[slug] = url
}
