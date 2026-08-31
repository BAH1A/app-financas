const Router = require('express').Router;
//ou const { Router } = require('express')

const usuarioRoute = Router()

usuarioRoute.get('/usuarios', ( req, res) => {
    res.send(`Listando despesas`)
})

usuarioRoute.post('/novo-usuario', ( req, res) => {
    const { valor } = req.params
    console.log(valor)
    res.send(`Despesa criada, seu valor é de R$ ${valor}.`)
})

usuarioRoute.put('/usuarios/:id', ( req, res) => {
    const id = req.params.id
    console.log(id)
    res.send(`atualizando a despesa de id ${id}.`)
})

usuarioRoute.delete('/usuarios/:id', ( req, res) => {
    const id = req.params.id
    console.log(id)
    res.send(`deletando a despesa de id ${id}`)
})

module.exports = usuarioRoute