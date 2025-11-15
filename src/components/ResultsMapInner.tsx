// src/components/ResultsMapInner.tsx
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import type { MapResult } from "./ResultsMap";

// Default-Icon für Leaflet fixen, sonst werden Marker-Icons nicht geladen
const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

type ResultsMapProps = {
  results: MapResult[];
};

export default function ResultsMapInner({ results }: ResultsMapProps) {
  const center: [number, number] =
    results.length > 0
      ? [results[0].lat, results[0].lng]
      : [53.5511, 9.9937]; // Hamburg

  return (
    <div className="w-full h-full">
  <MapContainer className="w-full h-full"
        center={center}
        zoom={11}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; CARTO'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {results.map((r) => (
          <Marker key={r.id} position={[r.lat, r.lng]}>
            <Popup>
              <div className="text-sm">
                <div className="font-gazpacho text-[#3C1775] text-base">
                  {r.name}
                </div>
                {r.district && (
                  <div className="text-xs text-[#5E4B8B]">{r.district}</div>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
