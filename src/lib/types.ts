export interface Review {
  slug: string
  title: string
  category: 'fitness' | 'eco-home' | 'tech'
  honestScore: number
  verdict: string
  priceRange: string
  retailers: Array<{
    name: string
    url: string
  }>
  subScores: {
    performance: number
    noise: number
    battery: number
    build: number
    value: number
  }
  pros: string[]
  cons: string[]
  specs: Record<string, string>
  testingNotes: string
  alternatives: Array<{
    title: string
    slug: string
  }>
  faq: Array<{
    q: string
    a: string
  }>
  images: string[]
  editorsChoice: boolean
  publishedDate?: string
  updatedDate?: string
}

export interface Comparison {
  slug: string
  a: {
    title: string
    slug: string
  }
  b: {
    title: string
    slug: string
  }
  winner: string
  whyWinner: string
  whoShouldBuyWhich: Array<{
    audience: string
    pick: string
  }>
  fiveYearCost: Record<string, number>
  table: string[][]
  publishedDate?: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  category: 'guide' | 'explainer' | 'news'
  publishedDate: string
  updatedDate?: string
  readTime: number
  image?: string
}

export type Category = 'fitness' | 'eco-home' | 'tech'
