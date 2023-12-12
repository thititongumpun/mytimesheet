import { novu } from '@/lib/novu';
import { NextResponse, type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const res = await request.json()
  const notifyResponse = await novu.trigger('timesheet', {
    to: {
      subscriberId: 'c761c317-2037-4315-8a1a-829523a98403',
      email: res.email
    },
    payload: {
      timesheet: `${new Date().toLocaleDateString()} completed`
    }
  });

  return NextResponse.json(notifyResponse.data)
}