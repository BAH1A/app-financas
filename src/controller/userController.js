const userService = require('../services/userService')
const AppError = require('../utils/errorHandler.js')

class UserControler {
    async create (req, res, next){
        try{
            const userData = req.body
            const createUser = await userService.createUser(userData)
            
            res.status(201).json({
                success: true,
                message: 'User created successfully',
                data: createUser
            })

        }catch (erro){
            next(erro)
        }
    }
    async getById(req, res, next){
        try {
            const { id } = req.params
            const user = await userService.getUserById(Number(id))

            res.status(200).json({
                sucess: true,
                data: user
            })

        } catch (error) {
            next(error)
        }
    }

} module.exports = new UserControler()