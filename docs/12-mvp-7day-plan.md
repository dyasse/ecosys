# 12. The 7-Day MVP Launch Plan

## The MVP Philosophy

Do not build everything. Build ONE of everything:
- One product (already created)
- One landing page
- One lead magnet
- One email sequence (5 emails)
- One content piece per platform
- One analytics setup

Ship it. Get your first subscriber. Then improve.

---

## What You Need Before Day 1

- [ ] One digital product ready to sell (PDF crochet/knitting pattern or planner)
- [ ] A Canva account (free)
- [ ] A Brevo account (free at brevo.com)
- [ ] A Gumroad account (free at gumroad.com)
- [ ] A Vercel account (free at vercel.com)
- [ ] A GitHub account (free at github.com)
- [ ] A Google account (for GA4 + Search Console + Drive)
- [ ] A domain name ($10-15/year from Namecheap or Cloudflare)
- [ ] Node.js installed on your computer (nodejs.org)
- [ ] 2-3 hours per day for 7 days

---

## Day 1: Foundation — Accounts + Product Live

**Theme:** Get your product in front of buyers today.

**Goal:** One product available for purchase with a professional listing.

### Morning (1-2 hours): Set Up Accounts

- [ ] Create Gumroad account at gumroad.com
- [ ] Create Brevo account at brevo.com
- [ ] Create Vercel account at vercel.com (sign in with GitHub)
- [ ] Register your domain at namecheap.com or cloudflare.com
- [ ] Set up a professional email: hello@yourdomain.com (use Cloudflare Email Routing — free)

### Afternoon (1-2 hours): Upload Your Product to Gumroad

- [ ] Log in to Gumroad
- [ ] Click "New Product" → "Digital Product"
- [ ] Upload your PDF file
- [ ] Write a product name, description (use Product Page Builder Agent prompt)
- [ ] Set your price (suggested: $4.99-$7.99 for your first pattern)
- [ ] Add your best product photo
- [ ] Publish it
- [ ] Copy the Gumroad product URL — you'll need it later

**AI Agent to use today:** Product Page Builder Agent  
**Run the prompt in Claude:** Get your landing page copy ready  
**Save the output** to a Google Doc titled "Product 1 — Copy"

**End of Day 1 output:**
- [ ] Gumroad product is live and purchasable
- [ ] All accounts created
- [ ] Product landing page copy written and saved

---

## Day 2: Lead Magnet — Create Your Free Gift

**Theme:** Build the engine that grows your email list.

**Goal:** A complete free gift PDF ready to deliver.

### Morning (1-2 hours): Design the Lead Magnet

- [ ] Open Canva at canva.com
- [ ] Create a new document: "US Letter" size
- [ ] Use a clean, premium template (search "ebook" or "guide" in Canva)
- [ ] Your colors: pick 2-3 colors that match your brand (soft neutrals + one accent)
- [ ] Write the content using the Lead Magnet Agent prompt
- [ ] Create 6-8 pages minimum

**Lead Magnet to create on Day 2:**  
"How to Read a Crochet Pattern — Beginner's Guide" (8 pages)

