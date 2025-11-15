"use client";

import { CheckCircle } from "lucide-react";

export default function BenefitsBanner() {
  const items = [
    "Finde Dackel in deiner Nähe",
    "Organisiere Spaziergänge & Treffen",
    "Baue deine lokale Community auf"
  ];

  return (
    <div className="w-full bg-[#FF785A] text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* Bullet Points */}
        <ul className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-white" />
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button className="bg-white text-[#FF785A] font-semibold px-4 py-2 rounded-md hover:bg-slate-100 transition">
          Jetzt kostenlos registrieren
        </button>
      </div>
    </div>
  );
}
