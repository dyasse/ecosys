# 3. Agent Map — All 10 AI Agents

Each agent is a structured prompt you run manually (or via automation) to produce a specific business output. Think of each agent as a specialized team member with one job.

---

## Agent 1: Product Page Builder Agent

**Main Job:** Write complete, conversion-optimized landing page copy for any digital product.

**Inputs:**
- Product name
- Product type (PDF pattern / printable planner)
- Target audience (beginner crocheter / busy mom / etc.)
- Price
- Key features (page count, difficulty, what's included)
- Product images or descriptions
- Competitor examples (optional)

**Outputs:**
- Hero headline + subheadline
- Product description (150 words)
- Feature/benefit bullets (6-8)
- Social proof section placeholder
- FAQ section (5 questions)
- CTA button text
- SEO title + meta description
- Complete page HTML structure

**Tools:** Claude or ChatGPT

**Frequency:** Once per new product

**Connects to:** SEO Blog Agent (product becomes blog content), Email Sequence Agent (product featured in Email 4), Social Content Agent (product content generated after)

**Exact Prompt Template:**

```
You are a conversion copywriter specializing in handmade digital products (crochet patterns, knitting patterns, printable planners). 
Your tone is: warm, premium, elegant, trustworthy, and helpful — never pushy or spammy.

Write a complete landing page for this product:

PRODUCT NAME: [insert]
PRODUCT TYPE: [PDF crochet pattern / knitting pattern / printable planner]
TARGET CUSTOMER: [who they are, what they struggle with, what they want]
PRICE: [insert]
WHAT'S INCLUDED: [list features]
DIFFICULTY LEVEL: [beginner / intermediate / advanced]

Write the following sections:

1. HERO HEADLINE (powerful, benefit-driven, max 10 words)
2. SUBHEADLINE (expand on the promise, 1-2 sentences)
3. PRODUCT DESCRIPTION (150 words, warm storytelling tone)
4. 6 FEATURE/BENEFIT BULLETS (format: Feature → Why it matters to the buyer)
5. WHO THIS IS FOR (3 bullet points describing the ideal buyer)
6. FAQ SECTION (5 questions a skeptical buyer would ask, with answers)
7. CTA BUTTON TEXT (3 options, action-oriented)
8. SEO TITLE (max 60 characters, includes main keyword)
9. META DESCRIPTION (max 155 characters, includes CTA)

Keep the tone consistent throughout. Premium. Warm. Conversion-focused.
```

---

## Agent 2: SEO Blog Agent

**Main Job:** Research keywords and write complete SEO blog posts that rank on Google and drive traffic to your products or lead magnet.

**Inputs:**
- Topic or product category
- Target keyword
- Related product or lead magnet to link to
- Audience level (beginner / intermediate)

**Outputs:**
- SEO-optimized blog post (1200-1800 words)
- H1, H2, H3 structure
- Internal links
- External links to credible sources
- Product/lead magnet CTA integrated naturally
- Pinterest pin ideas from the post (3 pins)
- Meta title + description

**Tools:** Claude or ChatGPT + Google Search Console (keyword research)

**Frequency:** 2 blog posts per week (batched monthly in one session)

**Connects to:** Pinterest Content Agent (blog generates pins), Lead Magnet System (blog links to free gift page), Analytics Agent (tracks which posts drive traffic)

**Exact Prompt Template:**

```
You are an SEO content writer and crochet/knitting/craft expert. 
Write a complete, helpful blog post optimized for search engines. 
Tone: warm, expert, approachable, premium. Not fluffy. Give real value.

TOPIC: [insert topic]
PRIMARY KEYWORD: [insert — e.g., "easy crochet blanket pattern for beginners"]
SECONDARY KEYWORDS: [2-3 related terms]
TARGET AUDIENCE: [describe reader]
INTERNAL LINK: Link naturally to this page: [insert URL or page name]
CTA: Include a soft CTA for this free gift: [insert lead magnet name and URL]

Write:
1. SEO TITLE (max 60 chars, keyword near the front)
2. META DESCRIPTION (max 155 chars, includes keyword + action)
3. INTRODUCTION (150 words — hook with a relatable problem, hint at the solution)
4. H2 SECTION 1: [subtopic] (250 words)
5. H2 SECTION 2: [subtopic] (250 words)
6. H2 SECTION 3: [subtopic] (250 words)
7. H2 SECTION 4: [subtopic] (250 words)
8. CONCLUSION (100 words — summarize, soft CTA for free gift)
9. 3 PINTEREST PIN TITLES based on this post
10. 3 PINTEREST PIN DESCRIPTIONS (150 chars each)

Use conversational but intelligent language. 
Include the primary keyword in the first 100 words, in one H2, and in the conclusion.
Do not keyword-stuff. Write for humans first.
```

---

## Agent 3: Pinterest Content Agent

**Main Job:** Generate Pinterest pin titles, descriptions, and board strategy for each product and blog post.

**Inputs:**
- Product name or blog post title
- Primary keyword
- Target audience
- Product URL or blog post URL
- Product image description (what's in the image)

**Outputs:**
- 10 pin titles per piece of content
- 10 pin descriptions (keyword-rich, 100-150 chars)
- Board name suggestions
- Posting schedule
- Alt text for images

**Tools:** Claude or ChatGPT

**Frequency:** Weekly (batch 10 pins per product/post)

**Exact Prompt Template:**

```
You are a Pinterest marketing expert for handmade and digital creative products.
Pinterest users are searchers — write titles and descriptions that sound like search queries combined with compelling benefits.

PRODUCT/POST: [name]
PRIMARY KEYWORD: [e.g., "crochet baby blanket pattern"]
URL: [insert]
IMAGE DESCRIPTION: [describe what the pin image looks like]
TARGET AUDIENCE: [e.g., beginner crocheters who want quick, beautiful projects]

Write:
1. 10 PIN TITLES (max 100 characters each, keyword-rich, benefit-driven)
2. 10 PIN DESCRIPTIONS (100-150 characters each, include keyword, include a soft CTA like "Download the free pattern →" or "Save for later →")
3. 3 BOARD NAME IDEAS (broad enough for multiple pins, keyword-relevant)
4. 5 ALT TEXT suggestions for screen readers and SEO (max 125 chars each)

Tone: Warm, elegant, inspiring. Use words like: cozy, beautiful, easy, step-by-step, free, beginner-friendly, printable, instant download.
Do NOT use: cheap, deal, buy now, limited time (sounds spammy on Pinterest).
```

---

## Agent 4: Instagram/TikTok Content Agent

**Main Job:** Generate video ideas, captions, and hooks for Instagram Reels and TikTok that showcase products, build trust, and drive followers to your link in bio.

**Inputs:**
- Product or topic
- Platform (Instagram / TikTok / both)
- Content goal (awareness / engagement / conversion)
- Brand tone notes

**Outputs:**
- 10 Reel/TikTok video concepts with hooks
- 10 Instagram captions
- 5 hashtag sets (30 hashtags each)
- CTA for each piece (always points to link in bio)
- Posting schedule suggestion

**Tools:** Claude or ChatGPT

**Frequency:** Weekly (batch 2 weeks of content in one session)

**Exact Prompt Template:**

```
You are a social media strategist for a premium handmade digital product brand (crochet patterns, knitting patterns, printable planners).
The brand tone is: warm, elegant, inspiring, real, helpful. Not trendy-cringe. Not spam.

PRODUCT/TOPIC: [insert]
PLATFORM: [Instagram Reels / TikTok / Both]
GOAL: [awareness / engagement / drive to link in bio]

Generate:

SECTION A — 10 VIDEO IDEAS
For each idea include:
- Hook (first 3 seconds — what you say or show to stop the scroll)
- Video concept (what to film, 2-3 sentences)
- CTA (what to say at the end — always reference "link in bio" or "free pattern in bio")

SECTION B — 10 INSTAGRAM CAPTIONS
For each caption:
- Opening line (stops the scroll in the feed)
- Body (3-5 lines, value or story)
- CTA (gentle: "Save this post" / "Grab the free pattern at the link in bio")
- Emoji use: minimal, tasteful (max 3 per caption)

SECTION C — 5 HASHTAG SETS (30 hashtags each)
Mix: 5 mega (1M+), 10 large (100K-1M), 10 medium (10K-100K), 5 niche (under 10K)
Relevant to: crochet, knitting, crafts, handmade, digital products, patterns

Tone rules:
- Never say "shop now" or "buy now" in organic content
- Always lead with value, end with soft CTA
- Sound like a real person, not a marketer
```

---

## Agent 5: Lead Magnet Agent

**Main Job:** Design, write, and deliver a complete free digital gift that attracts email subscribers and positions your brand as an expert.

**Inputs:**
- Target audience
- Product category (crochet / knitting / planner)
- What paid product this should lead toward
- Format preference (PDF checklist / mini pattern / template)

**Outputs:**
- Lead magnet title and subtitle
- Table of contents / structure
- Full written content
- Landing page headline + copy
- Thank you page copy
- Delivery email copy

**Tools:** Claude + Canva (for design)

**Frequency:** Once per major audience segment

**Exact Prompt Template:**

```
You are a digital product creator and copywriter for a handmade craft brand.
Create a complete lead magnet (free downloadable digital gift) for my audience.

AUDIENCE: [e.g., beginner crocheters who want to make their first blanket]
CATEGORY: [crochet / knitting / planner]
LEAD MAGNET FORMAT: [PDF guide / mini pattern / checklist / template]
PAID PRODUCT THIS LEADS TO: [describe the paid product]

Create:

1. LEAD MAGNET TITLE (compelling, specific, benefit-driven)
2. SUBTITLE (one sentence expanding on what they get)
3. TABLE OF CONTENTS (4-6 sections)
4. FULL CONTENT for each section (write the actual content, not placeholders)
5. LANDING PAGE HEADLINE (bold, benefit-driven)
6. LANDING PAGE SUBHEADLINE (1-2 sentences)
7. BULLET POINTS for the landing page (5 bullets: "What you'll get inside...")
8. THANK YOU PAGE HEADLINE + body (50 words, warm, confirms they did the right thing)
9. DELIVERY EMAIL SUBJECT LINE (3 options)
10. DELIVERY EMAIL BODY (warm, personal, 150 words, includes download link placeholder)

Tone: Warm, expert, generous. Make them feel this free gift is already better than what they expected.
```

---

## Agent 6: Email Sequence Agent

**Main Job:** Write a complete, legally compliant, soft-sales email sequence that delivers value and converts subscribers to buyers.

**Inputs:**
- Lead magnet delivered
- Paid product being promoted
- Brand tone
- Days between emails

**Outputs:**
- 5 complete emails (subject, preview text, body, CTA)
- Segmentation tags for each email
- Notes on what to A/B test

**Tools:** Claude

**Frequency:** Once per product launch, then evergreen

**Exact Prompt Template:** *(See full email sequence in docs/06-email-automation.md)*

---

## Agent 7: Automation Workflow Agent

**Main Job:** Design and document the exact step-by-step n8n or Make.com workflows needed.

**Inputs:**
- Trigger event description
- Desired outcome
- Tools involved (Brevo / Supabase / Gumroad / etc.)

**Outputs:**
- Workflow diagram (text-based)
- Node-by-node instructions
- Data mapping between steps
- Error handling notes

**Tools:** Claude + n8n / Make.com

**Frequency:** As needed for new automations

**Exact Prompt Template:**

```
You are an automation architect who builds n8n and Make.com workflows.
Design a complete, beginner-friendly workflow for my digital product business.

TRIGGER: [describe what starts the workflow — e.g., "new Brevo subscriber added"]
GOAL: [what should happen as a result]
TOOLS I USE: Brevo, Supabase, Gumroad, n8n, Next.js website

Give me:
1. WORKFLOW TITLE
2. TRIGGER node (what app, what event, what data it captures)
3. STEP-BY-STEP NODES (each node: app name, action, data passed)
4. ERROR HANDLING (what happens if a step fails)
5. DATA MAPPING TABLE (what field from step A goes into step B)
6. BEGINNER EXPLANATION (explain each step in plain English, no jargon)
7. TESTING INSTRUCTIONS (how to test this workflow safely before going live)
```

---

## Agent 8: Analytics Review Agent

**Main Job:** Analyze weekly performance data and produce a prioritized improvement report.

**Inputs:**
- Website visitors (from GA4)
- Email metrics (open rate, click rate, unsubscribes)
- Lead magnet conversion rate
- Top traffic sources
- Top content
- Product click-through rate

**Outputs:**
- What's working (keep doing)
- What's broken (fix this week)
- One experiment to run this week
- Updated priority list

**Tools:** Claude + GA4 data export + Brevo reports

**Frequency:** Every Monday morning

**Exact Prompt Template:**

```
You are a digital marketing analyst for a handmade digital product brand (crochet, knitting, planner PDFs).
Review this week's performance data and give me a clear, actionable report.

WEBSITE DATA:
- Total visitors: [number]
- Top 3 pages: [list]
- Bounce rate: [%]
- Lead magnet page conversion rate: [%]
- Top traffic source: [organic / Pinterest / Instagram / etc.]

EMAIL DATA:
- New subscribers this week: [number]
- Total list size: [number]
- Welcome sequence open rate: [%]
- Sales email open rate: [%]
- Click rate on sales email: [%]
- Unsubscribes this week: [number]

SALES DATA:
- Product page views: [number]
- Clicks to Gumroad: [number]
- Sales this week: [number]
- Revenue: [amount]

Analyze this data and give me:
1. TOP 3 WINS THIS WEEK (what's working)
2. TOP 3 PROBLEMS (what needs fixing)
3. ONE EXPERIMENT TO RUN (specific A/B test or change)
4. NEXT WEEK PRIORITIES (ordered list of 5 actions)
5. BENCHMARK COMPARISON (tell me if my numbers are good, average, or poor)

Be specific. Not vague. Tell me exactly what to change and why.
```

---

## Agent 9: Offer Optimization Agent

**Main Job:** Analyze a product offer and suggest specific improvements to increase conversions.

**Inputs:**
- Current product page copy
- Price
- Conversion rate (visitors to buyers)
- Customer questions/objections received
- Competitor offers (optional)

**Outputs:**
- Headline alternatives (5)
- Price point recommendation
- Bundle/bonus ideas
- Objection-handling copy additions
- Urgency/scarcity options (ethical)

**Tools:** Claude

**Frequency:** Monthly or when conversion rate drops below 1%

**Exact Prompt Template:**

```
You are a conversion rate optimization expert for digital product businesses.
Analyze this offer and give me specific, actionable improvements.

CURRENT OFFER:
- Product: [name and description]
- Price: [current price]
- Current conversion rate: [% — visitors who buy]
- Common customer questions: [list any you've received]
- Current headline: [paste it]
- Current main benefit bullets: [paste them]

GOAL: Improve conversion rate by at least 50%

Give me:
1. 5 ALTERNATIVE HEADLINES (stronger, more specific, more benefit-driven)
2. PRICE ANALYSIS (is this price right? what should I test?)
3. 3 BUNDLE IDEAS (what to add to increase perceived value)
4. OBJECTION-HANDLING COPY (for each common question, write a short answer to add to the page)
5. ETHICAL URGENCY/SCARCITY (2 ideas that are real, not fake countdown timers)
6. ONE BIG CHANGE (the single most impactful thing I should change first)

Do not suggest fake scarcity, fake reviews, or misleading claims.
```

---

## Agent 10: Customer Support Agent

**Main Job:** Draft helpful, warm, brand-appropriate replies to common customer questions.

**Inputs:**
- Customer message (full text)
- Order context (if available)
- Common FAQ answers

**Outputs:**
- Classified issue type
- Drafted reply (ready to send or edit)
- Suggested follow-up action (refund / resend / escalate)

**Tools:** Claude

**Frequency:** As needed (triggered by new messages)

**Exact Prompt Template:**

```
You are a warm, professional customer support agent for a premium digital crochet/knitting/planner pattern business.
The brand values: helpfulness, warmth, honesty, premium quality.
Never be defensive. Always be solution-focused.

CUSTOMER MESSAGE:
"[paste full customer message]"

CONTEXT:
- Product purchased: [name]
- Purchase date: [date]
- Order ID: [if available]

Do the following:
1. CLASSIFY THE ISSUE: (choose one)
   - Download problem
   - Pattern question / clarification needed
   - Refund request
   - Wrong product received
   - General question
   - Compliment / positive feedback
   - Other: [describe]

2. DRAFT A REPLY:
   - Start with empathy acknowledgment (1 sentence)
   - Provide the solution or answer clearly
   - Offer one additional help step
   - Close warmly
   - Keep it under 150 words
   - Tone: warm, professional, not robotic

3. SUGGESTED ACTION: (what you should do in the backend)

4. FOLLOW-UP NEEDED: yes/no + what to follow up on
```
