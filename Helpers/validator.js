const Joi = require('joi')
    // Define the validation schema schema

const userSchema = Joi.object({
    username: Joi.string().required(),
    fullname: Joi.string().required(),
    phonenumber: Joi.string().max(13).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string().min(8).required()
});

module.exports = userSchema;