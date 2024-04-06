import { config } from 'dotenv';
config();

// Server Operations
export const environment = process.env.NODE_ENV ?? 'development';
export const port = process.env.PORT ?? 8080;
export const cacheTime = process.env.CACHE_TTL ?? 0;
export const databaseURI = process.env.DATABASE_URI ?? '';

// Security
export const allowedOrigin = process.env.ALLOWED_ORIGIN ?? '*';
export const jwtTokenSecret = process.env.JWT_SECRET ?? '';
export const jwtTokenLifetime = process.env.JWT_TTL ?? '1h';
