import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dackeltreffen.de",
  description: "Finde Dackelrennen, Spaziergänge und Community-Events in deiner Nähe."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