Pages to include:
1. Cover page (title, your brand name, beautiful image)
2. Introduction (who this is for + what they'll learn)
3. The anatomy of a crochet pattern
4. Abbreviation reference table (US/UK)
5. Reading a pattern line by line (example)
6. Common mistakes and fixes
7. Printable cheat sheet
8. Back page (your brand + website + product mention)

### Afternoon (1-2 hours): Set Up Delivery

- [ ] Export PDF from Canva (File → Download → PDF Print)
- [ ] Upload PDF to Google Drive (set to "Anyone with link can view")
- [ ] Copy the share link — this is your download link
- [ ] OR upload to Gumroad as a free product (price: $0) for easier tracking

**AI Agent to use today:** Lead Magnet Agent  
**Run the prompt in Claude:** Get the full lead magnet content  
**Also get:** Landing page copy, thank you page copy, delivery email copy

**End of Day 2 output:**
- [ ] Complete lead magnet PDF created and uploaded
- [ ] Download link ready
- [ ] All copy written for the lead magnet landing page

---

## Day 3: Email Setup — Brevo + 5-Email Sequence

**Theme:** Build the automated sales machine.

**Goal:** Complete email automation running, waiting for its first subscriber.

### Morning (1-2 hours): Set Up Brevo

- [ ] Log in to Brevo
- [ ] Go to Settings → Senders & IP → Add your email (hello@yourdomain.com)
- [ ] Verify your domain (add DNS records — Brevo gives step-by-step instructions)
- [ ] Create a Contact List: "Free Pattern Guide Subscribers"
- [ ] Create a Contact List: "All Subscribers"

### Afternoon (2-3 hours): Write and Set Up Email Sequence

- [ ] Go to Automations → Create a Workflow
- [ ] Trigger: "Contact added to list: Free Pattern Guide Subscribers"
- [ ] Create Email 1 (delivery email) using the template from doc 06
- [ ] Set Email 2 to send after 2 days
- [ ] Set Email 3 to send after 4 days
- [ ] Set Email 4 to send after 6 days
- [ ] Set Email 5 to send after 8 days
- [ ] Add the unsubscribe link (Brevo adds this automatically)
- [ ] Add your address to each email footer
- [ ] Test the sequence by adding your own email to the list

**AI Agent to use today:** Email Sequence Agent  
**Run the prompt in Claude:** Get all 5 emails written  
**Copy each email into Brevo's email editor**

**End of Day 3 output:**
- [ ] Brevo account fully configured
- [ ] Domain verified
- [ ] 5-email sequence created and tested
- [ ] Ready to receive first real subscriber

---

## Day 4: Website — Next.js Deployment

**Theme:** Build your digital home.

**Goal:** Your website live at your domain with 3 core pages.

### Use This Next.js Starter Template

```bash
# Run these commands in your terminal:
npx create-next-app@latest my-pattern-shop
cd my-pattern-shop
# Choose: TypeScript: No, Tailwind: Yes, App Router: Yes
npm run dev
```

### Pages to Build Today (Priority Order)

**Page 1: Lead Magnet Page (`/free-gift`)**  
Build this first — it's the most important page.

Use the copy from Day 2.  
Include: headline, subheadline, mockup image, bullet points, opt-in form.  
No navigation header (remove it on this page).

**Page 2: Thank You Page (`/thank-you`)**  
Simple page confirming sign-up.  
Use the copy from Day 2.

**Page 3: Basic Home Page (`/`)**  
Hero section + lead magnet CTA + product preview.  
Full homepage can be expanded next week.

### Connect the Form to Brevo

- [ ] Get your Brevo API key (Settings → SMTP & API → API Keys)
- [ ] Add to `.env.local`: `BREVO_API_KEY=your-key-here`
- [ ] Create `/api/subscribe` route using the code from doc 05
- [ ] Test: fill out the form with your email, check Brevo to confirm it works

### Deploy to Vercel

```bash
npm install -g vercel
vercel
# Follow the prompts
# Add your custom domain in the Vercel dashboard
```

- [ ] Add your custom domain in Vercel → Settings → Domains
- [ ] Add BREVO_API_KEY to Vercel Environment Variables

**End of Day 4 output:**
- [ ] Website live at your domain
- [ ] `/free-gift` page live and working
- [ ] `/thank-you` page live
- [ ] Form connected to Brevo (test it!)
- [ ] Opt-in form sends data to Brevo and triggers the email sequence

---

## Day 5: Product Landing Page + Analytics

**Theme:** Convert visitors into buyers.

**Goal:** Product page live + tracking everything.

### Morning (1-2 hours): Product Landing Page

- [ ] Create `/patterns/[your-product-slug]` page in Next.js
- [ ] Use the copy from Day 1 (Product Page Builder Agent output)
- [ ] Include: hero section, description, features, FAQ, buy button
- [ ] Buy button links to your Gumroad product URL

### Afternoon (1-2 hours): Analytics Setup

**Google Analytics 4:**
- [ ] Create GA4 property at analytics.google.com
- [ ] Add GA4 tracking code to Next.js (see doc 11 for code)
- [ ] Set up conversion events: `generate_lead`, `begin_checkout`

**Google Search Console:**
- [ ] Add property at search.google.com/search-console
- [ ] Verify ownership (add HTML tag to Next.js)
- [ ] Create and submit your sitemap

**Set Up Your Weekly Dashboard:**
- [ ] Create a Google Sheet with the Analytics tab from doc 10
- [ ] Bookmark: GA4, Search Console, Brevo, Gumroad dashboards

**End of Day 5 output:**
- [ ] Product landing page live
- [ ] GA4 tracking active
- [ ] Search Console verified and sitemap submitted
- [ ] Analytics dashboard Google Sheet created

---

## Day 6: Content — Pinterest + Instagram Launch

**Theme:** Start driving traffic.

**Goal:** First batch of content live on your two primary platforms.

### Pinterest Setup (2 hours)

- [ ] Create a business account at pinterest.com/business
- [ ] Set up your profile: brand name, bio with keyword, website link
- [ ] Verify your website (Pinterest gives instructions)
- [ ] Create 5 boards (use the board names from doc 07)

**Create your first 5 pins (use Canva):**
- [ ] Pin 1: Lead magnet promo ("Free Guide: How to Read a Crochet Pattern")
- [ ] Pin 2: Product showcase (your Gumroad pattern)
- [ ] Pin 3: Educational tip (one tip from your lead magnet)
- [ ] Pin 4: Blog teaser (if you wrote any blog content)
- [ ] Pin 5: Another product angle

Use the pin titles and descriptions from doc 07.  
Link Pin 1 and 3 to `/free-gift`.  
Link Pin 2 to your product page.

### Instagram Setup (1 hour)

- [ ] Create or convert to a Creator/Business account
- [ ] Write a bio: `[Your name] · Premium crochet + knitting patterns · Free guide → [link]`
- [ ] Add your link in bio (use linktr.ee free OR just your `/free-gift` page directly)
- [ ] Create your first 3 posts using captions from doc 07

**AI Agent to use today:** Pinterest Content Agent + Instagram/TikTok Agent  
**Run both prompts:** Get 10 pins and 5 Instagram captions for your first product

**End of Day 6 output:**
- [ ] Pinterest business account set up with 5 boards
- [ ] 5 pins created and published
- [ ] Instagram profile set up with 3 posts
- [ ] First traffic coming to your website (check GA4)

---

## Day 7: Review + First Blog Post + Make.com Automation

**Theme:** Complete the loop and prepare for week 2.

**Goal:** First blog post live + automation workflow running + system documented.

### Morning (1-2 hours): Write and Publish First Blog Post

**Post to write:** "How to Read a Crochet Pattern: Complete Beginner's Guide"  
**Why this one:** Highest search volume, directly related to your lead magnet, easy to write.

- [ ] Run the SEO Blog Agent prompt in Claude
- [ ] Create the blog post page in Next.js at `/blog/how-to-read-a-crochet-pattern`
- [ ] Add the post to your sitemap
- [ ] Link to your lead magnet at `/free-gift` at the bottom
- [ ] Create 3 Pinterest pins from this post
- [ ] Submit the URL to Google Search Console ("Inspect URL" → "Request Indexing")

### Afternoon (1 hour): Set Up Make.com Automation

- [ ] Create a free account at make.com
- [ ] Build Workflow 1 (New Subscriber → Brevo → Google Sheet)
  - Trigger: Webhook
  - Update your Next.js subscribe API route to send data to Make.com webhook
  - Step 1: Brevo → Create contact
  - Step 2: Google Sheets → Add row
- [ ] Test the workflow with your own email
- [ ] Activate the scenario

### End of Day 7: Review

Fill in your first weekly dashboard (doc 11):
- [ ] Website visitors: ___
- [ ] Form submissions (subscribers): ___
- [ ] Gumroad link clicks: ___
- [ ] Pinterest pins published: ___

**End of Day 7 output:**
- [ ] First blog post live
- [ ] 3 Pinterest pins from blog post published
- [ ] Make.com automation active
- [ ] Full system live and working
- [ ] First weekly analytics review completed

---

## What You Have After 7 Days

```
✓ Gumroad product live (purchasable right now)
✓ Lead magnet PDF created and ready to deliver
✓ 5-email welcome sequence automated in Brevo
✓ Website live: /, /free-gift, /thank-you, /patterns/[product], /blog/[post]
✓ GA4 + Search Console tracking active
✓ Pinterest account with 5+ pins
✓ Instagram account with 3 posts
✓ Make.com automation connecting form → Brevo → Google Sheet
✓ Weekly analytics dashboard set up
```

## What Week 2 Looks Like

- Publish 2 more blog posts
- Create 15 more Pinterest pins
- Post 4 times on Instagram
- Review analytics and optimize the lead magnet page
- Write and publish product landing page for second product (optional)
- Add product schema markup for SEO
- Create your Privacy Policy and Terms pages (use Termly.io)
