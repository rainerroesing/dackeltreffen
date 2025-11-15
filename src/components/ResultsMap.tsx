// src/components/ResultsMap.tsx
"use client";

import dynamic from "next/dynamic";

export type MapResult = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  district?: string;
};

type ResultsMapProps = {
  results: MapResult[];
};

const LeafletMap = dynamic(() => import("./ResultsMapInner"), {
  ssr: false,
});

export default function ResultsMap(props: ResultsMapProps) {
  return <LeafletMap {...props} />;
}
