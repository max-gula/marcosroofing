import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, ShoppingBag, Menu, X, ChevronDown, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "../data/business";
import { useCart } from "../context/CartContext";
import { SERVICES } from "../data/services";

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const { itemCount, openDrawer } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
          isScrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-md py-3 border-[#1F1F1F] shadow-lg shadow-black/50"
            : "bg-[#0A0A0A] py-4 border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 md:gap-8">
            {/* Zone 1: Brand Wordmark */}
            <Link
              to="/"
              className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7192A]"
              aria-label="Marco's Roofing Solutions Home"
            >
              {/* Roof-Peak Red SVG Mark */}
              <div className="w-10 h-10 bg-[#141414] border border-[#1F1F1F] rounded-lg flex items-center justify-center text-[#D7192A] group-hover:border-[#D7192A] transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 transition-transform group-hover:scale-110"
                >
                  <path d="M2 12l10-8 10 8" />
                  <path d="M6 10v9a1 1 0 001 1h10a1 1 0 001-1v-9" />
                  <path d="M9 20v-5h6v5" />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-heading font-black text-lg sm:text-xl tracking-tight text-[#F5F5F5] uppercase leading-none group-hover:text-white transition-colors">
                  Marco's Roofing
                </span>
                <span className="text-[10px] tracking-[0.2em] font-semibold text-[#D7192A] uppercase">
                  Solutions · Melbourne
                </span>
              </div>
            </Link>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#8A8A8A]">
              <Link
                to="/"
                className={`hover:text-[#F5F5F5] transition-colors whitespace-nowrap shrink-0 ${
                  location.pathname === "/" ? "text-[#F5F5F5] font-semibold" : ""
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1.5 hover:text-[#F5F5F5] transition-colors whitespace-nowrap shrink-0 ${
                    location.pathname.startsWith("/services") ? "text-[#F5F5F5] font-semibold" : ""
                  }`}
                  aria-expanded={servicesDropdownOpen}
                >
                  Services
                  <ChevronDown className="w-4 h-4 text-[#8A8A8A]" />
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 w-72 z-50">
                    <div className="bg-[#141414] border border-[#1F1F1F] rounded-xl p-2 shadow-2xl shadow-black/80 backdrop-blur-xl">
                      {SERVICES.map((srv) => (
                        <Link
                          key={srv.slug}
                          to={`/services/${srv.slug}`}
                          className="block px-3 py-2.5 rounded-lg text-sm text-[#8A8A8A] hover:text-[#F5F5F5] hover:bg-[#1F1F1F] transition-all"
                        >
                          <div className="font-medium text-[#F5F5F5]">{srv.title}</div>
                          <div className="text-xs text-[#8A8A8A] line-clamp-1">{srv.shortDesc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/shop"
                className={`hover:text-[#F5F5F5] transition-colors whitespace-nowrap shrink-0 ${
                  location.pathname.startsWith("/shop") ? "text-[#F5F5F5] font-semibold" : ""
                }`}
              >
                Shop Supplies
              </Link>

              <Link
                to="/our-work"
                className={`hover:text-[#F5F5F5] transition-colors whitespace-nowrap shrink-0 ${
                  location.pathname === "/our-work" ? "text-[#F5F5F5] font-semibold" : ""
                }`}
              >
                Our Work
              </Link>

              <Link
                to="/reviews"
                className={`hover:text-[#F5F5F5] transition-colors whitespace-nowrap shrink-0 ${
                  location.pathname === "/reviews" ? "text-[#F5F5F5] font-semibold" : ""
                }`}
              >
                Reviews (5.0★)
              </Link>

              <Link
                to="/about"
                className={`hover:text-[#F5F5F5] transition-colors whitespace-nowrap shrink-0 ${
                  location.pathname === "/about" ? "text-[#F5F5F5] font-semibold" : ""
                }`}
              >
                About
              </Link>

              <Link
                to="/blog"
                className={`hover:text-[#F5F5F5] transition-colors whitespace-nowrap shrink-0 ${
                  location.pathname.startsWith("/blog") ? "text-[#F5F5F5] font-semibold" : ""
                }`}
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className={`hover:text-[#F5F5F5] transition-colors whitespace-nowrap shrink-0 ${
                  location.pathname === "/contact" ? "text-[#F5F5F5] font-semibold" : ""
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Zone 3: Direct Actions (Phone, Cart, Free Quote CTA) */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Prominent Click-to-Call Phone */}
              <a
                href={BUSINESS_INFO.phonePrimary.tel}
                className="hidden sm:flex items-center gap-2 text-xs md:text-sm font-semibold text-[#F5F5F5] hover:text-[#D7192A] transition-colors py-2 px-3 rounded-lg bg-[#141414] border border-[#1F1F1F]"
                title="Call Miri directly"
              >
                <Phone className="w-3.5 h-3.5 text-[#D7192A] fill-[#D7192A]" />
                <span className="tabular-nums font-mono">{BUSINESS_INFO.phonePrimary.display}</span>
              </a>

              {/* Cart Drawer Button with Animated Item Counter */}
              <button
                type="button"
                onClick={openDrawer}
                className="relative p-2.5 rounded-lg bg-[#141414] border border-[#1F1F1F] text-[#F5F5F5] hover:border-[#D7192A] transition-colors"
                aria-label={`View cart with ${itemCount} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#D7192A] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Primary High-Intent CTA */}
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#D7192A] hover:bg-[#B01020] rounded-lg shadow-lg shadow-[#D7192A]/20 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                Get a Free Quote
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-[#141414] border border-[#1F1F1F] text-[#F5F5F5] hover:text-[#D7192A]"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-50 bg-[#0A0A0A] overflow-y-auto px-6 py-6 border-t border-[#1F1F1F] lg:hidden flex flex-col justify-between">
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] pb-2 border-b border-[#1F1F1F]">
              Main Navigation
            </div>
            <Link
              to="/"
              className="block text-lg font-bold text-[#F5F5F5] hover:text-[#D7192A]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div className="space-y-2 pt-2">
              <div className="text-sm font-semibold text-[#8A8A8A]">Our Roofing Services</div>
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="block pl-3 py-1.5 text-sm text-[#F5F5F5] border-l border-[#1F1F1F] hover:border-[#D7192A] hover:text-[#D7192A]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {s.title}
                </Link>
              ))}
            </div>

            <Link
              to="/shop"
              className="block text-lg font-bold text-[#F5F5F5] hover:text-[#D7192A]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Roofing Supplies (Shop)
            </Link>

            <Link
              to="/our-work"
              className="block text-lg font-bold text-[#F5F5F5] hover:text-[#D7192A]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Work (Projects)
            </Link>

            <Link
              to="/reviews"
              className="block text-lg font-bold text-[#F5F5F5] hover:text-[#D7192A]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reviews (5.0★ Google)
            </Link>

            <Link
              to="/about"
              className="block text-lg font-bold text-[#F5F5F5] hover:text-[#D7192A]"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Marco & Arthur
            </Link>

            <Link
              to="/blog"
              className="block text-lg font-bold text-[#F5F5F5] hover:text-[#D7192A]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Advice & Guides (Blog)
            </Link>

            <Link
              to="/contact"
              className="block text-lg font-bold text-[#F5F5F5] hover:text-[#D7192A]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-8 pb-4 space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3.5 text-center font-bold uppercase tracking-wider text-white bg-[#D7192A] rounded-xl shadow-lg shadow-[#D7192A]/30"
            >
              Book Free On-Site Quote
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={BUSINESS_INFO.phonePrimary.tel}
                className="py-3 px-2 text-center text-xs font-semibold text-[#F5F5F5] bg-[#141414] border border-[#1F1F1F] rounded-xl flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#D7192A]" />
                Call Miri
              </a>
              <a
                href={BUSINESS_INFO.phoneSecondary.tel}
                className="py-3 px-2 text-center text-xs font-semibold text-[#F5F5F5] bg-[#141414] border border-[#1F1F1F] rounded-xl flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#D7192A]" />
                Call Arthur
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-[#8A8A8A] pt-2">
              <ShieldCheck className="w-4 h-4 text-[#D7192A]" />
              <span>Licensed & Insured · ABN {BUSINESS_INFO.abn}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
