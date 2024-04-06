/** @type { import("drizzle-kit").Config } */
module.exports = {
  schema: './src/models/*.model.ts',
  out: './migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DB_URL,
  },
};
