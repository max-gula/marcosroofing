import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  Phone,
  ShieldCheck,
  Award,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { SERVICES } from "../data/services";
import { BUSINESS_INFO } from "../data/business";
import { QuickQuoteForm } from "../components/QuickQuoteForm";
import { BeforeAfterSlider } from "../components/BeforeAfterSlider";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const ServiceDetail: React.FC<{ onOpenQuoteModal: () => void }> = ({ onOpenQuoteModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  // FAQ Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] pb-20">
      {/* Dynamic Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb Header Bar */}
      <div className="bg-[#141414] border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/#services" },
              { label: service.title }
            ]}
          />
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 border-b border-[#1F1F1F] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover opacity-25 filter blur-xs"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414] border border-[#1F1F1F] rounded-full text-xs font-semibold text-[#D7192A]">
              <span>Melbourne Roofing Service</span>
            </div>

            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#F5F5F5] text-balance">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-normal">
              {service.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="px-6 py-3.5 bg-[#D7192A] hover:bg-[#B01020] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-xl shadow-red-950/50"
              >
                Book Free On-Site Inspection
              </button>

              <a
                href={BUSINESS_INFO.phonePrimary.tel}
                className="px-5 py-3.5 bg-[#141414] hover:bg-[#1F1F1F] text-[#F5F5F5] border border-[#1F1F1F] text-xs font-bold uppercase tracking-wider rounded-xl flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#D7192A]" />
                <span>Call Miri: {BUSINESS_INFO.phonePrimary.display}</span>
              </a>
            </div>

            {/* Quick Metrics Strip */}
            <div className="pt-6 border-t border-[#1F1F1F] flex flex-wrap gap-6 text-xs text-[#8A8A8A]">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#D7192A]" />
                <span>Typical Duration: <strong className="text-[#F5F5F5]">{service.typicalDuration}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D7192A]" />
                <span>Warranty: <strong className="text-[#F5F5F5]">{service.warranty}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#D7192A]" />
                <span>Melbourne Master Roofers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sticky Sidebar Quote Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-16">
            {/* What's Included Checklist */}
            <section className="bg-[#141414] border border-[#1F1F1F] rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#D7192A]">
                  Scope of Work
                </div>
                <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase text-[#F5F5F5] mt-1">
                  What's Included in This Service
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-3.5">
                {service.inclusions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#D7192A] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Warning Signs You Need This */}
            <section className="bg-[#141414] border border-[#1F1F1F] rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-amber-500">
                  Inspection Guide
                </div>
                <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase text-[#F5F5F5] mt-1">
                  Warning Signs You Need This Done
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-3.5">
                {service.warningSigns.map((sign, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{sign}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Step-by-Step Process Timeline */}
            <section className="space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#D7192A]">
                  Step-by-Step Method
                </div>
                <h2 className="font-heading font-black text-2xl sm:text-3xl uppercase text-[#F5F5F5] mt-1">
                  Our Professional Process
                </h2>
              </div>

              <div className="space-y-4">
                {service.processSteps.map((step) => (
                  <div
                    key={step.step}
                    className="p-5 bg-[#141414] border border-[#1F1F1F] rounded-xl flex items-start gap-4"
                  >
                    <span className="font-heading font-black text-2xl text-[#D7192A] tabular-nums shrink-0 mt-0.5">
                      {step.step}
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-heading font-bold text-base text-[#F5F5F5]">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#8A8A8A] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Before / After Slider in Service Detail */}
            <section className="space-y-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#D7192A]">
                  Transformation
                </div>
                <h2 className="font-heading font-black text-2xl uppercase text-[#F5F5F5] mt-1">
                  Interactive Comparison
                </h2>
              </div>
              <BeforeAfterSlider />
            </section>

            {/* Roof Types Covered */}
            <section className="bg-[#141414] border border-[#1F1F1F] rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#D7192A]">
                  Roof Compatibility
                </div>
                <h2 className="font-heading font-black text-2xl uppercase text-[#F5F5F5] mt-1">
                  Roof Types We Cover
                </h2>
                <p className="text-xs text-[#8A8A8A] mt-1">
                  Specifically tailored to Melbourne architectural construction styles.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.roofTypes.map((rt) => (
                  <div key={rt.name} className="p-4 bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl space-y-1.5">
                    <div className="font-heading font-bold text-sm text-[#F5F5F5]">{rt.name}</div>
                    <p className="text-xs text-[#8A8A8A] leading-relaxed">{rt.suitability}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Accordion */}
            <section className="space-y-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#D7192A]">
                  Answers
                </div>
                <h2 className="font-heading font-black text-2xl uppercase text-[#F5F5F5] mt-1">
                  {service.title} FAQs
                </h2>
              </div>

              <div className="space-y-3">
                {service.faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-[#141414] border border-[#1F1F1F] rounded-xl overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm text-[#F5F5F5] hover:text-[#D7192A]"
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#8A8A8A] transition-transform ${
                            isOpen ? "rotate-180 text-[#D7192A]" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-4 text-xs text-[#8A8A8A] leading-relaxed border-t border-[#1F1F1F] pt-3">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Sticky Sidebar with Prefilled Quick Quote Form & Direct Call */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <QuickQuoteForm
              defaultService={service.title}
              sourceLabel={`Service Page: ${service.title}`}
            />

            {/* Emergency Hotline Card */}
            <div className="p-5 bg-[#141414] border border-[#1F1F1F] rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D7192A]">
                <Phone className="w-4 h-4" />
                <span>Active Water Leak?</span>
              </div>
              <p className="text-xs text-[#8A8A8A] leading-relaxed">
                If rain is currently dripping through your plaster or ceiling fixtures, call us right now for emergency response dispatch.
              </p>
              <div className="space-y-2 pt-1">
                <a
                  href={BUSINESS_INFO.phonePrimary.tel}
                  className="w-full py-2.5 px-3 bg-[#D7192A] hover:bg-[#B01020] text-white text-xs font-bold uppercase rounded-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 fill-white" />
                  <span>Call Miri: {BUSINESS_INFO.phonePrimary.display}</span>
                </a>
                <a
                  href={BUSINESS_INFO.phoneSecondary.tel}
                  className="w-full py-2.5 px-3 bg-[#1F1F1F] hover:bg-neutral-800 text-[#F5F5F5] text-xs font-bold uppercase rounded-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D7192A]" />
                  <span>Call Arthur: {BUSINESS_INFO.phoneSecondary.display}</span>
                </a>
              </div>
            </div>

            {/* Suburb Availability */}
            <div className="p-4 bg-[#141414] border border-[#1F1F1F] rounded-xl text-xs text-[#8A8A8A] space-y-1.5">
              <strong className="text-[#F5F5F5] block">Service Coverage:</strong>
              <p>
                Based in Bundoora VIC 3083. Rapid on-site inspection across Doncaster, Mill Park, Greensborough, Templestowe, Eltham, and surrounding suburbs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
