// src/components/SiteFooter.tsx
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#E3D9C8] bg-[#FFF5EA] text-xs text-[#7A6A4F]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2">
        <span>© {new Date().getFullYear()} Dackeltreffen.de</span>

        <nav className="flex items-center gap-4">
          <Link
            href="/impressum"
            className="hover:underline"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="hover:underline"
          >
            Datenschutz
          </Link>
        </nav>
      </div>
    </footer>
  );
}
