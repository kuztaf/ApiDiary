import swaggerUi from 'swagger-ui-express'
import fs from 'fs'
import path from 'path'
import { Express } from 'express'

export const setupSwagger = (app: Express): void => {
  const swaggerDocument = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'swagger.json'), 'utf8')
  )
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}
