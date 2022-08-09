const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'romen',
    password: 'admin123',
    database: 'postgres',
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
