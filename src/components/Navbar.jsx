import { Search, ShoppingCart, Bell, User, Bookmark } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router"

const Navbar = ({ searchQuery, setSearchQuery, onSearchSubmit }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const navigate = useNavigate()

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (onSearchSubmit) {
      onSearchSubmit(searchQuery)
    }
  }

  const handleLogoClick = () => {
    navigate('/')
  }

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Título a la izquierda */}
          <div className="flex-shrink-0">
            <button
              onClick={handleLogoClick}
              className="text-2xl font-bold text-gray-900 tracking-tight hover:text-orange-600 transition-colors cursor-pointer"
            >
              cuantoaumento.com.ar
            </button>
          </div>

          {/* Barra de búsqueda en el centro */}
          <div className="flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className={`relative transition-all duration-200 ${
                isSearchFocused ? 'transform scale-105' : ''
              }`}>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Busca un producto..."
                  value={searchQuery || ''}
                  onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500/50 focus:border-orange-400 outline-none transition-all duration-200 bg-gray-50 hover:bg-white focus:bg-white placeholder-gray-500"
                />
              </div>
            </form>
          </div>

          {/* Iconos a la derecha */}
          <div className="flex items-center space-x-4">
            {/* Guardados */}
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200 cursor-pointer">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 