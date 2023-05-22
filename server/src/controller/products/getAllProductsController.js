import { getAllProductsQuery } from '../../database/query/getAllProductsQuery.js'

const getAllProductsController = async (req, res) => {
  try {
    const products = await getAllProductsQuery()
    res.json(products)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export { getAllProductsController }
