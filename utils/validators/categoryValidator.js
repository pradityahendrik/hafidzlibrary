const Joi = require('joi');

const add = Joi.object().keys({
    name: Joi.string().required()
});

const update = Joi.object().keys({
    name: Joi.string().required()
});

exports.categoryValidator = {
    add: (data) => Joi.validate(data, add),
    update: (data) => Joi.validate(data, update)
};
