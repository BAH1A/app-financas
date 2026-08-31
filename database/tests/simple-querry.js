const pool = require('../Connection/db');

async function simpleQuery() {
    try{
        const result = await pool.query('SELECT * FROM clientes')
        console.log(result.rows)
    } catch (error){
        console.error(`###FALHAAA###: ${error}`)
    } finally {
        await pool.end()
    }
}

simpleQuery();