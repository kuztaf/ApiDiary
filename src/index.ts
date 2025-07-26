import express from 'express'

import diariesRouter from './diaries'

const app = express()
const PORT = 3000

app.use(express.json()) // Middleware to parse JSON bodies
app.use('/api/diaries', diariesRouter)

app.get('/ping', (_req, res) => {
  console.log('Ping received at', new Date().toLocaleDateString())
  res.send('PongX')
})

app.listen(PORT, () => {
  console.log(`Server X is running on http://localhost:${PORT}`)
})
