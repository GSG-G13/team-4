
import Joi from 'joi';


const signupSchema=Joi.object({
  username:Joi.string().min(3).max(30).required().messages({
    'string.empty': 'Username is required',
    'string.min': 'Username must be at least 3 chars',
    'string.max':'Username must be at least 30 chars',
    'any.required':'Username is required!'
  }),
  email:Joi.string().email().required().messages({
    'string.empty':'Email is required!',
    'string.email':'Email maust be valid Email Address'
  }),
  password:Joi.required(),
})




export {signupSchema};
