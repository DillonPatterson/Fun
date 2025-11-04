import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Fitness from './pages/Fitness'
import EcoHome from './pages/EcoHome'
import Tech from './pages/Tech'
import ReviewDetail from './pages/ReviewDetail'
import ComparisonPage from './pages/ComparisonPage'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import HowWeTest from './pages/HowWeTest'
import About from './pages/About'
import Contact from './pages/Contact'
import Disclosure from './pages/Disclosure'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'
import OutboundRedirect from './pages/OutboundRedirect'

function App() {
  return (
    <div className="min-h-screen flex flex-col grid-background">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/eco-home" element={<EcoHome />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/reviews/:slug" element={<ReviewDetail />} />
          <Route path="/compare/:slug" element={<ComparisonPage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/how-we-test" element={<HowWeTest />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/disclosure" element={<Disclosure />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/out/:slug" element={<OutboundRedirect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
