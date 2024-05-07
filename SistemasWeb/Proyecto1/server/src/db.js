'use strict'

const connection = require('./conn.js')
const conn = connection.pool

async function getAllPosts() {
  const { rows } = await conn.query('SELECT * FROM blogs')
  return rows
}

async function getPostById(id) {
  const { rows } = await conn.query('SELECT * FROM blogs WHERE id = $1', [id])
  return rows[0]
}

async function createPost(title, content) {
  const { rows } = await conn.query(
    'INSERT INTO blogs (title, content) VALUES ($1, $2) RETURNING *',
    [title, content]
  )
  return rows[0]
}

async function createPostWithImage(title, content, image) {
  const { rows } = await conn.query(
    'INSERT INTO blogs (title, content, image_base64) VALUES ($1, $2, $3) RETURNING *',
    [title, content, image]
  )
  return rows[0]
}

async function deletePost(id) {
  const { rows } = await conn.query('DELETE FROM blogs WHERE id = $1 RETURNING *', [id])
  return rows[0]
}

async function updatePost(id, title, content) {
  const { rows } = await conn.query(
    'UPDATE blogs SET title = $1, content = $2 WHERE id = $3 RETURNING *',
    [title, content, id]
  )
  return rows[0]
}

async function updatePostWithImage(id, title, content, image) {
  const { rows } = await conn.query(
    'UPDATE blogs SET title = $1, content = $2, image_base64 = $3 WHERE id = $4 RETURNING *',
    [title, content, image, id]
  )
  return rows[0]
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  deletePost,
  updatePost,
  createPostWithImage,
  updatePostWithImage
}
