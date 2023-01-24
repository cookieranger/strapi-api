export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'db.bit.io'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'cookieranger/strapi-test'),
      user: env('DATABASE_USERNAME', 'cookieranger'),
      password: env('DATABASE_PASSWORD', 'v2_3yLQD_VwQF2LQ3LwCWUZBfePBtBE2'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
