# 9. Automation Workflows

## Tool Choice: Make.com (Beginner) vs n8n (Advanced)

**For your first 90 days:** Use Make.com (formerly Integromat)
- Visual, drag-and-drop
- 1,000 operations free per month
- Connects to Brevo, Gumroad, Google Sheets, Supabase natively

**After 90 days or when you need more power:** Migrate to n8n
- Open source, self-hosted on a $5/month VPS (e.g., Railway, Render)
- Unlimited workflows, unlimited operations
- More flexibility for custom logic

---

## Workflow 1: New Email Subscriber → Tag → Sequence → Database

**What this does:** The moment someone signs up, they're automatically added to Brevo, tagged with their interest, added to the welcome sequence, and saved to your Supabase database.

**Trigger:** HTTP Webhook (your website sends data when someone submits the opt-in form)

```
WORKFLOW: NEW SUBSCRIBER ONBOARDING
═══════════════════════════════════════════════════════════

TRIGGER: Webhook receives POST from your website
  Data received: { email, firstName, source, interest }

STEP 1: Validate email
  → Check email format is valid
  → If invalid: stop workflow, log error to Google Sheet
  → If valid: continue

STEP 2: Add to Brevo
  → App: Brevo
  → Action: Create or update contact
  → Data:
    email: {{webhook.email}}
    firstName: {{webhook.firstName}}
    listIds: [YOUR_MAIN_LIST_ID]
    attributes.SOURCE: {{webhook.source}}
    attributes.INTEREST: {{webhook.interest}}
    attributes.OPT_IN_DATE: {{now}}

STEP 3: Apply interest tag in Brevo
  → App: Brevo
  → Action: Add tag to contact
  → Tag: "interest-{{webhook.interest}}" (e.g., interest-crochet)

STEP 4: Trigger welcome sequence in Brevo
  → This happens automatically via Brevo Automation
  → The automation trigger is "contact added to list"
  → No additional step needed here

STEP 5: Save to Supabase (or Google Sheet)
  → App: Supabase (or Google Sheets)
  → Action: Insert row
  → Data:
    email: {{webhook.email}}
    first_name: {{webhook.firstName}}
    source: {{webhook.source}}
    interest: {{webhook.interest}}
    subscribed_at: {{now}}
    status: active

STEP 6: Send yourself a Slack/email notification (optional)
  → App: Gmail or Slack
  → Message: "New subscriber: {{webhook.firstName}} ({{webhook.email}})"
  → Only useful when you're small — remove when list grows

ERROR HANDLING:
  → If Brevo step fails: retry 3 times with 30-second delay
  → If Supabase step fails: log to error sheet, alert yourself
  → Never lose a subscriber — the Brevo step is most critical

═══════════════════════════════════════════════════════════
```

**Beginner Explanation:**  
When someone fills out your sign-up form, your website sends a message to Make.com. Make.com then does 5 things automatically: validates the email is real, adds the person to Brevo, gives them the right tag (like "crochet fan"), saves their info to your database, and optionally tells you about the new subscriber. All of this happens in about 3 seconds while you sleep.

---

## Workflow 2: New Product Created → Generate Content Package

**What this does:** When you add a new product to your database, it triggers AI content generation and sends you a complete content package to review.

**Trigger:** New row added to Supabase "products" table (or manual webhook)

```
WORKFLOW: NEW PRODUCT CONTENT GENERATOR
═══════════════════════════════════════════════════════════

TRIGGER: New row in Supabase "products" table
  Data: { name, type, price, description, targetAudience, features }

STEP 1: Generate landing page copy
  → App: OpenAI (GPT-4) or Anthropic (Claude)
  → System prompt: Product Page Builder Agent prompt (from doc 13)
  → Input: product data from trigger
  → Output: hero headline, bullets, FAQ, meta tags

STEP 2: Generate social content
  → App: OpenAI or Anthropic
  → System prompt: Pinterest Content Agent prompt
  → Input: product name + landing page copy from Step 1
  → Output: 10 pin titles, 10 pin descriptions

STEP 3: Generate Instagram captions
  → App: OpenAI or Anthropic
  → System prompt: Instagram/TikTok Content Agent prompt
  → Input: product name + key benefits
  → Output: 5 Instagram captions + 3 video ideas

STEP 4: Generate email promo copy
  → App: OpenAI or Anthropic
  → Prompt: "Write a promotional email for this product: [product data]. 
    Tone: warm, not pushy. Include: subject line (3 options), preview text, 
    email body (150 words), CTA button text."
  → Output: complete email to send to existing subscribers

STEP 5: Compile everything into a Google Doc
  → App: Google Docs
  → Action: Create new document titled "[Product Name] Content Package - [Date]"
  → Content: all outputs from steps 1-4, organized with headers

STEP 6: Notify yourself
  → App: Gmail
  → Subject: "Content package ready: [Product Name]"
  → Body: "Your content package is ready. Review and approve before publishing."
  → Link to Google Doc

ERROR HANDLING:
  → If AI step fails: retry once, then email yourself with the raw product data 
    so you can run it manually

═══════════════════════════════════════════════════════════
```

