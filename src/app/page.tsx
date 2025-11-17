// src/app/page.tsx

import ResultsMap from "@/components/ResultsMap";
import DogCardGrid from "@/components/DogCardGrid";
import BenefitsBanner from "@/components/BenefitsBanner";

const mockResults = [
  {
    id: "1",
    name: "Wurstl (Laura)",
    lat: 53.5511,
    lng: 9.9937,
    district: "Hamburg-Altstadt",
  },
  {
    id: "2",
    name: "Fritz (Paul)",
    lat: 53.566,
    lng: 9.96,
    district: "Eimsbüttel",
  },
];

export default function HomePage() {
  // später: z.B. const showBanner = !isLoggedIn;
  const showBanner = true;

  return (
    // Höhe = Viewport minus Header (64px bei h-16)
    <div className="bg-[#F1EADA] w-full h-[calc(100vh-64px)] md:h-[calc(100vh-98px)] flex flex-col">
      {/* Banner optional */}
      {showBanner && <BenefitsBanner />}

      {/* Dieser Bereich füllt immer den Rest und enthält Map + Liste */}
      <div className="flex-1 w-full px-0 md:overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full h-full">
          {/* LINKS: Map – 2/3, volle Höhe auf Desktop */}
          <div className="md:col-span-2 h-64 md:h-full">
            <ResultsMap results={mockResults} />
          </div>

          {/* RECHTS: Liste – eigener Scroll + Headline */}
          <div className="md:col-span-1 h-full overflow-y-auto md:pb-4">
            <h1 className="font-gazpacho text-3xl text-[#3C1775] px-4 md:px-6 pt-6">
              Dackel in deiner Nähe
            </h1>
            <DogCardGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
