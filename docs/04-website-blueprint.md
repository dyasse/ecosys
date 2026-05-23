# 4. Website Blueprint

## Site Map

```
/                        → Home Page
/patterns/[slug]         → Product Landing Page (one per product)
/free-gift               → Lead Magnet / Free Gift Page
/blog                    → Blog Index
/blog/[slug]             → Individual Blog Post
/thank-you               → Thank You Page (after opt-in)
/privacy-policy          → Privacy Policy
/terms                   → Terms of Service
/contact                 → Contact Page
```

---

## Page 1: Home Page

**URL:** `/`

**Purpose:** First impression. Establish brand, show credibility, route visitors to the lead magnet or top product.

**SEO Title:** `[Brand Name] — Premium Crochet & Knitting Patterns | Printable Planners`

**Meta Description:** `Download beautiful crochet and knitting PDF patterns and printable planners. Beginner-friendly designs with step-by-step instructions. [Brand Name].`

### Sections

**Section 1: Hero**
- Headline: `Make Something Beautiful Today`
- Subheadline: `Premium crochet, knitting and planner printables — designed for makers who love quality.`
- Background: high-quality lifestyle image of your product in use
- CTA Button 1: `Browse Patterns →`
- CTA Button 2 (softer): `Get a Free Pattern →` (links to lead magnet page)

**Section 2: Value Proposition (3 columns)**
- Column 1: Icon + "Instant Download" + "Your PDF arrives the moment you complete checkout."
- Column 2: Icon + "Beginner Friendly" + "Every pattern includes full photo tutorials and written instructions."
- Column 3: Icon + "Premium Design" + "Clean layouts, beautiful photography, no cluttered PDFs."

**Section 3: Featured Products (3 products)**
- Product image + name + short description + price + "View Pattern →" button
- Conversion note: Show your best-selling or most visual product first.

**Section 4: Free Gift Banner**
- Headline: `Not sure where to start?`
- Subheadline: `Grab my free [lead magnet name] — no credit card needed.`
- Button: `Download Free →` (links to /free-gift)
- Background: soft, warm color (cream, sage, blush)

**Section 5: About/Trust**
- Your photo (or brand illustration)
- 2-3 sentences: who you are, why you make these products, who they're for
- Not a long bio — just enough to feel human and trustworthy

**Section 6: Blog Preview (3 posts)**
- Latest 3 blog posts with image, title, excerpt, "Read More →"

**Section 7: Footer**
- Logo + tagline
- Navigation: Home, Patterns, Free Gift, Blog, Contact
- Legal: Privacy Policy, Terms
- Social icons: Pinterest, Instagram, TikTok
- Newsletter form (one field: email + subscribe button)
- Legal text: `By subscribing you agree to receive marketing emails. You can unsubscribe at any time.`

---

## Page 2: Product Landing Page Template

**URL:** `/patterns/[product-slug]` (e.g., `/patterns/cozy-bobble-blanket-pattern`)

**Purpose:** Convert a visitor who found your product (via blog, Pinterest, or social) into a buyer.

**SEO Title:** `[Product Name] PDF Pattern — [Brand Name] | Instant Download`

**Meta Description:** `Download the [Product Name] crochet pattern. [Key benefit]. Step-by-step instructions for [difficulty level]. Instant PDF download.`

### Sections

**Section 1: Hero**
- Product name (H1)
- Short benefit subheadline (1 sentence — what it does for the buyer)
- Hero product image (clear, beautiful, lifestyle if possible)
- Price + "Buy Now →" button (links to Gumroad/Lemon Squeezy)
- Trust signals below button: "Instant PDF Download · Secure Checkout · All skill levels welcome"

**Section 2: Product Description**
- Conversational 2-3 paragraph story about the product
- What inspired it, who it's perfect for, what makes it special
- Use the output from Product Page Builder Agent

**Section 3: What's Inside**
- 6-8 feature/benefit bullets
- Format: **Bold feature** — explanation of why it matters
- Example: **Full photo tutorials** — Every stitch is shown in clear, step-by-step photos so you never feel lost.

**Section 4: Who This Is For**
- 3 bullet points describing the ideal buyer
- Example: "You're a beginner who wants a project that looks impressive but is actually straightforward."

**Section 5: Product Preview**
- 3-5 images (cover, inside pages, finished product, detail shots)
- Caption under each image

**Section 6: FAQ**
- 5 questions from the Product Page Builder Agent output
- Accordion format (one click to open answer)
- Include: "Can I print this at home?", "What skill level is required?", "What format is the file?", "Can I sell items I make from this pattern?"

**Section 7: Purchase CTA (repeated)**
- Price displayed clearly
- "Add to Cart →" or "Download Now →"
- Payment icons (Visa, Mastercard, PayPal)
- "100% Secure Checkout via Gumroad"

**Section 8: Related Products**
- 2-3 other products, small cards
- "You might also love..."

**Conversion Notes:**
- Price should be visible within first scroll
- CTA button should appear at least 3 times on the page
- Remove navigation on mobile to reduce distractions (optional)
- Add product schema markup for Google rich results

---

## Page 3: Free Gift / Lead Magnet Page

**URL:** `/free-gift`

**Purpose:** Convert a visitor into an email subscriber by offering genuine value. This is the most important page for list building.

**SEO Title:** `Free [Lead Magnet Name] — Download Instantly | [Brand Name]`

**Meta Description:** `Get the free [lead magnet name] for crochet/knitting beginners. [Key benefit]. No credit card needed — just your email.`

