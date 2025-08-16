import { initTRPC } from '@trpc/server';
import { cache } from 'react';
// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
export const createTRPCContext = cache(async () => {
    return { userId : 'user_123'}
});
const t = initTRPC.create({

});
// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const router = t.router;
export const baseProcedure = t.procedure;
export const createCallerFactory = t.createCallerFactory