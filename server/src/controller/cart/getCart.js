import { getCartQuery } from '../../database/query/getCart.query.js'

const getCartController = async (req, res) => {
  const userId = req.userId

  try {
    const cartItems = await getCartQuery(userId)
    res.json(cartItems)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export { getCartController }
