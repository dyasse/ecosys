# 11. Analytics Dashboard

## The Philosophy

Track only what you can act on. Don't collect data to feel busy — collect data to make better decisions. You need 10 clear numbers, checked weekly, acted on monthly.

---

## Your 10 Core KPIs

| # | KPI | Where to Find It | Check Frequency |
|---|---|---|---|
| 1 | Website Visitors (weekly) | Google Analytics 4 | Weekly |
| 2 | Lead Magnet Conversion Rate | GA4 (form submissions / page visits) | Weekly |
| 3 | New Email Subscribers (weekly) | Brevo Dashboard | Weekly |
| 4 | Email Open Rate (welcome sequence) | Brevo Automations | Weekly |
| 5 | Email Click Rate (welcome sequence) | Brevo Automations | Weekly |
| 6 | Product Page Conversion Rate | GA4 → Gumroad clicks / product page views | Weekly |
| 7 | Weekly Sales | Gumroad Dashboard | Weekly |
| 8 | Top Traffic Source | GA4 → Acquisition | Weekly |
| 9 | Top Performing Content | GA4 → Pages report | Weekly |
| 10 | Email List Size (running total) | Brevo | Weekly |

---

## What Good Numbers Look Like

| KPI | Poor | Average | Good | Excellent |
|---|---|---|---|---|
| Lead magnet page conversion | <5% | 5-15% | 15-30% | 30%+ |
| Welcome email open rate | <20% | 20-35% | 35-50% | 50%+ |
| Welcome email click rate | <2% | 2-5% | 5-10% | 10%+ |
| Product page conversion | <0.5% | 0.5-2% | 2-5% | 5%+ |
| Monthly list growth | <50 | 50-200 | 200-500 | 500+ |
| Pinterest monthly views | <1K | 1K-10K | 10K-100K | 100K+ |

---

## KPI Dashboard Structure

### Weekly Dashboard (Reviewed Every Monday)

```
╔══════════════════════════════════════════════════════════╗
║         WEEKLY PERFORMANCE DASHBOARD                     ║
║         Week of: [date]                                  ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  TRAFFIC                         vs. Last Week           ║
║  ─────────────────────────────────────────────           ║
║  Website Visitors:     [number]   [+/-]%                 ║
║  Top Traffic Source:   [source]                          ║
║  Top Blog Post:        [title]    [views]                ║
║  Lead Magnet Page CR:  [%]        [+/-]%                 ║
║                                                          ║
║  EMAIL LIST                                              ║
║  ─────────────────────────────────────────────           ║
║  New Subscribers:      [number]   [+/-]%                 ║
║  Total List Size:      [number]                          ║
║  Open Rate (W. seq):   [%]        [benchmark: 35%]       ║
║  Click Rate (W. seq):  [%]        [benchmark: 5%]        ║
║  Unsubscribes:         [number]   [goal: <0.1%]          ║
║                                                          ║
║  SALES                                                   ║
║  ─────────────────────────────────────────────           ║
║  Product Page Views:   [number]                          ║
║  Gumroad Clicks:       [number]                          ║
║  Sales:                [number]                          ║
║  Revenue:              $[amount]                         ║
║  Best Product:         [name]                            ║
║                                                          ║
║  THIS WEEK'S WINS:                                       ║
║  1. [write what worked]                                  ║
║  2. [write what worked]                                  ║
║                                                          ║
║  THIS WEEK'S ISSUES:                                     ║
║  1. [write what needs fixing]                            ║
║                                                          ║
║  NEXT WEEK PRIORITY:   [one main action]                 ║
╚══════════════════════════════════════════════════════════╝
```

---

## Setting Up Google Analytics 4

### Step 1: Create a GA4 Property
1. Go to analytics.google.com
2. Create account → Create property
3. Choose "Web"
4. Enter your website URL
5. Copy your Measurement ID (looks like: G-XXXXXXXXXX)

### Step 2: Add GA4 to Next.js

```javascript
// Install: npm install @next/third-parties

// In your layout.js (Next.js 13+ App Router):
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  )
}
```

### Step 3: Track Lead Magnet Form Submissions

```javascript
// In your OptInForm component, after successful submission:
if (typeof window !== 'undefined' && window.gtag) {
  window.gtag('event', 'generate_lead', {
    event_category: 'email',
    event_label: 'free-gift-form',
    value: 1
  });
}
```

### Step 4: Track Product Page Clicks to Gumroad

```javascript
// On your "Buy Now" button:
function trackProductClick(productName, price) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'begin_checkout', {
      currency: 'USD',
      value: price,
      items: [{ item_name: productName }]
    });
  }
}

<button onClick={() => {
  trackProductClick('Cozy Blanket Pattern', 5.99);
  window.open(gumroadUrl, '_blank');
}}>
  Buy Now →
</button>
```

