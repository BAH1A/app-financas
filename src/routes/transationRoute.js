const Router = require('express').Router;
//ou const { Router } = require('express')

const transationRoute = Router()

transationRoute.get('/transations', ( req, res) => {
    res.send(`Listando movimentações`)
})

transationRoute.post('/create-transation', ( req, res) => {
    const { valor } = req.params
    console.log(valor)
    res.send(`Movimentacao criada, seu valor é de R$ ${valor}.`)
})

transationRoute.put('/transacoes/:id', ( req, res) => {
    const id = req.params.id
    console.log(id)
    res.send(`atualizando a movimentacao de id ${id}.`)
})

transationRoute.delete('/transacoes/:id', ( req, res) => {
    const id = req.params.id
    console.log(id)
    res.send(`deletando a movimentacao de id ${id}`)
})

module.exports = transationRoute