import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You — Check Your Inbox | [Brand Name]',
  robots: 'noindex',
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div className="text-5xl mb-6">🧶</div>

        <h1 className="text-3xl font-bold text-[#2c2c2c] mb-4">
          You're In! Check Your Inbox.
        </h1>

        <p className="text-[#555] mb-4 leading-relaxed">
          Your free guide is on its way. It should arrive within the next 5 minutes.
          If you don't see it, check your spam folder and mark it as "not spam."
        </p>

        <p className="text-sm text-[#888] mb-10">
          Over the next few days I'll also send you a few helpful tips — all free, all practical.
          You can unsubscribe from any email with one click.
        </p>

        <div className="border-t border-[#e0d5cc] pt-8">
          <p className="text-sm font-semibold text-[#6b4f3a] mb-4">
            While you wait, you might love this:
          </p>
          <Link
            href="/patterns"
            className="inline-block bg-[#6b4f3a] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#5a3f2d] transition"
          >
            Browse Patterns →
          </Link>
        </div>
      </div>
    </main>
  )
}
