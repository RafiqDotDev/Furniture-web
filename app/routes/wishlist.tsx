import React from "react";
import { Link } from "react-router";
import { useWishlist } from "~/context/WishlistContext";
import { useCart } from "~/context/CartContext";

export default function Wishlist() {
  const { wishlistProducts, toggleWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16">
      <header className="mb-8 sm:mb-12 border-b border-outline-variant/30 pb-4 sm:pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
        <div>
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-secondary mb-1.5 block">
            Curated Favorites
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary font-normal">Your Wishlist</h1>
        </div>
        {wishlistProducts.length > 0 && (
          <button
            onClick={clearWishlist}
            className="font-sans text-xs tracking-[0.2em] uppercase text-secondary hover:text-error transition-colors"
          >
            Clear Wishlist
          </button>
        )}
      </header>

      {wishlistProducts.length === 0 ? (
        <div className="py-16 sm:py-24 text-center glass-panel rounded-3xl p-6 sm:p-12 max-w-2xl mx-auto">
          <span className="material-symbols-outlined text-4xl sm:text-5xl text-outline mb-4">favorite</span>
          <h2 className="font-serif text-2xl sm:text-3xl text-primary mb-3">No Saved Favorites</h2>
          <p className="font-sans text-xs sm:text-sm text-secondary mb-8 font-light max-w-md mx-auto">
            Save architectural furniture pieces to your personal wishlist as you browse our collections.
          </p>
          <Link
            to="/collections"
            className="bg-primary text-on-primary font-sans text-xs tracking-[0.2em] uppercase px-8 py-3.5 rounded-full hover:bg-surface-tint shadow-lg inline-block"
          >
            Explore Collections
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {wishlistProducts.map((product) => (
            <div key={product.id} className="glass-panel p-5 sm:p-6 rounded-3xl space-y-4 border border-black/5 flex flex-col justify-between">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container-low mb-2">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                <button
                  onClick={() => toggleWishlist(product.id)}
                  aria-label="Remove from wishlist"
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 text-red-600 flex items-center justify-center shadow-sm hover:bg-white"
                >
                  <span className="material-symbols-outlined text-lg filled">favorite</span>
                </button>
              </div>

              <div className="space-y-1">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-secondary">
                  {product.category}
                </span>
                <Link to={`/products/${product.id}`}>
                  <h3 className="font-serif text-lg sm:text-xl text-primary font-normal hover:underline">
                    {product.title}
                  </h3>
                </Link>
                <p className="font-sans text-xs text-secondary line-clamp-2">{product.subtitle}</p>
                <p className="font-sans text-sm sm:text-base font-bold text-primary pt-2">
                  Rs. {product.price.toLocaleString()}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-primary text-on-primary font-sans text-xs tracking-widest uppercase py-3 rounded-xl hover:bg-surface-tint transition-all active:scale-[0.98]"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
