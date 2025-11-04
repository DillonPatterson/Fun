import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

interface Breadcrumb {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: Breadcrumb[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-sm font-sans" aria-label="Breadcrumb">
      <Link to="/" className="text-foreground opacity-60 hover:opacity-100 transition-opacity">
        Home
      </Link>
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center gap-2">
          <ChevronRight size={16} className="text-foreground opacity-40" />
          {index === items.length - 1 ? (
            <span className="text-foreground font-semibold">{item.label}</span>
          ) : (
            <Link
              to={item.href}
              className="text-foreground opacity-60 hover:opacity-100 transition-opacity"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
