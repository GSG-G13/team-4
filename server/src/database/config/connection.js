const {Pool}=require('pg')
require('dotenv').config();


const {
  DEV_DB_URL,
  DATABASE_URL,
  NODE_ENV
}=process.env;

console.log( DEV_DB_URL);


const options={
  connectionString: DEV_DB_URL ,
  ssl:NODE_ENV==='production'?{rejectUnauthorized:false}:false
};

const connection=new Pool(options)


module.exports=connection;