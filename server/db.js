const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: 5432,
    database: "pvk_db_dummy"
});

module.exports = pool;
