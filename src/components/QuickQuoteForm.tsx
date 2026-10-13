import React, { useState } from "react";
import { Send, CheckCircle2, Phone, AlertCircle } from "lucide-react";
import { submitQuote } from "../services/api";
import { BUSINESS_INFO } from "../data/business";

interface QuickQuoteFormProps {
  defaultService?: string;
  sourceLabel?: string;
}

export const QuickQuoteForm: React.FC<QuickQuoteFormProps> = ({
  defaultService = "Roof Restoration",
  sourceLabel = "Sidebar"
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    suburb: "",
    service: defaultService,
    notes: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [refNum, setRefNum] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setStatus("submitting");
    try {
      const res = await submitQuote({
        services: [formData.service],
        roofType: "Not specified",
        storeys: "Single storey",
        approxAge: "Unknown",
        isLeaking: false,
        suburb: formData.suburb || "Melbourne",
        postcode: "3000",
        streetAddress: "Requested via Quick Quote Form",
        preferredDate: "Next Available",
        preferredTimeWindow: "Morning",
        urgency: "Soon",
        name: formData.name,
        mobile: formData.phone,
        email: "quote-request@marcosroofing.internal",
        preferredContactMethod: "Call",
        notes: `Quick quote lead from ${sourceLabel}. Notes: ${formData.notes || "None"}`
      });

      setRefNum(res.referenceNumber);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-[#141414] border border-emerald-500/40 rounded-2xl p-6 text-center space-y-3">
        <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
        <h4 className="font-heading font-black text-lg uppercase text-[#F5F5F5]">
          Inspection Request Received!
        </h4>
        <p className="text-xs text-[#8A8A8A] leading-relaxed">
          Ref: <span className="font-mono font-bold text-[#F5F5F5]">{refNum}</span>. Miri or Arthur will call you at{" "}
          <strong className="text-white">{formData.phone}</strong> within 1 business day with your quote.
        </p>
        <div className="pt-2">
          <a
            href={BUSINESS_INFO.phonePrimary.tel}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#D7192A] hover:bg-[#B01020] px-4 py-2.5 rounded-lg"
          >
            <Phone className="w-3.5 h-3.5 fill-white" />
            Call Now for Urgent Leaks
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#141414] border border-[#1F1F1F] rounded-2xl p-6 shadow-xl relative overflow-hidden">
      {/* Red accent line top edge */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#D7192A]" />

      <div className="mb-4">
        <div className="text-[11px] font-bold uppercase tracking-widest text-[#D7192A]">
          Free On-Site Inspection
        </div>
        <h3 className="font-heading font-black text-xl text-[#F5F5F5] uppercase mt-0.5">
          Get a Fast Quote
        </h3>
        <p className="text-xs text-[#8A8A8A] mt-1">
          No obligation. Upfront pricing with high-resolution roof photos.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
        <div>
          <label className="block text-xs font-semibold text-[#8A8A8A] mb-1">
            Your Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. David Miller"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-[#0A0A0A] border border-[#1F1F1F] rounded-lg px-3 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#8A8A8A] mb-1">
            Mobile Number (Australian) *
          </label>
          <input
            type="tel"
            required
            placeholder="e.g. 0412 345 678"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-[#0A0A0A] border border-[#1F1F1F] rounded-lg px-3 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#8A8A8A] mb-1">
            Melbourne Suburb
          </label>
          <input
            type="text"
            placeholder="e.g. Bundoora or Doncaster"
            value={formData.suburb}
            onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
            className="w-full bg-[#0A0A0A] border border-[#1F1F1F] rounded-lg px-3 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#8A8A8A] mb-1">
            Roof Service
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full bg-[#0A0A0A] border border-[#1F1F1F] rounded-lg px-3 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
          >
            <option value="Roof Restoration">Full Roof Restoration</option>
            <option value="Roof Leak Repair">Roof Leak Repair</option>
            <option value="Roof Rebedding & Repointing">Rebedding & Repointing</option>
            <option value="Roof Painting">Roof Painting & Membrane</option>
            <option value="Gutters, Fascia & Eaves">Gutters, Fascia & Eaves</option>
            <option value="Solar Panels">Solar Panels</option>
            <option value="Not Sure / General Inspection">Not Sure / Full Inspection</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#8A8A8A] mb-1">
            Notes or Leak Details (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="e.g. Terracotta tiles, leak in front bedroom..."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full bg-[#0A0A0A] border border-[#1F1F1F] rounded-lg px-3 py-2 text-xs text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
          />
        </div>

        {status === "error" && (
          <div className="flex items-center gap-2 text-xs text-red-400">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Could not submit. Please call 0420 895 459 directly.</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full py-3 px-4 bg-[#D7192A] hover:bg-[#B01020] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-red-950/40 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
        >
          {status === "submitting" ? (
            <span>Sending Request...</span>
          ) : (
            <>
              <Send className="w-3.5 h-3.5" />
              <span>Request Free Inspection</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-center text-neutral-500 pt-1">
          Prefer to talk? Call Miri directly:{" "}
          <a href={BUSINESS_INFO.phonePrimary.tel} className="text-[#D7192A] hover:underline font-semibold">
            {BUSINESS_INFO.phonePrimary.display}
          </a>
        </p>
      </form>
    </div>
  );
};
