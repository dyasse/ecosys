// pages/api/subscribe.js  (Next.js Pages Router)
// OR
// app/api/subscribe/route.js  (Next.js App Router — use the App Router version below)
//
// This file handles email sign-ups:
// 1. Validates the input
// 2. Adds the contact to Brevo
// 3. Returns success/error

// ─────────────────────────────────────────────────────────────
// PAGES ROUTER VERSION (pages/api/subscribe.js)
// ─────────────────────────────────────────────────────────────

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, firstName, source, interest, consentGiven, consentDate } = req.body;

  // Basic validation
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email address required' });
  }

  if (!process.env.BREVO_API_KEY) {
    console.error('BREVO_API_KEY not configured');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  if (!process.env.BREVO_LIST_ID) {
    console.error('BREVO_LIST_ID not configured');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: email.toLowerCase().trim(),
        attributes: {
          FIRSTNAME: firstName?.trim() || '',
          SOURCE: source || 'website',
          INTEREST: interest || 'general',
          OPT_IN_DATE: consentDate || new Date().toISOString(),
          CONSENT_GIVEN: consentGiven ? 'yes' : 'no',
        },
        listIds: [parseInt(process.env.BREVO_LIST_ID, 10)],
        updateEnabled: true, // Update existing contacts rather than erroring
      }),
    });

    // Brevo returns 201 for new contacts, 204 for updated contacts
    if (brevoRes.status === 201 || brevoRes.status === 204) {
      return res.status(200).json({ success: true });
    }

    const brevoData = await brevoRes.json();

    // Handle "contact already in list" — not a real error
    if (brevoData.code === 'duplicate_parameter') {
      return res.status(200).json({ success: true, message: 'Already subscribed' });
    }

    console.error('Brevo API error:', brevoData);
    return res.status(500).json({ error: 'Failed to subscribe. Please try again.' });
  } catch (err) {
    console.error('Subscribe handler error:', err);
    return res.status(500).json({ error: 'Server error. Please try again.' });
  }
}


// ─────────────────────────────────────────────────────────────
// APP ROUTER VERSION (app/api/subscribe/route.js)
// Use this if your Next.js project uses the App Router
// ─────────────────────────────────────────────────────────────

/*
import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();
  const { email, firstName, source, interest, consentGiven, consentDate } = body;

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
  }

  try {
    const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.toLowerCase().trim(),
        attributes: {
          FIRSTNAME: firstName?.trim() || '',
          SOURCE: source || 'website',
          INTEREST: interest || 'general',
          OPT_IN_DATE: consentDate || new Date().toISOString(),
          CONSENT_GIVEN: consentGiven ? 'yes' : 'no',
        },
        listIds: [parseInt(process.env.BREVO_LIST_ID, 10)],
        updateEnabled: true,
      }),
    });

    if (brevoRes.status === 201 || brevoRes.status === 204) {
      return NextResponse.json({ success: true });
    }

    const data = await brevoRes.json();
    if (data.code === 'duplicate_parameter') {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
*/
