const connDatabase = require('../../database/Connection/db.js')

class userRepository {
    async newUser(data) {

        const nome = data.nome
        const sobrenome = data.sobrenome
        const email = data.email
        const senha = data.senha

        const commandSql = `INSERT INTO public.usuarios (nome, sobrenome, email, senha) 
        VALUES ($1, $2, $3, $4) RETURNING *`;

        try {
            const result = await connDatabase.query(commandSql, [nome, sobrenome, email, senha]);
            return result.rows[0];
        }
        catch (error) {
            console.log('Erro ao criar o usuario:');
            console.log(error); throw error;
        }
    }

    async updateNomeCompleto(id, novoNome, novoSobre) {
        if (novoNome == null){
            const sql = `
                UPDATE public.usuarios
                SET sobrenome = $1, ultima_atualizacao = now()
                WHERE id = $2
                RETURNING *
            `;  
            const result = await connDatabase.query(sql, [novoSobre, id]);
            return result.rows[0];
        }

        if (novoSobre == null){
            const sql = `
                UPDATE public.usuarios
                SET nome = $1, ultima_atualizacao = now()
                WHERE id = $2
                RETURNING *
            `;  
            const result = await connDatabase.query(sql, [novoNome, id]);
            return result.rows[0];
        }
        else{
            const sql = `
                UPDATE public.usuarios
                SET nome = $1,sobrenome=$2,ultima_atualizacao = now()
                WHERE id = $3
                RETURNING *
            `;  
            const result = await connDatabase.query(sql, [novoNome, novoSobre, id]);
            return result.rows[0];
        }
    }

    async updateEmail(id, novoEmail){
        if (novoEmail !== null){
            const sql = `
                UPDATE public.usuarios
                SET email = $1, ultima_atualizacao = now()
                WHERE id = $2
                RETURNING *
            `;  
            const result = await connDatabase.query(sql, [novoEmail, id]);
            return result.rows[0];
        }
    }

    async updateSenha(id, novaSenha){
        if (novaSenha !== null){
            const sql = `
                UPDATE public.usuarios
                SET senha = $1, ultima_atualizacao = now()
                WHERE id = $2
                RETURNING *
            `;  
            const result = await connDatabase.query(sql, [novaSenha, id]);
            return result.rows[0];
        }
    }

    async deleteById(id) {
        const sql = `
                DELETE FROM public.usuarios
                WHERE id=$1;
            `;  
            const result = await connDatabase.query(sql, [id]);
            return `usuario com id ${id} foi deletado`;
    }
    async findById(id) {
        //futuro
    }

    async findByEmail(email) {
        //futuro
    }

} module.exports = new userRepository();


// exemplo de uso

  /*const userRepository = require('../src/repository/userRepository.js')

  const jefersonUser = await userRepository.newUser({
    nome: 'jeferson',
    sobrenome: 'ribeiro',
    email: 'jr.maio1999@gmail.com',
    senha: 'senha123'
  });
  console.log(jefersonUser)

  const userName = await userRepository.updateNomeCompleto(8,'Gerferson',null)
  
  console.log(userName)

  const upEmail= await userRepository.updateEmail(8,'gerferson13@gmail.com')
  console.log(upEmail)

  const updateSenha= await userRepository.updateSenha(8,'HouseOfCards')
  console.log(updateSenha)
  
  const deleteUser = await userRepository.deleteById(2)
  console.log(deleteUser)
  */