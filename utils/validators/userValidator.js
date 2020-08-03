const Joi = require('joi');

const login = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required()
});

exports.userValidator = {
    login: (data) => Joi.validate(data, login)
};
