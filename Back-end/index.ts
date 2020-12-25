import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { router } from './src/root/index';

const app = express()
const port = 7070

app.use(cors())

app.use(bodyParser())

app.use('/', router)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})