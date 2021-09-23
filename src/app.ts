import { RegisterRoutes } from '../build/routes'
import swaggerUi from 'swagger-ui-express'

const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const swaggerData =require('../build/swagger.json')
const swaggerConfig = {
  swaggerOptions: {
    displayOperationId: true,
  },
}
export const app = express()
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(cors())
app.use('/api-docs', swaggerUi.serve)
app.get('/api-docs',  swaggerUi.setup(swaggerData, swaggerConfig))
app.use(bodyparser.json());


RegisterRoutes(app);
