import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ShieldCheck, Award, Star, Clock } from "lucide-react";
import { BUSINESS_INFO } from "../data/business";
import { SERVICES } from "../data/services";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1F1F1F] text-[#8A8A8A] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust & Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1F1F1F]">
          {/* Brand & Blurb */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#141414] border border-[#1F1F1F] rounded-lg flex items-center justify-center text-[#D7192A]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <path d="M2 12l10-8 10 8" />
                  <path d="M6 10v9a1 1 0 001 1h10a1 1 0 001-1v-9" />
                  <path d="M9 20v-5h6v5" />
                </svg>
              </div>
              <div>
                <span className="font-heading font-black text-lg tracking-tight text-[#F5F5F5] uppercase block">
                  Marco's Roofing
                </span>
                <span className="text-[10px] tracking-widest text-[#D7192A] uppercase font-semibold">
                  Solutions · Melbourne
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[#8A8A8A]">
              Melbourne's trusted family-run tile roof restoration specialists. Rebedding, repointing, leak detection, and 3-coat membrane painting done properly the first time.
            </p>

            <div className="space-y-1.5 text-xs text-[#8A8A8A] pt-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D7192A] shrink-0" />
                <span>ABN: <strong className="text-[#F5F5F5] font-mono">{BUSINESS_INFO.abn}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D7192A] shrink-0" />
                <span>Licence: <span className="text-neutral-500 font-mono text-[11px]">[LICENCE NO.]</span> (Registered Tradesman)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D7192A] shrink-0" />
                <span>{BUSINESS_INFO.insurance}</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[#F5F5F5] mb-4">
              Roofing Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="hover:text-[#F5F5F5] transition-colors hover:translate-x-1 inline-block"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Shop */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[#F5F5F5] mb-4">
              Supplies & Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/shop" className="hover:text-[#F5F5F5] transition-colors">
                  Roofing Supplies Shop
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="hover:text-[#F5F5F5] transition-colors">
                  Our Work & Projects
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-[#F5F5F5] transition-colors">
                  Customer Reviews (89+)
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#F5F5F5] transition-colors">
                  About Marco, Arthur & Team
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#F5F5F5] transition-colors">
                  Roof Restoration Guides (Blog)
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-[#D7192A] hover:underline font-semibold">
                  Book an On-Site Inspection
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details with Click to Call */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[#F5F5F5]">
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <div className="text-xs text-[#8A8A8A] mb-0.5">Primary Enquiries & Quotes:</div>
                <a
                  href={BUSINESS_INFO.phonePrimary.tel}
                  className="flex items-center gap-2 text-[#F5F5F5] hover:text-[#D7192A] font-semibold tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#D7192A]" />
                  <span>Miri: {BUSINESS_INFO.phonePrimary.display}</span>
                </a>
              </div>

              <div>
                <div className="text-xs text-[#8A8A8A] mb-0.5">On-Site & Technical Operations:</div>
                <a
                  href={BUSINESS_INFO.phoneSecondary.tel}
                  className="flex items-center gap-2 text-[#F5F5F5] hover:text-[#D7192A] font-semibold tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#D7192A]" />
                  <span>Arthur: {BUSINESS_INFO.phoneSecondary.display}</span>
                </a>
              </div>

              <div>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-2 text-[#F5F5F5] hover:text-[#D7192A]"
                >
                  <Mail className="w-4 h-4 text-[#D7192A]" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D7192A] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-start gap-2 text-xs">
                <Clock className="w-4 h-4 text-[#D7192A] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Suburbs We Service Strip */}
        <div className="py-8 border-b border-[#1F1F1F]">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#F5F5F5] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#D7192A] rounded-full inline-block"></span>
            Melbourne Service Areas (Northern & Eastern Suburbs):
          </div>
          <p className="text-xs text-[#8A8A8A] leading-relaxed">
            {BUSINESS_INFO.primarySuburbs.join(" · ")} · and surrounding greater Melbourne metro communities.
          </p>
        </div>

        {/* Bottom Bar: Copyright, Payment Icons, Google Rating */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#8A8A8A]">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Marco's Roofing Solutions. All rights reserved.</span>
            <Link to="/privacy" className="hover:text-[#F5F5F5]">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#F5F5F5]">Terms & Conditions</Link>
            <Link to="/shipping-returns" className="hover:text-[#F5F5F5]">Shipping & Returns</Link>
          </div>

          {/* Google 5.0 Star Badge */}
          <div className="flex items-center gap-2 bg-[#141414] border border-[#1F1F1F] px-3 py-1.5 rounded-lg">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="font-bold text-[#F5F5F5]">5.0</span>
            <span className="text-neutral-500">Google Verified (89+ Reviews)</span>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-2">
            <span className="text-neutral-500">Accepted:</span>
            {BUSINESS_INFO.paymentMethods.map((pm) => (
              <span
                key={pm}
                className="bg-[#141414] border border-[#1F1F1F] text-[11px] text-[#F5F5F5] px-2 py-0.5 rounded"
              >
                {pm}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
