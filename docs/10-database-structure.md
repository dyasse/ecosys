# 10. Database Structure

## Overview

You have two options:
1. **Google Sheets** — Use this for your first 30-60 days. Zero setup.
2. **Supabase** — Use this from day 1 if you're comfortable with basic databases, or migrate to it after your first 50 subscribers.

This document gives you the structure for both. The column names are identical — copy them exactly.

---

## Table 1: Products

**Why:** Track every product you sell. The single source of truth for your product catalog.

### Columns

| Column | Type | Description |
|---|---|---|
| id | UUID / auto-increment | Unique product ID |
| name | Text | Full product name |
| slug | Text | URL-friendly name (e.g., cozy-bobble-blanket-pattern) |
| type | Text | crochet_pattern / knitting_pattern / planner |
| price_usd | Number | Current price in USD |
| status | Text | draft / active / archived |
| gumroad_url | URL | Direct checkout link |
| product_page_url | URL | Your website product page |
| description | Text | Short product description (100 words) |
| target_audience | Text | Who this is for |
| difficulty | Text | beginner / intermediate / advanced |
| created_at | Timestamp | When you added it |
| total_sales | Number | Running count of sales |
| image_url | URL | Product photo URL |

### Example Row

| id | name | slug | type | price_usd | status | gumroad_url |
|---|---|---|---|---|---|---|
| 1 | Cozy Bobble Blanket Pattern | cozy-bobble-blanket | crochet_pattern | 5.99 | active | https://gumroad.com/... |

### Supabase SQL

```sql
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  type TEXT CHECK (type IN ('crochet_pattern', 'knitting_pattern', 'planner')),
  price_usd DECIMAL(10,2),
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'archived')),
  gumroad_url TEXT,
  product_page_url TEXT,
  description TEXT,
  target_audience TEXT,
  difficulty TEXT CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  total_sales INTEGER DEFAULT 0,
  image_url TEXT
);
```

---

## Table 2: Leads (Email Subscribers)

**Why:** Your own backup of every subscriber. Never rely solely on your email platform — if Brevo goes down or you switch providers, you have your list.

### Columns

| Column | Type | Description |
|---|---|---|
| id | UUID | Unique lead ID |
| email | Text (unique) | Email address |
| first_name | Text | First name |
| source | Text | Where they signed up (free-gift-page, blog, instagram, etc.) |
| interest | Text | crochet / knitting / planner |
| subscribed_at | Timestamp | When they signed up |
| status | Text | active / unsubscribed / bounced |
| brevo_contact_id | Text | ID from Brevo (for syncing) |
| tags | Text array | interest-crochet, buyer, email-4-sent, etc. |
| ip_country | Text | Country (from IP — for GDPR) |
| consent_given | Boolean | Did they check the consent box? |
| consent_date | Timestamp | When consent was given |
| last_email_open | Timestamp | Last time they opened an email |

### Example Row

| email | first_name | source | interest | status | consent_given |
|---|---|---|---|---|---|
| sarah@email.com | Sarah | free-gift-page | crochet | active | true |

### Supabase SQL

```sql
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  first_name TEXT,
  source TEXT,
  interest TEXT CHECK (interest IN ('crochet', 'knitting', 'planner', 'general')),
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),
  brevo_contact_id TEXT,
  tags TEXT[],
  ip_country TEXT,
  consent_given BOOLEAN DEFAULT FALSE,
  consent_date TIMESTAMPTZ,
  last_email_open TIMESTAMPTZ
);
```

---

## Table 3: Email Campaigns

**Why:** Track the performance of every email you send so you can improve over time.

### Columns

| Column | Type | Description |
|---|---|---|
| id | UUID | Unique campaign ID |
| name | Text | Campaign name (e.g., "Welcome Email 1") |
| type | Text | welcome_sequence / product_promo / newsletter |
| subject_line | Text | The subject line used |
| send_date | Date | When it was sent |
| recipients | Number | How many people received it |
| opens | Number | How many opened |
| clicks | Number | How many clicked |
| unsubscribes | Number | How many unsubscribed |
| open_rate | Number | Calculated: opens/recipients |
| click_rate | Number | Calculated: clicks/opens |
| product_id | UUID | Which product was promoted (if any) |
| revenue_attributed | Number | Sales revenue from this email |
| notes | Text | What you learned / what to test next |

### Example Row

| name | subject_line | send_date | recipients | opens | clicks | open_rate |
|---|---|---|---|---|---|---|
| Welcome Email 4 | My most popular pattern | 2024-01-15 | 234 | 98 | 24 | 41.9% |

### Supabase SQL

```sql
CREATE TABLE email_campaigns (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT CHECK (type IN ('welcome_sequence', 'product_promo', 'newsletter', 'reengagement')),
  subject_line TEXT,
  send_date DATE,
  recipients INTEGER DEFAULT 0,
  opens INTEGER DEFAULT 0,
  clicks INTEGER DEFAULT 0,
  unsubscribes INTEGER DEFAULT 0,
  open_rate DECIMAL(5,2),
  click_rate DECIMAL(5,2),
  product_id UUID REFERENCES products(id),
  revenue_attributed DECIMAL(10,2) DEFAULT 0,
  notes TEXT
);
```

---

