import { useState } from "react";
import { HeroSection, CategoriesSection, ProductGrid, Footer } from "../components";


const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Takes up most of viewport but leaves space for categories */}
      <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductGrid />
      </div>

      <Footer />
    </div>
  )
}

export default HomePage;