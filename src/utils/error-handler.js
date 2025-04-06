const {StatusCodes} =require('http-status-codes');

class AppErrors extends Error{
    constructor(
        name = 'AppError',
        message='Something went wrong',
        explanation='Something went wrong', 
        statusCodes = StatusCodes.INTERNAL_SERVER_ERROR
    ){
        this.message = message,
        this.explanation = explanation,
        this.name = name,
        this.statusCodes = statusCodes
    }
}

module.exports = AppErrors;
