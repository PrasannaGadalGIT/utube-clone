import { db } from "@/db";
import {z} from 'zod';
import { videos } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { eq, and, or, lt, desc } from "drizzle-orm";

export const studioRouter = createTRPCRouter({
    getMany: protectedProcedure.input(
        z.object({
            cursor: z.object({
                id: z.string().uuid(),
                updatedAt: z.date
            })
            .nullish(),
            limit: z.number().min(1).max(100)
        })
    )
    .query(async ({ctx, input}) => {
        const {cursor, limit} = input;
        const {id: userId} = ctx.user;


       const data = await db
    .select()
    .from(videos)
    .where(
        and(
            eq(videos.userId, userId),
            cursor ? or(
                lt(videos.updatedAt, cursor.updatedAt as Date),
                and(
                    eq(videos.updatedAt, cursor.updatedAt as Date),
                    lt(videos.id, cursor.id)
                )
            ) : undefined,
        )
    ).orderBy(desc(videos.updatedAt), desc(videos.id))
    .limit(limit + 1);

    const hasMore = data.length > limit;

    //Remove the last item if there is more data
    const items = hasMore ? data.slice(0, -1) : data;

    //Set the next cursor to the last item if there is more data
    const lastitem = items[items.length - 1];
    const nextCursor = hasMore ? 
    {
        id: lastitem.id,
        updatedAt: lastitem.updatedAt
    }
    :
    null;


     return {
        items,
        nextCursor
     }
    })
})