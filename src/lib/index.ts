// place files you want to import through the `$lib` alias in this folder.
import type { DB } from "../db/types";
import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely'
import { NeonDialect } from "kysely-neon";
import ws from "ws"
import { env } from "$env/dynamic/private";

console.log(env.DATABASE_URL);

export const db = new Kysely<DB>({
    dialect: new NeonDialect({
        connectionString: env.DATABASE_URL,
        webSocketConstructor: ws,
    }),
});