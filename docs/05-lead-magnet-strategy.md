# 5. Lead Magnet Strategy

## What Makes a Great Lead Magnet for Digital Products

A lead magnet must pass the "Would I give my email for this?" test.

**The rules:**
1. Solve one specific problem for one specific person
2. Deliverable in under 10 minutes of reading/using
3. Directly related to your paid product (so your email list wants what you sell)
4. High perceived value — even if it costs you nothing to create

---

## 10 Lead Magnet Ideas

| # | Title | Format | Audience | Paid Product It Leads To |
|---|---|---|---|---|
| 1 | **The Beginner's Yarn Guide: How to Choose the Right Yarn for Any Project** | PDF Checklist | Beginner crocheters/knitters | Any beginner pattern |
| 2 | **Free Mini Crochet Pattern: The 1-Hour Cozy Mug Cozy** | Mini PDF pattern (4 pages) | Beginner crocheters | Beginner pattern bundle |
| 3 | **Crochet Gauge Cheat Sheet: Never Guess Your Stitch Count Again** | 1-page printable | Intermediate crocheters | Any paid pattern |
| 4 | **5 Common Crochet Mistakes (And How to Fix Them)** | PDF guide (6 pages) | Beginners who've tried and struggled | Beginner-friendly patterns |
| 5 | **Free Knitting Needle Size Conversion Chart** | 1-page printable | All knitters | Knitting patterns |
| 6 | **The Maker's Weekly Planner — Free Printable Template** | 1-page printable | Crafters who love planners | Printable planner bundles |
| 7 | **10 Easy Projects You Can Finish This Weekend (Pattern Ideas List)** | PDF guide | Beginners wanting quick wins | Pattern bundles |
| 8 | **Free Crochet Stitch Library: 8 Basic Stitches With Photo Guides** | 8-page PDF | Absolute beginners | All crochet patterns |
| 9 | **How to Read a Crochet Pattern (Beginner's Guide to Abbreviations)** | PDF guide | Total beginners | First pattern purchase |
| 10 | **The Creative Maker's Goal Planner: Plan Your Projects and Actually Finish Them** | 2-page printable | Crafters who struggle with finishing | Planner products |

---

## Best Lead Magnet for Your First MVP

**Recommendation: Option 9 — "How to Read a Crochet Pattern"**

**Why this one:**
- Solves the #1 problem every beginner has (patterns look like a foreign language)
- Attracts the largest audience segment (beginners)
- Directly qualifies buyers — anyone who wants this is EXACTLY who buys your patterns
- Takes 1-2 hours to write and design in Canva
- Evergreen — relevant forever

**Alternatively if you sell planners:** Use Option 6 (Maker's Weekly Planner) — a printable they can use immediately.

---

## Lead Magnet Landing Page Copy

### Headline Options (test these)

**Option A:** `Finally Understand Crochet Patterns — Free Guide for Beginners`

**Option B:** `The Beginner's Guide to Reading Crochet Patterns (Download Free)`

**Option C:** `Confused by Crochet Abbreviations? This Free Guide Explains Everything`

### Subheadline

`I'll send you a free 8-page PDF that breaks down every crochet abbreviation, how to read a pattern from start to finish, and the 3 mistakes that trip up most beginners — all with clear photos.`

### Bullet Points (What's Inside)

- How to decode confusing abbreviations like "sc," "dc," "sk," and "ch" — with plain English translations
- A real pattern example broken down line by line so you can see exactly how to follow it
- The difference between US and UK crochet terms (and how to switch between them)
- A quick-reference cheat sheet you can print and keep beside you while you work
- Common beginner mistakes — and how to fix them before they ruin your project

### Form Fields

- First name (so emails feel personal)
- Email address
- Submit button: `Send My Free Guide →`
- Below button: `100% free. No spam. Unsubscribe anytime. See [Privacy Policy].`

### Consent Text (GDPR compliant)

For EU/UK visitors, add a checkbox:

`☐ I agree to receive helpful emails from [Brand Name], including my free guide, pattern tips, and occasional offers. I can unsubscribe at any time.`

---

## Thank You Page Copy

### Headline

`Your Free Guide Is On Its Way!`

### Body

`Check your inbox — your copy of "How to Read a Crochet Pattern" should arrive within the next 5 minutes. Check your spam folder if you don't see it.`

`While you wait, here's something you might love:`

[Show your top product with a "Shop Now →" button — soft, not pushy]

`Over the next few days, I'll also send you a few more tips for beginner crocheters — all free, all practical. You can unsubscribe from any email with one click.`

`Happy crocheting,`
`[Your Name]`

---

## Delivery Email Copy

**Subject Line Options (test these):**
- `Here's your free crochet guide! 🧶` (only emoji if it matches your brand)
- `Your free pattern guide is attached`
- `[First Name], here's what you asked for`

**Best for deliverability:** `Your free crochet guide is here`

**Email Body:**

```
Subject: Your free crochet guide is here

Hi [First Name],

You asked for it — here it is!

Your free copy of "How to Read a Crochet Pattern" is ready to download:

→ [DOWNLOAD YOUR FREE GUIDE] (big button link)

Inside, you'll find:
• A plain-English breakdown of every common crochet abbreviation
• A real pattern example, decoded line by line
• A printable cheat sheet to keep beside you while you work
• The 3 mistakes most beginners make (and how to avoid them)

Print it out or save it to your device — it's yours to keep.

If you have any trouble downloading, just reply to this email and I'll help.

Happy crocheting,

[Your Name]
[Brand Name]

---
You're receiving this because you signed up at [website URL].
To unsubscribe: [unsubscribe link] | [Privacy Policy]
```

---

## How to Connect Lead Magnet to Brevo

### Step-by-Step Setup in Brevo

**Step 1: Create a Contact List**
1. Go to Contacts → Lists → Create a List
2. Name it: "Free Pattern Guide Subscribers"
3. Create a second list: "All Subscribers" (master list)

**Step 2: Create a Double Opt-in Template**
1. Go to Campaigns → Templates
2. Create a "Confirmation Email" template
3. Subject: `Please confirm your email to get your free guide`
4. Body: "Click below to confirm your email and get instant access..."
5. Include confirmation link button

**Step 3: Create an Automation Workflow**
1. Go to Automations → Create a Workflow
2. Trigger: "Contact added to list: Free Pattern Guide Subscribers"
3. Step 1: Send delivery email immediately (with download link)
4. Step 2: Wait 2 days → Send Email 2 (value email)
5. Continue adding the 5-email sequence

**Step 4: Get Your API Key**
1. Go to SMTP & API → API Keys → Generate
2. Copy the key
3. Add it to your Next.js environment variables as `BREVO_API_KEY`

**Step 5: Connect Your Website Form**
Create a Next.js API route at `/api/subscribe`:

```javascript
// pages/api/subscribe.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  
  const { email, firstName } = req.body;
  
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }
  
  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.toLowerCase().trim(),
        firstName: firstName?.trim(),
        listIds: [YOUR_LIST_ID],  // replace with your Brevo list ID
        updateEnabled: true,
        attributes: {
          SOURCE: 'free-gift-page',
          OPT_IN_DATE: new Date().toISOString(),
        },
      }),
    });
    
    if (!response.ok) {
      const error = await response.json();
      // Handle "already exists" gracefully — not an error
      if (error.code === 'duplicate_parameter') {
        return res.status(200).json({ success: true, message: 'Already subscribed' });
      }
      throw new Error('Brevo API error');
    }
    
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Subscribe error:', err);
    return res.status(500).json({ error: 'Subscription failed' });
  }
}
```

**Step 6: Opt-in Form Component**

```jsx
// components/OptInForm.jsx
'use client';
import { useState } from 'react';

export default function OptInForm() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, firstName }),
    });
    
    if (res.ok) {
      setStatus('success');
      // Redirect to thank you page
      window.location.href = '/thank-you';
    } else {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="opt-in-form">
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send My Free Guide →'}
      </button>
      <p className="consent-text">
        No spam. Unsubscribe anytime. See our{' '}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>
    </form>
  );
}
```
