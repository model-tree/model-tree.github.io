import { Link, useLocation } from 'react-router-dom'

function Banner() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className="sticky top-0 z-50 bg-black shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Homepage image */}
          <Link to="/" className="flex items-center">
            <img 
              src="/model_tree_03_transparent_background.png" 
              alt="Model Tree" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Right side - Navigation links */}
          <nav className="flex items-center space-x-8">
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
              to="/contact" 
              className={`text-lg transition-colors ${
                isActive('/contact') 
                  ? 'font-bold text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Banner
