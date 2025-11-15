// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/MainHeader";

export const metadata: Metadata = {
  title: "xxxDackeltreffen.de",
  description:
    "Finde Dackelrennen, Spaziergänge und Community-Events in deiner Nähe."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <MainHeader />
        <main className="pt-4">{children}</main>
      </body>
    </html>
  );
}
