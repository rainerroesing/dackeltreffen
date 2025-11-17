// src/app/treffen/page.tsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type EventType = "messe" | "treffen" | "zuchtschau" | "sonstiges";

type EventItem = {
  id: string;
  title: string;
  type: EventType;
  location: string;
  url: string;
  author: string;
  date: string; // ISO oder einfacher String "2025-05-12"
  time: string; // "14:00"
  distanceKm: number;
};

const ALL_EVENTS: EventItem[] = [
  {
    id: "e1",
    title: "Dackeltreff an der Alster",
    type: "treffen",
    location: "Hamburg, Außenalster",
    url: "https://example.com/dackeltreff-alster",
    author: "Laura",
    date: "2025-05-18",
    time: "11:00",
    distanceKm: 3.2,
  },
  {
    id: "e2",
    title: "Norddeutsche Dackel-Messe",
    type: "messe",
    location: "Hamburg Messehallen",
    url: "https://example.com/dackelmesse",
    author: "DTK Nord",
    date: "2025-06-01",
    time: "10:00",
    distanceKm: 4.8,
  },
  {
    id: "e3",
    title: "Zuchtschau – Rauhhaar Standard",
    type: "zuchtschau",
    location: "Norderstedt, Vereinsgelände",
    url: "https://example.com/zuchtschau",
    author: "Hundesportverein Norderstedt",
    date: "2025-06-15",
    time: "09:30",
    distanceKm: 14.5,
  },
  {
    id: "e4",
    title: "Dackel-Playdate im Stadtpark",
    type: "treffen",
    location: "Hamburg Stadtpark",
    url: "https://example.com/playdate-stadtpark",
    author: "Paul",
    date: "2025-05-22",
    time: "16:00",
    distanceKm: 5.1,
  },
  {
    id: "e5",
    title: "Fotowalk für Dackel",
    type: "sonstiges",
    location: "Hamburg, Hafencity",
    url: "https://example.com/fotowalk",
    author: "Dackelfotografie HH",
    date: "2025-05-25",
    time: "15:00",
    distanceKm: 7.8,
  },
];

const TYPE_LABELS: Record<EventType, string> = {
  messe: "Messe",
  treffen: "Dackeltreff",
  zuchtschau: "Zuchtschau",
  sonstiges: "Sonstiges",
};

type TypeFilter = EventType | "alle";

export default function TreffenPage() {
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("alle");
  const [userLocation, setUserLocation] = useState("");

  const filteredEvents = useMemo(() => {
    const byType =
      typeFilter === "alle"
        ? ALL_EVENTS
        : ALL_EVENTS.filter((e) => e.type === typeFilter);

    // aktuell: immer nach distanceKm sortiert
    return [...byType].sort((a, b) => a.distanceKm - b.distanceKm);
  }, [typeFilter]);

  return (
    <div className="bg-[#F1EADA] w-full pb-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-5">
        {/* Headline */}
        <header className="flex flex-col gap-1">
          <h1 className="font-gazpacho text-3xl text-[#3C1775]">
            Dackel-Treffen & Events
          </h1>
        </header>

        {/* Filterleiste */}
        <section className="rounded-2xl border border-[#E3D9C8] bg-[#FFFDF8] p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          {/* Art-Filter */}
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-[#A18C64]">
              Art des Events
            </span>
            <div className="flex flex-wrap gap-2">
              {(
                ["alle", "messe", "treffen", "zuchtschau", "sonstiges"] as TypeFilter[]
              ).map((type) => {
                const isActive = typeFilter === type;
                const label =
                  type === "alle" ? "Alle" : TYPE_LABELS[type as EventType];

                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setTypeFilter(type)}
                    className={`px-3 py-1 rounded-full border text-xs font-medium transition ${
                      isActive
                        ? "bg-[#3C1775] text-white border-[#3C1775]"
                        : "bg-[#FFFDF8] text-[#3C1775] border-[#B9A2FF] hover:bg-[#F5EEFF]"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Ort-Input (User-Standort) */}
          <div className="flex flex-col gap-2 w-full md:w-64">
            <label
              htmlFor="user-location"
              className="text-[11px] font-semibold uppercase tracking-wide text-[#A18C64]"
            >
              Dein Ort
            </label>
            <div className="flex items-center gap-2 rounded-full border border-[#D7C7AC] bg-white px-3 py-1">
              <span className="text-sm">📍</span>
              <input
                id="user-location"
                type="text"
                value={userLocation}
                onChange={(e) => setUserLocation(e.target.value)}
                placeholder="z.B. Hamburg Eimsbüttel"
                className="w-full bg-transparent text-sm text-[#3C1775] placeholder:text-[#B8A48A] focus:outline-none"
              />
            </div>
          </div>
        </section>

        {/* Eventliste */}
        <section className="flex flex-col gap-3 pb-4">
          {filteredEvents.length === 0 ? (
            <p className="text-xs text-[#7A6A4F]">
              Keine Events mit diesen Filtern gefunden.
            </p>
          ) : (
            filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))
          )}
        </section>
      </div>
    </div>
  );
}

// Kleine Card-Komponente im selben File
function EventCard({ event }: { event: EventItem }) {
  const { title, type, location, url, author, date, time, distanceKm } = event;

  const dateObj = new Date(date);
  const formattedDate = isNaN(dateObj.getTime())
    ? date
    : dateObj.toLocaleDateString("de-DE", {
        weekday: "short",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

  return (
    <article
      className="rounded-2xl border bg-[#FFFDF8] px-5 py-4 shadow-sm flex flex-col gap-2 md:flex-row md:items-center md:justify-between"
      style={{ borderColor: "#E3D9C8" }}
    >
      <div className="flex flex-col gap-1">
        {/* Titel + Typ-Badge */}
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="font-gazpacho text-xl text-[#3C1775]">{title}</h2>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-[#B9A2FF] bg-[#F5EEFF] px-2 py-0.5 text-[11px] font-semibold uppercase text-[#6E5A9A]">
            {TYPE_LABELS[type]}
          </span>
        </div>

        {/* Datum / Uhrzeit / Ort */}
        <div className="flex flex-wrap py-1 items-center gap-2 text-xs text-[#7A6A4F]">
          <span>
            {formattedDate} · {time} Uhr
          </span>
          <span className="hidden text-[#D0C0A0] md:inline">•</span>
          <span>📍 {location}</span>
          <span className="hidden text-[#D0C0A0] md:inline">•</span>
          <span>👤 {author}</span>
        </div>

        {/* Entfernung */}
        <div className="text-xs font-semibold text-[#3C1775]">
          Entfernung: {distanceKm.toFixed(1)} km (Demo)
        </div>
      </div>

      {/* Link / CTA */}
      <div className="mt-2 flex items-center justify-end gap-3 md:mt-0 md:flex-col md:items-end">
        <Link
          href={url}
          target="_blank"
          className="inline-flex items-center gap-2 rounded-full bg-[#FF785A] px-4 py-2 text-xs font-semibold text-white hover:bg-[#ff8b70] transition"
        >
          Event anzeigen
          <span aria-hidden>↗</span>
        </Link>
      </div>
    </article>
  );
}
