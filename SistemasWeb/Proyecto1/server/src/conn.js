'use strict'

const mysql = require('mysql2/promise')

const pool = mysql.createPool({
  host: 'db',
  user: 'blog_user',
  password: 'blog_password',
  database: 'blog_db',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 10
})

module.exports.pool = pool
