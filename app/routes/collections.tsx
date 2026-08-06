import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router";
import { PRODUCTS, type Product } from "~/data/products";
import { ProductCard } from "~/components/ProductCard";

export default function Collections() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const categoryParam = searchParams.get("category") || "All";
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam);
  const [selectedMaterial, setSelectedMaterial] = useState<string>("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("curated");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync category change with URL params
  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === "All") {
      searchParams.delete("category");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: cat });
    }
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== "All" && product.category !== selectedCategory) {
        return false;
      }
      // Material filter
      if (selectedMaterial !== "All") {
        if (!product.material.toLowerCase().includes(selectedMaterial.toLowerCase())) {
          return false;
        }
      }
      // Price range filter (in PKR)
      if (selectedPriceRange === "under100k" && product.price >= 100000) return false;
      if (selectedPriceRange === "100k-200k" && (product.price < 100000 || product.price > 200000)) return false;
      if (selectedPriceRange === "200k-300k" && (product.price < 200000 || product.price > 300000)) return false;
      if (selectedPriceRange === "over300k" && product.price <= 300000) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // default curated
    });
  }, [selectedCategory, selectedMaterial, selectedPriceRange, sortBy]);

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16">
      {/* Header */}
      <header className="mb-10 sm:mb-16 text-center md:text-left">
        <span className="font-sans text-xs tracking-[0.25em] uppercase text-secondary mb-2.5 block">
          Handcrafted Excellence
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl text-primary font-normal mb-3 sm:mb-4">Collections</h1>
        <p className="font-sans text-sm sm:text-base text-secondary max-w-2xl font-light leading-relaxed">
          Discover our complete range of masterfully crafted furniture, designed for luxury residences in Peshawar and across Pakistan.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Sidebar Filters (Desktop lg+) */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-10 lg:sticky lg:top-32 h-fit hidden lg:block">
          {/* Category Filter */}
          <div>
            <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4 pb-2 border-b border-outline-variant/30">
              Category
            </h3>
            <ul className="space-y-2.5">
              {["All", "Seating", "Tables", "Lighting", "Storage"].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => handleCategorySelect(cat)}
                    className={`w-full text-left font-sans text-xs uppercase tracking-wider py-1.5 px-3 rounded-lg transition-all ${
                      selectedCategory === cat
                        ? "bg-primary text-on-primary font-bold shadow-sm"
                        : "text-secondary hover:text-primary hover:bg-black/5"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range Filter (PKR / Rs.) */}
          <div>
            <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4 pb-2 border-b border-outline-variant/30">
              Price Range (PKR)
            </h3>
            <div className="space-y-2 font-sans text-xs text-secondary">
              {[
                { id: "All", label: "All Prices" },
                { id: "under100k", label: "Under PKR 100,000" },
                { id: "100k-200k", label: "PKR 100,000 - PKR 200,000" },
                { id: "200k-300k", label: "PKR 200,000 - PKR 300,000" },
                { id: "over300k", label: "PKR 300,000+" },
              ].map((p) => (
                <label key={p.id} className="flex items-center space-x-3 cursor-pointer py-1 group">
                  <input
                    type="radio"
                    name="priceRange"
                    checked={selectedPriceRange === p.id}
                    onChange={() => setSelectedPriceRange(p.id)}
                    className="accent-primary"
                  />
                  <span className={`group-hover:text-primary ${selectedPriceRange === p.id ? "text-primary font-semibold" : ""}`}>
                    {p.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Material Filter */}
          <div>
            <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4 pb-2 border-b border-outline-variant/30">
              Material Finish
            </h3>
            <div className="flex flex-wrap gap-2">
              {["All", "Walnut", "Oak", "Marble", "Bouclé", "Linen", "Alabaster"].map((mat) => (
                <button
                  key={mat}
                  onClick={() => setSelectedMaterial(mat)}
                  className={`px-3 py-1.5 border rounded-full font-sans text-[11px] uppercase tracking-wider transition-colors ${
                    selectedMaterial === mat
                      ? "border-primary bg-primary text-on-primary font-semibold"
                      : "border-outline-variant/40 text-secondary hover:border-primary hover:text-primary"
                  }`}
                >
                  {mat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Catalog Main Content */}
        <div className="flex-1">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 pb-4 border-b border-outline-variant/30 gap-4">
            <span className="font-sans text-xs tracking-wider text-secondary order-2 sm:order-1">
              Showing <strong className="text-primary font-semibold">{filteredProducts.length}</strong> furniture pieces
            </span>

            {/* Mobile / Tablet Filter Trigger Button */}
            <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end order-1 sm:order-2">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden flex-1 sm:flex-none flex items-center justify-center space-x-2 border border-outline-variant/50 px-4 py-2.5 rounded-full font-sans text-xs uppercase tracking-widest text-primary hover:bg-black/5"
              >
                <span className="material-symbols-outlined text-base">tune</span>
                <span>Filter & Sort</span>
              </button>

              {/* Desktop Sort Dropdown */}
              <div className="hidden sm:flex items-center space-x-3">
                <span className="font-sans text-xs tracking-widest uppercase text-secondary">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border border-outline-variant/40 rounded-lg px-3 py-1.5 font-sans text-xs text-primary focus:outline-none focus:border-primary cursor-pointer"
                >
                  <option value="curated">Curated Collection</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Full Mobile Slide-Over Filter Drawer */}
          {mobileFilterOpen && (
            <div className="lg:hidden fixed inset-0 z-50 overflow-hidden">
              <div
                onClick={() => setMobileFilterOpen(false)}
                className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
              />
              <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 w-full sm:max-w-md">
                <div className="w-full bg-surface-container-lowest glass-panel shadow-2xl border-l border-outline-variant/30 flex flex-col p-6 overflow-y-auto hide-scrollbar space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-outline-variant/30">
                    <h3 className="font-serif text-2xl text-primary font-medium">Filter & Sort</h3>
                    <button
                      onClick={() => setMobileFilterOpen(false)}
                      className="p-1 rounded-full text-secondary hover:text-primary hover:bg-black/5"
                    >
                      <span className="material-symbols-outlined text-2xl">close</span>
                    </button>
                  </div>

                  {/* Sort By Mobile */}
                  <div>
                    <h4 className="font-sans text-xs tracking-widest uppercase text-primary font-bold mb-3">Sort By</h4>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full bg-white border border-outline-variant/40 rounded-xl px-4 py-2.5 font-sans text-xs text-primary focus:outline-none focus:border-primary"
                    >
                      <option value="curated">Curated Collection</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                    </select>
                  </div>

                  {/* Categories Mobile */}
                  <div>
                    <h4 className="font-sans text-xs tracking-widest uppercase text-primary font-bold mb-3">Category</h4>
                    <div className="flex flex-wrap gap-2">
                      {["All", "Seating", "Tables", "Lighting", "Storage"].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => handleCategorySelect(cat)}
                          className={`px-3.5 py-2 text-xs rounded-full uppercase tracking-wider font-sans transition-colors ${
                            selectedCategory === cat ? "bg-primary text-on-primary font-bold" : "bg-surface-container text-secondary hover:bg-surface-container-high"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range Mobile */}
                  <div>
                    <h4 className="font-sans text-xs tracking-widest uppercase text-primary font-bold mb-3">Price Range (PKR)</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: "All", label: "All Prices" },
                        { id: "under100k", label: "< 100k" },
                        { id: "100k-200k", label: "100k - 200k" },
                        { id: "200k-300k", label: "200k - 300k" },
                        { id: "over300k", label: "300k+" },
                      ].map((p) => (
                        <button
                          key={p.id}
                          onClick={() => setSelectedPriceRange(p.id)}
                          className={`px-3.5 py-2 text-xs rounded-full uppercase tracking-wider font-sans transition-colors ${
                            selectedPriceRange === p.id ? "bg-primary text-on-primary font-bold" : "bg-surface-container text-secondary hover:bg-surface-container-high"
                          }`}
                        >
                          {p.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Material Mobile */}
                  <div>
                    <h4 className="font-sans text-xs tracking-widest uppercase text-primary font-bold mb-3">Material Finish</h4>
                    <div className="flex flex-wrap gap-2">
                      {["All", "Walnut", "Oak", "Marble", "Bouclé", "Linen", "Alabaster"].map((mat) => (
                        <button
                          key={mat}
                          onClick={() => setSelectedMaterial(mat)}
                          className={`px-3.5 py-2 text-xs rounded-full uppercase tracking-wider font-sans transition-colors ${
                            selectedMaterial === mat ? "bg-primary text-on-primary font-bold" : "bg-surface-container text-secondary hover:bg-surface-container-high"
                          }`}
                        >
                          {mat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-outline-variant/30 flex gap-3 mt-auto">
                    <button
                      onClick={() => {
                        setSelectedCategory("All");
                        setSelectedMaterial("All");
                        setSelectedPriceRange("All");
                        setSortBy("curated");
                      }}
                      className="flex-1 py-3 border border-outline-variant/50 rounded-xl font-sans text-xs uppercase tracking-wider text-secondary"
                    >
                      Reset All
                    </button>
                    <button
                      onClick={() => setMobileFilterOpen(false)}
                      className="flex-1 py-3 bg-primary text-on-primary rounded-xl font-sans text-xs uppercase tracking-wider font-bold shadow-md"
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product, idx) => (
                <ProductCard key={product.id} product={product} offsetMargin={idx % 2 === 1} />
              ))}
            </div>
          ) : (
            <div className="py-16 sm:py-20 text-center glass-panel rounded-3xl p-8 sm:p-12">
              <span className="material-symbols-outlined text-4xl text-outline mb-3">search_off</span>
              <h3 className="font-serif text-xl sm:text-2xl text-primary mb-2">No matching pieces found</h3>
              <p className="font-sans text-xs text-secondary mb-6 max-w-sm mx-auto">
                Try resetting your filters or selecting a different category.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedMaterial("All");
                  setSelectedPriceRange("All");
                }}
                className="bg-primary text-on-primary font-sans text-xs tracking-widest uppercase px-6 py-3 rounded-full hover:bg-surface-tint"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
