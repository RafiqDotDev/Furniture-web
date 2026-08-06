import React, { createContext, useContext, useState, useEffect } from "react";
import type { Product } from "~/data/products";

export interface CartItem {
  product: Product;
  selectedSwatch?: { name: string; color: string };
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, swatch?: { name: string; color: string }, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  promoCode: string;
  applyPromoCode: (code: string) => boolean;
  discountPercentage: number;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("aurelian_cart");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return [];
        }
      }
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("aurelian_cart", JSON.stringify(cart));
    }
  }, [cart]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const addToCart = (product: Product, swatch?: { name: string; color: string }, quantity: number = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSwatch?.name === swatch?.name
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, selectedSwatch: swatch || product.swatches[0], quantity }];
      }
    });
    showToast(`Added ${product.title} to your collection.`);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast("Item removed from your cart.");
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyPromoCode = (code: string) => {
    if (code.trim().toUpperCase() === "AURELIAN10") {
      setPromoCode("AURELIAN10");
      setDiscountPercentage(10);
      showToast("Promo code AURELIAN10 applied (10% Off).");
      return true;
    } else if (code.trim().toUpperCase() === "VIP15") {
      setPromoCode("VIP15");
      setDiscountPercentage(15);
      showToast("VIP Concierge promo applied (15% Off).");
      return true;
    } else {
      showToast("Invalid promo code.");
      return false;
    }
  };

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercentage) / 100;
  const shipping = subtotal > 0 ? (subtotal > 200000 ? 0 : 5000) : 0; // White-Glove delivery free over Rs. 200,000
  const tax = Math.round((subtotal - discountAmount) * 0.08); // 8% Tax
  const total = Math.max(0, subtotal - discountAmount + shipping + tax);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        promoCode,
        applyPromoCode,
        discountPercentage,
        subtotal,
        shipping,
        tax,
        total,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
