const Joi = require('joi');

const add = Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    isbest: Joi.number().required(),
    issale: Joi.number().required(),
    categoryid: Joi.number().required()
});

const update = Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    isbest: Joi.number().required(),
    issale: Joi.number().required(),
    categoryid: Joi.number().required()
});

exports.packageValidator = {
    add: (data) => Joi.validate(data, add),
    update: (data) => Joi.validate(data, update)
};