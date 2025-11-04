import { Link } from 'react-router-dom'
import { Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { formatDate } from '@/lib/utils'
import Pill from './Pill'
import { Category } from '@/lib/types'

interface CardProps {
  title: string
  excerpt: string
  image?: string
  category: Category
  publishedDate?: string
  readTime?: number
  href: string
  className?: string
}

export default function Card({
  title,
  excerpt,
  image,
  category,
  publishedDate,
  readTime,
  href,
  className,
}: CardProps) {
  return (
    <Link
      to={href}
      className={cn(
        'group block bg-white rounded-lg overflow-hidden shadow-card card-hover',
        className
      )}
    >
      {image && (
        <div className="aspect-[3/2] overflow-hidden bg-rule">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-5 space-y-3">
        <Pill category={category} />
        <h3 className="text-xl font-sans font-semibold text-foreground group-hover:text-fitness transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-foreground opacity-80 line-clamp-2">{excerpt}</p>
        {(publishedDate || readTime) && (
          <div className="flex items-center gap-4 text-sm text-foreground opacity-60">
            {publishedDate && <span>{formatDate(publishedDate)}</span>}
            {readTime && (
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {readTime} min read
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  )
}
