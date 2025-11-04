// GA4 Analytics stub
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export function trackEvent(
  eventName: string,
  eventParams?: Record<string, unknown>
): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams)
  }
}

export function trackAffiliateClick(retailer: string, productSlug: string): void {
  trackEvent('affiliate_click', {
    retailer,
    product_slug: productSlug,
  })
}

export function initGA4(measurementId: string): void {
  if (typeof window === 'undefined') return

  // Create script tag for GA4
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || []
  function gtag(...args: unknown[]) {
    window.dataLayer!.push(args)
  }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', measurementId)
}
