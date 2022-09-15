const mongoose = require('mongoose')

const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log(`Base de datos conectado en: ${connection.connection.host}:${connection.connection.port}`)
  } catch (error) {
    console.error(`Error de conexión: ${error.message}`)

    process.exit(1)
  }
}

module.exports = dbConnection
