// components/OptInForm.jsx
// Drop this component into your /free-gift page.
// Requires: BREVO_API_KEY in .env.local and the /api/subscribe route.

'use client';
import { useState } from 'react';

export default function OptInForm({ source = 'free-gift-page', interest = 'crochet' }) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg('');

    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          firstName: firstName.trim(),
          source,
          interest,
          consentGiven: consent,
          consentDate: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        setStatus('success');
        window.location.href = '/thank-you';
      } else {
        const data = await res.json();
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="opt-in-form" noValidate>
      <div className="form-row">
        <label htmlFor="firstName" className="sr-only">First name</label>
        <input
          id="firstName"
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          autoComplete="given-name"
          disabled={status === 'loading'}
        />
      </div>

      <div className="form-row">
        <label htmlFor="email" className="sr-only">Email address</label>
        <input
          id="email"
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          disabled={status === 'loading'}
        />
      </div>

      {/* GDPR consent checkbox — required if you have EU visitors */}
      <div className="form-row consent-row">
        <label className="consent-label">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            disabled={status === 'loading'}
          />
          <span>
            I agree to receive helpful emails from [Brand Name], including my
            free guide and occasional pattern updates. I can unsubscribe at any time.
          </span>
        </label>
      </div>

      {errorMsg && <p className="form-error" role="alert">{errorMsg}</p>}

      <button type="submit" disabled={status === 'loading'} className="submit-btn">
        {status === 'loading' ? 'Sending...' : 'Send My Free Guide →'}
      </button>

      <p className="consent-text">
        No spam, ever. Unsubscribe anytime. See our{' '}
        <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>.
      </p>
    </form>
  );
}
