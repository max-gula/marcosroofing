import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  ShieldCheck,
  Award,
  Star,
  ArrowRight,
  Clock,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Wrench,
  Droplets,
  Layers,
  Paintbrush,
  Sun,
  Home as HomeIcon,
  ShoppingBag
} from "lucide-react";
import { BUSINESS_INFO } from "../data/business";
import { SERVICES } from "../data/services";
import { PRODUCTS } from "../data/products";
import { PROJECTS } from "../data/projects";
import { REVIEWS } from "../data/reviews";
import { IMAGES } from "../data/images";
import { BeforeAfterSlider } from "../components/BeforeAfterSlider";
import { QuickQuoteForm } from "../components/QuickQuoteForm";
import { useCart } from "../context/CartContext";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "roof-restoration": <HomeIcon className="w-5 h-5 text-[#D7192A]" />,
  "roof-repair": <Droplets className="w-5 h-5 text-[#D7192A]" />,
  "roof-rebedding": <Layers className="w-5 h-5 text-[#D7192A]" />,
  "roof-painting": <Paintbrush className="w-5 h-5 text-[#D7192A]" />,
  "gutters-fascia-eaves": <Wrench className="w-5 h-5 text-[#D7192A]" />,
  "solar-panels": <Sun className="w-5 h-5 text-[#D7192A]" />
};

