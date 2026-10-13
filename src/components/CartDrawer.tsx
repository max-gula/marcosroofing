import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck } from "lucide-react";
import { useCart } from "../context/CartContext";

export const CartDrawer: React.FC = () => {
  const {
    items,
    itemCount,
    subtotal,
    gstAmount,
    shippingFee,
    discount,
    promoCode,
    total,
    isDrawerOpen,
    closeDrawer,
    updateQuantity,
    removeItem,
    applyPromoCode
  } = useCart();

  const [couponInput, setCouponInput] = useState("");
  const [couponFeedback, setCouponFeedback] = useState<{ success: boolean; message: string } | null>(null);
  const navigate = useNavigate();

  if (!isDrawerOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput) return;
    const res = applyPromoCode(couponInput);
    setCouponFeedback(res);
  };

  const handleProceedCheckout = () => {
    closeDrawer();
    navigate("/checkout");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Dark Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={closeDrawer}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0A0A0A] border-l border-[#1F1F1F] text-[#F5F5F5] flex flex-col shadow-2xl">
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#1F1F1F] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#D7192A]" />
              <h2 className="font-heading font-black text-lg uppercase tracking-tight text-[#F5F5F5]">
                Your Cart ({itemCount})
              </h2>
            </div>
            <button
              onClick={closeDrawer}
              className="p-2 text-[#8A8A8A] hover:text-[#F5F5F5] rounded-lg hover:bg-[#141414]"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#141414] border border-[#1F1F1F] flex items-center justify-center text-[#8A8A8A]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="font-heading text-lg font-bold text-[#F5F5F5]">Your cart is empty</div>
                <p className="text-sm text-[#8A8A8A] max-w-xs mx-auto">
                  Browse our trade-quality roofing membranes, flexible pointing compounds, and tools.
                </p>
                <Link
                  to="/shop"
                  onClick={closeDrawer}
                  className="inline-block px-5 py-2.5 bg-[#D7192A] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#B01020]"
                >
                  Browse Supplies
                </Link>
              </div>
            ) : (
              <>
                {/* Free Shipping Progress Indicator */}
                <div className="p-3 bg-[#141414] border border-[#1F1F1F] rounded-xl text-xs space-y-1.5">
                  <div className="flex justify-between font-medium">
                    <span className="text-[#8A8A8A]">
                      {subtotal >= 300
                        ? "You've unlocked Free Melbourne Metro Delivery!"
                        : `Add $${(300 - subtotal).toFixed(2)} more for Free Metro Delivery`}
                    </span>
                    <span className="font-bold text-[#F5F5F5]">{Math.min(100, Math.round((subtotal / 300) * 100))}%</span>
                  </div>
                  <div className="w-full bg-[#1F1F1F] h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#D7192A] h-full transition-all duration-300"
                      style={{ width: `${Math.min(100, (subtotal / 300) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Items List */}
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3 p-3 bg-[#141414] border border-[#1F1F1F] rounded-xl"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg bg-[#1F1F1F] shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <Link
                          to={`/shop/${item.slug}`}
                          onClick={closeDrawer}
                          className="font-medium text-sm text-[#F5F5F5] hover:text-[#D7192A] truncate block"
                        >
                          {item.name}
                        </Link>
                        {item.variant && (
                          <div className="text-xs text-[#8A8A8A] mt-0.5">
                            Colour / Spec: {item.variant.name}
                          </div>
                        )}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-1.5 bg-[#1F1F1F] rounded-lg p-0.5">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:text-[#D7192A]"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-semibold px-2 tabular-nums">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:text-[#D7192A]"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-bold text-[#F5F5F5] tabular-nums">
                              ${(item.price * item.quantity).toFixed(2)}
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-[11px] text-neutral-500 hover:text-red-400 inline-flex items-center gap-1 mt-0.5"
                            >
                              <Trash2 className="w-3 h-3" />
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Promo Code Input */}
                <form onSubmit={handleApplyPromo} className="pt-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code (e.g. TRADE10)"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className="flex-1 bg-[#141414] border border-[#1F1F1F] text-xs px-3 py-2 rounded-lg text-[#F5F5F5] focus:outline-none focus:border-[#D7192A] uppercase"
                    />
                    <button
                      type="submit"
                      className="px-3 py-2 bg-[#1F1F1F] hover:bg-[#D7192A] text-xs font-bold uppercase rounded-lg transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {couponFeedback && (
                    <p
                      className={`text-xs mt-1.5 ${
                        couponFeedback.success ? "text-emerald-400" : "text-red-400"
                      }`}
                    >
                      {couponFeedback.message}
                    </p>
                  )}
                </form>
              </>
            )}
          </div>

          {/* Footer Totals & Checkout Button */}
          {items.length > 0 && (
            <div className="px-6 py-5 border-t border-[#1F1F1F] bg-[#141414]/50 space-y-3">
              <div className="space-y-1.5 text-xs text-[#8A8A8A]">
                <div className="flex justify-between">
                  <span>Subtotal (incl. GST)</span>
                  <span className="text-[#F5F5F5] font-semibold tabular-nums">${subtotal.toFixed(2)} AUD</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount ({promoCode})</span>
                    <span className="tabular-nums">-${discount.toFixed(2)} AUD</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Melbourne Metro Delivery</span>
                  <span className="text-[#F5F5F5] font-semibold tabular-nums">
                    {shippingFee === 0 ? "FREE" : `$${shippingFee.toFixed(2)} AUD`}
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-neutral-500 pt-0.5">
                  <span>Includes 10% Australian GST</span>
                  <span className="tabular-nums">${gstAmount.toFixed(2)} AUD</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#F5F5F5] pt-2 border-t border-[#1F1F1F]">
                  <span>Estimated Total</span>
                  <span className="text-[#D7192A] tabular-nums">${total.toFixed(2)} AUD</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link
                  to="/cart"
                  onClick={closeDrawer}
                  className="py-3 px-3 text-center text-xs font-bold uppercase tracking-wider text-[#F5F5F5] bg-[#1F1F1F] hover:bg-neutral-800 rounded-xl"
                >
                  View Full Cart
                </Link>
                <button
                  type="button"
                  onClick={handleProceedCheckout}
                  className="py-3 px-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#D7192A] hover:bg-[#B01020] rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-red-950/40"
                >
                  Checkout
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#8A8A8A] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D7192A]" />
                <span>Trade-grade quality guarantee · Fast Melbourne dispatch</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
