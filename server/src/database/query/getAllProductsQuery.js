import connection from '../config/connection.js'

const getAllProductsQuery = () => {
  const sql = {
    text: 'SELECT * FROM products'
  }

  return connection.query(sql)
}

export { getAllProductsQuery }
