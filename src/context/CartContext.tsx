import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, ProductVariant } from "../data/products";

export interface CartItem {
  id: string; // unique item id incorporating variant
  productId: string;
  name: string;
  slug: string;
  price: number;
  quantity: number;
  variant?: ProductVariant;
  imageUrl: string;
}

interface CartContextType {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  gstAmount: number;
  shippingMethod: "delivery" | "pickup";
  shippingFee: number;
  discount: number;
  promoCode: string;
  total: number;
  isDrawerOpen: boolean;
  toastMessage: string | null;
  addItem: (product: Product, quantity?: number, variant?: ProductVariant) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  setShippingMethod: (method: "delivery" | "pickup") => void;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  clearCart: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "marcos_roofing_cart_v1";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [shippingMethod, setShippingMethod] = useState<"delivery" | "pickup">("delivery");
  const [promoCode, setPromoCode] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // safe fallback if storage is restricted
    }
  }, [items]);

  // Toast clear timeout
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // In Australia GST (10%) is already included in retail display prices: GST component = Total / 11
  const gstAmount = subtotal > 0 ? Number((subtotal / 11).toFixed(2)) : 0;

  // Melbourne Metro delivery: Flat $35 or FREE over $300. Pickup is always $0.
  const shippingFee =
    shippingMethod === "pickup"
      ? 0
      : subtotal >= 300 || subtotal === 0
      ? 0
      : 35.0;

  const total = Math.max(0, subtotal - discount + shippingFee);

  const addItem = (product: Product, quantity = 1, variant?: ProductVariant) => {
    const variantId = variant ? variant.id : "default";
    const itemId = `${product.id}-${variantId}`;
    const price = product.price + (variant?.priceDelta || 0);

    setItems((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: itemId,
          productId: product.id,
          name: product.name,
          slug: product.slug,
          price,
          quantity,
          variant,
          imageUrl: product.imageUrl
        }
      ];
    });

    setToastMessage(`Added ${product.name} to cart`);
    setIsDrawerOpen(true);
  };

  const removeItem = (itemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    );
  };

  const applyPromoCode = (code: string) => {
    const trimmed = code.trim().toUpperCase();
    if (trimmed === "TRADE10") {
      const disc = Number((subtotal * 0.1).toFixed(2));
      setDiscount(disc);
      setPromoCode("TRADE10");
      return { success: true, message: "10% Trade Discount applied!" };
    }
    if (trimmed === "FREESHIP") {
      setShippingMethod("pickup");
      setPromoCode("FREESHIP");
      return { success: true, message: "Free Delivery promo applied!" };
    }
    return { success: false, message: "Invalid promo code. Try 'TRADE10' for 10% off." };
  };

  const clearCart = () => {
    setItems([]);
    setDiscount(0);
    setPromoCode("");
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        subtotal,
        gstAmount,
        shippingMethod,
        shippingFee,
        discount,
        promoCode,
        total,
        isDrawerOpen,
        toastMessage,
        addItem,
        removeItem,
        updateQuantity,
        setShippingMethod,
        applyPromoCode,
        clearCart,
        openDrawer,
        closeDrawer
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
