# Honest Selects - Real Reviews. Clear Picks.

A modern review and blog site built with React, TypeScript, Tailwind CSS, and Vite. Honest Selects provides tested, unbiased reviews of fitness gear, eco-friendly home products, and quality tech.

## Features

- **Comprehensive Review System** - Product reviews with honest scores, pros/cons, detailed specs, and testing notes
- **Comparison Tool** - Side-by-side product comparisons with winner recommendations
- **Blog Platform** - Buying guides and explainer articles
- **Category Hubs** - Dedicated pages for Fitness, Eco-Home, and Tech
- **SEO Optimized** - JSON-LD schema markup, meta tags, sitemap, and robots.txt
- **Responsive Design** - Mobile-first design with Tailwind CSS
- **Performance** - Optimized builds with code splitting and lazy loading

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3
- **Routing**: React Router v7
- **SEO**: React Helmet Async with JSON-LD schema
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/DillonPatterson/honest-picks-co.git
cd honest-picks-co

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
honest-picks-co/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page components
│   ├── data/             # JSON data files
│   ├── lib/              # Utilities and types
│   ├── seo/              # SEO components
│   ├── App.tsx           # Main app with routing
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
└── dist/                 # Production build output
```

## Adding New Content

### Adding a Review

1. Create a new JSON file in `src/data/reviews/` following the structure in existing files
2. Import the review in `src/data/index.ts`
3. Place images in `public/img/reviews/product-name/`
4. Add outbound affiliate links in `src/lib/outbound.ts`
5. Set `editorsChoice: true` to feature on homepage

### Adding a Comparison

1. Create a JSON file in `src/data/comparisons/`
2. Import in `src/data/index.ts`
3. Table format: first row is headers, subsequent rows are data

### Adding a Blog Post

1. Create a JSON file in `src/data/blogs/` with markdown content
2. Import in `src/data/index.ts`
3. Content supports basic markdown: headings, paragraphs, lists

## Deployment

### GitHub Pages

This project is configured to deploy automatically to GitHub Pages:

1. Enable GitHub Pages in repository settings (Source: GitHub Actions)
2. Push to the `main` branch
3. GitHub Actions will build and deploy automatically
4. Your site will be available at `https://dillonpatterson.github.io/honest-picks-co/`

### Custom Domain (Optional)

1. Add your domain to `public/CNAME`
2. Update `base` in `vite.config.ts` to `/`
3. Update siteUrl in `src/seo/SEOHelmet.tsx`
4. Configure DNS with CNAME record pointing to GitHub Pages

## Configuration

### Design Tokens

Colors, fonts, and spacing are configured in `tailwind.config.js`

### Analytics

Add your GA4 Measurement ID in `src/main.tsx`:

```typescript
import { initGA4 } from './lib/analytics'
initGA4('G-XXXXXXXXXX')
```

## Performance Targets

- Lighthouse Performance: ≥90
- Lighthouse Accessibility: ≥95
- Lighthouse Best Practices: ≥95
- Lighthouse SEO: ≥95

## License

ISC
