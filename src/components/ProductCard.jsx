import { useState } from "react"
import { Bookmark } from "lucide-react"

const ProductCard = ({ product }) => {
  const [isBookmarked, setIsBookmarked] = useState(false)

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden">
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-50 p-6">
        <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-contain" />
        <button
          onClick={() => setIsBookmarked(!isBookmarked)}
          className={`absolute top-3 right-3 p-2 rounded-full transition-colors shadow-sm ${
            isBookmarked
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-400 hover:text-gray-600 border border-gray-200"
          }`}
        >
          <Bookmark className="w-4 h-4" fill={isBookmarked ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-5 border-t border-gray-100">
        <div className="text-xs text-gray-500 uppercase tracking-wide mb-2 font-medium">{product.brand}</div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4 line-clamp-2 leading-relaxed">{product.name}</h3>
        <div className="text-xs text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
          Precios en {product.supermarkets} supermercados
        </div>
      </div>
    </div>
  )
}

export default ProductCard