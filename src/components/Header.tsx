import { Link } from 'react-router-dom'
import { Search, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Fitness', href: '/fitness' },
    { label: 'Eco Home', href: '/eco-home' },
    { label: 'Tech', href: '/tech' },
    { label: 'Blog', href: '/blog' },
    { label: 'How We Test', href: '/how-we-test' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-rule">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-sans font-bold text-foreground">
              Honest Selects
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-foreground font-sans font-medium hover:text-fitness transition-colors link-underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search Icon */}
          <button
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-lg hover:bg-rule transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-rule">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-foreground font-sans font-medium hover:text-fitness transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
