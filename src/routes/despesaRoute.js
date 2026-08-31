const Router = require('express').Router;
//ou const { Router } = require('express')

const despesaRoute = Router()

despesaRoute.get('/despesas', ( req, res) => {
    res.send(`Listando despesas`)
})

despesaRoute.post('/nova-despesa', ( req, res) => {
    const { valor } = req.params
    console.log(valor)
    res.send(`Despesa criada, seu valor é de R$ ${valor}.`)
})

despesaRoute.put('/despesas/:id', ( req, res) => {
    const id = req.params.id
    console.log(id)
    res.send(`atualizando a despesa de id ${id}.`)
})

despesaRoute.delete('/despesas/:id', ( req, res) => {
    const id = req.params.id
    console.log(id)
    res.send(`deletando a despesa de id ${id}`)
})

module.exports = despesaRoute