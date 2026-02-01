import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Banner() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path) => {
    return location.pathname === path
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-black shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Homepage image */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img 
              src="/model_tree_03_transparent_background.png" 
              alt="Model Tree" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-lg transition-colors ${
                isActive('/') 
                  ? 'font-bold text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/who-we-are" 
              className={`text-lg transition-colors ${
                isActive('/who-we-are') 
                  ? 'font-bold text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Who we are
            </Link>
            <Link 
              to="/what-we-do" 
              className={`text-lg transition-colors ${
                isActive('/what-we-do') 
                  ? 'font-bold text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              What we do
            </Link>
            <Link 
              to="/portfolio" 
              className={`text-lg transition-colors ${
                isActive('/portfolio') 
                  ? 'font-bold text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Portfolio
            </Link>
          </nav>

          {/* Mobile Hamburger Button - Right side */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                to="/" 
                onClick={closeMenu}
                className={`text-lg transition-colors ${
                  isActive('/') 
                    ? 'font-bold text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/who-we-are" 
                onClick={closeMenu}
                className={`text-lg transition-colors ${
                  isActive('/who-we-are') 
                    ? 'font-bold text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Who we are
              </Link>
              <Link 
                to="/what-we-do" 
                onClick={closeMenu}
                className={`text-lg transition-colors ${
                  isActive('/what-we-do') 
                    ? 'font-bold text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                What we do
              </Link>
              <Link 
                to="/portfolio" 
                onClick={closeMenu}
                className={`text-lg transition-colors ${
                  isActive('/portfolio') 
                    ? 'font-bold text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Portfolio
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Banner
