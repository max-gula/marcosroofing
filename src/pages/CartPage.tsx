import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Truck,
  ArrowLeft
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const CartPage: React.FC = () => {
  const {
    items,
    itemCount,
    subtotal,
    gstAmount,
    shippingFee,
    shippingMethod,
    setShippingMethod,
    discount,
    promoCode,
    total,
    updateQuantity,
    removeItem,
    applyPromoCode,
    clearCart
  } = useCart();

  const [promoInput, setPromoInput] = useState("");
  const [promoFeedback, setPromoFeedback] = useState<{ success: boolean; message: string } | null>(null);
  const navigate = useNavigate();

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput) return;
    const res = applyPromoCode(promoInput);
    setPromoFeedback(res);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] pb-24">
      {/* Header */}
      <div className="bg-[#141414] border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Shopping Cart" }]} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight text-[#F5F5F5]">
              Your Roofing Supplies Cart
            </h1>
            <p className="text-xs text-[#8A8A8A] mt-1">
              Review trade materials before checking out for Melbourne delivery or warehouse pickup.
            </p>
          </div>
          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="text-xs text-[#8A8A8A] hover:text-red-400 flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Cart</span>
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="bg-[#141414] border border-[#1F1F1F] rounded-3xl p-12 text-center max-w-lg mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#0A0A0A] border border-[#1F1F1F] flex items-center justify-center text-[#8A8A8A] mx-auto">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h2 className="font-heading font-black text-xl text-[#F5F5F5] uppercase">
              Your cart is empty
            </h2>
            <p className="text-xs text-[#8A8A8A] leading-relaxed">
              You haven't added any trade roofing membranes, replacement tiles, or flexible pointing compound yet.
            </p>
            <div className="pt-2">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#D7192A] hover:bg-[#B01020] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg"
              >
                <span>Browse Roofing Supplies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Items Table */}
            <div className="lg:col-span-8 bg-[#141414] border border-[#1F1F1F] rounded-3xl p-6 space-y-4">
              <div className="divide-y divide-[#1F1F1F]">
                {items.map((item) => (
                  <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <div className="flex items-center gap-4 min-w-0">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-xl bg-[#0A0A0A] shrink-0 border border-[#1F1F1F]"
                      />
                      <div className="min-w-0">
                        <Link
                          to={`/shop/${item.slug}`}
                          className="font-heading font-bold text-sm text-[#F5F5F5] hover:text-[#D7192A] transition-colors block truncate"
                        >
                          {item.name}
                        </Link>
                        {item.variant && (
                          <div className="text-xs text-[#8A8A8A] mt-0.5">
                            Colour / Variant: <span className="text-[#F5F5F5]">{item.variant.name}</span>
                          </div>
                        )}
                        <div className="text-xs text-[#8A8A8A] mt-0.5">
                          Unit Price: <span className="font-mono text-[#F5F5F5]">${item.price.toFixed(2)} AUD</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-0 border-[#1F1F1F]">
                      {/* Stepper */}
                      <div className="flex items-center bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl p-0.5">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:text-[#D7192A]"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-bold tabular-nums">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:text-[#D7192A]"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Subtotal for line */}
                      <div className="text-right min-w-[80px]">
                        <div className="font-heading font-black text-base text-[#F5F5F5] tabular-nums">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-[11px] text-neutral-500 hover:text-red-400 mt-0.5"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Free delivery bar */}
              <div className="mt-6 p-4 bg-[#0A0A0A] border border-[#1F1F1F] rounded-2xl text-xs space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[#8A8A8A]">
                    {subtotal >= 300
                      ? "🎉 Qualified for Free Melbourne Metro Delivery!"
                      : `Add $${(300 - subtotal).toFixed(2)} more to qualify for Free Metro Delivery`}
                  </span>
                  <span className="font-bold text-[#F5F5F5]">{Math.min(100, Math.round((subtotal / 300) * 100))}%</span>
                </div>
                <div className="w-full bg-[#141414] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#D7192A] h-full transition-all"
                    style={{ width: `${Math.min(100, (subtotal / 300) * 100)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Summary Box */}
            <div className="lg:col-span-4 bg-[#141414] border border-[#1F1F1F] rounded-3xl p-6 sm:p-8 space-y-6">
              <h2 className="font-heading font-black text-xl uppercase tracking-tight text-[#F5F5F5]">
                Order Summary
              </h2>

              {/* Delivery method selector */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8A8A8A]">
                  Fulfilment Method
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setShippingMethod("delivery")}
                    className={`p-3 rounded-xl text-xs font-semibold border flex flex-col items-center gap-1 transition-all ${
                      shippingMethod === "delivery"
                        ? "bg-[#0A0A0A] border-[#D7192A] text-white"
                        : "bg-[#0A0A0A] border-[#1F1F1F] text-[#8A8A8A]"
                    }`}
                  >
                    <Truck className="w-4 h-4 text-[#D7192A]" />
                    <span>Metro Delivery</span>
                    <span className="text-[10px] text-neutral-400">
                      {subtotal >= 300 ? "FREE" : "$35.00 AUD"}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShippingMethod("pickup")}
                    className={`p-3 rounded-xl text-xs font-semibold border flex flex-col items-center gap-1 transition-all ${
                      shippingMethod === "pickup"
                        ? "bg-[#0A0A0A] border-[#D7192A] text-white"
                        : "bg-[#0A0A0A] border-[#1F1F1F] text-[#8A8A8A]"
                    }`}
                  >
                    <ShieldCheck className="w-4 h-4 text-[#D7192A]" />
                    <span>Click & Collect</span>
                    <span className="text-[10px] text-neutral-400">Bundoora (FREE)</span>
                  </button>
                </div>
              </div>

              {/* Promo Code Form */}
              <form onSubmit={handleApply} className="space-y-2">
                <label className="block text-xs font-semibold text-[#8A8A8A]">
                  Trade Promo Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="e.g. TRADE10"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    className="flex-1 bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl px-3 py-2 text-xs uppercase text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#1F1F1F] hover:bg-[#D7192A] text-white text-xs font-bold uppercase rounded-xl transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {promoFeedback && (
                  <p className={`text-xs ${promoFeedback.success ? "text-emerald-400" : "text-red-400"}`}>
                    {promoFeedback.message}
                  </p>
                )}
              </form>

              {/* Price Breakdown */}
              <div className="space-y-2.5 text-xs text-[#8A8A8A] pt-4 border-t border-[#1F1F1F]">
                <div className="flex justify-between">
                  <span>Items Subtotal</span>
                  <span className="text-[#F5F5F5] font-semibold tabular-nums">${subtotal.toFixed(2)} AUD</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount ({promoCode})</span>
                    <span className="tabular-nums">-${discount.toFixed(2)} AUD</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="text-[#F5F5F5] font-semibold tabular-nums">
                    {shippingFee === 0 ? "FREE" : `$${shippingFee.toFixed(2)} AUD`}
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-neutral-500 pt-1">
                  <span>Includes 10% Australian GST</span>
                  <span className="tabular-nums">${gstAmount.toFixed(2)} AUD</span>
                </div>
                <div className="flex justify-between text-lg font-black text-[#F5F5F5] pt-3 border-t border-[#1F1F1F]">
                  <span>Total Amount</span>
                  <span className="text-[#D7192A] tabular-nums">${total.toFixed(2)} AUD</span>
                </div>
              </div>

              {/* Proceed to Checkout CTA */}
              <button
                type="button"
                onClick={() => navigate("/checkout")}
                className="w-full py-4 bg-[#D7192A] hover:bg-[#B01020] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-xl shadow-red-950/50 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center">
                <Link to="/shop" className="text-xs text-[#8A8A8A] hover:text-white inline-flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Continue Shopping Supplies</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
