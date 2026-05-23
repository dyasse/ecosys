# 2. System Architecture

## Full Ecosystem Map

```
┌─────────────────────────────────────────────────────────────┐
│                        TRAFFIC LAYER                        │
│   Pinterest · Instagram · TikTok · Google · Facebook        │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                       WEBSITE LAYER                         │
│  Next.js + Vercel                                           │
│  ├── Home Page                                              │
│  ├── Product Landing Pages (one per product)                │
│  ├── Free Gift / Lead Magnet Page                           │
│  ├── Blog (SEO articles)                                    │
│  ├── Thank You Page                                         │
│  └── Legal Pages (Privacy, Terms)                           │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                     EMAIL CAPTURE LAYER                     │
│  Opt-in Form → Brevo API                                    │
│  ├── Consent checkbox (GDPR)                                │
│  ├── Double opt-in confirmation                             │
│  └── Interest tagging (crochet / knitting / planner)        │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                    EMAIL AUTOMATION LAYER                   │
│  Brevo Automations                                          │
│  ├── Welcome Sequence (5 emails)                            │
│  ├── Product Promo Sequences                                │
│  └── Re-engagement Sequence (if inactive 60 days)           │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                       PRODUCT LAYER                         │
│  ├── Gumroad (beginner) → Lemon Squeezy (growth)            │
│  ├── Etsy (marketplace traffic bonus)                       │
│  └── Your own checkout (advanced)                           │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                    ANALYTICS LAYER                          │
│  ├── Google Analytics 4 (website behavior)                  │
│  ├── Google Search Console (SEO performance)                │
│  ├── Brevo Dashboard (email metrics)                        │
│  └── Supabase (custom KPI dashboard)                        │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                   AI AUTOMATION LAYER                       │
│  n8n Workflows                                              │
│  ├── New subscriber → tag → sequence → database             │
│  ├── New product → landing page → social content → emails   │
│  ├── Weekly analytics → AI review → improvement report      │
│  ├── New support message → classify → draft reply           │
│  └── New blog idea → outline → draft → Pinterest posts      │
└─────────────────────────────────────────────────────────────┘
```

## Technology Stack Decision Guide

### Website: Next.js + Vercel (Recommended)

**Why not Webflow or Framer:**
- Webflow costs $23+/month, Framer costs $20+/month
- Next.js + Vercel is free until significant traffic
- Next.js gives you full SEO control, custom forms, API routes
- You own your code — no platform lock-in

**Setup time:** 1-2 days with templates  
**Cost:** $0/month to start  
**Scale:** Handles millions of visitors

### Email: Brevo (Recommended over Mailchimp)

**Why Brevo:**
- Free plan: 300 emails/day, unlimited contacts
- Built-in GDPR compliance tools
- Automation on free plan (Mailchimp removed this)
- Good deliverability
- Simple API for Next.js integration

**Mailchimp free plan:** Only 500 contacts, no automation on free tier

### Database: Supabase (Recommended)

**Why Supabase:**
- Free tier: 500MB database, 50,000 monthly active users
- Real-time subscriptions
- Built-in auth
- PostgreSQL (industry standard)
- REST API auto-generated

**Google Sheets alternative:** Use only for month 1. Migrate to Supabase once you have 100+ subscribers.

### Automation: n8n (Self-hosted) vs Make.com

| Feature | n8n (self-hosted) | Make.com |
|---|---|---|
| Cost | ~$5/month VPS | $9+/month |
| Learning curve | Medium | Low |
| Flexibility | Very high | Medium |
| Reliability | High | High |
| Beginner-friendly | Medium | High |

**Recommendation:** Start with Make.com (easier). Move to n8n when you need more control.

### Product Sales: Gumroad → Lemon Squeezy

**Month 1-3:** Gumroad  
- 0% monthly fee
- 10% transaction fee (high but zero risk)
- Instant PDF delivery
- Basic analytics

**Month 4+:** Lemon Squeezy  
- $0/month + 5% + $0.50 per transaction
- Built-in tax handling (VAT, sales tax globally)
- Subscription support
- Better checkout experience

## Data Flow Between Systems

```
User visits blog post
    → GA4 event: page_view
    → Clicks lead magnet CTA
    → Lands on /free-gift page
    → Fills opt-in form
    → Brevo API: contact created, tagged, sequence started
    → n8n webhook: contact saved to Supabase leads table
    → Email 1 sent: delivers free gift
    → 2 days later: Email 2 sent (value email)
    → 4 days later: Email 3 sent (brand story)
    → 6 days later: Email 4 sent (product offer)
    → 8 days later: Email 5 sent (bonus offer)
    → User clicks buy → Gumroad checkout
    → Gumroad webhook → n8n → Brevo tag: "buyer"
    → Buyer removed from sales sequence
    → Added to post-purchase sequence
```
