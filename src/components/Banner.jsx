import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../ThemeContext'

function Banner() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { dark, toggle } = useTheme()

  const isActive = (path) => location.pathname === path

  const closeMenu = () => setIsMenuOpen(false)

  const linkClass = (path) =>
    `text-lg transition-colors ${
      isActive(path)
        ? 'font-bold text-gray-900 dark:text-white'
        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
    }`

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img 
              src={dark ? '/model_tree_dark_right.png' : '/model_tree_light_right.png'}
              alt="Model Tree" 
              className="h-16 w-auto"
            />
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={toggle}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {dark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className={linkClass('/')}>Home</Link>
              <Link to="/who-we-are" className={linkClass('/who-we-are')}>Who we are</Link>
              <Link to="/team" className={linkClass('/team')}>Team</Link>
              <Link to="/what-we-do" className={linkClass('/what-we-do')}>What we do</Link>
              <Link to="/portfolio" className={linkClass('/portfolio')}>Portfolio</Link>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 dark:text-white focus:outline-none p-2 cursor-pointer"
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
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              <Link to="/" onClick={closeMenu} className={linkClass('/')}>Home</Link>
              <Link to="/who-we-are" onClick={closeMenu} className={linkClass('/who-we-are')}>Who we are</Link>
              <Link to="/team" onClick={closeMenu} className={linkClass('/team')}>Team</Link>
              <Link to="/what-we-do" onClick={closeMenu} className={linkClass('/what-we-do')}>What we do</Link>
              <Link to="/portfolio" onClick={closeMenu} className={linkClass('/portfolio')}>Portfolio</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Banner
