"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

      {/* Left fade — mobile only, hover-scroll enabled */}
      {needsScroll && showLeft && (
        <div
          className="md:hidden absolute left-0 top-0 bottom-0 w-20 z-10"
          style={{ background: "linear-gradient(to left, transparent, rgba(255,255,255,0.95))" }}
          onMouseEnter={() => startHoverScroll("left")}
          onMouseLeave={stopHoverScroll}
        >
          <ChevronLeft
            size={32}
            strokeWidth={3}
            className="absolute text-[#24B5D0] opacity-70 select-none"
            style={{
              left: 2,
              top: "50%",
              transform: "translateY(-50%)",
              animation: "chevronPulseLeft 2s ease-in-out infinite",
            }}
            aria-hidden="true"
          />
        </div>
      )}

      {/* Right fade — mobile only, hover-scroll enabled */}
      {needsScroll && showRight && (
        <div
          className="md:hidden absolute right-0 top-0 bottom-0 w-20 z-10"
          style={{
            background: "linear-gradient(to right, transparent, rgba(255,255,255,0.95))",
            animation: "tabRightPulse 2s ease-in-out infinite",
          }}
          onMouseEnter={() => startHoverScroll("right")}
          onMouseLeave={stopHoverScroll}
        >
          <ChevronRight
            size={32}
            strokeWidth={3}
            className="absolute text-[#24B5D0] opacity-70 select-none"
            style={{
              right: 2,
              top: "50%",
              transform: "translateY(-50%)",
              animation: "chevronPulse 2s ease-in-out infinite",
            }}
            aria-hidden="true"
          />
        </div>
      )}

      {/* Scrollable inner — scroll on mobile, hidden on desktop */}
      <div className="tab-fade-inner md:overflow-x-hidden" ref={scrollRef}>
        <div className="flex gap-2 py-2.5 min-w-max md:min-w-0 md:w-full px-1">
          {tabs.map((tab, i) => {
            const Icon = tab.icon;
            const isActive = active === i;
            const isPurple = i % 2 === 1;
            return (
              <button
                key={tab.id}
                onClick={() => onChange(i)}
                className={`flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap md:flex-1 ${
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