**Beginner Explanation:**  
When you add a new product to your sheet or database, Make.com automatically asks an AI to write all your marketing copy — the landing page text, Pinterest pins, Instagram captions, and a promotional email. Everything is organized in a Google Doc and sent to your email for review. You don't write from scratch — you just edit and approve.

---

## Workflow 3: Weekly Analytics Review → AI Summary → Report

**What this does:** Every Monday morning, it pulls your key metrics, sends them to an AI for analysis, and emails you a prioritized improvement report.

**Trigger:** Schedule — every Monday at 8:00 AM

```
WORKFLOW: WEEKLY ANALYTICS REPORT
═══════════════════════════════════════════════════════════

TRIGGER: Schedule (Every Monday 08:00)

STEP 1: Get website analytics from GA4
  → App: Google Analytics (via Make.com module or GA4 API)
  → Data: total sessions, top pages, bounce rate, traffic sources
  → Time range: last 7 days

STEP 2: Get email stats from Brevo
  → App: Brevo API
  → Data: new contacts this week, open rates, click rates, unsubscribes
  → Time range: last 7 days

STEP 3: Get sales data from Gumroad
  → App: Gumroad API (or Google Sheet where you manually log sales)
  → Data: sales count, revenue, top product

STEP 4: Compile metrics into a prompt
  → App: Make.com "text aggregator" or "set variable"
  → Build the Analytics Review Agent prompt (from doc 13) with real numbers

STEP 5: Send to AI for analysis
  → App: OpenAI or Anthropic
  → Input: complete metrics prompt from step 4
  → Output: wins, problems, one experiment, next week priorities

STEP 6: Email the report to yourself
  → App: Gmail
  → Subject: "Weekly Performance Report — Week of [date]"
  → Body: AI analysis + raw numbers below for reference

STEP 7: Log to Supabase analytics table
  → Save this week's data for trend tracking

ERROR HANDLING:
  → If GA4 API fails: use placeholder text "GA4 data unavailable" and continue
  → Always send the email even with partial data

═══════════════════════════════════════════════════════════
```

**Beginner Explanation:**  
Every Monday morning, while you're still having your coffee, Make.com automatically pulls your numbers from Google Analytics, Brevo, and your sales platform. It sends all those numbers to an AI that analyzes them and writes you a report: what's working, what's broken, and exactly what to do next. You get an email with the report by 8:30 AM. No spreadsheet juggling needed.

---

## Workflow 4: New Customer Message → Classify → Draft Reply

**What this does:** When you receive a contact form submission, it automatically classifies the issue type and drafts a reply for you to review and send.

**Trigger:** New contact form submission (webhook from your website)

