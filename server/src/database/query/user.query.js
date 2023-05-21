const connection = require("../config/connection");


const signupQuery=({username, email, password, role} )=>{

  const sql={
    text:`INSERT INTO users (username, email, password, role)
    VALUES($1,$2,$3, $4)
    RETURNING id, username,email, role
    `,

    values: [username, email, password,role]
  }


  return connection.query(sql)
}


module.exports=signupQuery;