### Sections

**Section 1: Hero**
- Headline: `[Lead Magnet Title — specific and benefit-driven]`
- Subheadline: `[What they get + who it's for in 1-2 sentences]`
- Mockup image of the PDF (use Canva to create a 3D book mockup)
- Opt-in form:
  - First name field
  - Email address field
  - Submit button: `Send Me the Free [Name] →`
  - Below button: `No spam. Unsubscribe anytime. See our [Privacy Policy].`
  - Consent checkbox (if targeting EU): `I agree to receive marketing emails from [Brand Name]. I can unsubscribe at any time.`

**Section 2: What's Inside (3-5 bullets)**
- "Inside your free [name], you'll discover:"
- Bullet format: specific takeaway, not vague promises
- Example: "The exact stitch count for a baby blanket in 3 different sizes (newborn, 3-month, 6-month)"

**Section 3: About (brief)**
- Your name, 2 sentences about why you created this
- Your photo (optional but increases trust)

**Conversion Notes:**
- No navigation on this page — remove header nav to eliminate distractions
- Keep the page focused: ONE action (sign up)
- The mockup image dramatically increases conversion — spend 30 minutes on Canva making it look great
- Test two different headlines (A/B test after 100 visitors)

---

## Page 4: Blog Index

**URL:** `/blog`

**Purpose:** Showcase all blog posts, capture search traffic, build authority.

**SEO Title:** `Crochet & Knitting Tips Blog — Free Patterns & Tutorials | [Brand Name]`

**Meta Description:** `Explore free crochet and knitting tutorials, pattern tips, and beginner guides. Plus printable planner advice for creative makers.`

### Sections

**Section 1: Blog Header**
- Headline: `From the Studio`
- Subheadline: `Patterns, tutorials, and creative inspiration for makers.`

**Section 2: Featured Post**
- Large card: image, title, excerpt, "Read More →"
- Tag: "Most Popular" or "Start Here"

**Section 3: Post Grid**
- 6-9 posts per page in 3-column grid
- Each card: image, category tag, title, excerpt, date, "Read More →"

**Section 4: Categories Sidebar**
- Crochet, Knitting, Planners, Beginner Guides, Pattern Reviews

**Section 5: Newsletter Banner**
- "Want free patterns in your inbox?"
- Mini opt-in form (email + subscribe)

---

## Page 5: Thank You Page

**URL:** `/thank-you`

**Purpose:** Confirm the subscription, set expectations, reduce unsubscribes, warm up the new subscriber.

**SEO:** No index (add `<meta name="robots" content="noindex">`)

### Sections

**Section 1: Confirmation**
- Headline: `You're In! Check Your Inbox.`
- Subheadline: `Your free [lead magnet name] is on its way to [their email]. It should arrive within 5 minutes.`
- Emoji-free, warm, elegant

**Section 2: What to Expect**
- "Over the next few days, I'll send you:"
- Bullet 1: Your free download (arrives today)
- Bullet 2: [Helpful value email topic] — arrives in 2 days
- Bullet 3: A look at [product category] that might be perfect for you
- "You can unsubscribe from any email with one click — no hard feelings."

**Section 3: Next Step (soft upsell)**
- "While you wait, you might love..."
- Show your top product or a blog post
- This is NOT a hard sell — it's helpful navigation

**Section 4: Social Follow**
- "Join me on Pinterest and Instagram for daily pattern inspiration"
- Social icons linking to your profiles

---

## Page 6: Privacy Policy

**URL:** `/privacy-policy`

**Purpose:** Legal requirement. Required for GDPR, CAN-SPAM, Google Analytics, Facebook ads.

### Required Sections (use a generator like Termly.io or iubenda.com for your jurisdiction)

1. **What data we collect:** Email, name, browser data (via GA4)
2. **Why we collect it:** To send emails you opted into, to improve the website
3. **How we store it:** Brevo (email platform), Supabase (database)
4. **Your rights:** Access, correction, deletion, unsubscribe at any time
5. **Cookies:** GA4 uses cookies — explained here
6. **Third-party tools:** Brevo, Google Analytics, Gumroad
7. **Contact:** How to reach you for data requests

**Note:** Use Termly.io free plan to generate a privacy policy. Copy it to your site. Update when you add new tools.

---

## Page 7: Terms of Service

**URL:** `/terms`

**Purpose:** Legal protection. Defines what customers can and cannot do with your digital products.

### Required Sections

1. **License:** PDF patterns are for personal use only. No reselling, sharing, or teaching commercially without written permission.
2. **Digital downloads:** No refunds on digital products (standard policy — but you can offer exchanges).
3. **Disclaimer:** Skill level requirements, no guarantee of results.
4. **Intellectual property:** All designs are original and owned by [Brand Name].
5. **Changes to terms:** You reserve the right to update terms.
6. **Contact:** How to reach you.

**Note:** Generate with Termly.io. Keep it clear and plain English.

---

## Page 8: Contact Page

**URL:** `/contact`

**Purpose:** Let customers reach you. Builds trust. Required for legal compliance.

### Sections

**Section 1: Contact Form**
- Fields: Name, Email, Subject (dropdown: Order Help / Pattern Question / Wholesale / Other), Message
- Submit button: `Send Message →`
- "I aim to reply within 2 business days."

**Section 2: FAQ Quick Links**
- Link to 3-4 most common questions
- Reduces support volume

**Section 3: Social**
- "Find me on Pinterest and Instagram for faster responses to pattern questions"
