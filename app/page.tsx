import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      {/* ── NAVIGATION ───────────────────────────────────────── */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <Link href="/" className="text-xl font-bold text-[#6b4f3a]">
          [Your Brand Name]
        </Link>
        <div className="flex gap-6 text-sm font-medium text-[#2c2c2c]">
          <Link href="/patterns">Patterns</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/free-gift" className="text-[#6b4f3a] underline underline-offset-2">
            Free Gift
          </Link>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-[#faf8f5] px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2c2c2c] mb-4 leading-tight">
          Make Something Beautiful Today
        </h1>
        <p className="text-lg text-[#555] mb-8 max-w-xl mx-auto">
          Premium crochet, knitting, and planner printables — designed for makers who love quality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/patterns"
            className="bg-[#6b4f3a] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#5a3f2d] transition"
          >
            Browse Patterns →
          </Link>
          <Link
            href="/free-gift"
            className="border border-[#6b4f3a] text-[#6b4f3a] px-8 py-3 rounded-md font-semibold hover:bg-[#f5efe9] transition"
          >
            Get a Free Pattern →
          </Link>
        </div>
      </section>

      {/* ── VALUE PROPS ──────────────────────────────────────── */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: '⬇️',
              title: 'Instant Download',
              body: 'Your PDF arrives the moment you complete checkout.',
            },
            {
              icon: '📖',
              title: 'Beginner Friendly',
              body: 'Every pattern includes full photo tutorials and written instructions.',
            },
            {
              icon: '✨',
              title: 'Premium Design',
              body: 'Clean layouts, beautiful photography, no cluttered PDFs.',
            },
          ].map((v) => (
            <div key={v.title}>
              <div className="text-3xl mb-3">{v.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
              <p className="text-sm text-[#666]">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FREE GIFT BANNER ─────────────────────────────────── */}
      <section className="bg-[#e8d5cb] px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-[#2c2c2c] mb-3">
          Not sure where to start?
        </h2>
        <p className="text-[#555] mb-6 max-w-md mx-auto">
          Grab my free beginner's guide to reading crochet patterns — no credit card needed.
        </p>
        <Link
          href="/free-gift"
          className="bg-[#6b4f3a] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#5a3f2d] transition"
        >
          Download Free →
        </Link>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="bg-[#2c2c2c] text-white px-6 py-10 text-sm text-center">
        <p className="mb-2 font-semibold">[Your Brand Name]</p>
        <div className="flex gap-4 justify-center mb-4">
          <Link href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="text-gray-400 hover:text-white">Terms</Link>
          <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
        </div>
        <p className="text-gray-500">[Your Address or PO Box] · [City, State, ZIP]</p>
      </footer>
    </main>
  )
}
