// src/components/BenefitsBanner.tsx
"use client";

import { useState } from "react";
import { CheckCircle, X } from "lucide-react";

export default function BenefitsBanner() {
  const [closed, setClosed] = useState(false);
  if (closed) return null;

  const items = [
    "Finde Dackel in deiner Nähe",
    "Organisiere Treffen & Playdates",
    "Finde Wurfgeschwister",
  ];

  return (
    <div className="w-full bg-[#FF785A] text-white py-4 px-6 relative">
      {/* Close Button – vertikal mittig am rechten Rand */}
      <button
        onClick={() => setClosed(true)}
        aria-label="Banner schließen"
        className="
          absolute right-4 md:top-1/2 -translate-y-1/2
          p-1 rounded hover:bg-white/20 transition
        "
      >
        <X className="h-5 w-5" />
      </button>

      {/* Inhalt – als Block zentriert */}
      <div
        className="
          max-w-5xl mx-auto
          flex flex-col items-center gap-3 md:pr-10
          md:flex-row md:items-center md:justify-center md:gap-5
        "
      >
        {/* Bulletpoints */}
        <ul className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-4">
          {items.map((text) => (
            <li
              key={text}
              className="flex items-center font-bold gap-2 text-sm md:text-base"
            >
              <CheckCircle className="h-5 w-5 text-white" />
              <span>{text}</span>
            </li>
          ))}
        </ul>

        {/* Registrieren Button */}
        <button
          className="
            bg-white text-[#FF785A]
            px-4 py-2 rounded
            font-semibold text-sm md:text-base
            hover:bg-white/90 transition
            self-center md:self-auto
          "
        >
          Jetzt registrieren
        </button>
      </div>
    </div>
  );
}
