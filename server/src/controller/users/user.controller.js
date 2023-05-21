
import bcrypt from 'bcrypt';
import {signupQuery} from '../../database/query/user.query.js';
import {signupSchema} from '../../utilis/validation/schema.js';


const signupController=async(req, res, next)=>{
  
  try{
    
    const {username,email, password,role}=req.body;
    const value = await signupSchema.validateAsync({username,email, password,role},{abortEarly:false})
    
    if(value){
      const hashedPassword = await bcrypt.hash(password,10);
      if(hashedPassword){
        const data = await signupQuery({username,email, password:hashedPassword,role});
        console.log(data.rows);

        res.status(201).json({
          message:'this user has been created successfully',
        })
      }else{
        res.status(404).json({
          message:'there is no password'
        })
      }
    }else{
      res.status(404).json({
        message:'there is a mistake'
      })
    }
  
  }catch(error){
    res.status(404).json({
      message:error
    })
  }

//  signupSchema.validateAsync({username,email, password,role},{abortEarly:false})
//  .then((data)=>{
//   return bcrypt.hash(password, 10)
//  }).then(hash=>({username,email, password: hash, role}))
//  .then(data=>signupQuery(data))
//  .then(data=>data.rows[0])
//  .then(data=>{
// req.user=data;

//   res
//   .json({
//     error:false,
//     data:{
//       message:'User Created Successfuly',
//       user:req.user
//     }
//   })
// })
//  .catch(err=>{ 
  
// next(err)
//  }) 

}


export {signupController};
