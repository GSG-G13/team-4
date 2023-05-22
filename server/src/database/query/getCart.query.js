import connection from '../config/connection'
const getCartQuery = () => {
  const sql = {
    text: 'SELECT p.product_id, p.product_name, p.price, pc.count FROM productCart pc JOIN products p ON pc.product_id = p.id WHERE pc.user_id = your_user_id'
  }

  return connection.query(sql)
}

export { getCartQuery }
