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
    <div className="pt-32 pb-24 max-w-[1440px] mx-auto px-5 md:px-16">
      {/* Header */}
      <header className="mb-16 text-center md:text-left">
        <span className="font-sans text-xs tracking-[0.25em] uppercase text-secondary mb-3 block">
          Handcrafted Excellence
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-primary font-normal mb-4">Collections</h1>
        <p className="font-sans text-base text-secondary max-w-2xl font-light leading-relaxed">
          Discover our complete range of masterfully crafted furniture, designed for luxury residences in Peshawar and across Pakistan.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters (Desktop) */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-10 lg:sticky lg:top-32 h-fit hidden md:block">
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
            <span className="font-sans text-xs tracking-wider text-secondary">
              Showing <strong className="text-primary font-semibold">{filteredProducts.length}</strong> furniture pieces
            </span>

            {/* Mobile Filter Trigger Button */}
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="md:hidden flex items-center space-x-2 border border-outline-variant/50 px-4 py-2 rounded-full font-sans text-xs uppercase tracking-widest text-primary"
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

          {/* Mobile Filter Drawer */}
          {mobileFilterOpen && (
            <div className="md:hidden bg-surface-container-low p-6 rounded-2xl mb-8 space-y-6 animate-in fade-in border border-black/5">
              <div>
                <h4 className="font-sans text-xs tracking-widest uppercase text-primary font-bold mb-3">Category</h4>
                <div className="flex flex-wrap gap-2">
                  {["All", "Seating", "Tables", "Lighting", "Storage"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategorySelect(cat)}
                      className={`px-3 py-1.5 text-xs rounded-full uppercase ${
                        selectedCategory === cat ? "bg-primary text-white" : "bg-white text-secondary"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-sans text-xs tracking-widest uppercase text-primary font-bold mb-3">Price Range (PKR)</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "All", label: "All" },
                    { id: "under100k", label: "< 100k" },
                    { id: "100k-200k", label: "100k - 200k" },
                    { id: "200k-300k", label: "200k - 300k" },
                    { id: "over300k", label: "300k+" },
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPriceRange(p.id)}
                      className={`px-3 py-1.5 text-xs rounded-full uppercase ${
                        selectedPriceRange === p.id ? "bg-primary text-white" : "bg-white text-secondary"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
              {filteredProducts.map((product, idx) => (
                <ProductCard key={product.id} product={product} offsetMargin={idx % 2 === 1} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center glass-panel rounded-3xl p-12">
              <span className="material-symbols-outlined text-4xl text-outline mb-3">search_off</span>
              <h3 className="font-serif text-2xl text-primary mb-2">No matching pieces found</h3>
              <p className="font-sans text-xs text-secondary mb-6">
                Try resetting your filters or selecting a different category.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedMaterial("All");
                  setSelectedPriceRange("All");
                }}
                className="bg-primary text-on-primary font-sans text-xs tracking-widest uppercase px-6 py-2.5 rounded-full hover:bg-surface-tint"
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
