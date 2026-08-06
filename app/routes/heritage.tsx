import React from "react";
import { Link } from "react-router";
export default function Heritage() {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16">
      {/* Header */}
      <header className="mb-12 sm:mb-20 text-center max-w-3xl mx-auto">
        <span className="font-sans text-xs tracking-[0.3em] uppercase text-secondary mb-2.5 block">
          The Aurelian Story
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl text-primary font-normal mb-4 sm:mb-6">
          Our Heritage & Craft
        </h1>
        <p className="font-sans text-sm sm:text-base text-secondary font-light leading-relaxed">
          Founded on the principle that true luxury is quiet, tactile, and enduring. We bridge classical European joinery techniques with contemporary architectural forms.
        </p>
      </header>

      {/* Hero Narrative Section */}
      <section className="mb-16 sm:mb-28">
        <div className="glass-panel p-3 sm:p-6 md:p-8 rounded-3xl overflow-hidden shadow-2xl border border-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
            <div className="lg:col-span-7">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvFLyigpURTjEk2PeW2uY77T_YXo4e9wn-aWVbVL-XYUmU-bdq5v9aZis_ZstFUCKvkiHyR4zBFCiNR2DCDXC35hOzWRf419bFgCrq7xtmSZqPWJJ0GfscprPZ27bz7-iSXwfdhZXVcigmG167K4cYXliXn_2YVsvCdX3pU_d3JX_0w_cTcM7lD6yFHpT3pmxx4d7OQ-H9qPeMo0aefRtb7MHgpYOJwAuaKUMnbEwQ_nC6mFzufv3DJg"
                alt="Artisan at work"
                className="w-full aspect-[16/10] object-cover rounded-2xl grayscale"
              />
            </div>
            <div className="lg:col-span-5 p-2 sm:p-4 space-y-4 sm:space-y-6">
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-secondary">
                Purity of Material
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-primary font-normal leading-tight">
                Hand-rubbed Oils & Mortise Joinery
              </h2>
              <p className="font-sans text-xs text-secondary leading-relaxed font-light">
                In an era of mass-produced disposable design, Aurelian Atelier remains dedicated to deliberate handcraft. Every curve of solid walnut and every hand-carved block of Nero Marquina marble is crafted by master artisans who have spent decades perfecting their trade.
              </p>
              <p className="font-sans text-xs text-secondary leading-relaxed font-light">
                We reject synthetic topcoats in favor of natural hand-rubbed organic oil seals, allowing the timber to breathe and develop a rich, luminous patina over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="mb-16 sm:mb-28 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
        <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4 border border-black/5">
          <span className="material-symbols-outlined text-4xl text-primary font-light">park</span>
          <h3 className="font-serif text-xl sm:text-2xl text-primary font-normal">FSC-Certified Timber</h3>
          <p className="font-sans text-xs text-secondary leading-relaxed font-light">
            All our solid American Walnut, White Oak, and European Ash timbers are harvested exclusively from sustainably managed, certified forests.
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4 border border-black/5">
          <span className="material-symbols-outlined text-4xl text-primary font-light">nature_people</span>
          <h3 className="font-serif text-xl sm:text-2xl text-primary font-normal">Artisanal Guilds</h3>
          <p className="font-sans text-xs text-secondary leading-relaxed font-light">
            We partner with generational woodworking workshops in Northern Italy, Denmark, and Valencia to preserve vanishing hand-finishing techniques.
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4 border border-black/5">
          <span className="material-symbols-outlined text-4xl text-primary font-light">workspace_premium</span>
          <h3 className="font-serif text-xl sm:text-2xl text-primary font-normal">Lifetime Guarantee</h3>
          <p className="font-sans text-xs text-secondary leading-relaxed font-light">
            Built to endure generations. Each authenticated Aurelian piece is stamped with a unique atelier serial number and decade-long frame guarantee.
          </p>
        </div>
      </section>

      {/* CTA Monograph Section */}
      <section className="bg-surface-container-low rounded-3xl p-6 sm:p-12 text-center max-w-3xl mx-auto border border-black/5">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary font-normal mb-3 sm:mb-4">
          Experience Aurelian Firsthand
        </h2>
        <p className="font-sans text-xs text-secondary mb-6 sm:mb-8 max-w-md mx-auto font-light leading-relaxed">
          Book a private consultation at our flagship ateliers or request a complimentary tactile material swatch monograph.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3.5 sm:gap-4">
          <Link
            to="/contact"
            className="bg-primary text-on-primary font-sans text-xs tracking-[0.2em] uppercase px-8 py-3.5 rounded-full hover:bg-surface-tint shadow-lg text-center"
          >
            Book Private Consultation
          </Link>
          <Link
            to="/collections"
            className="border border-primary text-primary font-sans text-xs tracking-[0.2em] uppercase px-8 py-3.5 rounded-full hover:bg-black/5 text-center"
          >
            Browse Collections
          </Link>
        </div>
      </section>
    </div>
  );
}
