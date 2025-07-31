import { useState } from "react"
import { useNavigate } from "react-router"
import { ArrowLeft, TrendingUp, TrendingDown, MapPin, Share2 } from "lucide-react"
import Navbar from "../components/Navbar"
import { Footer } from "../components"

const ProductPage = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPeriod, setSelectedPeriod] = useState("7D")
  
  // Mock data - En un proyecto real, esto vendría de una API
  const product = {
    id: "1",
    name: "Gaseosa Coca-Cola Sabor Original 2.25 Lt",
    brand: "COCA COLA",
    image: "/api/placeholder/400/400",
    currentPrice: "$3.984",
    lowestPrice: "$3.300",
    highestPrice: "$4.740",
    trend: "+6.5%",
    isIncreasing: true,
    category: "Bebidas",
    description: "Gaseosa Coca-Cola Original de 2.25 litros. La bebida refrescante más popular del mundo con su sabor único e inconfundible.",
    stores: [
      { name: "Carrefour", price: "$3.300", change: "-25%", isLowest: true },
      { name: "Jumbo", price: "$3.300", change: "-25%", isLowest: true },
      { name: "La Anónima", price: "$3.550", change: "+17.65%", isLowest: false }
    ],
    priceHistory: [
      { date: "2024-01-01", price: 3300 },
      { date: "2024-01-02", price: 3350 },
      { date: "2024-01-03", price: 3400 },
      { date: "2024-01-04", price: 3500 },
      { date: "2024-01-05", price: 3650 },
      { date: "2024-01-06", price: 3800 },
      { date: "2024-01-07", price: 3984 }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        onSearchSubmit={(query) => {
          // Lógica de búsqueda aquí
          console.log("Searching for:", query)
        }}
      />

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center space-x-1 hover:text-gray-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver</span>
          </button>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna izquierda - Imagen y detalles básicos */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden sticky top-24">
              {/* Imagen del producto */}
              <div className="aspect-square bg-gray-50 p-8">
                <img 
                  src={product.image || "/placeholder.svg"} 
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Información básica */}
              <div className="p-6 border-t border-gray-100">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-2 font-medium">
                  {product.brand}
                </div>
                <h1 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {product.name}
                </h1>
                
                {/* Precio actual */}
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {product.currentPrice}
                  </div>
                  <div className={`flex items-center space-x-1 text-sm ${
                    product.isIncreasing ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {product.isIncreasing ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span className="font-medium">{product.trend}</span>
                    <span className="text-gray-500">vs semana anterior</span>
                  </div>
                </div>

                {/* Rango de precios */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Precio más bajo:</span>
                    <span className="font-semibold text-green-600">{product.lowestPrice}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Precio más alto:</span>
                    <span className="font-semibold text-red-600">{product.highestPrice}</span>
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-orange-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                    Crear Alerta
                  </button>
                  <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Gráficos y tiendas */}
          <div className="lg:col-span-2 space-y-6">
            {/* Gráfico de precios */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Evolución de Precios</h2>
                <div className="flex space-x-2">
                  {["7D", "1M", "3M", "6M", "1A"].map((period) => (
                    <button
                      key={period}
                      onClick={() => setSelectedPeriod(period)}
                      className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                        selectedPeriod === period
                          ? "bg-orange-500 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Gráfico simplificado (en un proyecto real usarías Chart.js o similar) */}
              <div className="h-64 bg-gray-50 rounded-lg flex items-end justify-between p-4 space-x-2">
                {product.priceHistory.map((point, index) => (
                  <div
                    key={index}
                    className="bg-orange-500 rounded-t-sm flex-1 relative group"
                    style={{ height: `${(point.price / 4000) * 100}%` }}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      ${point.price}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Hace 7 días</span>
                <span>Hoy</span>
              </div>
            </div>

            {/* Precios por tienda */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Precios por Tienda</h2>
              <div className="space-y-4">
                {product.stores.map((store, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-gray-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{store.name}</div>
                        <div className="text-sm text-gray-500">Precio estable hace 2 días</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg text-gray-900 flex items-center space-x-2">
                        <span>{store.price}</span>
                        {store.isLowest && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                            MEJOR PRECIO
                          </span>
                        )}
                      </div>
                      <div className={`text-sm ${
                        store.change.includes('+') ? 'text-red-600' : 'text-green-600'
                      }`}>
                        {store.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Descripción del producto */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Descripción</h2>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProductPage 