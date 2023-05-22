import { getUserData } from '../../database/query/user.query.js'
import jwt from 'jsonwebtoken'
import {} from 'dotenv/config'

const auth = async (req, res, next) => {
  try {
    const accessToken = req.cookies.token
    console.log(accessToken)
    if (!accessToken) {
      return res.status(401).json({
        message: 'You are not authorized to access this route'
      })
    }

    const userId = jwt.verify(accessToken, process.env.JWT_SECRET)
    console.log(userId,'verfiy');
    const data = await getUserData( userId )
    console.log(data)

    req.user = {
      id: data.rows[0].id
    }

    next()
  } catch (error) {
    console.log('here')
    next(error)
  }
}

export default auth
