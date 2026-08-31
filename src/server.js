const express = require('express')
const app = express()
app.use(express.json())

//Rotas
const usuarios = require('./routes/usuarioRoute.js')
const receitas = require('./routes/receitaRoute.js')
const despesas = require('./routes/despesaRoute.js')

app.use(usuarios)
app.use(receitas)
app.use(despesas)

async function start() {
  const dbSetup = require('../database/setup/dbSetup.js')
  await dbSetup
  
  const porta = 8080
  app.listen(porta, ()=>{// Run the server!
    console.log(`Servidor online, no endereço: http://localhost:${porta}`)
  });  
}start();