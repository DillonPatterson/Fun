import { Helmet } from 'react-helmet-async'

interface SEOHelmetProps {
  title: string
  description: string
  canonical?: string
  image?: string
  type?: 'website' | 'article'
  schema?: object
}

export default function SEOHelmet({
  title,
  description,
  canonical,
  image = '/og-image.jpg',
  type = 'website',
  schema,
}: SEOHelmetProps) {
  const siteTitle = 'Honest Selects'
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const siteUrl = 'https://dillonpatterson.github.io/honest-picks-co'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      {canonical && <meta property="og:url" content={`${siteUrl}${canonical}`} />}
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  )
}
