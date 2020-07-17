var knex = require('knex')({
    client: 'mysql',
    connection: {
      timezone: "+07:00",
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      port : process.env.DB_PORT || '3306',
      password : process.env.DB_PASS,
      database : process.env.DB_NAME
    }
});

module.exports = knex;
