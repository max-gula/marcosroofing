import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  Star,
  ShoppingBag,
  Plus,
  Minus,
  CheckCircle2,
  Truck,
  ShieldCheck,
  Wrench,
  ArrowRight,
  ZoomIn
} from "lucide-react";
import { PRODUCTS, ProductVariant } from "../data/products";
import { useCart } from "../context/CartContext";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const ProductDetailPage: React.FC<{ onOpenQuoteModal: () => void }> = ({ onOpenQuoteModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const { addItem } = useCart();

  const [activeImage, setActiveImage] = useState<string>(product ? product.imageUrl : "");
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product?.variants ? product.variants[0] : undefined
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"desc" | "specs" | "coverage" | "delivery">("desc");

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  ).slice(0, 3);

  // Product Schema JSON-LD
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": [product.imageUrl],
    "description": product.shortDesc,
    "sku": product.id,
    "offers": {
      "@type": "Offer",
      "url": window.location.href,
      "priceCurrency": "AUD",
      "price": product.price.toFixed(2),
      "availability": product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "Marco's Roofing Solutions"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating.toString(),
      "reviewCount": product.reviewCount.toString()
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] pb-24">
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="bg-[#141414] border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Shop", href: "/shop" },
              { label: product.category, href: "/shop" },
              { label: product.name }
            ]}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Gallery View */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#141414] border border-[#1F1F1F] shadow-xl group">
              <img
                src={activeImage || product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-[#0A0A0A]/85 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-neutral-300 border border-[#1F1F1F] flex items-center gap-1.5">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Trade Spec</span>
              </div>
            </div>

            {/* Thumbnails */}
            {product.galleryImages && product.galleryImages.length > 1 && (
              <div className="flex gap-3">
                {product.galleryImages.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      (activeImage || product.imageUrl) === img
                        ? "border-[#D7192A]"
                        : "border-[#1F1F1F] opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#D7192A]">
                {product.category}
              </div>
              <h1 className="font-heading font-black text-2xl sm:text-4xl uppercase tracking-tight text-[#F5F5F5] mt-1">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center text-amber-400 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="font-bold text-[#F5F5F5] ml-2">{product.rating}</span>
                  <span className="text-neutral-500 text-xs ml-1">({product.reviewCount} trade reviews)</span>
                </div>
                <span className="text-neutral-600">·</span>
                <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  In Stock in Melbourne
                </span>
              </div>
            </div>

            {/* Price Box */}
            <div className="p-5 bg-[#141414] border border-[#1F1F1F] rounded-2xl flex items-baseline justify-between">
              <div>
                <span className="font-heading font-black text-3xl sm:text-4xl text-[#F5F5F5] tabular-nums">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-xs text-[#8A8A8A] ml-2">AUD incl. 10% GST</span>
              </div>
              <span className="text-xs text-neutral-400 font-mono">
                {/* SAMPLE PRICE — confirm with owner */}
                Trade Catalog ID: {product.id}
              </span>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed">
              {product.shortDesc}
            </p>

            {/* Variant / Colour Selection */}
            {product.variants && (
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8A8A8A]">
                  Select Colour / Profile: <strong className="text-white">{selectedVariant?.name}</strong>
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {product.variants.map((v) => (
                    <button
                      type="button"
                      key={v.id}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-medium border flex items-center gap-2.5 transition-all ${
                        selectedVariant?.id === v.id
                          ? "bg-[#1F1F1F] border-[#D7192A] text-white shadow-md shadow-red-950/30"
                          : "bg-[#141414] border-[#1F1F1F] text-[#8A8A8A] hover:text-[#F5F5F5]"
                      }`}
                    >
                      {v.colorHex && (
                        <span
                          style={{ backgroundColor: v.colorHex }}
                          className="w-4 h-4 rounded-full border border-neutral-600 inline-block shrink-0"
                        />
                      )}
                      <span>{v.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Stepper & Add to Cart */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex items-center justify-between bg-[#141414] border border-[#1F1F1F] rounded-xl px-3 py-2 w-full sm:w-36">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 hover:text-[#D7192A]"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-heading font-black text-sm tabular-nums px-3">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 hover:text-[#D7192A]"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => addItem(product, quantity, selectedVariant)}
                className="flex-1 py-4 bg-[#D7192A] hover:bg-[#B01020] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-xl shadow-red-950/50 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart · ${(product.price * quantity).toFixed(2)} AUD</span>
              </button>
            </div>

            {/* "Need it installed?" Cross-Sell to /quote */}
            <div className="p-5 bg-gradient-to-r from-[#141414] to-[#1F1F1F] border border-[#D7192A]/30 rounded-2xl flex items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D7192A]">
                  <Wrench className="w-4 h-4" />
                  <span>Need Professional Installation?</span>
                </div>
                <p className="text-xs text-[#8A8A8A]">
                  Don't want to get on the roof yourself? Marco and Arthur can apply or install this with our 10–15 year warranty.
                </p>
              </div>
              <Link
                to="/quote"
                className="px-4 py-2.5 bg-[#D7192A] text-white text-xs font-bold uppercase tracking-wider rounded-lg shrink-0 hover:bg-[#B01020]"
              >
                Get a Quote
              </Link>
            </div>

            {/* Quick Guarantees Strip */}
            <div className="grid grid-cols-2 gap-3 text-xs text-[#8A8A8A] pt-2">
              <div className="flex items-center gap-2 p-3 bg-[#141414] border border-[#1F1F1F] rounded-xl">
                <Truck className="w-4 h-4 text-[#D7192A] shrink-0" />
                <span>Flat $35 Metro delivery or FREE over $300</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-[#141414] border border-[#1F1F1F] rounded-xl">
                <ShieldCheck className="w-4 h-4 text-[#D7192A] shrink-0" />
                <span>Click & Collect in Bundoora VIC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs: Description | Specifications | Coverage & Usage | Delivery */}
        <div className="mt-16 bg-[#141414] border border-[#1F1F1F] rounded-3xl overflow-hidden">
          <div className="flex border-b border-[#1F1F1F] overflow-x-auto no-scrollbar">
            {[
              { id: "desc", label: "Description" },
              { id: "specs", label: "Specifications" },
              { id: "coverage", label: "Coverage & Usage" },
              { id: "delivery", label: "Delivery & Pickup" }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-4 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? "border-[#D7192A] text-white bg-[#0A0A0A]/50"
                    : "border-transparent text-[#8A8A8A] hover:text-[#F5F5F5]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6 sm:p-10">
            {activeTab === "desc" && (
              <div className="space-y-4 max-w-3xl text-sm text-neutral-300 leading-relaxed">
                <h3 className="font-heading font-black text-xl text-[#F5F5F5] uppercase">
                  Product Overview
                </h3>
                <p>{product.description}</p>
                <p>
                  Tested under intense Victorian ultraviolet radiation and extreme thermal cycling. Formulated specifically to ensure maximum longevity on pitched residential roofs without cracking or discolouration.
                </p>
              </div>
            )}

            {activeTab === "specs" && (
              <div className="space-y-4 max-w-2xl">
                <h3 className="font-heading font-black text-xl text-[#F5F5F5] uppercase mb-4">
                  Technical Specifications
                </h3>
                <div className="divide-y divide-[#1F1F1F] border-y border-[#1F1F1F] text-xs">
                  {product.specifications.map((spec, i) => (
                    <div key={i} className="py-3 flex justify-between">
                      <span className="text-[#8A8A8A]">{spec.label}</span>
                      <strong className="text-[#F5F5F5]">{spec.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "coverage" && (
              <div className="space-y-4 max-w-3xl text-sm text-neutral-300 leading-relaxed">
                <h3 className="font-heading font-black text-xl text-[#F5F5F5] uppercase">
                  Coverage & Application Guidelines
                </h3>
                <p>{product.coverage}</p>
                <div className="p-4 bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl text-xs space-y-2 mt-4">
                  <strong className="text-white block">Tradesman Application Tip:</strong>
                  <p className="text-[#8A8A8A]">
                    Always wash tiles thoroughly to bare substrate using at least 3500 PSI pressure before applying primers or flexible pointing compound. Applying coatings over dirt or powdery oxidation voids manufacturer warranties.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "delivery" && (
              <div className="space-y-4 max-w-3xl text-sm text-neutral-300 leading-relaxed">
                <h3 className="font-heading font-black text-xl text-[#F5F5F5] uppercase">
                  Melbourne Metro Dispatch & Pickup
                </h3>
                <p>{product.delivery}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl text-xs space-y-1">
                    <strong className="text-[#F5F5F5] block">Click & Collect:</strong>
                    <p className="text-[#8A8A8A]">
                      Pickup available at 7 Gonella Crescent, Bundoora VIC 3083 during business hours. Call ahead to confirm ready lot.
                    </p>
                  </div>
                  <div className="p-4 bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl text-xs space-y-1">
                    <strong className="text-[#F5F5F5] block">Delivery Rate:</strong>
                    <p className="text-[#8A8A8A]">
                      Flat $35 Melbourne metro rate. FREE shipping automatically applied to all supply orders of $300 or more.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 space-y-6">
            <h3 className="font-heading font-black text-2xl uppercase text-[#F5F5F5]">
              Related Trade Supplies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-[#141414] border border-[#1F1F1F] rounded-2xl overflow-hidden card-hover-glow p-5 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <img
                      src={rel.imageUrl}
                      alt={rel.name}
                      className="w-full aspect-16/10 object-cover rounded-xl"
                    />
                    <div className="font-heading font-bold text-sm text-[#F5F5F5] line-clamp-1">
                      {rel.name}
                    </div>
                    <div className="text-xs text-[#8A8A8A] line-clamp-2">
                      {rel.shortDesc}
                    </div>
                  </div>
                  <div className="pt-4 mt-3 border-t border-[#1F1F1F] flex items-center justify-between">
                    <span className="font-heading font-bold text-base text-[#F5F5F5]">
                      ${rel.price.toFixed(2)} AUD
                    </span>
                    <Link
                      to={`/shop/${rel.slug}`}
                      className="text-xs font-bold text-[#D7192A] hover:underline uppercase"
                    >
                      View
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
