"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import { useDragScroll } from "@/hooks/useDragScroll";

interface Tab {
  id: string;
  label: string;
  icon?: React.ComponentType<{ size?: number }>;
}

interface Props {
  tabs: Tab[];
  active: number;
  onChange: (i: number) => void;
}

export default function FadeTabs({ tabs, active, onChange }: Props) {
  const scrollRef = useDragScroll<HTMLDivElement>();
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [needsScroll, setNeedsScroll] = useState(false);
  const hoverScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const overflows = el.scrollWidth > el.clientWidth + 2;
    setNeedsScroll(overflows);
    setShowLeft(overflows && el.scrollLeft > 4);
    setShowRight(overflows && el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, [scrollRef]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    const ro = new ResizeObserver(checkScroll);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      ro.disconnect();
    };
  }, [checkScroll, scrollRef]);

  const startHoverScroll = (dir: "left" | "right") => {
    if (hoverScrollRef.current) return;
    hoverScrollRef.current = setInterval(() => {
      const el = scrollRef.current;
      if (el) el.scrollLeft += dir === "right" ? 4 : -4;
    }, 16);
  };

  const stopHoverScroll = () => {
    if (hoverScrollRef.current) {
      clearInterval(hoverScrollRef.current);
      hoverScrollRef.current = null;
    }
  };

  return (
    <div className="relative overflow-hidden">

      {/* Left fade + chevron — mobile only, hover-scroll enabled */}
      {needsScroll && showLeft && (
        <div
          className="md:hidden absolute left-0 inset-y-0 w-16 z-10 flex items-center justify-start pl-1"
          style={{ background: "linear-gradient(to left, transparent, rgba(255,255,255,0.97))" }}
          onMouseEnter={() => startHoverScroll("left")}
          onMouseLeave={stopHoverScroll}
        >
          <span
            className="text-[#24B5D0] font-bold text-2xl leading-none select-none"
            style={{ animation: "chevronPulseLeft 2s ease-in-out infinite" }}
            aria-hidden="true"
          >‹</span>
        </div>
      )}

      {/* Right fade + chevron — mobile only, hover-scroll enabled */}
      {needsScroll && showRight && (
        <div
          className="md:hidden absolute right-0 inset-y-0 w-16 z-10 flex items-center justify-end pr-1"
          style={{
            background: "linear-gradient(to right, transparent, rgba(255,255,255,0.97))",
            animation: "tabRightPulse 2s ease-in-out infinite",
          }}
          onMouseEnter={() => startHoverScroll("right")}
          onMouseLeave={stopHoverScroll}
        >
          <span
            className="text-[#24B5D0] font-bold text-2xl leading-none select-none"
            style={{ animation: "chevronPulse 2s ease-in-out infinite" }}
            aria-hidden="true"
          >›</span>
        </div>
      )}

      {/* Scrollable inner */}
      <div className="tab-fade-inner" ref={scrollRef}>
        <div className="flex gap-2 py-2.5 min-w-max px-1">
          {tabs.map((tab, i) => {
            const Icon = tab.icon;
            const isActive = active === i;
            const isPurple = i % 2 === 1;
            return (
              <button
                key={tab.id}
                onClick={() => onChange(i)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? isPurple
                      ? "bg-[#AF29BE] text-white shadow-sm"
                      : "bg-[#24B5D0] text-white shadow-sm"
                    : "text-[#4a7a8a] hover:bg-[#EAF6FB] hover:text-[#24B5D0]"
                }`}
              >
                {Icon && <Icon size={14} />}
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
