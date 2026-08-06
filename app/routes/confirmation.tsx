import React from "react";
import { useSearchParams, Link } from "react-router";

export default function Confirmation() {
  const [searchParams] = useSearchParams();
  const orderNumber = searchParams.get("order") || "AUR-892415";
  const clientName = searchParams.get("name") || "Valued Client";

  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-5 md:px-16 text-center">
      <div className="glass-panel p-8 sm:p-14 rounded-3xl space-y-8 border border-black/5 shadow-2xl">
        <div className="w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
          <span className="material-symbols-outlined text-3xl">check</span>
        </div>

        <div>
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-secondary mb-2 block">
            Welcome to Aurelian
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-primary font-normal mb-3">
            Purchase Confirmed
          </h1>
          <p className="font-sans text-sm text-secondary font-light max-w-md mx-auto">
            Thank you, {clientName}. Your commission reference number is{" "}
            <strong className="text-primary font-semibold">{orderNumber}</strong>. A confirmation email and digital monograph receipt have been dispatched.
          </p>
        </div>

        {/* White Glove Timeline Tracker */}
        <div className="border-t border-b border-outline-variant/30 py-8 my-6">
          <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-6">
            White-Glove Fulfillment Timeline
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
            <div className="space-y-1">
              <span className="w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center mx-auto mb-2">1</span>
              <p className="font-sans text-xs font-semibold text-primary">Order Confirmed</p>
              <p className="font-sans text-[10px] text-secondary">Today</p>
            </div>
            <div className="space-y-1">
              <span className="w-8 h-8 rounded-full bg-surface-container-high text-primary text-xs font-bold flex items-center justify-center mx-auto mb-2">2</span>
              <p className="font-sans text-xs font-medium text-secondary">Atelier Inspection</p>
              <p className="font-sans text-[10px] text-secondary">2-3 Business Days</p>
            </div>
            <div className="space-y-1">
              <span className="w-8 h-8 rounded-full bg-surface-container-high text-primary text-xs font-bold flex items-center justify-center mx-auto mb-2">3</span>
              <p className="font-sans text-xs font-medium text-secondary">Transit & Prep</p>
              <p className="font-sans text-[10px] text-secondary">5-7 Business Days</p>
            </div>
            <div className="space-y-1">
              <span className="w-8 h-8 rounded-full bg-surface-container-high text-primary text-xs font-bold flex items-center justify-center mx-auto mb-2">4</span>
              <p className="font-sans text-xs font-medium text-secondary">White-Glove Placement</p>
              <p className="font-sans text-[10px] text-secondary">Scheduled Window</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
          <button
            onClick={() => window.print()}
            className="border border-primary text-primary font-sans text-xs tracking-[0.2em] uppercase px-8 py-3.5 rounded-full hover:bg-black/5 transition-all"
          >
            Print Summary Receipt
          </button>
          <Link
            to="/collections"
            className="bg-primary text-on-primary font-sans text-xs tracking-[0.2em] uppercase px-8 py-3.5 rounded-full hover:bg-surface-tint transition-all shadow-lg"
          >
            Return to Collections
          </Link>
        </div>
      </div>
    </div>
  );
}
