import React from "react";
import { Phone } from "lucide-react";
import { BUSINESS_INFO } from "../data/business";

export const FloatingCallButton: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 sm:hidden">
      <a
        href={BUSINESS_INFO.phonePrimary.tel}
        className="flex items-center gap-2.5 px-4 py-3 bg-[#D7192A] hover:bg-[#B01020] text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-2xl shadow-red-900/60 active:scale-95 transition-all border border-red-400/30"
        aria-label="Call Marco's Roofing directly on 0420 895 459"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <Phone className="w-4 h-4 fill-white" />
        <span>Call Now</span>
      </a>
    </div>
  );
};
