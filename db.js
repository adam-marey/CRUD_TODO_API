const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'adam',
  host: 'localhost',
  port: 5432,
  database: 'todo_api'
});

module.exports = pool;
