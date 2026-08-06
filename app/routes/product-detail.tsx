import React, { useState } from "react";
import { useParams, Link } from "react-router";
import { PRODUCTS } from "~/data/products";
import { useCart } from "~/context/CartContext";
import { useWishlist } from "~/context/WishlistContext";
import { ProductCard } from "~/components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart, setIsCartOpen } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  const [activeImage, setActiveImage] = useState(product.gallery[0] || product.image);
  const [selectedSwatch, setSelectedSwatch] = useState(product.swatches[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"desc" | "specs" | "care">("desc");

  const favorite = isInWishlist(product.id);

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 2);

  return (
    <div className="pt-32 pb-24 max-w-[1440px] mx-auto px-5 md:px-16">
      {/* Breadcrumb Navigation */}
      <nav className="mb-8 font-sans text-xs uppercase tracking-widest text-secondary flex items-center space-x-2">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link to="/collections" className="hover:text-primary">Collections</Link>
        <span>/</span>
        <span className="text-primary font-semibold">{product.title}</span>
      </nav>

      {/* Main Product Canvas */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Gallery */}
        <div className="md:col-span-7 flex flex-col space-y-4">
          <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden glass-panel group shadow-xl">
            <img
              src={activeImage}
              alt={product.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <button
              onClick={() => toggleWishlist(product.id)}
              className={`absolute top-6 right-6 w-11 h-11 rounded-full backdrop-blur-md flex items-center justify-center transition-all shadow-md ${
                favorite ? "bg-white text-red-600" : "bg-white/70 text-primary hover:bg-white"
              }`}
            >
              <span className={`material-symbols-outlined text-2xl ${favorite ? "filled text-red-600" : ""}`}>
                favorite
              </span>
            </button>
          </div>

          {/* Thumbnails */}
          {product.gallery.length > 1 && (
            <div className="flex gap-4 overflow-x-auto hide-scrollbar py-2 snap-x">
              {product.gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all ${
                    activeImage === imgUrl ? "border-primary ring-2 ring-primary/20 scale-95" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Product Information & Purchase Controls */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-8">
          <div>
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-secondary mb-2 block">
              {product.category} Collection
            </span>
            <h1 className="font-serif text-3xl md:text-5xl text-primary font-normal mb-3 leading-tight">
              {product.title}
            </h1>
            <p className="font-sans text-base text-secondary mb-4 font-light">{product.subtitle}</p>

            <div className="flex items-center space-x-4 mb-6">
              <span className="font-sans text-2xl font-bold text-primary">
                Rs. {product.price.toLocaleString()}
              </span>
              <div className="flex items-center space-x-1 border-l border-outline-variant/30 pl-4">
                <span className="material-symbols-outlined text-amber-500 text-sm filled">star</span>
                <span className="font-sans text-xs font-semibold text-primary">{product.rating}</span>
                <span className="font-sans text-xs text-secondary">({product.reviewsCount} reviews)</span>
              </div>
            </div>

            <hr className="border-outline-variant/30 my-6" />

            {/* Finish Swatch Selection */}
            {product.swatches && product.swatches.length > 0 && (
              <div className="mb-8">
                <label className="font-sans text-xs tracking-widest uppercase text-secondary block mb-3">
                  Select Finish: <strong className="text-primary font-semibold">{selectedSwatch.name}</strong>
                </label>
                <div className="flex space-x-3">
                  {product.swatches.map((swatch) => (
                    <button
                      key={swatch.name}
                      onClick={() => setSelectedSwatch(swatch)}
                      className={`w-12 h-12 rounded-full border-2 p-1 transition-all relative ${
                        selectedSwatch.name === swatch.name ? "border-primary scale-110 shadow-md" : "border-outline-variant/40 hover:border-primary/60"
                      }`}
                    >
                      <span
                        className="w-full h-full rounded-full block shadow-inner"
                        style={{ backgroundColor: swatch.color }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="font-sans text-xs tracking-widest uppercase text-secondary block mb-3">
                Quantity
              </label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-outline-variant/50 rounded-full px-3 py-1 bg-surface-container-low">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-secondary hover:text-primary px-2 text-lg font-bold"
                  >
                    -
                  </button>
                  <span className="font-sans text-sm font-bold text-primary px-4">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-secondary hover:text-primary px-2 text-lg font-bold"
                  >
                    +
                  </button>
                </div>
                <span className="font-sans text-xs text-secondary">In stock, ready for White-Glove delivery</span>
              </div>
            </div>

            {/* Add to Cart Actions */}
            <div className="space-y-3">
              <button
                onClick={() => {
                  addToCart(product, selectedSwatch, quantity);
                  setIsCartOpen(true);
                }}
                className="w-full bg-primary text-on-primary py-4 px-6 rounded-2xl font-sans text-xs tracking-[0.2em] uppercase hover:bg-surface-tint transition-all shadow-xl font-bold"
              >
                Add to Cart — Rs. {(product.price * quantity).toLocaleString()}
              </button>
              <Link
                to="/checkout"
                onClick={() => addToCart(product, selectedSwatch, quantity)}
                className="w-full block text-center border border-primary text-primary py-3.5 px-6 rounded-2xl font-sans text-xs tracking-[0.2em] uppercase hover:bg-black/5 transition-all"
              >
                Buy Now with Express Concierge
              </Link>
            </div>
          </div>

          {/* Accordion Specification Tabs */}
          <div className="border-t border-outline-variant/30 pt-6">
            <div className="flex space-x-6 border-b border-outline-variant/30 pb-3 mb-4">
              <button
                onClick={() => setActiveTab("desc")}
                className={`font-sans text-xs uppercase tracking-widest pb-1 transition-colors ${
                  activeTab === "desc" ? "text-primary font-bold border-b-2 border-primary" : "text-secondary hover:text-primary"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("specs")}
                className={`font-sans text-xs uppercase tracking-widest pb-1 transition-colors ${
                  activeTab === "specs" ? "text-primary font-bold border-b-2 border-primary" : "text-secondary hover:text-primary"
                }`}
              >
                Specifications & Dimensions
              </button>
              <button
                onClick={() => setActiveTab("care")}
                className={`font-sans text-xs uppercase tracking-widest pb-1 transition-colors ${
                  activeTab === "care" ? "text-primary font-bold border-b-2 border-primary" : "text-secondary hover:text-primary"
                }`}
              >
                Care & Warranty
              </button>
            </div>

            <div className="font-sans text-xs text-secondary leading-relaxed space-y-3 font-light">
              {activeTab === "desc" && <p>{product.description}</p>}
              {activeTab === "specs" && (
                <div className="space-y-2">
                  <p><strong>Dimensions:</strong> {product.dimensions}</p>
                  <p><strong>Material:</strong> {product.material}</p>
                  <ul className="list-disc list-inside pt-1 space-y-1">
                    {product.specifications.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === "care" && (
                <p>
                  Vacuum regularly with a soft brush attachment. Treat spills immediately by blotting with a clean dry cloth. Professional upholstery cleaning recommended annually. Backed by Aurelian 10-Year Structural Frame Guarantee.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Recommendation */}
      {relatedProducts.length > 0 && (
        <section className="mt-28 border-t border-outline-variant/30 pt-16">
          <h3 className="font-serif text-3xl text-primary font-normal mb-8">Complementary Pieces</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
