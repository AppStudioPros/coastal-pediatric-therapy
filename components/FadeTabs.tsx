"use client";
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

  return (
    <div className="tab-fade-wrap">
      <span className="tab-scroll-chevron" aria-hidden="true">›</span>
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
