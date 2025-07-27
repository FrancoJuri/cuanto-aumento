const CategoriesSection = () => {
    const categories = [
      { name: "Todos", icon: null, active: true },
      { name: "Precios en baja", icon: "📉", color: "text-blue-600" },
      { name: "Precios en alza", icon: "📈", color: "text-orange-600" },
      { name: "Bebidas", icon: null },
      { name: "Lacteos", icon: null },
      { name: "Almacén", icon: null },
      { name: "Infusiones", icon: null },
      { name: "Frutas y Verduras", icon: null },
      { name: "Panadería", icon: null },
      { name: "Limpieza", icon: null },
    ]
  
    return (
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-2 py-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  category.active ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="flex items-center space-x-1">
                  {category.icon && <span>{category.icon}</span>}
                  <span className={category.color || ""}>{category.name}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default CategoriesSection