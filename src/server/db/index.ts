import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";

import * as schema from "./schema";
// Use this to send queries to the database
export const db = drizzle(sql, { schema });


