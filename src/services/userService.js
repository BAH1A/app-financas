const userRepository = require('../repository/userRepository.js')
const AppError = require('../utils/errorHandler.js')

class UserService {
    async createUser (userData){
        const nome = userData.nome
        const sobrenome = userData.sobrenome
        const email = userData.email
        const senha = userData.senha

        //Validações
        if (!nome || nome.length < 3){
            throw new AppError('Nome deve ter pelo menos 3 caracteres')
        }
        if (!email || !email.includes('@')){
            throw new AppError('Email inválido', 400)
        }
        const userToCreate = {
            nome: nome.trim(),
            sobrenome: sobrenome.trim(),
            email: email.toLowerCase().trim(),
            senha: senha
        };
        const createUser = await userRepository.createUser(userToCreate)
        return createUser
    }
    async getUserById(id){
        const user = await userRepository.getUserById(id)
        if (!user){
            throw new AppError('Usuário não encontrado', 404)
        }
        return user;
    }

} module.exports = new UserService();