import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { BUSINESS_INFO } from "../data/business";

export const LegalPage: React.FC = () => {
  const location = useLocation();

  let title = "Privacy Policy";
  let content = (
    <div className="space-y-4 text-xs text-neutral-300 leading-relaxed">
      <p>
        At Marco's Roofing Solutions (ABN {BUSINESS_INFO.abn}), we respect your privacy and are committed to protecting personal information collected through our website (marcosroofing.com.au).
      </p>
      <h3 className="font-heading font-bold text-sm text-[#F5F5F5] uppercase pt-2">
        1. Information We Collect
      </h3>
      <p>
        When you submit an enquiry, request an on-site quote, or purchase roofing materials from our online shop, we collect information including your name, Australian mobile number, email address, physical delivery/property address, and job specifics (photos, roof type, leak history).
      </p>
      <h3 className="font-heading font-bold text-sm text-[#F5F5F5] uppercase pt-2">
        2. How We Use Your Information
      </h3>
      <p>
        We use your information solely to schedule on-site inspections, generate photo-backed quotes, communicate job timelines, and deliver trade supplies. We will never sell, rent, or distribute your personal details to third-party marketing companies.
      </p>
      <h3 className="font-heading font-bold text-sm text-[#F5F5F5] uppercase pt-2">
        3. Contact
      </h3>
      <p>
        For inquiries regarding privacy, please contact Miri at {BUSINESS_INFO.email} or call {BUSINESS_INFO.phonePrimary.display}.
      </p>
    </div>
  );

  if (location.pathname === "/terms") {
    title = "Terms & Conditions";
    content = (
      <div className="space-y-4 text-xs text-neutral-300 leading-relaxed">
        <p>
          These Terms and Conditions govern quotes, bookings, contracting services, and retail trade purchases with Marco's Roofing Solutions (ABN {BUSINESS_INFO.abn}).
        </p>
        <h3 className="font-heading font-bold text-sm text-[#F5F5F5] uppercase pt-2">
          1. Quotes & Inspections
        </h3>
        <p>
          All on-site roof inspections across Melbourne are provided free of charge. Written quotes remain valid for 30 calendar days from the date of issue. Works are scheduled upon written or verbal acceptance by the property owner or authorised agent.
        </p>
        <h3 className="font-heading font-bold text-sm text-[#F5F5F5] uppercase pt-2">
          2. Workmanship & Material Warranties
        </h3>
        <p>
          Full roof restorations carry our written 10 to 15-year material warranty on approved acrylic membrane systems, combined with our workmanship guarantee covering rebedding and flexible pointing compliance under Australian Standard AS 2050.
        </p>
        <h3 className="font-heading font-bold text-sm text-[#F5F5F5] uppercase pt-2">
          3. Weather Conditions & Safety
        </h3>
        <p>
          Roof work requires safe, dry atmospheric conditions under Victorian WorkSafe occupational health regulations. If inclement weather (rain, excessive wind, lightning) occurs on a scheduled work day, works will resume on the next available dry day.
        </p>
      </div>
    );
  } else if (location.pathname === "/shipping-returns") {
    title = "Shipping & Returns Policy";
    content = (
      <div className="space-y-4 text-xs text-neutral-300 leading-relaxed">
        <p>
          Marco's Roofing Solutions dispatches trade-quality roofing supplies across greater Melbourne.
        </p>
        <h3 className="font-heading font-bold text-sm text-[#F5F5F5] uppercase pt-2">
          1. Melbourne Metro Delivery
        </h3>
        <p>
          Orders are charged a flat rate of $35.00 AUD (incl. GST) across metropolitan Melbourne. Orders with a cart subtotal of $300.00 AUD or more receive FREE standard delivery.
        </p>
        <h3 className="font-heading font-bold text-sm text-[#F5F5F5] uppercase pt-2">
          2. Warehouse Click & Collect
        </h3>
        <p>
          Free pickup is available from our Bundoora depot at 7 Gonella Crescent, Bundoora VIC 3083 during trade hours. Please bring your order confirmation email.
        </p>
        <h3 className="font-heading font-bold text-sm text-[#F5F5F5] uppercase pt-2">
          3. Returns
        </h3>
        <p>
          Unopened, undamaged paint pails, flexible pointing buckets, and tools may be returned within 14 days of purchase with original receipt for a full refund or exchange. Custom mixed tint coatings cannot be returned once tinted.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] pb-24">
      <div className="bg-[#141414] border-b border-[#1F1F1F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: title }]} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <h1 className="font-heading font-black text-3xl sm:text-4xl uppercase text-[#F5F5F5]">
          {title}
        </h1>

        <div className="bg-[#141414] border border-[#1F1F1F] rounded-3xl p-6 sm:p-10 shadow-xl">
          {content}
        </div>
      </div>
    </div>
  );
};
