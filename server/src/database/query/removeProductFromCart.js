import connection from '../config/connection'

const removeProductFromCart = (userId, productId) => {
  const sql = {
    text: 'DELETE FROM productCart WHERE user_id = $1 AND product_id = $2',
    values: [userId, productId]
  }

  return connection.query(sql)
}

export { removeProductFromCart }
