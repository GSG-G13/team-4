import { getCartQuery } from '../../database/query/getCart.query.js'

const getCartController = async (req, res) => {
  const { userId } = req.user
  console.log(req.user,'id');
  try {
    const cartItems = await getCartQuery(userId)
    res.json(cartItems)
    console.log(cartItems);
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export { getCartController }
