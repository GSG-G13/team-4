import path from 'path'
import {fileURLToPath} from 'url'
import router from './router/index.js'
import express from 'express'
import cookieParser from 'cookie-parser'
import {} from 'dotenv/config'
import cors from 'cors'
const app = express()
const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

app.set('port', process.env.PORT)
app.disable('x-powered-by')
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../../client/dist')))
app.use('/api',router)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'))
})

export default app
