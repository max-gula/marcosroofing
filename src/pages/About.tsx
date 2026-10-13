import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Phone,
  Clock,
  Sparkles
} from "lucide-react";
import { BUSINESS_INFO } from "../data/business";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const AboutPage: React.FC<{ onOpenQuoteModal: () => void }> = ({ onOpenQuoteModal }) => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] pb-24">
      {/* Header */}
      <div className="bg-[#141414] border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About Us" }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-[#141414] to-[#0A0A0A] border-b border-[#1F1F1F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1F1F1F] rounded-full text-xs font-semibold text-[#D7192A]">
            <Users className="w-3.5 h-3.5" />
            <span>Family-Run Melbourne Tradesmen Since 2009</span>
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-6xl uppercase tracking-tight text-[#F5F5F5]">
            Built on Honest Quoting & Genuine Craftsmanship
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            Led by brothers Marco and Arthur, we've spent over 15 years on Melbourne roofs. We don't subcontract, we don't sell what you don't need, and we stand by every ridge cap we point.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6 space-y-4 text-sm text-neutral-300 leading-relaxed">
            <div className="text-xs font-bold uppercase tracking-widest text-[#D7192A]">
              Our Story
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase text-[#F5F5F5]">
              The Marco's Roofing Journey
            </h2>
            <p>
              Marco and Arthur started Marco's Roofing Solutions with one simple philosophy: give homeowners the straight truth. In an industry too often plagued by pushy door-to-door salesmen and inflated replacement quotes, we built our reputation through word-of-mouth in Melbourne's Northern and Eastern suburbs.
            </p>
            <p>
              When a roof has 5 cracked tiles, we fix the 5 tiles and tell you your roof is good for another 8 years. When a 1970s terracotta or concrete tile roof requires full restoration, we walk through the exact steps, provide clear photo evidence, and apply premium Australian coatings that outlast Melbourne storms.
            </p>
            <p>
              Today, supported by Miri in customer coordination and expert roofers Turi and Jason on site, our team has completed hundreds of restorations while maintaining a flawless 5.0 Google rating.
            </p>
          </div>

          <div className="md:col-span-6 bg-[#141414] border border-[#1F1F1F] rounded-3xl p-6 sm:p-8 space-y-4">
            <h3 className="font-heading font-bold text-lg uppercase text-[#F5F5F5] border-b border-[#1F1F1F] pb-3">
              Credentials & Company Registration
            </h3>

            <div className="space-y-3 text-xs text-[#8A8A8A]">
              <div className="flex justify-between py-1 border-b border-[#1F1F1F]">
                <span>Registered Business Name:</span>
                <strong className="text-white">Marco's Roofing Solutions</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-[#1F1F1F]">
                <span>Australian Business Number (ABN):</span>
                <strong className="font-mono text-white">{BUSINESS_INFO.abn}</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-[#1F1F1F]">
                <span>Tradesman Licence:</span>
                <span className="font-mono text-neutral-400">[LICENCE NO.]</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#1F1F1F]">
                <span>Public Liability Insurance:</span>
                <strong className="text-emerald-400">$20M Comprehensive Cover</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-[#1F1F1F]">
                <span>Base of Operations:</span>
                <span className="text-white">{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Material Warranties:</span>
                <strong className="text-[#D7192A]">7–15 Year Written Guarantee</strong>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Core Values */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#D7192A]">
              What We Stand For
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase text-[#F5F5F5]">
              Our Five Guarantees to Every Customer
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "1. Upfront Fixed Pricing",
                desc: "No hidden charges, travel fees, or unexpected bill shocks. Every quote is itemised in writing."
              },
              {
                title: "2. Punctual & Respectful",
                desc: "We turn up on time when promised, keep you informed of daily progress, and respect your family's schedule."
              },
              {
                title: "3. Spotless Site Cleanliness",
                desc: "We clear your gutters, sweep down paths, magnetically collect screws, and dispose of all broken tile rubble."
              },
              {
                title: "4. No-Pressure Assessments",
                desc: "We'll never pressure you to sign a contract on the spot. Take your time to review our photo report."
              },
              {
                title: "5. Australian Trade Standards",
                desc: "We exclusively use membranes formulated for Australian UV and pointing compounds compliant with AS 2050."
              },
              {
                title: "6. Real Family Communication",
                desc: "You can phone Miri or Arthur directly before, during, or years after your roof restoration."
              }
            ].map((v, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#141414] border border-[#1F1F1F] rounded-2xl space-y-2 card-hover-glow"
              >
                <div className="font-heading font-bold text-base text-[#F5F5F5]">
                  {v.title}
                </div>
                <p className="text-xs text-[#8A8A8A] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Members */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#D7192A]">
              The People on Your Roof
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase text-[#F5F5F5]">
              Meet Our Crew
            </h2>
            <p className="text-xs text-[#8A8A8A]">
              Named and recognized throughout our 89+ 5-star customer reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_INFO.teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-[#141414] border border-[#1F1F1F] rounded-2xl p-6 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Avatar Placeholder with initials */}
                  <div className="w-16 h-16 rounded-2xl bg-[#0A0A0A] border border-[#1F1F1F] flex items-center justify-center font-heading font-black text-xl text-[#D7192A]">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#F5F5F5]">
                      {member.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#D7192A]">
                      {member.role}
                    </div>
                  </div>
                  <p className="text-xs text-[#8A8A8A] leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1F1F1F] flex items-center gap-1.5 text-[11px] text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Trade Qualified & Insured</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 bg-gradient-to-r from-[#D7192A] via-[#B01020] to-[#8A0A17] rounded-3xl text-center space-y-4 text-white">
          <h3 className="font-heading font-black text-2xl sm:text-4xl uppercase">
            Ready to Speak with Marco or Arthur?
          </h3>
          <p className="text-sm text-white/90 max-w-xl mx-auto">
            Book a free on-site roof inspection with zero sales pressure. We'll show you high-res photos and tell you straight.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="px-6 py-3.5 bg-white text-black font-heading font-black text-xs uppercase tracking-wider rounded-xl hover:bg-neutral-100 shadow-xl"
            >
              Book Free On-Site Quote
            </button>
            <a
              href={BUSINESS_INFO.phonePrimary.tel}
              className="px-6 py-3.5 bg-black/40 hover:bg-black/60 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl border border-white/30 flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 fill-white" />
              <span>Call Miri: {BUSINESS_INFO.phonePrimary.display}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
