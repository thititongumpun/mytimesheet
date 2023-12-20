"use server"

import { cookies } from 'next/headers'
import { createServerActionClient, } from '@supabase/auth-helpers-nextjs'
import { Database } from '../lib/database.types'

import * as z from "zod";
import { FormSchema } from '@/lib/FormSchema';
import { format } from 'date-fns';
import { revalidatePath } from 'next/cache';

export type FormInputs = z.infer<typeof FormSchema>

export async function createTimesheet(data: FormInputs) {
  const client = createServerActionClient<Database>({ cookies });

  const { data: { user } } = await client.auth.getUser();
  const today = new Date();
  const currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const date_memo = format(data.date_memo, `yyyy-MM-dd ${currentTime}`)

  const res = await client.from('timesheets').insert({
    user_id: user?.id as string,
    project_id: Number(data.project_id),
    date_memo: date_memo,
    is_complete: data.is_complete,
    description: data.description,
  }).select()

  revalidatePath('/')

  return res;
}