## Table 4: Content Calendar

**Why:** Plan and track all content (blog posts, social posts, emails) in one place. Prevents gaps and shows what's working.

### Columns

| Column | Type | Description |
|---|---|---|
| id | UUID | Unique content ID |
| type | Text | blog / pinterest / instagram / tiktok / facebook / email |
| title | Text | Content title or topic |
| status | Text | idea / in_progress / ready / published |
| publish_date | Date | When to publish |
| published_url | URL | Live URL after publishing |
| product_id | UUID | Which product does this support? |
| keyword | Text | Target keyword (for blog/Pinterest) |
| platform | Text | Where it will be published |
| notes | Text | Any extra info |
| created_at | Timestamp | When you added the idea |

### Example Rows

| type | title | status | publish_date | keyword |
|---|---|---|---|---|
| blog | How to Read a Crochet Pattern | published | 2024-01-10 | how to read a crochet pattern |
| pinterest | Cozy Blanket Pin 1 | ready | 2024-01-12 | easy crochet blanket pattern |
| instagram | Stitch breakdown Reel | idea | 2024-01-14 | — |

---

## Table 5: Blog Posts

**Why:** Track SEO performance of each blog post separately from the content calendar.

### Columns

| Column | Type | Description |
|---|---|---|
| id | UUID | Unique post ID |
| title | Text | Post title (H1) |
| slug | Text | URL slug |
| keyword | Text | Primary keyword |
| published_date | Date | When published |
| word_count | Number | Article length |
| monthly_views | Number | Monthly pageviews (update monthly) |
| average_position | Number | Google Search Console position |
| clicks_from_search | Number | Clicks from Google |
| leads_generated | Number | Email sign-ups from this post |
| internal_links | Text array | Pages this post links to |
| lead_magnet_linked | Boolean | Does it link to /free-gift? |
| product_linked | Boolean | Does it link to a product page? |

---

## Table 6: Analytics (Weekly Snapshots)

**Why:** Track week-over-week growth. Find trends. Celebrate milestones.

### Columns

| Column | Type | Description |
|---|---|---|
| id | UUID | Unique record ID |
| week_start | Date | Monday of that week |
| website_visitors | Number | Total sessions from GA4 |
| new_subscribers | Number | New email sign-ups |
| total_subscribers | Number | Running total |
| email_open_rate | Decimal | Average open rate this week |
| email_click_rate | Decimal | Average click rate this week |
| product_page_views | Number | Views on product pages |
| gumroad_clicks | Number | Clicks to Gumroad |
| sales | Number | Units sold |
| revenue_usd | Decimal | Total revenue |
| top_traffic_source | Text | Pinterest / Google / Instagram |
| top_blog_post | Text | Post title with most traffic |
| notes | Text | What happened this week |

### Example Row

| week_start | visitors | new_subscribers | sales | revenue_usd | top_traffic_source |
|---|---|---|---|---|---|
| 2024-01-08 | 312 | 28 | 3 | 17.97 | pinterest |

---

## Table 7: Customer Support

**Why:** Track all customer interactions. Know your common problems. Build your FAQ.

### Columns

| Column | Type | Description |
|---|---|---|
| id | UUID | Unique ticket ID |
| email | Text | Customer email |
| name | Text | Customer name |
| issue_type | Text | download / pattern_question / refund / compliment / other |
| message | Text | Full original message |
| draft_reply | Text | AI-generated draft reply |
| final_reply | Text | What you actually sent |
| status | Text | pending / replied / resolved / escalated |
| product_id | UUID | Related product (if applicable) |
| created_at | Timestamp | When received |
| resolved_at | Timestamp | When resolved |
| satisfaction | Text | positive / neutral / negative (based on follow-up) |

---

## Table 8: Experiments / A/B Tests

**Why:** Track what you test so you don't repeat tests and you remember what worked.

### Columns

| Column | Type | Description |
|---|---|---|
| id | UUID | Unique experiment ID |
| name | Text | What you're testing |
| hypothesis | Text | "I believe changing X will improve Y by Z%" |
| element | Text | headline / price / button_text / email_subject / image |
| variant_a | Text | The control (original) |
| variant_b | Text | The test (new version) |
| start_date | Date | When the test started |
| end_date | Date | When you declared a winner |
| metric | Text | What you're measuring (conversion_rate / open_rate / etc.) |
| variant_a_result | Number | Result for original |
| variant_b_result | Number | Result for new version |
| winner | Text | A / B / no_difference |
| action_taken | Text | What you changed based on the result |

### Example Row

| name | element | variant_a | variant_b | winner | action_taken |
|---|---|---|---|---|---|
| Lead magnet headline test | headline | "Free Crochet Guide" | "Finally Understand Crochet Patterns" | B | Updated headline on /free-gift page |

---

## Google Sheets Setup (Beginner Version)

Create one Google Sheets workbook with these tabs:
1. `Products`
2. `Leads`
3. `Email Campaigns`
4. `Content Calendar`
5. `Blog Posts`
6. `Analytics`
7. `Support`
8. `Experiments`

Each tab = one table above.

**Share settings:** Keep private. Only you should have access.

**Migrate to Supabase when:**
- You have 200+ leads
- You want to show live data on your website
- You want automations to query data in real time
