import connection from '../config/connection'

const productQuery = (productData) => {
  const { title, description, image, price, category } = productData

  const sql = {
    text: 'INSERT INTO products (title, description, image, price, category) VALUES ($1 , $2, $3, $4, $5)',
    values: [title, description, image, price, category]
  }

  return connection.query(sql)
}

export { productQuery }
