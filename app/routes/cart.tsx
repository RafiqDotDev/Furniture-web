import React, { useState } from "react";
import { Link } from "react-router";
import { useCart } from "~/context/CartContext";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    subtotal,
    shipping,
    tax,
    total,
    promoCode,
    applyPromoCode,
    discountPercentage,
  } = useCart();

  const [inputCode, setInputCode] = useState("");

  const handleApplyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCode) {
      applyPromoCode(inputCode);
      setInputCode("");
    }
  };

  return (
    <div className="pt-32 pb-24 max-w-[1440px] mx-auto px-5 md:px-16">
      <header className="mb-12 border-b border-outline-variant/30 pb-6 flex justify-between items-end">
        <div>
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-secondary mb-2 block">
            Cart Overview
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-primary font-normal">Your Shopping Cart</h1>
        </div>
        <Link
          to="/collections"
          className="font-sans text-xs tracking-[0.2em] uppercase text-primary underline underline-offset-4 hover:opacity-70"
        >
          Continue Shopping
        </Link>
      </header>

      {cart.length === 0 ? (
        <div className="py-24 text-center glass-panel rounded-3xl p-12 max-w-2xl mx-auto">
          <span className="material-symbols-outlined text-5xl text-outline mb-4">shopping_bag</span>
          <h2 className="font-serif text-3xl text-primary mb-3">Your Cart is Empty</h2>
          <p className="font-sans text-sm text-secondary mb-8 font-light max-w-md mx-auto">
            Explore our curated furniture collection to add modern luxury pieces to your home.
          </p>
          <Link
            to="/collections"
            className="bg-primary text-on-primary font-sans text-xs tracking-[0.2em] uppercase px-8 py-3.5 rounded-full hover:bg-surface-tint shadow-lg inline-block"
          >
            Browse Furniture
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Items List */}
          <div className="lg:col-span-8 space-y-6">
            {cart.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedSwatch?.name}`}
                className="glass-panel p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 border border-black/5"
              >
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-28 h-32 object-cover rounded-xl bg-surface-container-low flex-shrink-0"
                />

                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-start">
                    <Link to={`/products/${item.product.id}`}>
                      <h3 className="font-serif text-xl text-primary font-medium hover:underline">
                        {item.product.title}
                      </h3>
                    </Link>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-secondary hover:text-error transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <span className="material-symbols-outlined text-xl">delete</span>
                    </button>
                  </div>
                  {item.selectedSwatch && (
                    <p className="font-sans text-xs text-secondary">
                      Finish: <strong className="text-primary">{item.selectedSwatch.name}</strong>
                    </p>
                  )}
                  <p className="font-sans text-xs text-secondary">{item.product.dimensions}</p>
                  <p className="font-sans text-base font-bold text-primary pt-2">
                    Rs. {item.product.price.toLocaleString()}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-3 pt-2 sm:pt-0">
                  <div className="flex items-center border border-outline-variant/40 rounded-full px-3 py-1 bg-surface-container-low">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="text-secondary hover:text-primary px-1 font-bold"
                    >
                      -
                    </button>
                    <span className="font-sans text-xs font-bold text-primary px-4">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="text-secondary hover:text-primary px-1 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-4">
            <div className="glass-panel p-8 rounded-3xl space-y-6 sticky top-32 border border-black/5 shadow-xl">
              <h2 className="font-serif text-2xl text-primary font-normal pb-4 border-b border-outline-variant/30">
                Order Summary
              </h2>

              <div className="space-y-3 font-sans text-xs">
                <div className="flex justify-between text-secondary">
                  <span>Subtotal</span>
                  <span className="text-primary font-semibold">Rs. {subtotal.toLocaleString()}</span>
                </div>

                {discountPercentage > 0 && (
                  <div className="flex justify-between text-green-600 font-medium">
                    <span>Discount ({discountPercentage}% Off - {promoCode})</span>
                    <span>-Rs. {((subtotal * discountPercentage) / 100).toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between text-secondary">
                  <span>White-Glove Delivery</span>
                  <span className="text-primary font-semibold">
                    {subtotal > 200000 ? "FREE (Orders over Rs. 200k)" : "Rs. 5,000"}
                  </span>
                </div>

                <div className="flex justify-between text-secondary">
                  <span>GST / Tax (Included)</span>
                  <span className="text-primary font-semibold">Rs. {tax.toLocaleString()}</span>
                </div>

                <hr className="border-outline-variant/30 my-2" />

                <div className="flex justify-between text-base font-bold text-primary pt-1">
                  <span>Total Amount</span>
                  <span>Rs. {total.toLocaleString()}</span>
                </div>
              </div>

              {/* Promo Code Input Form */}
              <form onSubmit={handleApplyCode} className="pt-2">
                <label className="font-sans text-[11px] uppercase tracking-wider text-secondary block mb-2">
                  Discount Promo Code
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Try AURELIAN10 or VIP15"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    className="flex-1 px-3 py-2 border border-outline-variant/40 rounded-xl font-sans text-xs bg-white text-primary focus:outline-none focus:border-primary"
                  />
                  <button
                    type="submit"
                    className="bg-secondary text-white px-4 py-2 rounded-xl font-sans text-xs uppercase tracking-wider hover:bg-primary transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </form>

              <Link
                to="/checkout"
                className="w-full block text-center bg-primary text-on-primary font-sans text-xs tracking-[0.2em] uppercase py-4 rounded-2xl hover:bg-surface-tint transition-all shadow-xl font-bold"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
