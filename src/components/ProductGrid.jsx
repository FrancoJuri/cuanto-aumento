import { useState } from "react"
import ProductCard from "./ProductCard"
import Pagination from "./Pagination"

const ProductGrid = ({ category, searchQuery }) => {
  // Sample products organized by category
  const allProducts = [
    // Lácteos
    {
      id: 1,
      brand: "CASANCREM",
      name: "Casancrem 290 G",
      image: "/placeholder.svg?height=200&width=200&text=Casancrem",
      supermarkets: 7,
      category: "lacteos",
    },
    {
      id: 2,
      brand: "LA SERENÍSIMA",
      name: "Dulce De Leche Clásico La Serenísima Con Calcio 400 G",
      image: "/placeholder.svg?height=200&width=200&text=Dulce+de+Leche",
      supermarkets: 7,
      category: "lacteos",
    },
    {
      id: 3,
      brand: "LA SERENÍSIMA",
      name: "Leche Descremada La Serenísima 1 L",
      image: "/placeholder.svg?height=200&width=200&text=Leche+Descremada",
      supermarkets: 6,
      category: "lacteos",
    },
    {
      id: 4,
      brand: "LA SERENÍSIMA",
      name: "Leche Descremada La Serenísima Protein Larga Vida 1l",
      image: "/placeholder.svg?height=200&width=200&text=Leche+Protein",
      supermarkets: 5,
      category: "lacteos",
    },
    {
      id: 5,
      brand: "LA SERENÍSIMA",
      name: "Leche En Polvo La Serenísima Descremada 400 G",
      image: "/placeholder.svg?height=200&width=200&text=Leche+Polvo",
      supermarkets: 4,
      category: "lacteos",
    },
    {
      id: 6,
      brand: "SVELTY",
      name: "Leche En Polvo Svelty Descremada Extra Calcio 750 G",
      image: "/placeholder.svg?height=200&width=200&text=Svelty",
      supermarkets: 6,
      category: "lacteos",
    },
    {
      id: 7,
      brand: "LA SERENÍSIMA",
      name: "Leche Larga Vida Parcialmente Descremada Liviana 1% 1l",
      image: "/placeholder.svg?height=200&width=200&text=Leche+Liviana",
      supermarkets: 5,
      category: "lacteos",
    },
    {
      id: 8,
      brand: "LA SERENÍSIMA",
      name: "Manteca La Serenísima 200 G",
      image: "/placeholder.svg?height=200&width=200&text=Manteca",
      supermarkets: 7,
      category: "lacteos",
    },
    {
      id: 9,
      brand: "LA SERENÍSIMA",
      name: "Queso Reggianito Rallado La Serenísima 130 G",
      image: "/placeholder.svg?height=200&width=200&text=Queso+Rallado",
      supermarkets: 7,
      category: "lacteos",
    },
    {
      id: 10,
      brand: "YOGURÍSIMO",
      name: "Yogur Bebible Frutilla Yogurísimo 900 G",
      image: "/placeholder.svg?height=200&width=200&text=Yogur+Frutilla",
      supermarkets: 7,
      category: "lacteos",
    },
    {
      id: 11,
      brand: "YOGURÍSIMO",
      name: "Yogur Entero Natural Yogurísimo Conicet 300 Gr",
      image: "/placeholder.svg?height=200&width=200&text=Yogur+Natural",
      supermarkets: 7,
      category: "lacteos",
    },
    {
      id: 12,
      brand: "TREGAR",
      name: "Yogur Natural Sin Azúcar Tregar 280 G",
      image: "/placeholder.svg?height=200&width=200&text=Yogur+Tregar",
      supermarkets: 5,
      category: "lacteos",
    },
    
    // Bebidas
    {
      id: 13,
      brand: "COCA COLA",
      name: "Gaseosa Coca-Cola Sabor Original 2.25 Lt",
      image: "/placeholder.svg?height=200&width=200&text=Coca+Cola",
      supermarkets: 7,
      category: "bebidas",
    },
    {
      id: 14,
      brand: "ANDES",
      name: "Cerveza Andes Rubia En Lata 473 Ml",
      image: "/placeholder.svg?height=200&width=200&text=Cerveza+Andes",
      supermarkets: 4,
      category: "bebidas",
    },
    {
      id: 15,
      brand: "VILLAVICENCIO",
      name: "Agua Mineral Villavicencio 500ml",
      image: "/placeholder.svg?height=200&width=200&text=Agua",
      supermarkets: 5,
      category: "bebidas",
    },
    {
      id: 16,
      brand: "QUILMES",
      name: "Cerveza Quilmes Clásica 1L",
      image: "/placeholder.svg?height=200&width=200&text=Quilmes",
      supermarkets: 5,
      category: "bebidas",
    },

    // Frutas y Verduras
    {
      id: 17,
      brand: "SIN MARCA",
      name: "Pepino X Kg",
      image: "/placeholder.svg?height=200&width=200&text=Pepino",
      supermarkets: 7,
      category: "frutas-y-verduras",
    },
    {
      id: 18,
      brand: "SIN MARCA",
      name: "Banana X Kg",
      image: "/placeholder.svg?height=200&width=200&text=Banana",
      supermarkets: 6,
      category: "frutas-y-verduras",
    },

    // Infusiones
    {
      id: 19,
      brand: "PLAYADITO",
      name: "Yerba Mate Playadito 1kg",
      image: "/placeholder.svg?height=200&width=200&text=Yerba+Mate",
      supermarkets: 7,
      category: "infusiones",
    },

    // Almacén
    {
      id: 20,
      brand: "MAROLIO",
      name: "Fideos Marolio Mostachol 500g",
      image: "/placeholder.svg?height=200&width=200&text=Fideos",
      supermarkets: 6,
      category: "almacen",
    },

    // Panadería
    {
      id: 21,
      brand: "BIMBO",
      name: "Pan Lactal Bimbo 450g",
      image: "/placeholder.svg?height=200&width=200&text=Pan",
      supermarkets: 6,
      category: "panaderia",
    },
  ];

  // Filter products based on category and search query
  const getFilteredProducts = () => {
    let filtered = allProducts;

    // Filter by category
    if (category && category !== "todos") {
      filtered = filtered.filter(product => product.category === category);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query)
      );
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Paginate products
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="py-8">
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No se encontraron productos</p>
          {searchQuery && (
            <p className="text-gray-400 text-sm mt-2">
              Intenta con otros términos de búsqueda
            </p>
          )}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {totalPages > 1 && (
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={setCurrentPage} 
            />
          )}
        </>
      )}
    </div>
  );
};

export default ProductGrid;