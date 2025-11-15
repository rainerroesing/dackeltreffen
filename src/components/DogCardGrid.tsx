// src/components/DogCardGrid.tsx
import React from "react";
import DogCard, {
  DogCardProps,
  DogSize,
  DogCoat,
  DogCompatibility
} from "./DogCard";

const mockCards: DogCardProps[] = [
  {
    dog: {
      name: "Fritz",
      gender: "male",
      size: "Zwerg",
      coat: "Rauhhaar",
      ageYears: 1,
      breederKind: "undefined",
      compatibility: "with all dogs"
    },
    owner: {
      name: "Leon",
      age: 35,
      gender: "male",
      needs: ["Looking for dogsitter", "Playdates", "Lorem"]
    },
    location: {
      district: "Milbertshofen",
      street: "Maximilianstraße"
    }
  },
  {
    dog: {
      name: "Fritz",
      gender: "male",
      size: "Zwerg",
      coat: "Rauhhaar",
      ageYears: 1,
      breederKind: "undefined",
      compatibility: "with all dogs"
    },
    owner: {
      name: "Leon",
      age: 35,
      gender: "male",
      needs: ["Looking for dogsitter", "Playdates", "Lorem"]
    },
    location: {
      district: "Milbertshofen",
      street: "Maximilianstraße"
    }
  },
  {
    // Variante ohne Hund
    owner: {
      name: "Laura",
      age: 34,
      gender: "female",
      needs: ["Looking for playdates", "Offering dogsitting"]
    },
    location: {
      district: "Schwabing",
      street: "Leopoldstraße"
    }
  }
];

export default function DogCardGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {mockCards.map((card, idx) => (
          <DogCard key={idx} {...card} />
        ))}
      </div>
    </section>
  );
}
