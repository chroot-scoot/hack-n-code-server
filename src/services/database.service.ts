import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { databaseURI } from '../common/config';

const connStr = databaseURI;
const connection = postgres(connStr, { prepare: false });
export const db = drizzle(connection);
