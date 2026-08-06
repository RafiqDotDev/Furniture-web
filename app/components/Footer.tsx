import React from "react";
import { Link } from "react-router";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 sm:py-20 bg-surface-container-highest dark:bg-tertiary-container border-t border-outline-variant/30 mt-16 sm:mt-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
        {/* Brand Column */}
        <div className="col-span-1 flex flex-col justify-between space-y-4 sm:space-y-6">
          <div>
            <Link to="/" className="font-serif text-2xl sm:text-3xl text-primary tracking-tight font-medium">
              AURELIAN
            </Link>
            <p className="font-sans text-xs text-secondary mt-2.5 leading-relaxed max-w-xs font-light">
              Crafted for beautiful living. Premium modern furniture with white-glove delivery in Peshawar, Islamabad, Lahore, and nationwide Pakistan.
            </p>
          </div>
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-secondary pt-2 sm:pt-0">
            © {new Date().getFullYear()} AURELIAN ATELIER PESHAWAR. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Navigation Column 1 */}
        <div className="col-span-1 flex flex-col space-y-2.5 sm:space-y-3">
          <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-1.5 sm:mb-2">
            Furniture Collections
          </h4>
          <Link to="/collections?category=Seating" className="font-sans text-xs text-secondary hover:text-primary transition-colors">
            Luxury Lounge Chairs & Sofas
          </Link>
          <Link to="/collections?category=Tables" className="font-sans text-xs text-secondary hover:text-primary transition-colors">
            Marble & Wood Tables
          </Link>
          <Link to="/collections?category=Lighting" className="font-sans text-xs text-secondary hover:text-primary transition-colors">
            Alabaster Lighting
          </Link>
          <Link to="/collections?category=Storage" className="font-sans text-xs text-secondary hover:text-primary transition-colors">
            Wooden Storage Cabinets
          </Link>
          <Link to="/collections" className="font-sans text-xs text-secondary hover:text-primary transition-colors">
            View All Products
          </Link>
        </div>

        {/* Navigation Column 2 */}
        <div className="col-span-1 flex flex-col space-y-2.5 sm:space-y-3">
          <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-1.5 sm:mb-2">
            Customer Support
          </h4>
          <Link to="/contact" className="font-sans text-xs text-secondary hover:text-primary transition-colors">
            Peshawar Showroom Consultation
          </Link>
          <Link to="/contact" className="font-sans text-xs text-secondary hover:text-primary transition-colors">
            Nationwide Delivery Details
          </Link>
          <Link to="/contact" className="font-sans text-xs text-secondary hover:text-primary transition-colors">
            Showroom Locations (Peshawar, ISB, LHR)
          </Link>
          <Link to="/heritage" className="font-sans text-xs text-secondary hover:text-primary transition-colors">
            Solid Wood Craftsmanship
          </Link>
        </div>

        {/* Newsletter Column */}
        <div className="col-span-1 sm:col-span-2 md:col-span-1 flex flex-col space-y-3 sm:space-y-4">
          <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-primary font-semibold">
            Stay Updated
          </h4>
          <p className="font-sans text-xs text-secondary leading-relaxed font-light">
            Subscribe to receive updates on new furniture arrivals and exclusive offers.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing to Aurelian Peshawar updates.");
            }}
            className="flex flex-col space-y-2"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="px-4 py-2.5 rounded-lg border border-outline-variant/50 bg-white/60 font-sans text-xs text-primary focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="bg-primary text-on-primary font-sans text-xs tracking-widest uppercase py-2.5 rounded-lg hover:bg-surface-tint transition-all active:scale-[0.99]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};
