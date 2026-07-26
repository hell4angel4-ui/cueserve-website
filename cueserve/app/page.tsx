// app/page.tsx — blank foundation check.
// No sections yet; just confirms tokens, fonts, and Tailwind are wired up.

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <p className="eyebrow">Foundation Check</p>
      <h1 className="text-h1">Cueserve</h1>
      <p className="text-body-lg text-muted">
        Tailwind, tokens, and fonts are wired up. Sections come next.
      </p>
    </main>
  );
}
