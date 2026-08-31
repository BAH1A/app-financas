
class tabelaUsuarios{
    init(conectionDB){
        this.conectionDB = conectionDB;
        return this.criar();
    };
    async criar(){
        const sqlCommand = `
                -- cria a tabela
                CREATE TABLE IF NOT EXISTS usuarios (
                ID SERIAL PRIMARY KEY,
                NOME VARCHAR(30) NOT NULL,
                SOBRENOME VARCHAR(30) NOT NULL,
                EMAIL VARCHAR(50) NOT NULL,
                SENHA VARCHAR(50) NOT NULL,
                CRIADO_EM TIMESTAMP DEFAULT NOW(),
                ULTIMA_ATUALIZACAO TIMESTAMP DEFAULT NOW()
            );
        `;
        this.conectionDB.query(sqlCommand, (error)=>{
            if (error){
                console.log("Erro ao criar a tabela de usuários:")
                console.log(error)
                return;
            }
            return
        })
    }
}

module.exports = new tabelaUsuarios();