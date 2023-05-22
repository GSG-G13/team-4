import router from './router/index.js'
import express from 'express'
import cookieParser from 'cookie-parser'
import {} from 'dotenv/config'
import cors from 'cors';
const app = express()
app.set('port', process.env.PORT)
app.disable('x-powered-by')
app.use(cookieParser())
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)

export default app
