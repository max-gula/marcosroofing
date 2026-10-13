import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";

export const Toast: React.FC = () => {
  const { toastMessage, openDrawer } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-sm bg-[#141414] border border-[#1F1F1F] text-[#F5F5F5] px-4 py-3 rounded-xl shadow-2xl flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
      <div className="flex items-center gap-2.5">
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
        <span className="text-xs font-medium text-[#F5F5F5]">{toastMessage}</span>
      </div>
      <button
        type="button"
        onClick={openDrawer}
        className="text-xs font-bold uppercase tracking-wider text-[#D7192A] hover:underline flex items-center gap-1 shrink-0"
      >
        View
        <ArrowRight className="w-3 h-3" />
      </button>
    </div>
  );
};
