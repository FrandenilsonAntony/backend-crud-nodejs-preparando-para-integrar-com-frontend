require('dotenv').config()
const express = require('express')
const { connectToDatabase } = require('./db/database-connection')
const cors = require('cors')
require('express-async-errors')

//Routers
const personagemRouter = require('./personagem/personagem.router')

//Declaramos a função main()
async function main() {
  //Conectamos ao DB
  await connectToDatabase()
  
  //Iniciamos o Express
  const app = express()

   //Middlewares
   //Sinalia para o Express que estamos usando o JSON no Body
   app.use(express.json())
   app.use(cors())

   //Endpoint de Hello World
  app.get('/', function (req, res) {
    
    res.send('Hello World!')
  })

  //Routers
  app.use('/personagem', personagemRouter)

  //Error Handling
  app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({ error: 'Algo deu errado!'})
  });

  //Endpoint catch-all para rotas não encontradas
  app.use('*', (req, res) => {
    res.status(404).send({ error:'Endpoint não encontrado'});
  });
  

  app.listen(3000, function () {
    console.log("Servidor rodando em http://localhost:3000")
  })
}

//Executamos a função main()
main()