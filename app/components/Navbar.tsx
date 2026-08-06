import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { useCart } from "~/context/CartContext";
import { useWishlist } from "~/context/WishlistContext";
import { SearchModal } from "./SearchModal";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { cart, setIsCartOpen } = useCart();
  const { wishlistIds } = useWishlist();
  const location = useLocation();

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header
        id="global-nav"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? "bg-surface-container-lowest/90 backdrop-blur-xl py-3.5 shadow-sm border-b border-outline-variant/30"
            : "bg-transparent py-5 backdrop-blur-xs"
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-5 md:px-12 flex items-center justify-between">
          
          {/* Left Column: Desktop Nav Links / Mobile Hamburger */}
          <div className="flex-1 flex items-center justify-start">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
              className="md:hidden text-primary focus:outline-none p-1.5 -ml-1 rounded-lg hover:bg-black/5 transition-colors"
            >
              <span className="material-symbols-outlined text-2xl block">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-7">
              <Link
                to="/collections"
                className={`font-sans text-xs tracking-[0.2em] uppercase py-1 relative transition-colors duration-300 ${
                  isActive("/collections")
                    ? "text-primary font-bold border-b-2 border-primary"
                    : "text-secondary hover:text-primary"
                }`}
              >
                Collections
              </Link>
              <Link
                to="/categories"
                className={`font-sans text-xs tracking-[0.2em] uppercase py-1 relative transition-colors duration-300 ${
                  isActive("/categories")
                    ? "text-primary font-bold border-b-2 border-primary"
                    : "text-secondary hover:text-primary"
                }`}
              >
                Categories
              </Link>
              <Link
                to="/heritage"
                className={`font-sans text-xs tracking-[0.2em] uppercase py-1 relative transition-colors duration-300 ${
                  isActive("/heritage")
                    ? "text-primary font-bold border-b-2 border-primary"
                    : "text-secondary hover:text-primary"
                }`}
              >
                Craftsmanship
              </Link>
              <Link
                to="/contact"
                className={`font-sans text-xs tracking-[0.2em] uppercase py-1 relative transition-colors duration-300 ${
                  isActive("/contact")
                    ? "text-primary font-bold border-b-2 border-primary"
                    : "text-secondary hover:text-primary"
                }`}
              >
                Showroom Support
              </Link>
            </nav>
          </div>

          {/* Center Column: Brand Logo */}
          <div className="flex-1 flex justify-center items-center text-center">
            <Link
              to="/"
              className="font-serif text-2xl md:text-3xl tracking-[0.05em] text-primary font-normal hover:opacity-85 transition-opacity"
            >
              AURELIAN
            </Link>
          </div>

          {/* Right Column: Action Icons */}
          <div className="flex-1 flex items-center justify-end space-x-4 md:space-x-5">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search Catalog"
              className="text-primary hover:opacity-75 transition-opacity p-1.5 rounded-full hover:bg-black/5"
            >
              <span className="material-symbols-outlined text-xl md:text-2xl block">search</span>
            </button>

            {/* Wishlist Link */}
            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="relative text-primary hover:opacity-75 transition-opacity p-1.5 rounded-full hover:bg-black/5"
            >
              <span className="material-symbols-outlined text-xl md:text-2xl block">favorite</span>
              {wishlistIds.length > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-on-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm">
                  {wishlistIds.length}
                </span>
              )}
            </Link>

            {/* Cart Drawer Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Bag"
              className="relative text-primary hover:opacity-75 transition-opacity p-1.5 rounded-full hover:bg-black/5"
            >
              <span className="material-symbols-outlined text-xl md:text-2xl block">shopping_bag</span>
              {totalCartCount > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-on-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm">
                  {totalCartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-surface-container-lowest/95 backdrop-blur-2xl border-b border-outline-variant/30 px-6 py-6 space-y-4 animate-in slide-in-from-top-3 duration-200">
            <Link
              to="/collections"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-sans text-xs tracking-[0.2em] uppercase text-primary font-semibold py-1"
            >
              Furniture Collections
            </Link>
            <Link
              to="/categories"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-sans text-xs tracking-[0.2em] uppercase text-primary font-semibold py-1"
            >
              Curated Spaces
            </Link>
            <Link
              to="/heritage"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-sans text-xs tracking-[0.2em] uppercase text-primary font-semibold py-1"
            >
              Our Craftsmanship
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-sans text-xs tracking-[0.2em] uppercase text-primary font-semibold py-1"
            >
              Peshawar Showroom Support
            </Link>
            <div className="pt-3 border-t border-outline-variant/20 flex justify-between items-center">
              <Link
                to="/wishlist"
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-xs tracking-[0.2em] uppercase text-secondary font-medium"
              >
                Saved Favorites ({wishlistIds.length})
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="font-sans text-xs tracking-[0.2em] uppercase text-primary font-bold"
              >
                Cart ({totalCartCount})
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
