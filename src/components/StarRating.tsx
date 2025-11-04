import { Star, StarHalf } from 'lucide-react'

interface StarRatingProps {
  rating: number
  maxRating?: number
  size?: number
  showNumeric?: boolean
}

export default function StarRating({
  rating,
  maxRating = 5,
  size = 20,
  showNumeric = true,
}: StarRatingProps) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <Star
            key={`full-${i}`}
            size={size}
            className="fill-fitness text-fitness"
          />
        ))}
        {hasHalfStar && (
          <StarHalf size={size} className="fill-fitness text-fitness" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star
            key={`empty-${i}`}
            size={size}
            className="text-rule"
          />
        ))}
      </div>
      {showNumeric && (
        <span className="text-sm font-sans font-semibold text-foreground ml-1">
          {rating.toFixed(1)}/{maxRating}
        </span>
      )}
    </div>
  )
}
