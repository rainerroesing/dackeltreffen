// src/components/SiteFooter.tsx
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer
      className="
        hidden md:flex
        fixed bottom-0 left-0 right-0
        border-t border-[#E3D9C8] bg-[#FFFDF8]
        text-[11px] text-[#7A6A4F]
        justify-center
        z-1000
      "
    >
      <div className="flex gap-4 px-4 py-2">
        <Link href="/impressum" className="hover:underline">
          Impressum
        </Link>
        <Link href="/datenschutz" className="hover:underline">
          Datenschutz
        </Link>
      </div>
    </footer>
  );
}
