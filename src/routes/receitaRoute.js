const Router = require('express').Router;
//ou const { Router } = require('express')

const receitaRoute = Router()

receitaRoute.get('/receitas', ( req, res) => {
    res.send(`Listando receitas`)
})

receitaRoute.post('/nova-receita', ( req, res) => {
    const { valor } = req.params
    console.log(valor)
    res.send(`Receita criada, seu valor é de R$ ${valor}.`)
})

receitaRoute.put('/receitas/:id', ( req, res) => {
    const id = req.params.id
    console.log(id)
    res.send(`atualizando a receita de id ${id}.`)
})

receitaRoute.delete('/receitas/:id', ( req, res) => {
    const id = req.params.id
    console.log(id)
    res.send(`deletando a receita de id ${id}`)
})

module.exports = receitaRoute