import express, { static } from 'express'
import { join } from 'path'
const port = process.env.PORT || 8080
const app = express()

const dist = join(__dirname, '/dist')

app.use(static(dist))

app.get('*', (req, res) => {
  res.sendFile(join(dist, '/index.html'))
})

app.listen(port)
