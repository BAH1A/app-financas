const express = require('express')
const app = express()
const router = require('./routes')
app.use(express.json())

//Rotas
app.use(router)

// Run the server!
const porta = 8080

app.listen(porta, ()=>{
  console.log(`Servidor online, no endereço: http://localhost:${porta}`)
})



/*app.listen({ port: porta }, (err) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  else{
    console.log(`Servidor online, no endereço: http://localhost:${porta}`)
  }
})*/