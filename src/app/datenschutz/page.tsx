export default function DatenschutzPage() {
  return (
    <div className="bg-[#F1EADA] w-full min-h-[calc(100vh-64px)]">
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-4">
        <h1 className="font-gazpacho text-3xl text-[#3C1775]">
          Datenschutz
        </h1>

        <p className="text-sm text-[#7A6A4F]">
          Hier kommt dein Datenschutzhinweis hin. 
          (Platzhaltertext – bitte rechtlich sauber befüllen.)
        </p>

        {/* Weitere Abschnitte */}
        <h2 className="mt-4 text-base font-semibold text-[#3C1775]">
          1. Verantwortlicher
        </h2>
        <p className="text-sm text-[#7A6A4F]">
          Dein Name<br />
          Deine Adresse<br />
          Deine E-Mail
        </p>
      </main>
    </div>
  );
}
