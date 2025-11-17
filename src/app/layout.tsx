import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/MainHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Dackeltreffen.de",
  description:
    "Finde Dackelrennen, Spaziergänge und Community-Events in deiner Nähe.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-[#F1EADA] text-[#5E4B8B]">
        <MainHeader />
        {/* Bereich unterhalb des festen Headers */}
        <main className="pt-16 h-[calc(100vh-4rem)]">
          {children}
        </main>
                <SiteFooter />

      </body>
    </html>
  );
}

