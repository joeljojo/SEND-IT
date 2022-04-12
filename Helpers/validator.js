const Joi = require("joi");
// Define the validation schema schema

const userSchema = Joi.object({
  username: Joi.string().required(),
  fullname: Joi.string().required(),
  phonenumber: Joi.string().max(13).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().min(8).required(),
});

const addParcelSchema = Joi.object({
  description: Joi.string().required(),
  sendernumber: Joi.string().required(),
  receivernumber: Joi.string().required(),
  startlocation: Joi.string().required(),
  currentlocation: Joi.string().required(),
  endlocation: Joi.string().required(),
  senderid: Joi.string(),
});

module.exports = { userSchema, addParcelSchema };
