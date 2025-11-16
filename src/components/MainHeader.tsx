"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoIcon from "./LogoIcon";
import HeaderInboxButton from "./HeaderInboxButton";

const navItems = [
  { label: "Dackel", href: "/" },       // Home
  { label: "Treffen", href: "/treffen" }
];

export default function MainHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const text = "#3C1775";
  const border = "#D6CCFF";
  const bgLight = "#F8F5FF";
  const accent = "#FF785A"; // Suche + Avatar

  return (
    <header
    className="fixed inset-x-0 top-0 z-[5000] bg-white border-b border-[#E0D4FF]"
      style={{ background: "#FFFFFF", borderColor: border }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center px-4">
        {/* BURGER BUTTON – mobile */}
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border p-1 md:hidden"
          style={{ borderColor: border }}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <div className="space-y-1">
            <div className="h-0.5 w-5" style={{ background: text }} />
            <div className="h-0.5 w-5" style={{ background: text }} />
            <div className="h-0.5 w-5" style={{ background: text }} />
          </div>
        </button>

        {/* LOGO */}
  <Link href="/" className="flex items-center gap-3">
  <LogoIcon className="h-8 w-auto" />
  <span
    className="text-base font-gazpacho tracking-tight"
    style={{ color: text }}
  >
    Dackeltreffen.de
  </span>
</Link>


        {/* DESKTOP NAV */}
        <nav className="ml-4 hidden items-center gap-3 text-sm md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1 transition"
                style={{
                  color: text,
                  fontWeight: isActive ? 700 : 400,
                  background: isActive ? "#F5F1FF" : "transparent"
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* DESKTOP-SUCHE */}
        <form className="hidden items-center md:flex" role="search">
          <input
            type="search"
            placeholder="Suchen"
            className="h-9 w-52 rounded-l-full border border-r-0 px-4 text-sm outline-none"
            style={{
              borderColor: border,
              color: text,
              background: bgLight
            }}
          />
          <button
            type="submit"
            className="h-9 rounded-r-full px-4 text-xs font-semibold text-white"
            style={{
              background: accent,
              border: `1px solid ${accent}`,
              borderLeft: "none"
            }}
          >
            Suchen
          </button>
        </form>

        {/* LOGIN + AVATAR */}
        <div className="flex items-center gap-2 pl-6">
          <button
            className="rounded-full border px-3 py-1 text-xs font-semibold transition"
            style={{ color: text, borderColor: border }}
          >
            Login
          </button>
           <HeaderInboxButton unreadCount={3} />

          <button
            className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-white"
            style={{ background: accent }}
          >
            RR
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{ background: "white", borderColor: border }}
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-2 py-2"
                  style={{
                    color: text,
                    fontWeight: isActive ? 700 : 400,
                    background: isActive ? "#F5F1FF" : "transparent"
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* MOBILE-SUCHE */}
            <form
              className="mt-3 flex items-center"
              role="search"
              onSubmit={() => setMobileOpen(false)}
            >
              <input
                type="search"
                placeholder="Suchen"
                className="h-9 flex-1 rounded-l-full border border-r-0 px-4 text-sm outline-none"
                style={{
                  borderColor: border,
                  color: text,
                  background: bgLight
                }}
              />
              <button
                type="submit"
                className="h-9 rounded-r-full px-4 text-xs font-semibold text-white"
                style={{
                  background: accent,
                  border: `1px solid ${accent}`
                }}
              >
                Los
              </button>
            </form>
          </nav>
        </div>
      )}
    </header>
  );
}
