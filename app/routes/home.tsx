import React from "react";
import { Link } from "react-router";
import { PRODUCTS } from "~/data/products";
import { ProductCard } from "~/components/ProductCard";

export default function Home() {
  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA90JXu6lcSQvu7rnMqEiiGWHSpdRT7DySlc5JbfnifqfqS_XyOxPtmZTOyMhnbEvwLotYmGNBGxdTFYHAgZ0o5zSxizPWkaoxCIdtLUMWPdq7iCXSQQuHX4rgVOPVDDlGF1v-LkdeP8qrXia8kdvSvhhSjugIJsIIp--EQZHtwpEcaP1iGzdWaM4nPq4vc_iCjCk9vfH-CpQljZhb6r4uMjRrLoTMs0tt6igLj56S0DJK6h46Yp88xdg"
            alt="Aurelian Luxury Interior"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-brightness-[0.95]" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 flex flex-col items-center max-w-4xl mx-auto my-auto">
          <span className="font-sans text-[10px] sm:text-xs tracking-wider sm:tracking-[0.25em] uppercase text-white/95 mb-4 bg-black/45 backdrop-blur-md px-3.5 sm:px-5 py-1.5 rounded-full border border-white/20 max-w-[90%] leading-relaxed">
            Aurelian Atelier • Peshawar & Nationwide Delivery
          </span>
          <h1 className="font-serif text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-normal mb-3 sm:mb-6 text-glow leading-tight sm:leading-tight">
            Crafted for Beautiful Living
          </h1>
          <p className="font-sans text-xs sm:text-base md:text-lg text-white/90 max-w-xl mx-auto mb-6 sm:mb-10 text-glow leading-relaxed font-light">
            Modern minimalism meets solid wood craftsmanship. Premium furniture collections designed for homes in Peshawar, Islamabad, Lahore, and across Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-2 sm:px-0">
            <Link
              to="/collections"
              className="bg-white text-primary font-sans text-xs tracking-[0.2em] uppercase px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-surface-container-low transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl font-semibold text-center"
            >
              Explore Collections
            </Link>
            <Link
              to="/categories"
              className="bg-black/40 backdrop-blur-md text-white border border-white/40 font-sans text-xs tracking-[0.2em] uppercase px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-white/20 transition-all duration-300 text-center"
            >
              View Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Masterpieces Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 pt-16 sm:pt-24 md:pt-28 pb-12 md:pb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16">
          <div>
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-secondary mb-2 block">
              Curated Selection
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-primary font-normal">Featured Masterpieces</h2>
          </div>
          <Link
            to="/collections"
            className="mt-3 md:mt-0 font-sans text-xs tracking-[0.2em] uppercase text-primary border-b border-primary pb-1 hover:opacity-70 transition-opacity flex items-center"
          >
            View All Pieces <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} offsetMargin={idx % 2 === 1} />
          ))}
        </div>
      </section>

      {/* Editorial Spotlight Banner */}
      <section className="relative my-12 sm:my-20 md:my-24 bg-surface-container-low overflow-hidden py-16 sm:py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-6 space-y-4 sm:space-y-6">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-secondary">
                Modular Sofa System
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-primary font-normal leading-tight">
                The Meridian Sectional Sofa
              </h2>
              <p className="font-sans text-sm sm:text-base text-secondary leading-relaxed font-light">
                Designed for spacious living rooms and family drawing rooms. Features durable stone linen fabric, deep plush seating, and heavy-duty structural wood framing.
              </p>
              <div className="pt-2 sm:pt-4">
                <Link
                  to="/products/meridian-sectional"
                  className="bg-primary text-on-primary font-sans text-xs tracking-[0.2em] uppercase px-8 py-3.5 rounded-full hover:bg-surface-tint transition-all shadow-lg inline-block text-center w-full sm:w-auto"
                >
                  View Details — Rs. 345,000
                </Link>
              </div>
            </div>
            <div className="md:col-span-6 mt-4 md:mt-0">
              <div className="glass-panel p-2.5 sm:p-3 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJMere7hXEONHkYEYeiqWaEwEL7k3n2nzBvqGqFmvieFJ2YdWNQw6waWgemmHL_QPU8xliDKZeTZl9QLyxQ4qvRuPstqcguVevk5QARxO8XxxVdOt0UO7G8CB_vlQmA1inLPu7tluBDszBODcD7WNP5vdTAKKJAzr3ug2v6AUSS5umR3ky_IXIVz0hwPPpjPLzyhMpkphl6Ipq6VOKtV6grl7sH7psv7J8a4OR9wU4sXPTTtdj5_kV6A"
                  alt="Meridian Modular System"
                  className="w-full aspect-[4/3] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Narrative Banner */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="glass-card p-3 sm:p-4 rounded-3xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvFLyigpURTjEk2PeW2uY77T_YXo4e9wn-aWVbVL-XYUmU-bdq5v9aZis_ZstFUCKvkiHyR4zBFCiNR2DCDXC35hOzWRf419bFgCrq7xtmSZqPWJJ0GfscprPZ27bz7-iSXwfdhZXVcigmG167K4cYXliXn_2YVsvCdX3pU_d3JX_0w_cTcM7lD6yFHpT3pmxx4d7OQ-H9qPeMo0aefRtb7MHgpYOJwAuaKUMnbEwQ_nC6mFzufv3DJg"
              alt="Artisan Craftsmanship"
              className="w-full aspect-[4/3] object-cover rounded-2xl grayscale"
            />
          </div>
          <div className="space-y-4 sm:space-y-6">
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-secondary">
              Craftsmanship & Quality
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-primary font-normal leading-tight">
              Solid Wood Joined by Master Artisans
            </h2>
            <p className="font-sans text-sm sm:text-base text-secondary leading-relaxed font-light">
              Every Aurelian piece is built using solid wood joinery techniques instead of temporary shortcuts. The surfaces are hand-finished with protective natural oils to highlight wood grain and ensure lifelong durability.
            </p>
            <Link
              to="/heritage"
              className="inline-flex items-center font-sans text-xs tracking-[0.2em] uppercase text-primary border-b border-primary pb-1 hover:opacity-70 transition-opacity"
            >
              Read Our Craftsmanship Story <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Care Highlights */}
      <section className="bg-surface-container py-12 sm:py-16 md:py-20 border-t border-outline-variant/30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 text-center">
          <div className="space-y-3 px-2 sm:px-4">
            <span className="material-symbols-outlined text-4xl text-primary font-light">local_shipping</span>
            <h3 className="font-serif text-lg sm:text-xl text-primary font-medium">Free White-Glove Delivery</h3>
            <p className="font-sans text-xs text-secondary leading-relaxed">
              Complete in-room delivery, placement, and assembly across Peshawar, Islamabad, Lahore, and all major cities.
            </p>
          </div>
          <div className="space-y-3 px-2 sm:px-4">
            <span className="material-symbols-outlined text-4xl text-primary font-light">verified_user</span>
            <h3 className="font-serif text-lg sm:text-xl text-primary font-medium">10-Year Frame Guarantee</h3>
            <p className="font-sans text-xs text-secondary leading-relaxed">
              Constructed with seasoned solid hardwood backed by a 10-year structural warranty.
            </p>
          </div>
          <div className="space-y-3 px-2 sm:px-4 sm:col-span-2 md:col-span-1">
            <span className="material-symbols-outlined text-4xl text-primary font-light">support_agent</span>
            <h3 className="font-serif text-lg sm:text-xl text-primary font-medium">Peshawar Showroom Support</h3>
            <p className="font-sans text-xs text-secondary leading-relaxed">
              Visit our Peshawar showroom on University Road or contact our local team for custom design consultations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
