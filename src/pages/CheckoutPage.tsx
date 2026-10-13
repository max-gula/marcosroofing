import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  CreditCard,
  Truck,
  CheckCircle2,
  Lock,
  ArrowRight,
  AlertCircle
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { submitOrder, OrderSubmissionPayload } from "../services/api";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const CheckoutPage: React.FC = () => {
  const {
    items,
    subtotal,
    gstAmount,
    shippingFee,
    shippingMethod,
    discount,
    total,
    clearCart
  } = useCart();

  const navigate = useNavigate();

  // Checkout form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">(shippingMethod);
  const [street, setStreet] = useState("");
  const [suburb, setSuburb] = useState("");
  const [postcode, setPostcode] = useState("");

  const [paymentMethod, setPaymentMethod] = useState<"card" | "apple_pay" | "direct_deposit">("card");
  const [cardNumber, setCardNumber] = useState("•••• •••• •••• 4242");
  const [cardExpiry, setCardExpiry] = useState("12/28");
  const [cardCvc, setCardCvc] = useState("123");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderResult, setOrderResult] = useState<{
    orderNumber: string;
    placedAt: string;
  } | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      setErrorMsg("Please fill in your name, email, and phone number.");
      return;
    }
    if (deliveryType === "delivery" && (!street || !suburb || !postcode)) {
      setErrorMsg("Please enter complete delivery address details.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    const payload: OrderSubmissionPayload = {
      contact: {
        fullName,
        email,
        phone
      },
      deliveryType,
      shippingAddress:
        deliveryType === "delivery"
          ? { street, suburb, postcode }
          : undefined,
      paymentMethod,
      items: items.map((i) => ({
        productId: i.productId,
        name: i.name,
        quantity: i.quantity,
        price: i.price,
        variantName: i.variant?.name
      })),
      subtotal,
      shippingFee: deliveryType === "pickup" ? 0 : shippingFee,
      discount,
      total: deliveryType === "pickup" ? Math.max(0, subtotal - discount) : total
    };

    try {
      const res = await submitOrder(payload);
      setOrderResult({
        orderNumber: res.orderNumber,
        placedAt: res.placedAt
      });
      clearCart();
    } catch {
      setErrorMsg("Failed to process payment. Please try again or call our warehouse.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // If cart is empty and no order completed, redirect to shop
  if (items.length === 0 && !orderResult) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] py-24 text-center px-4">
        <h2 className="font-heading font-black text-2xl uppercase">No items in cart</h2>
        <p className="text-xs text-[#8A8A8A] mt-2 mb-6">Please add trade supplies before checking out.</p>
        <Link
          to="/shop"
          className="px-6 py-3 bg-[#D7192A] text-white text-xs font-bold uppercase rounded-xl"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  // ORDER CONFIRMATION VIEW
  if (orderResult) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-[#141414] border border-[#1F1F1F] rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#D7192A]" />
          <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#D7192A]">
              Payment Successful · Tax Invoice Issued
            </div>
            <h1 className="font-heading font-black text-3xl uppercase text-[#F5F5F5]">
              Order #{orderResult.orderNumber}
            </h1>
            <p className="text-sm text-[#8A8A8A]">
              Thank you, <strong className="text-white">{fullName}</strong>. Your confirmation and tax invoice have been dispatched to <span className="text-white">{email}</span>.
            </p>
          </div>

          <div className="bg-[#0A0A0A] border border-[#1F1F1F] rounded-2xl p-5 text-left text-xs space-y-2.5">
            <div className="flex justify-between">
              <span className="text-[#8A8A8A]">Fulfillment:</span>
              <strong className="text-white">
                {deliveryType === "delivery" ? `Melbourne Metro Delivery to ${suburb}` : "Click & Collect (7 Gonella Cres, Bundoora)"}
              </strong>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8A8A8A]">Order Date:</span>
              <span className="text-[#F5F5F5]">{orderResult.placedAt}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8A8A8A]">Payment Method:</span>
              <span className="text-emerald-400 font-semibold uppercase">{paymentMethod.replace("_", " ")}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/shop"
              className="px-6 py-3.5 bg-[#D7192A] hover:bg-[#B01020] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg"
            >
              Continue Shopping
            </Link>
            <Link
              to="/"
              className="px-6 py-3.5 bg-[#0A0A0A] border border-[#1F1F1F] text-[#F5F5F5] text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#1F1F1F]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] pb-24">
      {/* Header */}
      <div className="bg-[#141414] border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Shop", href: "/shop" }, { label: "Cart", href: "/cart" }, { label: "Checkout" }]} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="mb-8">
          <h1 className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight text-[#F5F5F5]">
            Secure Trade Checkout
          </h1>
          <p className="text-xs text-[#8A8A8A] mt-1">
            Complete your order for trade roofing supplies with encrypted 256-bit SSL security.
          </p>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 bg-red-950/40 border border-red-500/50 rounded-2xl flex items-center gap-2 text-xs text-red-300">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Form: Contact -> Delivery -> Payment */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Contact Information */}
            <div className="bg-[#141414] border border-[#1F1F1F] rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 border-b border-[#1F1F1F] pb-3">
                <span className="w-6 h-6 rounded-full bg-[#D7192A] text-white text-xs font-bold flex items-center justify-center">1</span>
                <h2 className="font-heading font-black text-lg uppercase text-[#F5F5F5]">
                  Contact Information
                </h2>
              </div>

              <div className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#8A8A8A] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Henderson"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-[#8A8A8A] mb-1">Email (for Tax Invoice) *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com.au"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#8A8A8A] mb-1">Mobile (Dispatch Notifications) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0420 123 456"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Delivery Options */}
            <div className="bg-[#141414] border border-[#1F1F1F] rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 border-b border-[#1F1F1F] pb-3">
                <span className="w-6 h-6 rounded-full bg-[#D7192A] text-white text-xs font-bold flex items-center justify-center">2</span>
                <h2 className="font-heading font-black text-lg uppercase text-[#F5F5F5]">
                  Fulfilment Method
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDeliveryType("delivery")}
                  className={`p-4 rounded-2xl text-left border transition-all ${
                    deliveryType === "delivery"
                      ? "bg-[#0A0A0A] border-[#D7192A] text-white"
                      : "bg-[#0A0A0A] border-[#1F1F1F] text-[#8A8A8A]"
                  }`}
                >
                  <Truck className="w-5 h-5 text-[#D7192A] mb-2" />
                  <div className="font-bold text-xs uppercase text-[#F5F5F5]">Melbourne Metro Delivery</div>
                  <div className="text-[11px] text-[#8A8A8A] mt-0.5">
                    {subtotal >= 300 ? "FREE (Orders $300+)" : "$35.00 Flat Rate"}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setDeliveryType("pickup")}
                  className={`p-4 rounded-2xl text-left border transition-all ${
                    deliveryType === "pickup"
                      ? "bg-[#0A0A0A] border-[#D7192A] text-white"
                      : "bg-[#0A0A0A] border-[#1F1F1F] text-[#8A8A8A]"
                  }`}
                >
                  <ShieldCheck className="w-5 h-5 text-[#D7192A] mb-2" />
                  <div className="font-bold text-xs uppercase text-[#F5F5F5]">Click & Collect (FREE)</div>
                  <div className="text-[11px] text-[#8A8A8A] mt-0.5">7 Gonella Cres, Bundoora</div>
                </button>
              </div>

              {deliveryType === "delivery" && (
                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#8A8A8A] mb-1">Street Address *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 24 Olympic Avenue"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      className="w-full bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#8A8A8A] mb-1">Suburb *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Doncaster"
                        value={suburb}
                        onChange={(e) => setSuburb(e.target.value)}
                        className="w-full bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#8A8A8A] mb-1">Postcode *</label>
                      <input
                        type="text"
                        required
                        inputMode="numeric"
                        placeholder="e.g. 3108"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                        className="w-full bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl px-4 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Payment UI (Stripe-styled) */}
            <div className="bg-[#141414] border border-[#1F1F1F] rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 border-b border-[#1F1F1F] pb-3">
                <span className="w-6 h-6 rounded-full bg-[#D7192A] text-white text-xs font-bold flex items-center justify-center">3</span>
                <h2 className="font-heading font-black text-lg uppercase text-[#F5F5F5]">
                  Payment Method
                </h2>
              </div>

              {/* TODO: Connect Stripe Elements or Payment Intent API */}
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`py-3 px-2 rounded-xl text-xs font-bold uppercase border transition-all text-center ${
                      paymentMethod === "card"
                        ? "bg-[#0A0A0A] border-[#D7192A] text-white"
                        : "bg-[#0A0A0A] border-[#1F1F1F] text-[#8A8A8A]"
                    }`}
                  >
                    Credit Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("apple_pay")}
                    className={`py-3 px-2 rounded-xl text-xs font-bold uppercase border transition-all text-center ${
                      paymentMethod === "apple_pay"
                        ? "bg-[#0A0A0A] border-[#D7192A] text-white"
                        : "bg-[#0A0A0A] border-[#1F1F1F] text-[#8A8A8A]"
                    }`}
                  >
                    Apple / Google Pay
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("direct_deposit")}
                    className={`py-3 px-2 rounded-xl text-xs font-bold uppercase border transition-all text-center ${
                      paymentMethod === "direct_deposit"
                        ? "bg-[#0A0A0A] border-[#D7192A] text-white"
                        : "bg-[#0A0A0A] border-[#1F1F1F] text-[#8A8A8A]"
                    }`}
                  >
                    Direct Deposit
                  </button>
                </div>

                {paymentMethod === "card" && (
                  <div className="p-4 bg-[#0A0A0A] border border-[#1F1F1F] rounded-2xl space-y-3 mt-3">
                    <div className="flex items-center justify-between text-xs text-[#8A8A8A]">
                      <span className="flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Encrypted Card Entry</span>
                      </span>
                      <CreditCard className="w-4 h-4 text-[#8A8A8A]" />
                    </div>

                    <div>
                      <label className="block text-[11px] text-[#8A8A8A] mb-1">Card Number</label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full bg-[#141414] border border-[#1F1F1F] rounded-lg px-3 py-2.5 text-sm text-[#F5F5F5] font-mono focus:outline-none focus:border-[#D7192A]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] text-[#8A8A8A] mb-1">Expires (MM/YY)</label>
                        <input
                          type="text"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          className="w-full bg-[#141414] border border-[#1F1F1F] rounded-lg px-3 py-2.5 text-sm text-[#F5F5F5] font-mono focus:outline-none focus:border-[#D7192A]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-[#8A8A8A] mb-1">CVC / CVV</label>
                        <input
                          type="text"
                          value={cardCvc}
                          onChange={(e) => setCardCvc(e.target.value)}
                          className="w-full bg-[#141414] border border-[#1F1F1F] rounded-lg px-3 py-2.5 text-sm text-[#F5F5F5] font-mono focus:outline-none focus:border-[#D7192A]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "direct_deposit" && (
                  <div className="p-4 bg-[#0A0A0A] border border-[#1F1F1F] rounded-2xl text-xs space-y-2 text-[#8A8A8A]">
                    <strong className="text-white block">Bank Account Details (BSB / ACC):</strong>
                    <p>Account Name: Marco's Roofing Solutions</p>
                    <p>BSB: 063-123 · Account: 1045 9821 (Commonwealth Bank)</p>
                    <p>Your order will be staged for dispatch as soon as bank transfer clears.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Summary Panel */}
          <div className="lg:col-span-5 bg-[#141414] border border-[#1F1F1F] rounded-3xl p-6 sm:p-8 space-y-6 lg:sticky lg:top-24">
            <h2 className="font-heading font-black text-xl uppercase tracking-tight text-[#F5F5F5]">
              Order Items ({items.length})
            </h2>

            <div className="divide-y divide-[#1F1F1F] max-h-64 overflow-y-auto pr-1">
              {items.map((i) => (
                <div key={i.id} className="py-2.5 flex items-center justify-between text-xs">
                  <div className="min-w-0 pr-3">
                    <div className="font-bold text-[#F5F5F5] truncate">{i.name}</div>
                    <div className="text-neutral-500 text-[11px]">
                      Qty: {i.quantity} {i.variant && `(${i.variant.name})`}
                    </div>
                  </div>
                  <div className="font-mono text-[#F5F5F5] font-semibold tabular-nums shrink-0">
                    ${(i.price * i.quantity).toFixed(2)} AUD
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2.5 text-xs text-[#8A8A8A] border-t border-[#1F1F1F] pt-4">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="text-[#F5F5F5] font-semibold tabular-nums">${subtotal.toFixed(2)} AUD</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-400">
                  <span>Trade Discount</span>
                  <span className="tabular-nums">-${discount.toFixed(2)} AUD</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Fulfillment Fee</span>
                <span className="text-[#F5F5F5] font-semibold tabular-nums">
                  {deliveryType === "pickup" ? "FREE (Pickup)" : shippingFee === 0 ? "FREE" : `$${shippingFee.toFixed(2)} AUD`}
                </span>
              </div>
              <div className="flex justify-between text-[11px] text-neutral-500 pt-0.5">
                <span>Includes 10% Australian GST</span>
                <span className="tabular-nums">${gstAmount.toFixed(2)} AUD</span>
              </div>
              <div className="flex justify-between text-xl font-black text-[#F5F5F5] pt-3 border-t border-[#1F1F1F]">
                <span>Total Payable</span>
                <span className="text-[#D7192A] tabular-nums">
                  ${(deliveryType === "pickup" ? Math.max(0, subtotal - discount) : total).toFixed(2)} AUD
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#D7192A] hover:bg-[#B01020] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-xl shadow-red-950/50 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] disabled:opacity-50"
            >
              <Lock className="w-4 h-4" />
              <span>{isSubmitting ? "Processing Order..." : `Pay $${(deliveryType === "pickup" ? Math.max(0, subtotal - discount) : total).toFixed(2)} AUD`}</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#8A8A8A]">
              <ShieldCheck className="w-4 h-4 text-[#D7192A]" />
              <span>Marco's Roofing Solutions · ABN {19213147943}</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
