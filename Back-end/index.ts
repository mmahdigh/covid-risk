import express from 'express'
import bodyParser from 'body-parser'
import { router } from './src/root/index';
const app = express()
const port = 3000

app.get('/', router)

app.use(bodyParser)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})