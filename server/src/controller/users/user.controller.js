
import bcrypt from 'bcrypt';
import { signupQuery, signInQuery } from '../../database/query/user.query.js';
import { signupSchema, signInSchema } from '../../utilis/validation/schema.js';
import generateAuthToken from '../../utilis/index.js';


const signupController = async (req, res, next) => {

  try {

    const { username, email, password, role } = req.body;
    const value = await signupSchema.validateAsync({ username, email, password, role }, { abortEarly: false })

    if (value) {
      const hashedPassword = await bcrypt.hash(password, 10);
      if (hashedPassword) {
        const data = await signupQuery({ username, email, password: hashedPassword, role });

        res.status(201).json({
          message: 'this user has been created successfully',
        })
      } else {
        res.status(404).json({
          message: 'there is no password'
        })
      }
    } else {
      res.status(404).json({
        message: 'there is a mistake'
      })
    }

  } catch (error) {
    res.status(404).json({
      message: error
    })
  }
}

const signIn = async (req, res, next) => {
  try {

    const { username, password } = req.body;
    const value = await signInSchema.validateAsync({ username, password }, { abortEarly: false })
    if (value) {
      const { rows } = await signInQuery({ username });
      if (rows.length > 0) {
        const match = await bcrypt.compare(password, rows[0].password);

        if (match) {
          const token = generateAuthToken(rows[0].id)
          res.cookie("token", token).end()
        } else {
          res.status(404).json({
            message: 'password or username is not correct'
          })
        }
      } else {
        res.status(404).json({
          message: 'password or username is not correct'

        })

      }
    }
  }
  catch (error) {
    res.status(404).json({
      message: error
    })
  }
}


export { signupController, signIn };
