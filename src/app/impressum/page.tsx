export default function ImpressumPage() {
  return (
    <div className="bg-[#F1EADA] w-full min-h-[calc(100vh-64px)]">
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-4">
        <h1 className="font-gazpacho text-3xl text-[#3C1775]">
          Impressum
        </h1>

        <p className="text-sm text-[#7A6A4F]">
          Angaben gemäß § 5 TMG
        </p>

        <p className="text-sm text-[#7A6A4F]">
          Dein Name<br />
          Straße Hausnummer<br />
          PLZ Ort<br />
          E-Mail: deine@mail.de
        </p>
      </main>
    </div>
  );
}
