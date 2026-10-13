import React from "react";
import { Link } from "react-router-dom";
import { Home, Phone, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "../data/business";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#0A0A0A] text-[#F5F5F5] px-4 py-20 text-center">
      <div className="max-w-md space-y-6">
        <div className="font-heading font-black text-7xl sm:text-8xl text-[#D7192A] tracking-tighter">
          404
        </div>

        <div className="space-y-2">
          <h1 className="font-heading font-black text-2xl uppercase text-[#F5F5F5]">
            Lost on the Ridge Line?
          </h1>
          <p className="text-xs text-[#8A8A8A] leading-relaxed">
            The roof page or supply item you are looking for has moved or does not exist. Let's get you back on solid footing.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-6 py-3.5 bg-[#D7192A] hover:bg-[#B01020] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/quote"
            className="px-6 py-3.5 bg-[#141414] border border-[#1F1F1F] text-[#F5F5F5] hover:text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2"
          >
            <span>Book a Free Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <p className="text-xs text-neutral-500 pt-4">
          Need urgent help with a roof leak? Call Miri directly:{" "}
          <a href={BUSINESS_INFO.phonePrimary.tel} className="text-[#D7192A] underline font-semibold">
            {BUSINESS_INFO.phonePrimary.display}
          </a>
        </p>
      </div>
    </div>
  );
};
