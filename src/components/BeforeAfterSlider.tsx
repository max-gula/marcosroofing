import React, { useState, useRef, useCallback } from "react";
import { IMAGES } from "../data/images";

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage = IMAGES.beforeAfter.before.url,
  afterImage = IMAGES.beforeAfter.after.url,
  beforeLabel = "BEFORE: Mossy & Cracked",
  afterLabel = "AFTER: Restored & Coated"
}) => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-16/10 sm:aspect-16/9 rounded-2xl overflow-hidden select-none border border-[#1F1F1F] shadow-2xl cursor-ew-resize group"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* Background Layer: AFTER Restored Image */}
      <img
        src={afterImage}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      <div className="absolute top-4 right-4 z-10 bg-[#0A0A0A]/85 backdrop-blur-md border border-[#1F1F1F] px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-emerald-400">
        {afterLabel}
      </div>

      {/* Foreground Layer (Clipped): BEFORE Weathered Image */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%" }}
          draggable={false}
        />
        <div className="absolute top-4 left-4 z-10 bg-[#0A0A0A]/85 backdrop-blur-md border border-[#1F1F1F] px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#D7192A]">
          {beforeLabel}
        </div>
      </div>

      {/* Vertical Slider Handle Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        {/* Center Drag Button */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-9 h-9 rounded-full bg-[#D7192A] text-white flex items-center justify-center shadow-lg border-2 border-white pointer-events-auto">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
            <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
          </svg>
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-[#8A8A8A] font-medium tracking-wide pointer-events-none">
        Drag slider left & right to compare
      </div>
    </div>
  );
};
