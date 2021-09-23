import { app } from "./app"
import * as http from 'http'
import { DatabaseManager } from './database'

const PORT = 4050
const server = http.createServer(app)
server.listen(PORT)
server.on('listening',
  async () => { console.info(`Listening on port ${PORT}`)
    try {
      await DatabaseManager.createDatabaseConnection()
      console.info('Connected to Mongo')
    } catch (e) {
      console.error(e)
    }
  });