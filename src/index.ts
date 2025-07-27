import express from 'express'
import diariesRouter from './routes/diaries'
// swagger setup
import { setupSwagger } from './swagger/swaggerSetup'

// Initialize the Express application
const app = express()
const PORT = 3000

app.use(express.json()) // Middleware to parse JSON bodies

// Set up the routes
app.use('/api/diaries', diariesRouter)
app.get('/ping', (_req, res) => {
  console.log('Ping received at', new Date().toLocaleDateString())
  res.send('PongX')
})
// Set up Swagger documentation
setupSwagger(app)

// Start the server
app.listen(PORT, () => {
  console.log(`Server X is running on http://localhost:${PORT}`)
})
