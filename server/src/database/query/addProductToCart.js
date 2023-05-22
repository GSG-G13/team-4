import connection from '../config/connection.js'

const addProductToCart = (userId, productId, count) => {
  const sql = {
    text: 'INSERT INTO productCart (user_id, product_id, count) VALUES ($1, $2, $3) RETURNING *',
    values: [userId, productId, count]
  }

  return connection.query(sql)
}

export { addProductToCart }
