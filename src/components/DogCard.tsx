// src/components/DogCard.tsx
import React from "react";

/* ------- Types ------- */
export type DogSize = "Kaninchen" | "Zwerg" | "Standard";
export type DogCoat = "Rauhhaar" | "Langhaar" | "Glatthaar";

export type DogBreederKind = "input" | "rescue" | "undefined";

export type DogCompatibility =
  | "with all dogs"
  | "with males"
  | "with females"
  | "depends";

export type OwnerNeedTag =
  | "Looking for dogsitter"
  | "Looking for related dogs"
  | "Looking for playdates"
  | "Offering dogsitting";

export type DogProfile = {
  name: string;
  gender: "male" | "female";
  size: DogSize;
  coat: DogCoat;
  ageYears: number;
  breederKind: DogBreederKind;
  breederInput?: string;
  compatibility: DogCompatibility;
};

export type OwnerProfile = {
  name: string;
  age: number;
  gender: "male" | "female";
  needs: OwnerNeedTag[];
};

export type LocationInfo = {
  district: string;
  street: string;
};

export type DogCardProps = {
  dog?: DogProfile;
  owner: OwnerProfile;
  location: LocationInfo;
};

/* ------- Helpers ------- */
function formatAge(years: number) {
  return years === 1 ? "1 year" : `${years} years`;
}

function getBreederLabel(dog: DogProfile): string {
  if (dog.breederKind === "rescue") return "Rescue dog";
  if (dog.breederKind === "undefined") return "Breeder not specified";
  return dog.breederInput || "Breeder";
}

function getGenderIcon(g: "male" | "female") {
  return g === "male" ? "♂" : "♀";
}

/* ------- Component ------- */
export default function DogCard({ dog, owner, location }: DogCardProps) {
  const ownerGenderIcon = owner.gender === "male" ? "👨" : "👩";

  return (
    <article
      className="flex h-full flex-col justify-between rounded-3xl border border-[#E3D9C8] bg-[#FFFDF8] p-6 shadow-sm"
    >
      <div className="flex flex-col gap-2">

        {/* ------- DOG SECTION ------- */}
        {dog ? (
          <section className="flex items-start gap-2">
            {/* Dog Avatar */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5EEFF] text-2xl">
              🐶
            </div>

            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-gazpacho text-2xl font-semibold text-[#3C1775]">
                  {dog.name}
                </h3>

                <span className="inline-flex items-center gap-1 rounded-full bg-[#FFE7F0] px-2 py-0.5 text-[11px] font-medium text-[#D46FA3]">
                  {getGenderIcon(dog.gender)}
                </span>
              </div>

              <p className="text-sm text-[#6E5A9A]">
                {dog.coat} · {dog.size} · {formatAge(dog.ageYears)}
              </p>

              <p className="text-xs text-[#8A7BAF]">{getBreederLabel(dog)}</p>

              <p className="pt-1 text-xs font-medium text-[#1B9D4A]">
                ✓ Compatible {dog.compatibility}
              </p>
            </div>
          </section>
        ) : (
          /* ------- NO DOG ------- */
          <section className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5EEFF] text-2xl">
              🐾
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-[#3C1775]">
                No dog currently
              </h3>
            </div>
          </section>
        )}

        {/* Divider */}
        <div className="h-px w-full bg-[#EEE1CC]" />

        {/* ------- OWNER SECTION ------- */}
        <section className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              {/* Owner Avatar */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFEFE6] text-xl">
                {ownerGenderIcon}
              </div>

              <div className="text-sm font-bold text-[#3C1775]">
                {owner.name} ({owner.age})
              </div>
            </div>

            {/* Message Button */}
            <button
              type="button"
              aria-label="Message owner"
              className="flex h-10 w-10 items-center justify-center bg-[#FF785A] rounded-lg transition hover:brightness-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </button>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px w-full bg-[#EEE1CC]" />

        {/* ------- NEED TAGS ------- */}
        {owner.needs.length > 0 && (
          <section className="flex py-2 flex-wrap gap-4">
            {owner.needs.map((need) => (
              <span
                key={need}
                className="inline-flex items-center rounded-full border-2 border-[#B9A2FF] bg-[#FFF8A6] px-3 py-1 text-[11px] font-bold uppercase text-[#6E5A9A]"
              >
                {need}
              </span>
            ))}
          </section>
        )}
          <div className="h-px w-full bg-[#EEE1CC] mb-4" />

        {/* ------- LOCATION FOOTER ------- */}
        <section className="flex flex-col items-center">

          <div className="flex items-center justify-center gap-2 text-xs text-[#7A6A4F]">
            <span>📍</span>
            <span>
              {location.district}, {location.street}
            </span>
          </div>
        </section>
      </div>
    </article>
  );
}