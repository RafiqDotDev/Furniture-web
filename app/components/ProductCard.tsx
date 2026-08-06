import React from "react";
import { Link } from "react-router";
import type { Product } from "~/data/products";
import { useCart } from "~/context/CartContext";
import { useWishlist } from "~/context/WishlistContext";

interface ProductCardProps {
  product: Product;
  offsetMargin?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, offsetMargin = false }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const favorite = isInWishlist(product.id);

  return (
    <article className={`group relative flex flex-col h-full ${offsetMargin ? "lg:mt-12" : ""}`}>
      {/* Image Container */}
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-4 sm:mb-5 bg-surface-container-low">
        <Link to={`/products/${product.id}`} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-col gap-1.5 pointer-events-none">
          {product.isNew && (
            <span className="bg-primary/90 text-on-primary font-sans text-[10px] tracking-[0.2em] uppercase px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full backdrop-blur-sm shadow-sm">
              New Arrival
            </span>
          )}
        </div>

        {/* Quick Add Overlay (Desktop Hover) */}
        <div className="hidden md:flex absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 glass-overlay rounded-xl p-3 justify-between items-center shadow-lg border border-white/50 z-10">
          <div className="flex space-x-1.5 items-center">
            {product.swatches.slice(0, 3).map((swatch) => (
              <span
                key={swatch.name}
                title={swatch.name}
                className="w-5 h-5 rounded-full border border-white shadow-sm ring-1 ring-black/10 inline-block"
                style={{ backgroundColor: swatch.color }}
              />
            ))}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="bg-primary text-on-primary font-sans text-[11px] tracking-widest uppercase px-4 py-2 rounded-full hover:bg-surface-tint transition-colors flex items-center shadow-sm"
          >
            <span className="material-symbols-outlined mr-1 text-sm">add</span> Add
          </button>
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.id);
          }}
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
          className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-full backdrop-blur-sm flex items-center justify-center transition-colors shadow-sm z-10 ${
            favorite ? "bg-white text-error" : "bg-white/70 text-primary hover:bg-white"
          }`}
        >
          <span className={`material-symbols-outlined text-lg ${favorite ? "filled text-red-600" : ""}`}>
            favorite
          </span>
        </button>
      </div>

      {/* Product Content Details */}
      <div className="flex-1 flex flex-col items-center text-center">
        <span className="font-sans text-[10px] sm:text-[11px] text-secondary uppercase tracking-[0.2em] mb-1">
          {product.category}
        </span>
        <Link to={`/products/${product.id}`} className="group-hover:underline decoration-1 underline-offset-4">
          <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-primary font-normal mb-1.5 leading-snug">
            {product.title}
          </h3>
        </Link>
        <p className="font-sans text-xs text-secondary mb-3 line-clamp-2 px-2 max-w-sm font-light">
          {product.subtitle}
        </p>
        <p className="font-sans text-sm sm:text-base font-semibold text-primary mt-auto mb-3">
          Rs. {product.price.toLocaleString()}
        </p>

        {/* Mobile Quick Add Button */}
        <button
          onClick={() => addToCart(product)}
          className="md:hidden w-full bg-primary/95 text-on-primary font-sans text-[11px] tracking-widest uppercase py-2.5 rounded-xl transition-all flex items-center justify-center shadow-xs active:scale-[0.98]"
        >
          <span className="material-symbols-outlined mr-1 text-base">shopping_bag</span> Add to Cart
        </button>
      </div>
    </article>
  );
};
