import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { email, firstName, source, interest, consentGiven, consentDate } = body

  // Validation
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email address required' }, { status: 400 })
  }

  if (!process.env.BREVO_API_KEY) {
    console.error('BREVO_API_KEY is not set')
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  if (!process.env.BREVO_LIST_ID) {
    console.error('BREVO_LIST_ID is not set')
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
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
          FIRSTNAME: firstName?.trim() ?? '',
          SOURCE: source ?? 'website',
          INTEREST: interest ?? 'general',
          OPT_IN_DATE: consentDate ?? new Date().toISOString(),
          CONSENT_GIVEN: consentGiven ? 'yes' : 'no',
        },
        listIds: [parseInt(process.env.BREVO_LIST_ID, 10)],
        updateEnabled: true,
      }),
    })

    // 201 = new contact created, 204 = existing contact updated
    if (brevoRes.status === 201 || brevoRes.status === 204) {
      return NextResponse.json({ success: true })
    }

    const data = await brevoRes.json()

    // "duplicate_parameter" means already in list — treat as success
    if (data?.code === 'duplicate_parameter') {
      return NextResponse.json({ success: true })
    }

    console.error('Brevo error response:', data)
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  } catch (err) {
    console.error('Subscribe route error:', err)
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 })
  }
}
