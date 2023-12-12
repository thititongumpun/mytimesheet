import { Novu } from '@novu/node';

export const novu = new Novu(process.env.NEXT_PUBLIC_NOVU_API_KEY as string);