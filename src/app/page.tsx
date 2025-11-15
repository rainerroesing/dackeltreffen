import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-16">
        {/* Hero */}
        <section className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Dackeltreffen.de
            </h1>
            <p className="max-w-xl text-slate-300">
              Finde Dackelrennen, Spaziergänge und Community-Events in deiner
              Nähe – oder erstelle selbst ein Treffen für dich und deinen
              Vierbeiner.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#events"
                className="rounded-full px-5 py-2 text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 transition"
              >
                Events entdecken
              </Link>
              <Link
                href="#submit-event"
                className="rounded-full px-5 py-2 text-sm font-semibold border border-slate-600 hover:border-slate-400 transition"
              >
                eigenes Event eintragen
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 text-sm shadow-lg">
            <p className="font-semibold mb-2">Nächstes Highlight</p>
            <p className="text-slate-300">
              🔜 Dackelrennen Hamburg –{" "}
              <span className="font-medium">Sommer 2026</span>
            </p>
            <p className="mt-2 text-slate-400">
              Details folgen – trage dich in Kürze für Updates ein.
            </p>
          </div>
        </section>

        {/* Event-Liste Placeholder */}
        <section id="events" className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Bevorstehende Dackel-Events
          </h2>
          <p className="text-slate-400 text-sm">
            Bald findest du hier eine Übersicht über alle bestätigten
            Dackeltreffen.
          </p>
          <div className="rounded-2xl border border-dashed border-slate-700 p-6 text-sm text-slate-400">
            Noch keine Events eingetragen. 🐶
            <br />
            <span className="text-slate-300">
              Bald kannst du hier nach Stadt, Datum und Event-Typ filtern.
            </span>
          </div>
        </section>

        {/* Event einreichen Placeholder */}
        <section id="submit-event" className="space-y-4">
          <h2 className="text-2xl font-semibold">Event einreichen</h2>
          <p className="text-slate-400 text-sm">
            In einem der nächsten Schritte kannst du hier dein eigenes
            Dackeltreffen eintragen und veröffentlichen.
          </p>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-300">
            ✅ Geplant:
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Formular für private &amp; kommerzielle Events</li>
              <li>Optionale kostenpflichtige Hervorhebung von Messen / großen Events</li>
              <li>Moderation &amp; Freischaltung durch Admin</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
