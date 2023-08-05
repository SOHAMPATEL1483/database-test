import { db } from '$lib';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async () =>
{
    const start = new Date();

    const users = await db.selectFrom("Person").selectAll().execute();
    //@ts-ignore
    let timeElapsed = new Date() - start;
    return { user: users, timeElapsed };
};