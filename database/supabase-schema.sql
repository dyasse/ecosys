-- ============================================================
-- AI-Powered Digital Product Ecosystem — Supabase Schema
-- ============================================================
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- Run each CREATE TABLE block separately if you hit errors.
-- ============================================================

-- Enable UUID extension (already enabled in Supabase by default)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


-- ============================================================
-- TABLE 1: Products
-- ============================================================
CREATE TABLE IF NOT EXISTS products (
  id              UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name            TEXT NOT NULL,
  slug            TEXT UNIQUE NOT NULL,
  type            TEXT CHECK (type IN ('crochet_pattern', 'knitting_pattern', 'planner', 'bundle')),
  price_usd       DECIMAL(10, 2),
  status          TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'archived')),
  gumroad_url     TEXT,
  product_page_url TEXT,
  description     TEXT,
  target_audience TEXT,
  difficulty      TEXT CHECK (difficulty IN ('beginner', 'intermediate', 'advanced', 'all_levels')),
  total_sales     INTEGER DEFAULT 0,
  image_url       TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE PROCEDURE update_updated_at();


-- ============================================================
-- TABLE 2: Leads (Email Subscribers)
-- ============================================================
CREATE TABLE IF NOT EXISTS leads (
  id                UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email             TEXT UNIQUE NOT NULL,
  first_name        TEXT,
  source            TEXT,                    -- where they signed up
  interest          TEXT CHECK (interest IN ('crochet', 'knitting', 'planner', 'general')),
  status            TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced', 'complained')),
  brevo_contact_id  TEXT,
  tags              TEXT[],
  ip_country        TEXT,
  consent_given     BOOLEAN DEFAULT FALSE,
  consent_date      TIMESTAMPTZ,
  last_email_open   TIMESTAMPTZ,
  subscribed_at     TIMESTAMPTZ DEFAULT NOW(),
  updated_at        TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW EXECUTE PROCEDURE update_updated_at();

-- Index for fast email lookups
CREATE INDEX IF NOT EXISTS leads_email_idx ON leads(email);
CREATE INDEX IF NOT EXISTS leads_status_idx ON leads(status);
CREATE INDEX IF NOT EXISTS leads_interest_idx ON leads(interest);


-- ============================================================
-- TABLE 3: Email Campaigns
-- ============================================================
CREATE TABLE IF NOT EXISTS email_campaigns (
  id                  UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name                TEXT NOT NULL,
  type                TEXT CHECK (type IN ('welcome_sequence', 'product_promo', 'newsletter', 'reengagement')),
  subject_line        TEXT,
  send_date           DATE,
  recipients          INTEGER DEFAULT 0,
  opens               INTEGER DEFAULT 0,
  clicks              INTEGER DEFAULT 0,
  unsubscribes        INTEGER DEFAULT 0,
  open_rate           DECIMAL(5, 2),           -- stored as percentage e.g. 38.5
  click_rate          DECIMAL(5, 2),
  product_id          UUID REFERENCES products(id) ON DELETE SET NULL,
  revenue_attributed  DECIMAL(10, 2) DEFAULT 0,
  notes               TEXT,
  created_at          TIMESTAMPTZ DEFAULT NOW()
);


-- ============================================================
-- TABLE 4: Content Calendar
-- ============================================================
CREATE TABLE IF NOT EXISTS content_calendar (
  id             UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  type           TEXT CHECK (type IN ('blog', 'pinterest', 'instagram', 'tiktok', 'facebook', 'email')),
  title          TEXT NOT NULL,
  status         TEXT DEFAULT 'idea' CHECK (status IN ('idea', 'in_progress', 'ready', 'published', 'cancelled')),
  platform       TEXT,
  publish_date   DATE,
  published_url  TEXT,
  product_id     UUID REFERENCES products(id) ON DELETE SET NULL,
  keyword        TEXT,
  notes          TEXT,
  created_at     TIMESTAMPTZ DEFAULT NOW()
);


-- ============================================================
-- TABLE 5: Blog Posts
-- ============================================================
CREATE TABLE IF NOT EXISTS blog_posts (
  id                   UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title                TEXT NOT NULL,
  slug                 TEXT UNIQUE NOT NULL,
  keyword              TEXT,
  status               TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  published_date       DATE,
  word_count           INTEGER,
  monthly_views        INTEGER DEFAULT 0,
  avg_search_position  DECIMAL(5, 2),     -- from Google Search Console
  clicks_from_search   INTEGER DEFAULT 0,
  leads_generated      INTEGER DEFAULT 0,
  internal_links       TEXT[],
  lead_magnet_linked   BOOLEAN DEFAULT FALSE,
  product_id           UUID REFERENCES products(id) ON DELETE SET NULL,
  created_at           TIMESTAMPTZ DEFAULT NOW(),
  updated_at           TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE PROCEDURE update_updated_at();


-- ============================================================
-- TABLE 6: Analytics (Weekly Snapshots)
-- ============================================================
CREATE TABLE IF NOT EXISTS analytics_weekly (
  id                  UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  week_start          DATE UNIQUE NOT NULL,   -- always the Monday of that week
  website_visitors    INTEGER DEFAULT 0,
  new_subscribers     INTEGER DEFAULT 0,
  total_subscribers   INTEGER DEFAULT 0,
  email_open_rate     DECIMAL(5, 2),
  email_click_rate    DECIMAL(5, 2),
  product_page_views  INTEGER DEFAULT 0,
  checkout_clicks     INTEGER DEFAULT 0,
  sales               INTEGER DEFAULT 0,
  revenue_usd         DECIMAL(10, 2) DEFAULT 0,
  top_traffic_source  TEXT,
  top_blog_post       TEXT,
  top_product         TEXT,
  notes               TEXT,
  created_at          TIMESTAMPTZ DEFAULT NOW()
);


-- ============================================================
-- TABLE 7: Customer Support Tickets
-- ============================================================
CREATE TABLE IF NOT EXISTS support_tickets (
  id             UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  customer_email TEXT NOT NULL,
  customer_name  TEXT,
  issue_type     TEXT CHECK (issue_type IN ('download', 'pattern_question', 'refund', 'wrong_product', 'compliment', 'other')),
  priority       TEXT DEFAULT 'medium' CHECK (priority IN ('high', 'medium', 'low')),
  message        TEXT NOT NULL,
  draft_reply    TEXT,
  final_reply    TEXT,
  status         TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'replied', 'resolved', 'escalated')),
  product_id     UUID REFERENCES products(id) ON DELETE SET NULL,
  resolved_at    TIMESTAMPTZ,
  created_at     TIMESTAMPTZ DEFAULT NOW(),
  updated_at     TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER support_updated_at
  BEFORE UPDATE ON support_tickets
  FOR EACH ROW EXECUTE PROCEDURE update_updated_at();


-- ============================================================
-- TABLE 8: Experiments / A-B Tests
-- ============================================================
CREATE TABLE IF NOT EXISTS experiments (
  id                UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name              TEXT NOT NULL,
  hypothesis        TEXT,
  element           TEXT,                  -- headline / price / button_text / email_subject / image
  variant_a         TEXT,                  -- the control (current version)
  variant_b         TEXT,                  -- the test (new version)
  metric            TEXT,                  -- what you're measuring
  start_date        DATE,
  end_date          DATE,
  variant_a_result  DECIMAL(10, 4),        -- e.g. 0.0234 = 2.34%
  variant_b_result  DECIMAL(10, 4),
  winner            TEXT CHECK (winner IN ('a', 'b', 'no_difference', 'inconclusive')),
  action_taken      TEXT,
  page_or_email     TEXT,
  created_at        TIMESTAMPTZ DEFAULT NOW()
);


-- ============================================================
-- ROW LEVEL SECURITY (RLS)
-- Enable this when you build an auth-protected dashboard
-- ============================================================

-- ALTER TABLE products ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE email_campaigns ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE content_calendar ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE analytics_weekly ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE experiments ENABLE ROW LEVEL SECURITY;

-- For now, use the service role key in your server-side code only.
-- Never expose the service role key in client-side (browser) code.


-- ============================================================
-- SAMPLE DATA (optional — for testing)
-- ============================================================

INSERT INTO products (name, slug, type, price_usd, status, description, difficulty)
VALUES
  ('Cozy Bobble Blanket Pattern', 'cozy-bobble-blanket', 'crochet_pattern', 5.99, 'active',
   'A beautiful beginner-friendly crochet blanket pattern with full photo tutorials.', 'beginner'),
  ('Simple Ribbed Knit Hat', 'simple-ribbed-knit-hat', 'knitting_pattern', 4.99, 'draft',
   'A quick knit hat pattern perfect for gifting. Finished in one evening.', 'beginner');


-- ============================================================
-- USEFUL QUERIES FOR YOUR WEEKLY REVIEW
-- ============================================================

-- Total active subscribers
-- SELECT COUNT(*) FROM leads WHERE status = 'active';

-- Subscribers by interest
-- SELECT interest, COUNT(*) FROM leads WHERE status = 'active' GROUP BY interest;

-- New subscribers this week
-- SELECT COUNT(*) FROM leads WHERE subscribed_at >= NOW() - INTERVAL '7 days';

-- Top performing products by sales
-- SELECT name, total_sales, price_usd FROM products ORDER BY total_sales DESC;

-- Blog posts by views
-- SELECT title, monthly_views, leads_generated FROM blog_posts ORDER BY monthly_views DESC;
