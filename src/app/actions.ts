"use server"

import { cookies } from 'next/headers'
import { createServerActionClient, } from '@supabase/auth-helpers-nextjs'
import { Database } from '../lib/database.types'

export async function tt() {
  const client = createServerActionClient<Database>({ cookies });
  const res = await client.from('timesheets').insert({
    user_id: '7d900916-f097-42d1-a54a-6494464f3a4f',
    project_id: 11,
    date_memo: new Date().toString(),
    is_complete: false,
    description: 'test',
  }).select()

  console.log(res.data)
}