// src/components/MapFilters.tsx
"use client";

import { useState } from "react";
import { ChevronDown, Check, X } from "lucide-react";

const ALL_FILTERS = [
  "Rauhhaar",
  "Zwerg",
  "Standard",
  "Welpen",
  "Senioren",
  "Spielgruppe",
];

export default function MapFilters() {
  const [selected, setSelected] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  function toggleOption(option: string) {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  }

  function clearOption(option: string) {
    setSelected((prev) => prev.filter((o) => o !== option));
  }

  return (
    <div className="w-full bg-white/90 backdrop-blur-md p-3 border-b border-[#B9A2FF]/40">
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
        {/* Location-Input */}
        <input
          type="text"
          placeholder="Ort suchen…"
          className="
            px-3 py-2 rounded-md border border-[#B9A2FF]
            text-[#3C1775] placeholder:text-[#3C1775]/40
            min-w-[180px]
          "
        />

        {/* Multiselect-Dropdown */}
        <div className="relative min-w-[220px]">
          {/* "Input" mit Tags */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              w-full flex items-center justify-between gap-2
              px-3 py-2 rounded-md border border-[#B9A2FF]
              bg-white text-[#3C1775]
            "
          >
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              {selected.length === 0 && (
                <span className="text-sm text-[#3C1775]/40">
                  Filter auswählen…
                </span>
              )}

              {selected.length > 0 && (
                <div className="flex items-center gap-1">
                  {selected.map((option) => (
                    <span
                      key={option}
                      className="
                        flex items-center gap-1
                        px-2 py-0.5
                        rounded-full text-xs
                        border border-[#B9A2FF]
                        bg-white text-[#3C1775]
                        whitespace-nowrap
                      "
                      onClick={(e) => e.stopPropagation()}
                    >
                      {option}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          clearOption(option);
                        }}
                        className="inline-flex"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Flyout */}
          {isOpen && (
            <div
              className="
                absolute left-0 right-0 mt-1
                bg-white border border-[#B9A2FF]/60 rounded-md
                shadow-md
                max-h-60 overflow-y-auto
                z-50
              "
            >
              {ALL_FILTERS.map((option) => {
                const active = selected.includes(option);
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => toggleOption(option)}
                    className={`
                      w-full flex items-center justify-between px-3 py-2 text-sm
                      text-left
                      hover:bg-[#F1EADA]
                      ${active ? "bg-[#F1EADA]" : ""}
                    `}
                  >
                    <span className="text-[#3C1775]">{option}</span>
                    {active && <Check className="w-4 h-4 text-[#3C1775]" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
