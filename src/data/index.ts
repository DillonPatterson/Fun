import { Review, Comparison, BlogPost } from '@/lib/types'

// Import reviews
import bestQuietMassageGuns from './reviews/best-quiet-massage-guns.json'
import ecoDishRack from './reviews/eco-dish-rack-review.json'
import headphonesUnder500 from './reviews/headphones-under-500-first-look.json'

// Import comparisons
import theragunVsHyperice from './comparisons/theragun-vs-hyperice.json'

// Import blogs
import massageGunGuide from './blogs/massage-gun-buying-guide.json'
import mattressCerts from './blogs/mattress-certifications-explained.json'

export const reviews: Review[] = [
  bestQuietMassageGuns as Review,
  ecoDishRack as Review,
  headphonesUnder500 as Review,
]

export const comparisons: Comparison[] = [
  theragunVsHyperice as Comparison,
]

export const blogPosts: BlogPost[] = [
  massageGunGuide as BlogPost,
  mattressCerts as BlogPost,
]

// Helper functions
export function getReviewBySlug(slug: string): Review | undefined {
  return reviews.find((review) => review.slug === slug)
}

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((comparison) => comparison.slug === slug)
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getReviewsByCategory(category: string): Review[] {
  return reviews.filter((review) => review.category === category)
}

export function getEditorsChoiceReviews(): Review[] {
  return reviews.filter((review) => review.editorsChoice)
}

export function getLatestReviews(limit = 6): Review[] {
  return [...reviews]
    .sort((a, b) => {
      const dateA = new Date(a.publishedDate || 0).getTime()
      const dateB = new Date(b.publishedDate || 0).getTime()
      return dateB - dateA
    })
    .slice(0, limit)
}

export function getLatestBlogPosts(limit = 6): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => {
      const dateA = new Date(a.publishedDate).getTime()
      const dateB = new Date(b.publishedDate).getTime()
      return dateB - dateA
    })
    .slice(0, limit)
}