export const Home: React.FC<{ onOpenQuoteModal: () => void }> = ({ onOpenQuoteModal }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { addItem } = useCart();

  const homeFaqs = [
    {
      q: "How do I know whether I need a repair or a full roof restoration?",
      a: "If you only have one or two cracked tiles or a localised flashing leak, a targeted repair is often all you need. However, if your ridge caps are crumbling throughout, tiles are porous or moss-covered, and coating has worn away, a full restoration is far more cost-effective than fixing individual problems year after year. We inspect on-site and tell you straight."
    },
    {
      q: "How much does a full tile roof restoration cost in Melbourne?",
      a: "For most single-storey 3-bedroom Melbourne homes (approx 180–220 m²), a complete tile roof restoration ranges between $4,500 and $7,500 + GST depending on tile condition, pitch, and extent of rebedding. We provide fixed-price, photo-backed quotes with zero hidden extras."
    },
    {
      q: "What warranties do you provide on workmanship and materials?",
      a: "We provide comprehensive 10 to 15-year material warranties on our commercial acrylic membranes and AS 2050-tested flexible pointing compounds, plus an ironclad workmanship guarantee. If an issue occurs, we fix it promptly."
    },
    {
      q: "Do you charge for quotes and roof inspections?",
      a: "No. All on-site inspections and quotes across Melbourne's Northern and Eastern suburbs are 100% free with no obligation and zero sales pressure. We climb up, take photos, and explain exactly what we found."
    },
    {
      q: "How long does a roof restoration take to complete?",
      a: "A typical tile restoration takes 2 to 4 days, weather permitting. Day 1 is high-pressure cleaning and repairs; Day 2 is rebedding and flexible pointing; Days 3–4 are primer sealing and two heavy coats of acrylic membrane."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Full-Bleed High-Res Roof Photo with Dark Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero.url}
            alt={IMAGES.hero.alt}
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/50 to-transparent" />
        </div>

        {/* Content Box */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-3xl space-y-6">
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414]/90 border border-[#1F1F1F] rounded-full text-xs font-semibold text-[#F5F5F5] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#D7192A]" />
              <span>Melbourne's Trusted Family-Run Roofing Contractor</span>
            </div>

            {/* H1 Headline */}
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F5] uppercase tracking-tight leading-[1.08] text-balance">
              Melbourne's Tile Roof Restoration Specialists
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed font-normal max-w-2xl">
              Restoration, repairs, rebedding and repainting, done properly the first time. 15+ years of trade experience. Licensed and fully insured. Free on-site quotes across Melbourne.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="px-7 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#D7192A] hover:bg-[#B01020] rounded-xl shadow-xl shadow-red-950/60 transition-all hover:scale-[1.02] active:scale-[0.98] text-center"
              >
                Book a Free Quote
              </button>

              <a
                href={BUSINESS_INFO.phonePrimary.tel}
                className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-[#F5F5F5] hover:text-white bg-[#141414]/80 hover:bg-[#1F1F1F] border border-white/20 rounded-xl transition-all flex items-center justify-center gap-2.5 backdrop-blur-md"
              >
                <Phone className="w-4 h-4 text-[#D7192A] fill-[#D7192A]" />
                <span>Call {BUSINESS_INFO.phonePrimary.display}</span>
              </a>
            </div>

            {/* Trust Strip Under CTAs */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-center gap-1.5 font-semibold text-white">
                <span className="text-amber-400">★ 5.0 Google</span>
                <span className="text-neutral-400">({BUSINESS_INFO.reviewCount} reviews)</span>
              </div>
              <span className="text-neutral-600 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#D7192A]" />
                <span>15+ Years Experience</span>
              </div>
              <span className="text-neutral-600 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D7192A]" />
                <span>7–15 Yr Warranties</span>
              </div>
              <span className="text-neutral-600 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5 text-neutral-400">
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-20 bg-[#0A0A0A] border-t border-[#1F1F1F] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#D7192A] mb-1">
                Our Capabilities
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#F5F5F5] uppercase tracking-tight">
                Complete Roofing Solutions
              </h2>
            </div>
            <p className="text-sm text-[#8A8A8A] max-w-md">
              From stopping sudden ceiling leaks to full 3-coat restoration, we treat your home like our own.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((srv) => (
              <div
                key={srv.slug}
                className="bg-[#141414] border border-[#1F1F1F] rounded-2xl overflow-hidden card-hover-glow flex flex-col group"
              >
                {/* Service Card Image */}
                <div className="relative aspect-16/10 overflow-hidden bg-[#0A0A0A]">
                  <img
                    src={srv.heroImage}
                    alt={srv.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-[#0A0A0A]/80 backdrop-blur-md p-2 rounded-lg border border-[#1F1F1F]">
                    {SERVICE_ICONS[srv.slug] || <HomeIcon className="w-5 h-5 text-[#D7192A]" />}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-xl text-[#F5F5F5] group-hover:text-white transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-[#8A8A8A] leading-relaxed line-clamp-3">
                      {srv.shortDesc}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-[#1F1F1F] flex items-center justify-between text-xs">
                    <span className="text-[#8A8A8A]">{srv.typicalDuration}</span>
                    <Link
                      to={`/services/${srv.slug}`}
                      className="font-bold text-[#D7192A] group-hover:text-white flex items-center gap-1 transition-colors uppercase tracking-wider"
                    >
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE BEFORE / AFTER SLIDER */}
      <section className="py-20 bg-[#141414] border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#D7192A]">
              Real Proof · Melbourne Transformations
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#F5F5F5] uppercase tracking-tight">
              See the Marco's Difference
            </h2>
            <p className="text-sm text-[#8A8A8A]">
              Slide back and forth to inspect the restoration of weathered, moss-choked terracotta tiles into a pristine, glossy, flexible-pointed roof.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider />

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl">
                <div className="font-heading font-bold text-lg text-white">4000 PSI Clean</div>
                <div className="text-xs text-[#8A8A8A] mt-1">Strips 20+ years of lichen & mould down to bare tile</div>
              </div>
              <div className="p-4 bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl">
                <div className="font-heading font-bold text-lg text-white">Rebedded & Pointed</div>
                <div className="text-xs text-[#8A8A8A] mt-1">AS 2050-tested flexible pointing that flexes with the house</div>
              </div>
              <div className="p-4 bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl">
                <div className="font-heading font-bold text-lg text-white">3-Coat Membrane</div>
                <div className="text-xs text-[#8A8A8A] mt-1">High-build sealer plus 2 coats of UV-reflective topcoat</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS IN 4 STEPS */}
      <section className="py-20 bg-[#0A0A0A] border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#D7192A]">
              Straightforward Process
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#F5F5F5] uppercase tracking-tight">
              How It Works
            </h2>
            <p className="text-sm text-[#8A8A8A]">
              No confusing tradesman jargon or surprise fees. Here is our 4-step journey from inspection to final handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Book Free Inspection",
                desc: "Call Miri or submit online. We schedule a convenient day to inspect your roof in person across Melbourne."
              },
              {
                num: "02",
                title: "Photo-Backed Quote",
                desc: "We climb up, inspect every tile, valley, and ridge, and send you a detailed written quote with clear photos."
              },
              {
                num: "03",
                title: "We Restore Your Roof",
                desc: "Marco and Arthur arrive on time, wash, repair, rebed, and apply premium Australian coatings with zero mess."
              },
              {
                num: "04",
                title: "Final Check & Clean-Up",
                desc: "We clear your gutters, magnetically sweep grounds for screws, walk through the completed work, and issue your warranty."
              }
            ].map((step) => (
              <div
                key={step.num}
                className="bg-[#141414] border border-[#1F1F1F] rounded-2xl p-6 relative flex flex-col justify-between"
              >
                <div>
                  <div className="font-heading font-black text-3xl text-[#D7192A] mb-3">
                    {step.num}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#F5F5F5] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#8A8A8A] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#1F1F1F]/60 flex items-center gap-1.5 text-[11px] text-[#8A8A8A]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D7192A]" />
                  <span>Trade certified quality</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US (6 ITEMS) */}
      <section className="py-20 bg-[#141414] border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-[#D7192A]">
                The Tradesman Promise
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#F5F5F5] uppercase tracking-tight leading-tight">
                Why Melbourne Homeowners Choose Marco's
              </h2>
              <p className="text-sm text-[#8A8A8A] leading-relaxed">
                We're a family-run Melbourne business, not a call center or franchise. When you book a quote, you deal directly with Marco, Arthur, and Miri.
              </p>

              <div className="p-5 bg-[#0A0A0A] border border-[#1F1F1F] rounded-2xl space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-[#F5F5F5]">5.0 / 5.0 Google Rating</span>
                </div>
                <p className="text-xs text-[#8A8A8A] italic">
                  "Honest, punctual, and left our property completely spotless. Best roofing experience in 30 years in Melbourne."
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={onOpenQuoteModal}
                  className="px-6 py-3.5 bg-[#D7192A] hover:bg-[#B01020] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-red-950/40"
                >
                  Speak with Marco or Arthur
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Upfront Honest Pricing",
                  desc: "Itemised quotes with zero hidden surprises. If a simple repair solves your leak, we won't push a full restoration."
                },
                {
                  title: "On Time, Every Time",
                  desc: "We respect your day. When we schedule an inspection or begin work, our crew arrives promptly as promised."
                },
                {
                  title: "We Clean Up After Ourselves",
                  desc: "Gutters cleared, yard swept, broken tile shards removed, and grounds left cleaner than when we arrived."
                },
                {
                  title: "Australian-Certified Materials",
                  desc: "We exclusively apply trade-grade 100% acrylic membranes and AS 2050 pointing compounds built for Victorian weather."
                },
                {
                  title: "No-Pressure Quotes",
                  desc: "Zero door-to-door sales tactics or aggressive sign-up gimmicks. Our reputation speaks through 89+ 5-star reviews."
                },
                {
                  title: "Family-Run, Local Team",
                  desc: "Based in Bundoora, servicing Northern and Eastern suburbs with deep knowledge of Melbourne tile profiles."
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl space-y-2 card-hover-glow"
                >
                  <div className="font-heading font-bold text-base text-[#F5F5F5]">
                    {item.title}
                  </div>
                  <p className="text-xs text-[#8A8A8A] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. REVIEWS CAROUSEL / HIGHLIGHTS (Light Section for Rhythm) */}
      <section className="py-20 bg-[#F5F5F5] text-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#D7192A] mb-1">
                Real Melbourne Homeowner Reviews
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#0A0A0A] uppercase tracking-tight">
                Rated 5.0 Stars Across Melbourne
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/reviews"
                className="text-xs font-bold uppercase tracking-wider text-[#D7192A] hover:underline flex items-center gap-1"
              >
                Read All 89+ Google Reviews
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((rev) => (
              <div
                key={rev.id}
                className="bg-white border border-neutral-300 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-neutral-500">{rev.date}</span>
                  </div>

                  <p className="text-xs font-semibold text-[#0A0A0A] italic">
                    "{rev.quoteSnippet}"
                  </p>

                  <p className="text-xs text-neutral-700 leading-relaxed">
                    {rev.fullText}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <div>
                    <strong className="text-[#0A0A0A] block">{rev.author}</strong>
                    <span className="text-neutral-500">{rev.suburb} VIC</span>
                  </div>
                  <span className="text-[11px] font-medium text-[#D7192A] bg-red-50 px-2 py-0.5 rounded">
                    {rev.jobType}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SHOP TEASER: "Roofing Supplies, Trade Quality" */}
      <section className="py-20 bg-[#0A0A0A] border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#D7192A] mb-1">
                Roofing Supplies · Trade Quality
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#F5F5F5] uppercase tracking-tight">
                Trade Materials & Tools
              </h2>
            </div>
            <Link
              to="/shop"
              className="px-5 py-2.5 bg-[#141414] border border-[#1F1F1F] hover:border-[#D7192A] text-xs font-bold uppercase tracking-wider text-[#F5F5F5] rounded-xl flex items-center gap-2 transition-colors"
            >
              <ShoppingBag className="w-4 h-4 text-[#D7192A]" />
              <span>Shop All Supplies</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.filter((p) => p.featured).slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="bg-[#141414] border border-[#1F1F1F] rounded-2xl overflow-hidden flex flex-col justify-between card-hover-glow group"
              >
                <div>
                  <div className="relative aspect-4/3 bg-[#0A0A0A] overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2.5 right-2.5 bg-[#0A0A0A]/85 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-neutral-300 border border-[#1F1F1F]">
                      In Stock
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="text-[11px] font-semibold text-[#8A8A8A]">
                      {product.category}
                    </div>
                    <Link
                      to={`/shop/${product.slug}`}
                      className="font-heading font-bold text-sm text-[#F5F5F5] hover:text-[#D7192A] transition-colors line-clamp-2 block"
                    >
                      {product.name}
                    </Link>
                    <p className="text-xs text-[#8A8A8A] line-clamp-2">
                      {product.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="flex items-baseline justify-between mb-3">
                    <div>
                      <span className="font-heading font-black text-xl text-[#F5F5F5] tabular-nums">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-[10px] text-[#8A8A8A] ml-1">AUD incl. GST</span>
                    </div>
                    <div className="flex items-center text-amber-400 text-xs">
                      <Star className="w-3.5 h-3.5 fill-amber-400 mr-1" />
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to={`/shop/${product.slug}`}
                      className="py-2.5 text-center text-xs font-semibold text-neutral-300 bg-[#1F1F1F] hover:bg-neutral-800 rounded-lg"
                    >
                      Details
                    </Link>
                    <button
                      type="button"
                      onClick={() => addItem(product, 1)}
                      className="py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#D7192A] hover:bg-[#B01020] rounded-lg shadow-md shadow-red-950/40"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. RECENT PROJECTS GALLERY */}
      <section className="py-20 bg-[#141414] border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#D7192A] mb-1">
                Recent Projects
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#F5F5F5] uppercase tracking-tight">
                Our Work Across Melbourne
              </h2>
            </div>
            <Link
              to="/our-work"
              className="text-xs font-bold uppercase tracking-wider text-[#D7192A] hover:underline flex items-center gap-1"
            >
              View Full Gallery & Case Studies
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 6).map((proj) => (
              <div
                key={proj.id}
                className="bg-[#0A0A0A] border border-[#1F1F1F] rounded-2xl overflow-hidden group card-hover-glow"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-neutral-900">
                  <img
                    src={proj.afterImage}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0A0A0A]/85 backdrop-blur-md px-2.5 py-1 rounded text-xs font-semibold text-[#F5F5F5] border border-[#1F1F1F]">
                    {proj.suburb} VIC
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#D7192A] text-white text-[11px] font-bold px-2 py-0.5 rounded">
                    {proj.category}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-heading font-bold text-base text-[#F5F5F5]">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-[#8A8A8A] line-clamp-2">
                    {proj.summary}
                  </p>
                  <div className="pt-3 border-t border-[#1F1F1F] flex items-center justify-between text-xs text-[#8A8A8A]">
                    <span>Roof: {proj.roofType}</span>
                    <span className="font-medium text-[#F5F5F5]">{proj.completionTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ ACCORDION */}
      <section className="py-20 bg-[#0A0A0A] border-t border-[#1F1F1F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#D7192A]">
              Frequently Asked Questions
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#F5F5F5] uppercase tracking-tight">
              Got Questions? We Have Honest Answers
            </h2>
          </div>

          <div className="space-y-3">
            {homeFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-[#141414] border border-[#1F1F1F] rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-heading font-bold text-base text-[#F5F5F5] hover:text-[#D7192A] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#8A8A8A] transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-[#D7192A]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-[#8A8A8A] leading-relaxed border-t border-[#1F1F1F]/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA BAND (Red Gradient Band) */}
      <section className="relative py-20 bg-gradient-to-r from-[#D7192A] via-[#B01020] to-[#8A0A17] text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/30 rounded-full text-xs font-semibold tracking-wide border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Protect Your Home Before the Next Big Storm</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
            Is Your Roof Ready for Melbourne's Weather?
          </h2>

          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Get an honest, upfront on-site roof inspection and photo-backed quote from Marco and Arthur. No pressure, no hidden costs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#0A0A0A] font-heading font-black text-sm uppercase tracking-wider rounded-xl hover:bg-neutral-100 shadow-2xl transition-all hover:scale-105 active:scale-95"
            >
              Book a Free On-Site Quote
            </button>

            <a
              href={BUSINESS_INFO.phonePrimary.tel}
              className="w-full sm:w-auto px-8 py-4 bg-black/40 hover:bg-black/60 text-white font-heading font-bold text-sm uppercase tracking-wider rounded-xl border border-white/30 flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call Miri: {BUSINESS_INFO.phonePrimary.display}</span>
            </a>
          </div>

          <div className="pt-4 text-xs text-white/80">
            Or call Arthur on <a href={BUSINESS_INFO.phoneSecondary.tel} className="underline font-bold">{BUSINESS_INFO.phoneSecondary.display}</a> · Serving Bundoora & All Melbourne Suburbs
          </div>
        </div>
      </section>
    </div>
  );
};
