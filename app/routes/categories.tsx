import React from "react";
import { Link } from "react-router";
import { PRODUCTS } from "~/data/products";

const CATEGORY_ITEMS = [
  {
    name: "Seating",
    tagline: "Architectural Lounges & Sculptural Chairs",
    description: "Low-profile lounges, bentwood dining chairs, and expansive modular systems upholstered in rich bouclé and tactile wools.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPFjWYjdhkerwZ_kgDvVNIegPTSHyx5g3aRFRaLIXtTLqVjQXGkloohVo7YpNzPDv-nwrbUukmx7v7dl1-3N8z_3fnuGi81bXxQr71zg3ptKMsVnVLtEgXAiwguPQMKZI13l-SA9vSukQDlGarZx2QGCd0HCp-9zLqWVTuML954tXoazxIRAn3sNX1ci4hgVzI0Gtfd3a23LfVtnmbpj9ls3ZXN-nncL190-txcLuYpz5hsUY5WMdImA",
    count: PRODUCTS.filter((p) => p.category === "Seating").length,
  },
  {
    name: "Tables",
    tagline: "Monolithic Coffee & Side Tables",
    description: "Carved from Nero Marquina black marble, dark honed travertine stone, and brushed brass.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-IrT28QBhwS6eN1aeb9nelZPLakx9buE3vY-vLjbJrWIRAoBVtu9QzKmciqMuSyWRo8JqnNglb9iqwRqIBT4u5uJp0v8jA6z8nu598V7TQDQpuyJJvxiIvBwZwOt1K2H4Dda5HtWNvnjcRP7Ey8ms7HibUI_fbXJP5UycdgQDSL59YCA4qYarV0RirYNJf79WkvHhbANQjreFR3hZypNb4cWiJb5fA8i2juuuS8q4bdpVuRYnICIeuw",
    count: PRODUCTS.filter((p) => p.category === "Tables").length,
  },
  {
    name: "Lighting",
    tagline: "Alabaster Pendants & Ambient Warmth",
    description: "Hand-turned Spanish alabaster stone lights emitting soft ambient glow across dining and living gallery rooms.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ4EloUXrRdl9MyPNoYKwmHAae0YM17Xse5pEM4lNOIgu7Q7Zli8Vxni6f5aQ9HUgLq6o_D2yrMzBZireDuYl1UiMhw85J_rEVeDxCxPT66YQWZfbpW6M8sg2GH7hdU_LgwaTwegOkFCggKR4XDIunRJcmZE6pXl2Cr8je3IWvt4hZoJHa94moRv4LFU6KeRtzSm4w7ZZivdsQ-vvHqGpTjMqOk_gz0s9RATDf7MHZOfaeWIE10ADF7g",
    count: PRODUCTS.filter((p) => p.category === "Lighting").length,
  },
  {
    name: "Storage",
    tagline: "Fluted Wood Credenzas & Cabinets",
    description: "Rhythmic fluted European Walnut and Ebony Oak facades with silent push-open touch mechanisms.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvFLyigpURTjEk2PeW2uY77T_YXo4e9wn-aWVbVL-XYUmU-bdq5v9aZis_ZstFUCKvkiHyR4zBFCiNR2DCDXC35hOzWRf419bFgCrq7xtmSZqPWJJ0GfscprPZ27bz7-iSXwfdhZXVcigmG167K4cYXliXn_2YVsvCdX3pU_d3JX_0w_cTcM7lD6yFHpT3pmxx4d7OQ-H9qPeMo0aefRtb7MHgpYOJwAuaKUMnbEwQ_nC6mFzufv3DJg",
    count: PRODUCTS.filter((p) => p.category === "Storage").length,
  },
];

export default function Categories() {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16">
      {/* Page Header */}
      <header className="mb-12 sm:mb-20 text-center md:text-left">
        <span className="font-sans text-xs tracking-[0.25em] uppercase text-secondary mb-2.5 block">
          Curated Spaces
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl text-primary font-normal mb-4">Explore Spaces</h1>
        <p className="font-sans text-sm sm:text-base text-secondary max-w-2xl font-light leading-relaxed">
          Architectural forms categorized by space and discipline. Each collection is curated to integrate seamlessly into contemporary gallery residences.
        </p>
      </header>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 lg:gap-12">
        {CATEGORY_ITEMS.map((cat) => (
          <Link
            key={cat.name}
            to={`/collections?category=${cat.name}`}
            className="group relative flex flex-col rounded-3xl overflow-hidden glass-panel hover-lift border border-black/5"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container-low">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-sans text-primary font-medium shadow-sm">
                {cat.count} Masterpieces
              </div>
            </div>
            <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <span className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-secondary block mb-1">
                  Collection
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-primary font-normal group-hover:underline underline-offset-4 decoration-1">
                  {cat.name}
                </h2>
                <p className="font-sans text-xs sm:text-sm font-medium text-primary/80 mt-1">{cat.tagline}</p>
                <p className="font-sans text-xs text-secondary mt-2.5 leading-relaxed font-light">
                  {cat.description}
                </p>
              </div>
              <div className="pt-2 flex items-center text-xs font-sans tracking-[0.2em] uppercase text-primary font-semibold">
                Explore {cat.name} <span className="material-symbols-outlined text-sm ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
