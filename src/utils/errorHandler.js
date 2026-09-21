// Classe de erro personalizada
class AppError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}

// Middleware global de tratamento de erros
const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);

    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message
        });
    }

    // Erro de banco de dados
    if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({
            success: false,
            message: 'Registro duplicado no banco de dados'
        });
    }

    // Erro de validação do banco
    if (err.code === 'ER_BAD_NULL_ERROR') {
        return res.status(400).json({
            success: false,
            message: 'Campo obrigatório não preenchido'
        });
    }

    // Erro padrão
    res.status(500).json({
        success: false,
        message: 'Erro interno do servidor'
    });
};

module.exports = {
    AppError,
    errorHandler
};