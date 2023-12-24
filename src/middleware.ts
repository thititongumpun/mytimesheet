import { NextResponse } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import type { NextRequest } from 'next/server'
import type { Database } from '@/lib/database.types'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient<Database>({ req, res })
  const session = await supabase.auth.getSession()

  const expirationDate = session.data.session?.expires_at
  const currentDate = new Date();
  const tokenExpirationDate = new Date(expirationDate as number * 1000);
  if (currentDate > tokenExpirationDate) {
    supabase.auth.refreshSession({ refresh_token: session.data.session?.refresh_token as string })
  }

  if (!session.data.session || tokenExpirationDate < currentDate) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return res
}

export const config = {
  matcher: ['/'],
}