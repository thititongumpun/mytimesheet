import * as z from 'zod';

export const FormSchema = z.object({
  date_memo: z.date({ required_error: "Please select date" }),
  project_id: z.string({ required_error: "Please select project" }),
  is_complete: z.boolean().default(false).optional(),
  description: z.string({ required_error: "Please enter description" }),
});