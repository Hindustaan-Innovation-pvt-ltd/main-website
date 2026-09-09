import { NextResponse } from 'next/server';
import {
  isValidAdminPin,
  ADMIN_COOKIE_NAME,
  ADMIN_SESSION_TOKEN,
} from '@/lib/adminAuth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { pin } = body;

    if (!isValidAdminPin(pin)) {
      return NextResponse.json(
        { success: false, message: 'Invalid administrator security PIN / password.' },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      success: true,
      message: 'Authentication successful.',
    });

    response.cookies.set(ADMIN_COOKIE_NAME, ADMIN_SESSION_TOKEN, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days session
    });

    return response;
  } catch (error) {
    console.error('Admin Auth Error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error processing authentication.' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  const response = NextResponse.json({
    success: true,
    message: 'Logged out successfully.',
  });

  response.cookies.delete(ADMIN_COOKIE_NAME);
  return response;
}
