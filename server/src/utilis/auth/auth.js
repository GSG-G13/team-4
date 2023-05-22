import { getUserData } from '../../database/query/user.query.js'
import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
  try {
    const accessToken = req.cookies.token
    if (!accessToken) {
      return res.status(401).json({
        message: 'You are not authorized to access this route'
      })
    }

    const userId = jwt.verify(accessToken, process.env.JWT_SECRET)

    const data = await getUserData({ userId })
    console.log(data)

    req.user = {
      id: data.rows[0].id,
      username: data.rows[0].username,
      email: data.rows[0].email
    }

    next()
  } catch (error) {
    next(error)
  }
}

export default auth
