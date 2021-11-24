const Joi = require('joi')
const validateRequest=require('../_middleware/validate-request')

//validate schema
const signUpSchema=(req, res, next)=> {
    const schema = Joi.object({
        name: Joi.string().required(),
        tel: Joi.string().required(),
        language: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    })
    validateRequest(req, next, schema)
}

const signInSchema=(req, res, next)=> {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    })
    validateRequest(req, next, schema)
}

module.exports={signUpSchema,signInSchema}