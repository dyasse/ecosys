import OptInForm from '@/components/OptInForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Beginner Guide to Reading Crochet Patterns | [Brand Name]',
  description:
    'Get the free guide that explains every crochet abbreviation, walks you through a real pattern, and gives you a printable cheat sheet. No credit card needed.',
  robots: 'index, follow',
}

export default function FreeGiftPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5]">
      {/* No navigation — focused conversion page */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">

        {/* Mockup image placeholder */}
        <div className="w-48 h-64 bg-[#e8d5cb] rounded-xl mx-auto mb-8 flex items-center justify-center text-[#6b4f3a] font-semibold text-sm">
          [PDF Mockup Image]
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#2c2c2c] mb-4 leading-tight">
          Finally Understand Crochet Patterns — Free Guide for Beginners
        </h1>

        <p className="text-lg text-[#555] mb-8 max-w-lg mx-auto">
          An 8-page free PDF that breaks down every abbreviation, walks you through
          a real pattern line by line, and gives you a printable cheat sheet —
          so you never feel lost again.
        </p>

        {/* What's inside */}
        <ul className="text-left max-w-md mx-auto mb-10 space-y-3 text-sm text-[#444]">
          {[
            'Plain-English translations of every common crochet abbreviation',
            'A real pattern decoded line by line so you can follow along',
            'The difference between US and UK crochet terms',
            'A printable cheat sheet to keep beside you while you work',
            'The 3 mistakes most beginners make — and how to avoid them',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-[#6b4f3a] font-bold mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Opt-in form — centered */}
        <div className="flex justify-center">
          <OptInForm source="free-gift-page" interest="crochet" />
        </div>
      </section>
    </main>
  )
}