### Step 5: Set Up Conversion Goals in GA4
1. In GA4: Admin → Events → Mark as Conversion
2. Mark these as conversions: `generate_lead`, `begin_checkout`
3. Now you can see your conversion rate in reports

---

## Setting Up Google Search Console

1. Go to search.google.com/search-console
2. Add your property → Verify with HTML tag in Next.js
3. Submit your sitemap: `https://yourdomain.com/sitemap.xml`
4. Check weekly: Performance → Queries (what people search to find you)

**Next.js sitemap setup:**

```javascript
// app/sitemap.js
export default function sitemap() {
  return [
    { url: 'https://yourdomain.com', lastModified: new Date() },
    { url: 'https://yourdomain.com/free-gift', lastModified: new Date() },
    { url: 'https://yourdomain.com/blog', lastModified: new Date() },
    // Add each product and blog post
  ]
}
```

---

## Weekly Review Template

Run this every Monday morning (takes 15 minutes):

```
WEEKLY REVIEW — [Date]

1. OPEN GOOGLE ANALYTICS
   - Sessions this week: ___
   - vs. last week: ___% change
   - Top page: ___
   - Top traffic source: ___
   - Lead magnet page: ___ views, ___ conversions, ___% CR

2. OPEN BREVO
   - New subscribers this week: ___
   - Total list size: ___
   - Welcome sequence Email 1 open rate: ___%
   - Welcome sequence Email 4 click rate: ___%
   - Unsubscribes: ___

3. OPEN GUMROAD
   - Sales this week: ___
   - Revenue: $___
   - Best selling product: ___

4. FILL IN THE DASHBOARD (template above)

5. IDENTIFY ONE ACTION
   - What is the biggest lever to pull this week?
   - Write it here: ___
   - Schedule time to do it: ___
```

---

## Monthly Improvement Template

Run this on the 1st of every month (takes 30-60 minutes):

```
MONTHLY REVIEW — [Month Year]

TRAFFIC
- Total visitors: ___  (goal: ___) 
- Best traffic source: ___
- Best blog post: ___ (views: ___)
- New blog posts published: ___
- New Pinterest pins: ___

EMAIL LIST
- Starting list size: ___
- Ending list size: ___
- Net growth: ___ (+___%)
- Average open rate this month: ___%
- Average click rate this month: ___%
- Unsubscribe rate: ___%

SALES
- Total sales: ___
- Total revenue: $___
- Best selling product: ___
- Conversion rate (email to sale): ___%

EXPERIMENTS
- Tests run this month: ___
- Winners: ___
- Changes made: ___

NEXT MONTH PRIORITIES:
1. ___
2. ___
3. ___

ONE BIG FOCUS: ___
```

---

## Decision Trees: What to Do Based on Your Numbers

### If Lead Magnet Conversion Rate < 10%

**Problem:** Page is not convincing enough, or wrong audience.

**Actions:**
1. Rewrite the headline — test a more specific, benefit-driven version
2. Check your traffic source — is it people who actually want this?
3. Add a mockup image if you don't have one
4. Remove navigation from the page (reduce distractions)
5. Add a bullet list of what's inside the free gift

### If Email Open Rate < 25%

**Problem:** Subject lines are weak OR your list quality is low OR emails going to spam.

**Actions:**
1. A/B test subject lines — try curiosity-based vs benefit-based
2. Clean your list — remove contacts who haven't opened in 90 days
3. Check your domain reputation at mail-tester.com
4. Make sure you have SPF/DKIM set up in Brevo

### If Product Page Conversion Rate < 1%

**Problem:** Offer isn't compelling, page copy needs work, or wrong traffic.

**Actions:**
1. Run the Offer Optimization Agent on this product
2. Add more specific benefit bullets (use customer language)
3. Add a FAQ section addressing common objections
4. Check if the price feels right for the value shown
5. Add more product photos (inside pages, finished result)

### If Top Traffic Source is Instagram but No Conversions

**Problem:** Instagram brings browsers, not buyers. Social traffic needs to warm up first.

**Actions:**
1. Put the lead magnet link in your bio, not the product link
2. Make more "problem-awareness" content that points to the free gift
3. Accept that Instagram takes 3-6 months to generate consistent buyers
4. Invest more time in Pinterest (better buyer intent)

### If No Traffic at All

**Problem:** Content hasn't found its audience yet — this is normal in month 1-2.

**Actions:**
1. Publish 2+ blog posts per week (focus on informational keywords)
2. Create 3+ Pinterest pins per day (use Canva + Tailwind scheduler)
3. Engage in relevant Facebook groups and Reddit communities
4. Be patient — organic traffic takes 60-90 days minimum to compound
