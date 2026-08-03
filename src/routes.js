const router = require('express').Router()

router.get('/', (req,res) => {
    res.json({message:"pagina inicial"})
})

router.get('/test', (req, res)=>{
    res.json({message:'pagina de teste'})
})

router.post('/create-transaction', (req, res) => {
    const transation = req.body.transation
    const type = req.body.type
    const price = req.body.price
    const category = req.body.category
    const status = req.body.status
    const note = req.body.note
    const data = req.body.data

    res.json({
        movimentacao: `${transation}`,
        tipo: `${type}`,
        preco: `${price}`,
        categoria: `${category}`,
        status: `${status}`,
        observacao: `${note}`,
        data: `${data}`,
    })
})

module.exports = router