```
WORKFLOW: CUSTOMER SUPPORT TRIAGE
═══════════════════════════════════════════════════════════

TRIGGER: Webhook receives contact form submission
  Data: { name, email, subject, message }

STEP 1: Send to AI for classification + draft reply
  → App: OpenAI or Anthropic
  → System prompt: Customer Support Agent prompt (from doc 13)
  → Input: full customer message
  → Output: issue type + draft reply

STEP 2: Route based on issue type
  → If "Download problem": add "URGENT" flag (they need the file now)
  → If "Refund request": flag for your manual review before sending
  → If "Pattern question": send draft reply directly to your review
  → If "Compliment": flag as "positive feedback" for testimonial harvesting

STEP 3: Log to Supabase support table
  → Save: customer email, message, issue type, date, status: "pending"

STEP 4: Send yourself a notification
  → App: Gmail
  → Subject: "[SUPPORT] [Issue Type]: [Customer Name]"
  → Body: 
    Customer: {{name}} ({{email}})
    Issue type: {{issue_type}}
    Original message: {{message}}
    ---
    Suggested reply:
    {{draft_reply}}
    ---
    [Reply in Gmail] [Mark as resolved]

STEP 5 (after you reply manually):
  → Update Supabase record status to "resolved"
  → This is a manual step — no automation here

ERROR HANDLING:
  → If AI fails: still send the original message to yourself without a draft

═══════════════════════════════════════════════════════════
```

---

## Workflow 5: New Blog Post Idea → Outline → Draft → Pinterest Posts

**What this does:** You enter a blog idea, and the system produces a complete draft and Pinterest content package.

**Trigger:** New row added to "blog_ideas" sheet (or manual webhook trigger)

```
WORKFLOW: BLOG CONTENT PIPELINE
═══════════════════════════════════════════════════════════

TRIGGER: New row in Google Sheet "Blog Ideas" tab
  Data: { topic, keyword, audience, relatedProduct }

STEP 1: Generate SEO outline
  → App: OpenAI or Anthropic
  → Prompt: "Create a detailed SEO blog post outline for the topic: [topic]. 
    Primary keyword: [keyword]. Target audience: [audience]. 
    Include: H1, 4 H2s with bullet points, intro hook, conclusion CTA.
    The post should link to: [relatedProduct]."
  → Output: detailed outline

STEP 2: Generate full draft from outline
  → App: OpenAI or Anthropic
  → Prompt: "Write a complete 1,400-word blog post following this outline: 
    [outline from step 1]. 
    Tone: warm, expert, helpful. Not fluffy. Include primary keyword 
    '[keyword]' in: the first 100 words, one H2, and the conclusion.
    End with a CTA for the free guide at /free-gift."
  → Output: complete blog post draft

STEP 3: Generate Pinterest pins from the post
  → App: OpenAI or Anthropic
  → Prompt: "Create 5 Pinterest pin titles and 5 pin descriptions for this 
    blog post: [post title]. Keyword: [keyword]. URL: [blog URL]. 
    Tone: inspiring, warm, helpful."
  → Output: 5 pin title + description pairs

STEP 4: Save everything to Google Doc
  → App: Google Docs
  → Create new doc: "[Blog Title] — Draft + Pinterest Pins"
  → Content: outline + full draft + Pinterest pins

STEP 5: Update the Google Sheet
  → Mark the idea as "Draft Complete"
  → Add link to Google Doc

STEP 6: Notify yourself
  → Email: "Blog draft ready for [topic] — review before publishing"

═══════════════════════════════════════════════════════════
```

---

## Make.com Setup Instructions (Beginner)

### Step 1: Create Your Account
1. Go to make.com
2. Sign up for a free account
3. Free plan: 1,000 operations/month — enough for your first 3 months

### Step 2: Create Your First Scenario (Workflow 1)
1. Click "Create a new scenario"
2. Click the "+" to add a module
3. Search for "Webhooks" → "Custom webhook"
4. Copy the webhook URL
5. Paste it into your Next.js `/api/subscribe` route (send data there instead of directly to Brevo)
6. Add the next module: Brevo → "Create or update a contact"
7. Map the webhook fields to the Brevo fields
8. Add Google Sheets module to save the row

### Step 3: Test Every Workflow
- Always test with a real (but fake) email address first
- Check that data flows correctly between each step
- Check your Brevo list to confirm the contact was added
- Check your Google Sheet to confirm the row was saved

### Step 4: Turn on the Scenario
- Toggle the scenario to "Active"
- It now runs automatically whenever the trigger fires

---

## Error Handling Best Practices

| Failure Type | What to Do |
|---|---|
| Webhook times out | Retry 3 times, then log to error sheet |
| Brevo API error | Check if email already exists (not a real error) |
| AI API error | Retry once, if still failing log and notify yourself |
| Database write fails | Never lose the email — always have Brevo as primary |
| Make.com scenario error | You'll get an email from Make.com automatically |
