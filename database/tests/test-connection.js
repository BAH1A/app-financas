const conectionDB = require('../Connection/db.js');

async function testConnection() {
    try {
        const result = await conectionDB.query('SELECT NOW()');

        console.log('Banco conectado!');
        console.log(result.rows[0]);
    } catch (error) {
        console.error('Erro ao conectar:', error);
    } finally {
        await pool.end();
    }
}

testConnection();