
class tabelaDepesas{
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
                    WHERE typname = 'status_des'
                ) THEN
                    CREATE TYPE status_des AS ENUM (
                        'pago',
                        'pago em atrasado',
                        'a pagar',
                        'vencido'
                    );
                END IF;
            END
            $$;
            -- cria a tabela
                CREATE TABLE IF NOT EXISTS despesas (
                ID SERIAL PRIMARY KEY,
                NOME VARCHAR(30) NOT NULL,
                OBSERVACAO TEXT,
                VALOR NUMERIC(12,2) DEFAULT 0.00,
                CLASSIFICACAO VARCHAR(30) NOT NULL,
                DATA_DES DATE NOT NULL,
                CRIADO_EM TIMESTAMP DEFAULT NOW(),
                ULTIMA_ATUALIZACAO TIMESTAMP DEFAULT NOW(),
                STATUS status_des DEFAULT 'a pagar'
            );
        `;
        this.conectionDB.query(sqlCommand, (error)=>{
            if (error){
                console.log("Erro ao criar a tabela de Depesas:")
                console.log(error)
                return;
            }
            return
        })
    }
}

module.exports = new tabelaDepesas();