( async () => {
    
    const database = require('./db');
    const ProdutoTest = require('./produtotest');
    await database.sync();

    /*const novoProduto = await ProdutoTest.create({
        nome: "Macarrao",
        preco: 5
    })*/
    const produtos = await ProdutoTest.findAll();
    console.log(produtos)
})();

/*reference: https://www.youtube.com/watch?v=g5ij7NIPR2s