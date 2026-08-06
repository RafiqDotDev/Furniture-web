import React from "react";
import { Link } from "react-router";
import { useCart } from "~/context/CartContext";

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, subtotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-full sm:max-w-md bg-surface-container-lowest glass-panel shadow-2xl border-l border-outline-variant/30 flex flex-col animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-outline-variant/30 flex items-center justify-between">
            <h2 className="font-serif text-xl sm:text-2xl text-primary font-medium">Your Collection ({cart.length})</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              aria-label="Close cart"
              className="text-secondary hover:text-primary transition-colors p-1.5 rounded-full hover:bg-black/5"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto hide-scrollbar p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <span className="material-symbols-outlined text-5xl text-outline mb-4">shopping_bag</span>
                <p className="font-serif text-xl text-primary mb-2">Your collection is empty</p>
                <p className="font-sans text-xs text-secondary max-w-xs mb-6">
                  Explore our curated furniture masterpieces to add timeless architectural pieces.
                </p>
                <Link
                  to="/collections"
                  onClick={() => setIsCartOpen(false)}
                  className="bg-primary text-on-primary font-sans text-xs tracking-widest uppercase px-6 py-3 rounded-full hover:bg-surface-tint transition-all"
                >
                  Explore Collections
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSwatch?.name}`}
                  className="flex space-x-4 pb-6 border-b border-outline-variant/20 group"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="w-20 h-24 object-cover rounded-xl bg-surface-container-low"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-base text-primary font-medium">{item.product.title}</h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          aria-label="Remove item"
                          className="text-secondary hover:text-error transition-colors"
                        >
                          <span className="material-symbols-outlined text-lg">delete</span>
                        </button>
                      </div>
                      {item.selectedSwatch && (
                        <p className="font-sans text-xs text-secondary mt-1">
                          Finish: <span className="text-primary font-medium">{item.selectedSwatch.name}</span>
                        </p>
                      )}
                      <p className="font-sans text-sm font-semibold text-primary mt-1">
                        Rs. {item.product.price.toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center space-x-3 mt-3">
                      <div className="flex items-center border border-outline-variant/40 rounded-full px-2 py-0.5 bg-surface-container-low">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="text-secondary hover:text-primary px-1 text-sm"
                        >
                          -
                        </button>
                        <span className="font-sans text-xs font-semibold text-primary px-3">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="text-secondary hover:text-primary px-1 text-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-outline-variant/30 bg-surface-container-low/50">
              <div className="flex justify-between items-center mb-4">
                <span className="font-sans text-xs tracking-widest uppercase text-secondary">Subtotal</span>
                <span className="font-sans text-lg font-bold text-primary">Rs. {subtotal.toLocaleString()}</span>
              </div>
              <p className="font-sans text-[11px] text-secondary mb-6">
                Complimentary White-Glove delivery on orders over Rs. 200,000 across Pakistan.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-center border border-primary text-primary font-sans text-xs tracking-widest uppercase py-3 rounded-xl hover:bg-black/5 transition-all"
                >
                  View Cart
                </Link>
                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-center bg-primary text-on-primary font-sans text-xs tracking-widest uppercase py-3 rounded-xl hover:bg-surface-tint transition-all shadow-md"
                >
                  Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
