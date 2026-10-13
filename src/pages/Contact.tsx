import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { BUSINESS_INFO } from "../data/business";
import { QuickQuoteForm } from "../components/QuickQuoteForm";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] pb-24">
      {/* Header */}
      <div className="bg-[#141414] border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="py-14 lg:py-20 bg-gradient-to-b from-[#141414] to-[#0A0A0A] border-b border-[#1F1F1F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1F1F1F] rounded-full text-xs font-semibold text-[#D7192A]">
            <Phone className="w-3.5 h-3.5" />
            <span>Fast Response Melbourne Tradies</span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#F5F5F5]">
            Contact Marco's Roofing
          </h1>

          <p className="text-sm sm:text-base text-[#8A8A8A] max-w-xl mx-auto">
            Customers say we respond fastest to phone calls. Speak directly with Miri or Arthur today for quotes, leak triage, and product inquiries.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Call Miri */}
          <div className="p-6 bg-[#141414] border border-[#1F1F1F] rounded-2xl space-y-3 card-hover-glow">
            <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] border border-[#1F1F1F] flex items-center justify-center text-[#D7192A]">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#D7192A]">
                Customer Enquiries & Quotes
              </div>
              <h3 className="font-heading font-black text-lg text-[#F5F5F5] uppercase">
                Call Miri
              </h3>
            </div>
            <a
              href={BUSINESS_INFO.phonePrimary.tel}
              className="text-base font-bold text-white hover:text-[#D7192A] block tabular-nums"
            >
              {BUSINESS_INFO.phonePrimary.display}
            </a>
            <p className="text-xs text-[#8A8A8A]">
              Bookings, quotes, and general questions across Melbourne.
            </p>
          </div>

          {/* Card 2: Call Arthur */}
          <div className="p-6 bg-[#141414] border border-[#1F1F1F] rounded-2xl space-y-3 card-hover-glow">
            <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] border border-[#1F1F1F] flex items-center justify-center text-[#D7192A]">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#D7192A]">
                On-Site & Technical Ops
              </div>
              <h3 className="font-heading font-black text-lg text-[#F5F5F5] uppercase">
                Call Arthur
              </h3>
            </div>
            <a
              href={BUSINESS_INFO.phoneSecondary.tel}
              className="text-base font-bold text-white hover:text-[#D7192A] block tabular-nums"
            >
              {BUSINESS_INFO.phoneSecondary.display}
            </a>
            <p className="text-xs text-[#8A8A8A]">
              Urgent leak emergencies and technical roof specifications.
            </p>
          </div>

          {/* Card 3: Email */}
          <div className="p-6 bg-[#141414] border border-[#1F1F1F] rounded-2xl space-y-3 card-hover-glow">
            <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] border border-[#1F1F1F] flex items-center justify-center text-[#D7192A]">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#8A8A8A]">
                Written Quotes & Plans
              </div>
              <h3 className="font-heading font-black text-lg text-[#F5F5F5] uppercase">
                Email Us
              </h3>
            </div>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="text-xs font-semibold text-white hover:text-[#D7192A] block truncate"
            >
              {BUSINESS_INFO.email}
            </a>
            <p className="text-xs text-[#8A8A8A]">
              Send architectural blueprints or building plans for tender.
            </p>
          </div>

          {/* Card 4: Address */}
          <div className="p-6 bg-[#141414] border border-[#1F1F1F] rounded-2xl space-y-3 card-hover-glow">
            <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] border border-[#1F1F1F] flex items-center justify-center text-[#D7192A]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#8A8A8A]">
                Melbourne Base
              </div>
              <h3 className="font-heading font-black text-lg text-[#F5F5F5] uppercase">
                Our Location
              </h3>
            </div>
            <div className="text-xs font-semibold text-white">
              {BUSINESS_INFO.address}
            </div>
            <div className="text-[11px] text-[#8A8A8A] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#D7192A]" />
              <span>{BUSINESS_INFO.hours}</span>
            </div>
          </div>
        </div>

        {/* Form & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Quick Quote Form Column */}
          <div className="lg:col-span-6">
            <QuickQuoteForm
              defaultService="Roof Restoration"
              sourceLabel="Contact Page"
            />
          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-[#141414] border border-[#1F1F1F] rounded-2xl overflow-hidden p-2 shadow-xl">
              <div className="relative aspect-4/3 sm:aspect-16/10 rounded-xl overflow-hidden bg-[#0A0A0A]">
                <iframe
                  title="Marco's Roofing Solutions Location Map"
                  src={BUSINESS_INFO.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="p-4 flex items-center justify-between text-xs text-[#8A8A8A]">
                <span className="flex items-center gap-1.5 text-white font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#D7192A]" />
                  7 Gonella Crescent, Bundoora VIC 3083
                </span>
                <span>Click & Collect Warehouse</span>
              </div>
            </div>

            {/* Suburbs Covered List */}
            <div className="p-5 bg-[#141414] border border-[#1F1F1F] rounded-2xl space-y-3">
              <h4 className="font-heading font-bold text-sm uppercase text-[#F5F5F5]">
                Key Suburbs in Our Melbourne Service Loop:
              </h4>
              <p className="text-xs text-[#8A8A8A] leading-relaxed">
                {BUSINESS_INFO.primarySuburbs.join(" · ")} · and greater Melbourne.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
