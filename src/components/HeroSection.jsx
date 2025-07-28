import { Search } from "lucide-react"

const HeroSection = ({ searchQuery, setSearchQuery }) => {
  return (
    <div
      className="h-[85vh] flex flex-col items-center justify-center px-4"
      style={{
        backgroundColor: "#e5e5f7",
        opacity: 0.8,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dot-pattern' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='2' cy='2' r='0.8' fill='%233b82f6' fill-opacity='0.5'/%3E%3Ccircle cx='12' cy='12' r='0.8' fill='%233b82f6' fill-opacity='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23dot-pattern)'/%3E%3C/svg%3E")`,
      }}
    >
      {/* Logo and Character */}
      <div className="text-center mb-12">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold text-gray-900">¿Cuanto Aumento?</h1>
        </div>

        {/* Search Bar */}
        <div className="max-w-lg mx-auto mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Busca un producto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none shadow-sm bg-white"
            />
          </div>
        </div>

        {/* Spanish text */}
        <p className="text-gray-700 text-lg max-w-md mx-auto">
          Descubre cuánto subieron los precios en los últimos años
        </p>
      </div>
    </div>
  )
}

export default HeroSection