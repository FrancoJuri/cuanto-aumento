import { useState } from "react"
import ProductCard from "./ProductCard"
import Pagination from "./Pagination"

const ProductGrid = () => {
  // Sample products for "Todos" category
  const products = [
    {
      id: 1,
      brand: "SIN MARCA",
      name: "Pepino X Kg",
      image: "/placeholder.svg?height=200&width=200&text=Pepino",
      supermarkets: 7,
    },
    {
      id: 2,
      brand: "PLAYADITO",
      name: "Yerba Mate Playadito 1kg",
      image: "/placeholder.svg?height=200&width=200&text=Yerba+Mate",
      supermarkets: 7,
    },
    {
      id: 3,
      brand: "COCA COLA",
      name: "Gaseosa Coca-Cola Sabor Original 2.25 Lt",
      image: "/placeholder.svg?height=200&width=200&text=Coca+Cola",
      supermarkets: 7,
    },
    {
      id: 4,
      brand: "SIN MARCA",
      name: "Banana X Kg",
      image: "/placeholder.svg?height=200&width=200&text=Banana",
      supermarkets: 6,
    },
    {
      id: 5,
      brand: "ANDES",
      name: "Cerveza Andes Rubia En Lata 473 Ml",
      image: "/placeholder.svg?height=200&width=200&text=Cerveza+Andes",
      supermarkets: 4,
    },
    {
      id: 6,
      brand: "VILLAVICENCIO",
      name: "Agua Mineral Villavicencio 500ml",
      image: "/placeholder.svg?height=200&width=200&text=Agua",
      supermarkets: 5,
    },
    {
      id: 7,
      brand: "LA SERENISIMA",
      name: "Leche Entera La Serenísima 1L",
      image: "/placeholder.svg?height=200&width=200&text=Leche",
      supermarkets: 8,
    },
    {
      id: 8,
      brand: "BIMBO",
      name: "Pan Lactal Bimbo 450g",
      image: "/placeholder.svg?height=200&width=200&text=Pan",
      supermarkets: 6,
    },
    {
      id: 9,
      brand: "QUILMES",
      name: "Cerveza Quilmes Clásica 1L",
      image: "/placeholder.svg?height=200&width=200&text=Quilmes",
      supermarkets: 5,
    },
    {
      id: 10,
      brand: "MAROLIO",
      name: "Fideos Marolio Mostachol 500g",
      image: "/placeholder.svg?height=200&width=200&text=Fideos",
      supermarkets: 6,
    },
  ]

  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={6} onPageChange={setCurrentPage} />
    </div>
  )
}

export default ProductGrid