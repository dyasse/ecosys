# Azianline

Premium cosmetics storefront and administration built with Next.js App Router, TypeScript, Tailwind and a Supabase-ready commerce schema.

## Run locally

1. Copy `.env.example` to `.env.local` and set the public Supabase values.
2. Install dependencies with `npm install`.
3. Run `npm run dev`.
4. Apply `supabase/migrations/0001_azianline.sql` to a new Supabase project before enabling commerce writes.

## Production requirements

- Supabase project: configure Auth redirect URLs, storage buckets, RLS policies and server-only service-role key.
- Stripe: set the secret/webhook/publishable keys and implement the provider session creation in `app/api/checkout/route.ts`.
- Email: configure a transactional provider and sender domain.
- Replace the supplied remote sample images with licensed assets in Supabase Storage.
- Review legal, tax, shipping and refund policies for the target market.

## Security model

The migration establishes UUID keys, relational constraints, stock checks, RLS ownership policies and separate roles. All order totals must be recomputed server-side from database prices; the current route demonstrates validation only until Supabase and Stripe credentials are configured.

## Validation

`npm run typecheck`, `npm run lint`, `npm run test`, `npm run build`
