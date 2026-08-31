const conectionDB = require("../Connection/db.js")

const tabelaReceitas = require('./tabelaReceitas.js')
const tabelaDespesas = require('./tabelaDespesas.js')
const tabelaUsuarios = require('./tabelaUsuarios.js')
async function dbSetup() {

    await tabelaReceitas.init(conectionDB)
    await tabelaDespesas.init(conectionDB)
    await tabelaUsuarios.init(conectionDB)
    console.log("Banco de dados está pronto")
}

module.exports = dbSetup()