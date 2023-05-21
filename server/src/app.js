import router from './router/index.js'
import express from 'express'
import {} from 'dotenv/config'

const app = express()
app.set('port', process.env.PORT)
app.disable('x-powered-by')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)

export default app
