import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, or message' },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid cyber mail address format' },
        { status: 400 }
      );
    }

    // Dispatch logging
    const timestamp = new Date().toISOString();
    console.log(`[NEONVERSE DISPATCH] ${timestamp} | From: ${name} <${email}> | Subj: ${subject || 'No Subject'} | Msg: ${message.slice(0, 80)}...`);

    return NextResponse.json(
      {
        success: true,
        message: 'Encrypted dispatch received and queued for Himanshu Tiwari.',
        timestamp,
        operator: 'HIMANSHU TIWARI // AIVOT AI',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[NEONVERSE DISPATCH ERROR]', error);
    return NextResponse.json(
      { error: 'Internal neural relay malfunction. Please dispatch via direct email.' },
      { status: 500 }
    );
  }
}
