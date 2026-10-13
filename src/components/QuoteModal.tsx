import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X, CheckCircle2, Phone, AlertCircle, ArrowRight } from "lucide-react";
import { submitQuote } from "../services/api";
import { BUSINESS_INFO } from "../data/business";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    suburb: "",
    roofType: "Terracotta tile",
    service: "Full Roof Restoration",
    urgency: "ASAP",
    isLeaking: false,
    notes: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [refNum, setRefNum] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setStatus("submitting");
    try {
      const res = await submitQuote({
        services: [formData.service],
        roofType: formData.roofType,
        storeys: "1",
        approxAge: "Unknown",
        isLeaking: formData.isLeaking,
        suburb: formData.suburb || "Melbourne",
        postcode: "3000",
        streetAddress: "Requested via Quote Modal",
        preferredDate: "Next Available",
        preferredTimeWindow: "Morning",
        urgency: formData.urgency,
        name: formData.name,
        mobile: formData.phone,
        email: "modal-request@marcosroofing.internal",
        preferredContactMethod: "Call",
        notes: formData.notes
      });

      setRefNum(res.referenceNumber);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-[#0A0A0A] border border-[#1F1F1F] text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          {/* Top Red Roof Accent Bar */}
          <div className="h-1.5 w-full bg-[#D7192A]" />

          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-[#1F1F1F]">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#D7192A] uppercase">
                  Melbourne Roof Restoration Specialists
                </span>
                <h3 className="font-heading font-black text-xl text-[#F5F5F5] uppercase">
                  Book Free On-Site Quote
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-[#8A8A8A] hover:text-[#F5F5F5] rounded-lg hover:bg-[#141414]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {status === "success" ? (
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
                <h4 className="font-heading font-black text-2xl uppercase text-[#F5F5F5]">
                  Quote Request Received!
                </h4>
                <div className="bg-[#141414] border border-[#1F1F1F] p-4 rounded-xl text-left text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#8A8A8A]">Reference Number:</span>
                    <span className="font-mono font-bold text-[#F5F5F5]">{refNum}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8A8A8A]">Contact Number:</span>
                    <span className="font-mono text-[#F5F5F5]">{formData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8A8A8A]">Response Time:</span>
                    <span className="text-emerald-400 font-semibold">Within 1 Business Day</span>
                  </div>
                </div>

                <p className="text-xs text-[#8A8A8A]">
                  Arthur or Miri will inspect your roof details, schedule a visit, and provide an upfront photo-backed quote with zero sales pressure.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={BUSINESS_INFO.phonePrimary.tel}
                    className="flex-1 py-3 px-4 bg-[#D7192A] text-white text-xs font-bold uppercase rounded-xl flex items-center justify-center gap-2 hover:bg-[#B01020]"
                  >
                    <Phone className="w-4 h-4 fill-white" />
                    Call Now (Urgent)
                  </a>
                  <button
                    onClick={onClose}
                    className="flex-1 py-3 px-4 bg-[#141414] border border-[#1F1F1F] text-[#F5F5F5] text-xs font-bold uppercase rounded-xl hover:bg-[#1F1F1F]"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#8A8A8A] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Michael Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#141414] border border-[#1F1F1F] rounded-lg px-3 py-2 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#8A8A8A] mb-1">
                      Mobile Number (Australian) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0420 123 456"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#141414] border border-[#1F1F1F] rounded-lg px-3 py-2 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#8A8A8A] mb-1">
                      Melbourne Suburb *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bundoora, Doncaster"
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      className="w-full bg-[#141414] border border-[#1F1F1F] rounded-lg px-3 py-2 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#8A8A8A] mb-1">
                      Roof Material
                    </label>
                    <select
                      value={formData.roofType}
                      onChange={(e) => setFormData({ ...formData, roofType: e.target.value })}
                      className="w-full bg-[#141414] border border-[#1F1F1F] rounded-lg px-3 py-2 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
                    >
                      <option value="Terracotta tile">Terracotta Tile</option>
                      <option value="Concrete tile">Concrete Tile</option>
                      <option value="Metal / Colorbond">Metal / Colorbond®</option>
                      <option value="Slate">Slate</option>
                      <option value="Not sure">Not Sure / Needs Assessment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#8A8A8A] mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#141414] border border-[#1F1F1F] rounded-lg px-3 py-2 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
                  >
                    <option value="Full Roof Restoration">Roof Restoration (Clean, Repair, Point & Paint)</option>
                    <option value="Roof Leak Repair">Roof Leak Repair & Cracked Tiles</option>
                    <option value="Rebedding & Repointing">Ridge Cap Rebedding & Repointing</option>
                    <option value="Roof Painting">Roof Painting & Protective Membrane</option>
                    <option value="Gutters, Fascia & Eaves">Gutters, Fascia & Eaves Replacement</option>
                    <option value="Solar Panels">Solar Panels (Roofer Installed)</option>
                  </select>
                </div>

                {/* Urgent Leak Checkbox */}
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#141414] border border-[#1F1F1F]">
                  <input
                    type="checkbox"
                    id="urgentLeakModal"
                    checked={formData.isLeaking}
                    onChange={(e) => setFormData({ ...formData, isLeaking: e.target.checked })}
                    className="w-4 h-4 rounded text-[#D7192A] accent-[#D7192A] focus:ring-0"
                  />
                  <label htmlFor="urgentLeakModal" className="text-xs text-[#F5F5F5] cursor-pointer">
                    <strong className="text-red-400">Is your roof currently leaking?</strong> (We prioritise active leaks)
                  </label>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#8A8A8A] mb-1">
                    Job Notes or Details (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us what you're noticing (cracked tiles, water stain, moss)..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#141414] border border-[#1F1F1F] rounded-lg px-3 py-2 text-xs text-[#F5F5F5] focus:outline-none focus:border-[#D7192A]"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-xs text-red-400">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Submission failed. Please call 0420 895 459 directly.</span>
                  </div>
                )}

                <div className="pt-2 space-y-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3.5 bg-[#D7192A] hover:bg-[#B01020] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-red-950/40"
                  >
                    {status === "submitting" ? "Submitting Request..." : "Request Free On-Site Inspection"}
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-[#8A8A8A] pt-2">
                    <Link
                      to="/quote"
                      onClick={onClose}
                      className="text-[#D7192A] hover:underline flex items-center gap-1 font-medium"
                    >
                      Need to upload roof photos? Use Full 6-Step Quote
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    <span className="text-neutral-500">100% Free · No Obligation</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
