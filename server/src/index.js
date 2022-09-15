const app = require('./config/app')
const dbConnection = require('./config/db')
const dotenv = require('dotenv')

dotenv.config()
dbConnection()

const PORT = process.env.PORT || 3000

async function main () {
  app.listen(PORT, () => {
    console.log(`Servidor en puerto: ${PORT}`)
  })
}

main()
