
class tabelaReceitas{
    init(conectionDB){
        this.conectionDB = conectionDB;
        return this.criar();
    };
    async criar(){
        const sqlCommand = `
            -- cria o ENUM de TIPO
            DO $$
            BEGIN
                IF NOT EXISTS (
                    SELECT 1
                    FROM pg_type
                    WHERE typname = 'status_rec'
                ) THEN
                    CREATE TYPE status_rec AS ENUM (
                        'recebido',
                        'recebido em atrasado',
                        'a receber',
                        'vencido'
                    );
                END IF;
            END
            $$;
            -- cria a tabela
                CREATE TABLE IF NOT EXISTS receitas (
                ID SERIAL PRIMARY KEY,
                NOME VARCHAR(30) NOT NULL,
                OBSERVACAO TEXT,
                VALOR NUMERIC(12,2) DEFAULT 0.00,
                CLASSIFICACAO VARCHAR(30) NOT NULL,
                DATA_REC DATE NOT NULL,
                CRIADO_EM TIMESTAMP DEFAULT NOW(),
                ULTIMA_ATUALIZACAO TIMESTAMP DEFAULT NOW(),
                STATUS status_rec DEFAULT 'a receber'
            );
        `;
        this.conectionDB.query(sqlCommand, (error)=>{
            if (error){
                console.log("Erro ao criar a tabela de receitas:")
                console.log(error)
                return;
            }
            return
        })
    }
}

module.exports = new tabelaReceitas();