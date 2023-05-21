import connection from"../config/connection.js";


const signupQuery=({username, email, password, role} )=>{
  console.log(password);
  const sql={
    text:`INSERT INTO users (username, email, password, admin)
    VALUES($1,$2,$3,$4)
    RETURNING id, username,email, admin
    `,
    values: [username, email, password,role]
  }

  return connection.query(sql)
}

export {signupQuery};