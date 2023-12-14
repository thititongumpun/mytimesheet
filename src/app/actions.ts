"use server"

import { cookies } from 'next/headers'
import { createServerActionClient, } from '@supabase/auth-helpers-nextjs'
import { Database } from '../lib/database.types'

import * as z from "zod";
import { FormSchema } from '@/lib/FormSchema';
type FormInputs = z.infer<typeof FormSchema>

export async function createTimesheet(data: FormInputs) {
  const client = createServerActionClient<Database>({ cookies });
  // const res = await client.from('timesheets').insert({
  //   user_id: '7d900916-f097-42d1-a54a-6494464f3a4f',
  //   project_id: 11,
  //   date_memo: new Date().toString(),
  //   is_complete: false,
  //   description: 'test',
  // }).select()
  const {data: {user}} = await client.auth.getUser();
  console.log(data)
}