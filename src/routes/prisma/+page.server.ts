import { PrismaClient } from '@prisma/client';
import type { PageServerLoad } from './$types';
import prisma from '$lib/prisma';


export const load: PageServerLoad = async () =>
{
    const start = new Date();
    const user = await prisma.person.findMany();
    //@ts-ignore
    let timeElapsed = new Date() - start;
    return { user: user, timeElapsed };
} 