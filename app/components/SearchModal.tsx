import React, { useState } from "react";
import { Link } from "react-router";
import { PRODUCTS, type Product } from "~/data/products";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const filteredProducts: Product[] = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.material.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/40 backdrop-blur-md transition-opacity">
      <div className="bg-surface-container-lowest glass-panel w-full max-w-2xl rounded-2xl p-6 shadow-2xl border border-black/10 flex flex-col">
        <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
          <div className="flex items-center flex-1 mr-4">
            <span className="material-symbols-outlined text-secondary text-2xl mr-3">search</span>
            <input
              type="text"
              autoFocus
              placeholder="Search collections, seating, marble, walnut..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent border-none text-primary font-sans text-lg focus:outline-none focus:ring-0 placeholder:text-secondary/60"
            />
          </div>
          <button
            onClick={onClose}
            aria-label="Close search"
            className="w-8 h-8 rounded-full flex items-center justify-center text-secondary hover:text-primary hover:bg-black/5 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Results */}
        <div className="mt-4 max-h-96 overflow-y-auto hide-scrollbar space-y-4">
          {query.trim() === "" ? (
            <div className="py-8 text-center">
              <p className="font-sans text-xs tracking-widest uppercase text-secondary mb-3">Popular Searches</p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Lounge Chair", "Modular Sectional", "Walnut", "Side Table", "Lighting"].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 rounded-full border border-outline-variant/40 text-xs font-sans text-secondary hover:border-primary hover:text-primary transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="divide-y divide-outline-variant/20">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  onClick={onClose}
                  className="flex items-center space-x-4 py-3 hover:bg-surface-container-low px-3 rounded-xl transition-colors group"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-14 h-14 object-cover rounded-lg bg-surface-container-low"
                  />
                  <div className="flex-1">
                    <h4 className="font-serif text-base text-primary group-hover:text-black font-medium">
                      {product.title}
                    </h4>
                    <p className="font-sans text-xs text-secondary">{product.category} • {product.material}</p>
                  </div>
                  <span className="font-sans text-sm font-medium text-primary">Rs. {product.price.toLocaleString()}</span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-secondary">
              <p className="font-sans text-sm">No atelier pieces match "{query}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
