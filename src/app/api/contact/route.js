// /app/api/contact/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  const data = await request.json();
  
  // Send email, save to DB, etc.
  // For now, just log it
  console.log('Contact form:', data);
  
  return NextResponse.json({ success: true });
}