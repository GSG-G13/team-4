import connection from '../config/connection.js'

const getTotalPrice = () => {
  const sql = {
    text: 'SELECT SUM(p.price * pc.count) AS total_price
    FROM productCart pc
    JOIN products p ON pc.product_id = p.id
    WHERE pc.user_id = your_user_id;
    '
  }

  return connection.query(sql)
}

export { getAllProductsQuery }