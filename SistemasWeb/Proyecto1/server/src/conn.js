'use strict'

const { Pool } = require('pg')

const pool = new Pool({
  host: 'db',
  user: 'blog_user',
  password: 'blog_password',
  database: 'blog_db',
  port: 5432,  
  max: 10, 
  idleTimeoutMillis: 30000, 
  connectionTimeoutMillis: 2000,
})


module.exports.pool = pool
