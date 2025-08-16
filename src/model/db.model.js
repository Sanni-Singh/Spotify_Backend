const sql = require('mysql2');
const { dbConfig } = require('../../config/db.config');

const connection = sql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
})

module.exports = connection;