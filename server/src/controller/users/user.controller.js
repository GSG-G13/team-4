
const bcrypt=require('bcrypt');
const signupQuery = require('../../database/query/user.query');
const signupSchema = require('../../utilis/validation/schema');


const signupController=(req, res, next)=>{
  const {username,email, password,role}=req.body;


 signupSchema.validateAsync({username,email, password,role},{abortEarly:false})
 .then((data)=>{
  return bcrypt.hash(password, 10)
 }).then(hash=>({username,email, password: hash, role}))
 .then(data=>signupQuery(data))
 .then(data=>data.rows[0])
 .then(data=>{
req.user=data;

  res
  .json({
    error:false,
    data:{
      message:'User Created Successfuly',
      user:req.user
    }
  })
})
 .catch(err=>{ 
  
next(err)
 }) 

}


module.exports=signupController;
