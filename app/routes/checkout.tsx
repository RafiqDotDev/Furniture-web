import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useCart } from "~/context/CartContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, total, subtotal, shipping, tax, clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: "Muhammad Ahmad",
    email: "ahmad@example.pk",
    phone: "0300 5551234",
    address: "House 12, Street 4, Sector F-3, Phase 6, Hayatabad",
    city: "Peshawar",
    province: "KPK",
    deliveryOption: "white-glove",
    paymentMethod: "cod",
    notes: "Please call before arrival for white-glove setup.",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const orderNumber = `AUR-PK-${Math.floor(100000 + Math.random() * 900000)}`;
    clearCart();
    navigate(`/confirmation?order=${orderNumber}&name=${encodeURIComponent(formData.fullName)}`);
  };

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-24 max-w-[1440px] mx-auto px-5 md:px-16 text-center">
        <div className="glass-panel p-12 rounded-3xl max-w-xl mx-auto space-y-4">
          <h1 className="font-serif text-3xl text-primary">Your Cart is Empty</h1>
          <p className="font-sans text-xs text-secondary">
            Please add items to your cart before proceeding to checkout.
          </p>
          <Link
            to="/collections"
            className="inline-block bg-primary text-on-primary font-sans text-xs uppercase tracking-widest px-8 py-3 rounded-full"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 max-w-[1440px] mx-auto px-5 md:px-16">
      <header className="mb-12 text-center md:text-left">
        <span className="font-sans text-xs tracking-[0.25em] uppercase text-secondary mb-2 block">
          Order Checkout
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-primary font-normal">Checkout</h1>
      </header>

      <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Checkout Form */}
        <div className="lg:col-span-7 space-y-10">
          {/* Shipping Address */}
          <div className="glass-panel p-8 rounded-3xl space-y-6 border border-black/5">
            <h2 className="font-serif text-2xl text-primary font-medium border-b border-outline-variant/30 pb-3">
              1. Delivery Address & Contact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="font-sans text-[11px] uppercase tracking-wider text-secondary block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/40 font-sans text-xs bg-white text-primary focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="font-sans text-[11px] uppercase tracking-wider text-secondary block mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/40 font-sans text-xs bg-white text-primary focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="font-sans text-[11px] uppercase tracking-wider text-secondary block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/40 font-sans text-xs bg-white text-primary focus:outline-none focus:border-primary"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="font-sans text-[11px] uppercase tracking-wider text-secondary block mb-1">
                  Full Delivery Address
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/40 font-sans text-xs bg-white text-primary focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="font-sans text-[11px] uppercase tracking-wider text-secondary block mb-1">
                  City
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/40 font-sans text-xs bg-white text-primary focus:outline-none focus:border-primary cursor-pointer"
                >
                  <option value="Peshawar">Peshawar</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Mardan">Mardan</option>
                  <option value="Abbottabad">Abbottabad</option>
                </select>
              </div>
              <div>
                <label className="font-sans text-[11px] uppercase tracking-wider text-secondary block mb-1">
                  Province / Territory
                </label>
                <input
                  type="text"
                  name="province"
                  required
                  value={formData.province}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant/40 font-sans text-xs bg-white text-primary focus:outline-none focus:border-primary"
                />
              </div>
            </div>
          </div>

          {/* Delivery Option */}
          <div className="glass-panel p-8 rounded-3xl space-y-4 border border-black/5">
            <h2 className="font-serif text-2xl text-primary font-medium border-b border-outline-variant/30 pb-3">
              2. White-Glove Home Delivery
            </h2>
            <label className="flex items-center p-4 border border-primary rounded-2xl cursor-pointer bg-surface-container-low/50">
              <input
                type="radio"
                name="deliveryOption"
                value="white-glove"
                checked={true}
                readOnly
                className="accent-primary"
              />
              <div className="ml-4 flex-1">
                <span className="font-serif text-base text-primary font-semibold block">
                  Free In-Room Placement & Full Assembly
                </span>
                <span className="font-sans text-xs text-secondary font-light">
                  Delivered by our specialist furniture team directly to your room.
                </span>
              </div>
              <span className="font-sans text-xs font-bold text-primary">
                {subtotal > 200000 ? "FREE" : "Rs. 5,000"}
              </span>
            </label>
          </div>

          {/* Payment Method */}
          <div className="glass-panel p-8 rounded-3xl space-y-6 border border-black/5">
            <h2 className="font-serif text-2xl text-primary font-medium border-b border-outline-variant/30 pb-3">
              3. Select Payment Method
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: "cod", label: "Cash on Delivery" },
                { id: "bank", label: "Direct Bank Transfer" },
                { id: "card", label: "Credit / Debit Card" },
              ].map((method) => (
                <button
                  type="button"
                  key={method.id}
                  onClick={() => setFormData({ ...formData, paymentMethod: method.id })}
                  className={`py-3.5 px-4 rounded-xl border text-xs font-sans uppercase tracking-wider transition-all ${
                    formData.paymentMethod === method.id
                      ? "border-primary bg-primary text-on-primary font-bold shadow-md"
                      : "border-outline-variant/40 text-secondary bg-white hover:border-primary"
                  }`}
                >
                  {method.label}
                </button>
              ))}
            </div>

            {formData.paymentMethod === "bank" && (
              <div className="p-4 bg-surface-container-low rounded-xl text-xs font-sans space-y-1 text-secondary">
                <p className="font-semibold text-primary">Aurelian Atelier Bank Details:</p>
                <p>Bank: Meezan Bank / HBL</p>
                <p>Account Title: Aurelian Atelier Furniture</p>
                <p>IBAN: PK68 MEZN 0001 0203 0405 0607</p>
              </div>
            )}

            {formData.paymentMethod === "cod" && (
              <div className="p-4 bg-surface-container-low rounded-xl text-xs font-sans text-secondary">
                <p className="text-primary font-semibold">Cash on Delivery Confirmation</p>
                <p className="mt-1 font-light">
                  Pay securely upon home delivery and white-glove inspection by our team.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5">
          <div className="glass-panel p-8 rounded-3xl space-y-6 sticky top-32 border border-black/5 shadow-2xl">
            <h2 className="font-serif text-2xl text-primary font-normal pb-4 border-b border-outline-variant/30">
              Order Summary ({cart.length} items)
            </h2>

            <div className="divide-y divide-outline-variant/20 max-h-60 overflow-y-auto hide-scrollbar">
              {cart.map((item) => (
                <div key={item.product.id} className="py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="w-12 h-12 object-cover rounded-lg bg-surface-container-low"
                    />
                    <div>
                      <h4 className="font-serif text-sm text-primary font-medium">{item.product.title}</h4>
                      <p className="font-sans text-[11px] text-secondary">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-sans text-xs font-bold text-primary">
                    Rs. {(item.product.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <hr className="border-outline-variant/30" />

            <div className="space-y-2 font-sans text-xs">
              <div className="flex justify-between text-secondary">
                <span>Subtotal</span>
                <span className="text-primary font-semibold">Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-secondary">
                <span>White-Glove Delivery</span>
                <span className="text-primary font-semibold">
                  {subtotal > 200000 ? "FREE" : "Rs. 5,000"}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-primary pt-2 border-t border-outline-variant/30">
                <span>Total Amount</span>
                <span>Rs. {total.toLocaleString()}</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-on-primary font-sans text-xs tracking-[0.2em] uppercase py-4 rounded-2xl hover:bg-surface-tint transition-all shadow-xl font-bold"
            >
              Place Order — Rs. {total.toLocaleString()}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
