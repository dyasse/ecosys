# 14. Beginner Checklist

Complete these in order. Check off each item before moving to the next.

---

## Phase 0: Prerequisites (Before Day 1)

### Accounts to Create (Free)
- [ ] GitHub (github.com) — for your website code
- [ ] Vercel (vercel.com — sign in with GitHub) — for website hosting
- [ ] Brevo (brevo.com) — for email marketing
- [ ] Gumroad (gumroad.com) — for selling digital products
- [ ] Google Account (if you don't have one) — for GA4, Search Console, Drive
- [ ] Canva (canva.com) — for designing PDFs and social graphics
- [ ] Make.com (make.com) — for automation
- [ ] Pinterest Business (pinterest.com/business)

### Purchase (One-Time Cost: ~$10-15)
- [ ] Domain name from Namecheap or Cloudflare Registrar

### Tools to Install (on your computer)
- [ ] Node.js from nodejs.org (choose LTS version)
- [ ] VS Code from code.visualstudio.com (free code editor)

### Business Setup
- [ ] PO Box OR use your address for email footer (required for CAN-SPAM)
- [ ] PayPal account or bank account connected to Gumroad

---

## Phase 1: Product Setup

- [ ] Product PDF file is complete and exported
- [ ] Product uploaded to Gumroad with price set
- [ ] Gumroad product URL copied and saved
- [ ] Product photos created or photographed (minimum 3 images)
- [ ] Product page copy written using Prompt 1 from doc 13

---

## Phase 2: Lead Magnet

- [ ] Lead magnet topic chosen (see doc 05 for ideas)
- [ ] Lead magnet content written using Prompt 5 from doc 13
- [ ] Lead magnet designed in Canva (minimum 6 pages)
- [ ] PDF exported from Canva
- [ ] PDF uploaded to Google Drive with "Anyone with link" access
- [ ] Download link saved

---

## Phase 3: Email Setup

- [ ] Brevo account created
- [ ] Custom email address created (hello@yourdomain.com)
- [ ] Email sender added and verified in Brevo
- [ ] Domain SPF/DKIM records added (Brevo guides you)
- [ ] Contact list created: "Main List"
- [ ] Contact list created: "Free Gift Subscribers"
- [ ] All 5 emails written using Prompt 6 from doc 13
- [ ] Email 1 created in Brevo with download link
- [ ] Emails 2-5 created in Brevo
- [ ] Automation workflow set up (trigger: new contact in list)
- [ ] Tested: added your own email to the list, confirmed you received all 5 emails in sequence
- [ ] Unsubscribe link present in every email
- [ ] Your address in every email footer

---

## Phase 4: Website

- [ ] Next.js project created with `npx create-next-app@latest`
- [ ] Tailwind CSS configured
- [ ] Brand colors defined (add to tailwind.config.js)
- [ ] Brand fonts chosen (Google Fonts, added to layout)
- [ ] `/free-gift` page built with opt-in form
- [ ] `/thank-you` page built
- [ ] Home page (`/`) built with hero + lead magnet CTA
- [ ] Product landing page built (`/patterns/[slug]`)
- [ ] `/api/subscribe` route created and tested
- [ ] Brevo API key added to Vercel environment variables
- [ ] Form tested: fill out form → check Brevo for new contact
- [ ] Website deployed to Vercel
- [ ] Custom domain connected in Vercel
- [ ] HTTPS working (Vercel does this automatically)
- [ ] Privacy Policy page created (use Termly.io free generator)
- [ ] Terms of Service page created (use Termly.io)
- [ ] Footer includes Privacy Policy and Terms links
- [ ] Footer includes your address

---

## Phase 5: Analytics

- [ ] Google Analytics 4 property created
- [ ] GA4 tracking code added to Next.js
- [ ] `generate_lead` event tracked on form submission
- [ ] `begin_checkout` event tracked on product button click
- [ ] Conversions configured in GA4 admin
- [ ] Google Search Console property created
- [ ] Website ownership verified in Search Console
- [ ] Sitemap created (`/sitemap.xml`) and submitted to Search Console
- [ ] GA4 and Search Console bookmarked in browser

---

## Phase 6: Social Media

- [ ] Pinterest business account created
- [ ] Pinterest profile complete (bio, website verified, logo)
- [ ] 5 boards created with keyword-rich names
- [ ] 5 pins created for lead magnet
- [ ] 5 pins created for product
- [ ] Instagram business/creator account set up
- [ ] Instagram bio written with link in bio pointing to /free-gift
- [ ] 3 Instagram posts published
- [ ] TikTok account created (optional — add in month 2)

---

## Phase 7: First Blog Post

- [ ] Blog post topic chosen from doc 08 list
- [ ] Blog post written using Prompt 2 from doc 13
- [ ] Blog post page created in Next.js
- [ ] Blog post includes lead magnet CTA at the end
- [ ] Blog post links to product page
- [ ] Blog post meta title and description set
- [ ] Blog post URL submitted to Google Search Console
- [ ] 3 Pinterest pins created from blog post

---

## Phase 8: Automation

- [ ] Make.com account created
- [ ] Workflow 1 built (webhook → Brevo → Google Sheet)
- [ ] Workflow 1 tested and activated
- [ ] Google Sheet analytics dashboard created
- [ ] Weekly review template in doc 11 bookmarked

---

## Legal Compliance Check (Do This Before Going Live)

- [ ] Privacy Policy page is live and accessible from the footer
- [ ] Terms of Service page is live
- [ ] Every email has an unsubscribe link
- [ ] Every email has your physical address
- [ ] Opt-in form has clear consent language ("I agree to receive emails...")
- [ ] EU visitors: consent checkbox present on opt-in form
- [ ] No purchased email lists
- [ ] No scraping of emails
- [ ] GA4 cookie consent: if targeting EU, add a cookie consent banner

---

## The "You're Live" Checklist

Run through this on Day 7 before telling anyone your site is ready:

- [ ] Website loads at your domain (on desktop and mobile)
- [ ] /free-gift page opt-in form works (test with a real email)
- [ ] Confirmation email arrives within 5 minutes
- [ ] Download link in email works
- [ ] /thank-you page loads after form submission
- [ ] Product page loads correctly
- [ ] "Buy Now" button on product page links to Gumroad correctly
- [ ] Gumroad checkout works (test purchase with a card)
- [ ] Blog post is live and readable
- [ ] No broken links anywhere
- [ ] GA4 is tracking (check Real Time report in GA4)
- [ ] Pinterest profile is complete
- [ ] Instagram profile is complete

---

## Monthly Maintenance Checklist

Do this on the 1st of every month:

- [ ] Fill in monthly analytics template (doc 11)
- [ ] Clean email list: remove bounced contacts in Brevo
- [ ] Check Google Search Console for new ranking keywords
- [ ] Update sitemap with new blog posts
- [ ] Review and improve lowest-performing email in the sequence
- [ ] Check Gumroad for any customer support messages
- [ ] Publish at least 4 new blog posts this month
- [ ] Publish at least 60 new Pinterest pins this month
- [ ] Run one experiment (see doc 10 experiments table)
- [ ] Update product photos or description if conversion rate is below 1%
