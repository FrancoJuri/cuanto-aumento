import { useState } from "react";
import { useParams } from "react-router";
import { Navbar, CategoriesSection, ProductGrid, Footer } from "../components";

const CategoryPage = () => {
  const { categoria } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar superior */}
      <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
      />

      {/* Categories Section */}
      <CategoriesSection activeCategory={categoria} />

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 capitalize">
            {categoria === 'todos' ? 'Todos los productos' : categoria?.replace('-', ' ')}
          </h1>
          <ProductGrid category={categoria} searchQuery={searchQuery} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage; 