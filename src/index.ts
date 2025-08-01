import express from 'express'
import { DiaryRoute } from './routes/diaryRoute'
// swagger setup
import { setupSwagger } from './swagger/swaggerSetup'
import { UserRoute } from './routes/userRoute'

// Initialize the Express application
const app = express()
const PORT = 3000

app.use(express.json()) // Middleware to parse JSON bodies

// Set up the routes
const diaryRoute = new DiaryRoute()
const userRoute = new UserRoute()

// setup the routes
app.use(diaryRoute.path, diaryRoute.router)
app.use(userRoute.path, userRoute.router)

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
