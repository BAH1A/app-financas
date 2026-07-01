const server = require('fastify')({ logger: false })


//Rotas
server.get('/', async function handler(request, reply) {
    return { hello:'world'}
})


// Run the server!
const porta = 9082
server.listen({ port: porta }, (err) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  else{
    console.log(`Servidor online, no endereço: http://localhost:${porta}`)
  }
})