/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { FloatingCallButton } from "./components/FloatingCallButton";
import { CartDrawer } from "./components/CartDrawer";
import { Toast } from "./components/Toast";
import { QuoteModal } from "./components/QuoteModal";

import { Home } from "./pages/Home";
import { ServiceDetail } from "./pages/ServiceDetail";
import { QuotePage } from "./pages/Quote";
import { ShopPage } from "./pages/Shop";
import { ProductDetailPage } from "./pages/ProductDetail";
import { CartPage } from "./pages/CartPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OurWorkPage } from "./pages/OurWork";
import { ReviewsPage } from "./pages/ReviewsPage";
import { AboutPage } from "./pages/About";
import { ContactPage } from "./pages/Contact";
import { BlogPage } from "./pages/Blog";
import { BlogPostPage } from "./pages/BlogPostPage";
import { LegalPage } from "./pages/LegalPage";
import { NotFoundPage } from "./pages/NotFound";

// Scroll to top helper on navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#F5F5F5] font-sans">
          {/* Global Header */}
          <Navbar onOpenQuoteModal={openQuoteModal} />

          {/* Main Route Views */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home onOpenQuoteModal={openQuoteModal} />} />
              <Route path="/services/:slug" element={<ServiceDetail onOpenQuoteModal={openQuoteModal} />} />
              <Route path="/quote" element={<QuotePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/shop/:slug" element={<ProductDetailPage onOpenQuoteModal={openQuoteModal} />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/our-work" element={<OurWorkPage onOpenQuoteModal={openQuoteModal} />} />
              <Route path="/reviews" element={<ReviewsPage onOpenQuoteModal={openQuoteModal} />} />
              <Route path="/about" element={<AboutPage onOpenQuoteModal={openQuoteModal} />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage onOpenQuoteModal={openQuoteModal} />} />
              <Route path="/privacy" element={<LegalPage />} />
              <Route path="/terms" element={<LegalPage />} />
              <Route path="/shipping-returns" element={<LegalPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Sticky Mobile Floating Call Button */}
          <FloatingCallButton />

          {/* Slide-Out Cart Drawer */}
          <CartDrawer />

          {/* Toast Notifications */}
          <Toast />

          {/* Global Quote Modal */}
          <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
