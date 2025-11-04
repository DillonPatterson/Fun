import { cn } from '@/lib/utils'
import { Category } from '@/lib/types'

interface PillProps {
  category: Category
  className?: string
}

const categoryColors: Record<Category, string> = {
  fitness: 'bg-fitness bg-opacity-10 text-fitness border-fitness',
  'eco-home': 'bg-eco bg-opacity-10 text-eco border-eco',
  tech: 'bg-tech bg-opacity-10 text-tech border-tech',
}

const categoryLabels: Record<Category, string> = {
  fitness: 'Fitness',
  'eco-home': 'Eco Home',
  tech: 'Tech',
}

export default function Pill({ category, className }: PillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-sans font-semibold border',
        categoryColors[category],
        className
      )}
    >
      {categoryLabels[category]}
    </span>
  )
}
