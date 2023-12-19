import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from './database.types';

async function updateTimesheet(id: number, is_complete: boolean) {
  const supabase = createClientComponentClient<Database>()
  await supabase.from("timesheets")
    .update({ is_complete: is_complete })
    .eq('id', id)
}

export default updateTimesheet;