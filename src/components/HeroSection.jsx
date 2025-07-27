import { Search } from "lucide-react"

const HeroSection = ({ searchQuery, setSearchQuery }) => {
  return (
    <div
      className="h-[85vh] flex flex-col items-center justify-center px-4"
      style={{
        backgroundColor: "#e5e5f7",
        opacity: 0.8,
        backgroundImage:
          "radial-gradient(#444cf7 0.5px, transparent 0.5px), radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 10px 10px",
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