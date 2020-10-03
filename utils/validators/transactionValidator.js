const Joi = require('joi');

const add = Joi.object().keys({
    name: Joi.string().required(),
    testimony: Joi.string().required(),
    orderdate: Joi.date().required(),
    packageid: Joi.number().required(),
});

const update = Joi.object().keys({
    name: Joi.string().required(),
    testimony: Joi.string().required(),
    orderdate: Joi.date().required(),
    packageid: Joi.number().required(),
});

exports.transactionValidator = {
    add: (data) => Joi.validate(data, add),
    update: (data) => Joi.validate(data, update)
};