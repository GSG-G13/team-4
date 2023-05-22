import connection from '../config/connection.js'

const getCartQuery = (userId) => {
  const sql = {
    text: 'SELECT pc.product_id, p.title, p.price, pc.count FROM productCart pc JOIN products p ON pc.product_id = p.id WHERE pc.user_id = $1',
    values: [userId]
  }

  return connection.query(sql)
}

export { getCartQuery }
