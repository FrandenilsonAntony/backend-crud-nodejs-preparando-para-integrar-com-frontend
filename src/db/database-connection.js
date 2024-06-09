const { MongoClient } = require('mongodb')

//Preparamos as informaçoes de acesso ao banco de dados
const dbUrl = process.env.DATABASE_URL
const dbName = 'mongodb-integrar-frontend'

const client = new MongoClient(dbUrl)


async function connectToDatabase() {
  //Realizamos a conexão com DataBase
  console.log('Conectando ao Data Base: Nuvem')
  console.log('...............................')
  await client.connect()
  console.log('Data Base conectado com sucesso!')
}

function getDatabase() {
  return client.db(dbName)
}


module.exports = {
  connectToDatabase,
  getDatabase
}