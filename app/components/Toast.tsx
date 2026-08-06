import React from "react";
import { useCart } from "~/context/CartContext";

export const Toast: React.FC = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="glass-panel bg-primary text-on-primary border border-white/20 px-5 py-3.5 rounded-2xl shadow-2xl flex items-center space-x-3">
        <span className="material-symbols-outlined text-green-400 text-xl">check_circle</span>
        <span className="font-sans text-xs tracking-wider uppercase font-medium">{toastMessage}</span>
      </div>
    </div>
  );
};
