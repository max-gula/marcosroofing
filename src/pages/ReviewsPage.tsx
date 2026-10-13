import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Phone
} from "lucide-react";
import { REVIEWS } from "../data/reviews";
import { BUSINESS_INFO } from "../data/business";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const ReviewsPage: React.FC<{ onOpenQuoteModal: () => void }> = ({ onOpenQuoteModal }) => {
  const [filterJob, setFilterJob] = useState<string>("All");

  const jobTypes = ["All", "Restoration", "Repairs", "Leak Repair", "Rebedding"];

  const filteredReviews = filterJob === "All"
    ? REVIEWS
    : REVIEWS.filter((r) => r.jobType.toLowerCase().includes(filterJob.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] pb-24">
      {/* Header */}
      <div className="bg-[#141414] border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Customer Reviews" }]} />
        </div>
      </div>

      {/* Hero with Big Rating Header */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-[#141414] to-[#0A0A0A] border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1F1F1F] rounded-full text-xs font-semibold text-[#D7192A]">
            <CheckCircle2 className="w-4 h-4" />
            <span>100% Verified Local Homeowner Feedback</span>
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-6xl uppercase tracking-tight text-[#F5F5F5]">
            5.0 Stars Across Melbourne
          </h1>

          {/* Big Star Block */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-amber-400 stroke-amber-400" />
              ))}
            </div>
            <div className="text-left">
              <span className="font-heading font-black text-2xl text-[#F5F5F5] block">
                5.0 Out of 5.0
              </span>
              <span className="text-xs text-[#8A8A8A]">
                Based on 89+ verified Google customer reviews
              </span>
            </div>
          </div>

          <p className="text-sm text-[#8A8A8A] max-w-xl mx-auto leading-relaxed pt-2">
            We don't take shortcuts or use subcontractors. Read why Melbourne homeowners trust Marco, Arthur, Miri, Turi, and Jason for clean, on-time roof restorations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#141414] border border-[#1F1F1F] hover:border-[#D7192A] text-xs font-bold uppercase tracking-wider text-[#F5F5F5] rounded-xl flex items-center gap-2 transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-[#D7192A]" />
              <span>Leave Us a Review on Google</span>
            </a>

            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="px-6 py-3.5 bg-[#D7192A] hover:bg-[#B01020] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-red-950/40"
            >
              Book Your Free Inspection
            </button>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex items-center justify-between pb-6 border-b border-[#1F1F1F]">
          <div className="text-xs text-[#8A8A8A]">
            Showing <strong className="text-white">{filteredReviews.length}</strong> featured reviews
          </div>

          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {jobTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFilterJob(type)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  filterJob === type
                    ? "bg-[#D7192A] text-white"
                    : "bg-[#141414] border border-[#1F1F1F] text-[#8A8A8A] hover:text-[#F5F5F5]"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#141414] border border-[#1F1F1F] rounded-2xl p-6 sm:p-7 flex flex-col justify-between card-hover-glow space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-[#8A8A8A]">{rev.date}</span>
                </div>

                <div className="font-heading font-bold text-sm text-[#F5F5F5] italic border-l-2 border-[#D7192A] pl-3 py-0.5">
                  "{rev.quoteSnippet}"
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {rev.fullText}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1F1F1F] flex items-center justify-between text-xs">
                <div>
                  <strong className="text-white block font-heading">{rev.author}</strong>
                  <span className="text-neutral-500">{rev.suburb} VIC</span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-semibold text-[#D7192A] block">
                    {rev.jobType}
                  </span>
                  <span className="text-[10px] text-emerald-400 flex items-center justify-end gap-1 mt-0.5">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Client
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
