const Joi = require('joi');

const add = Joi.object().keys({
    file: Joi.string().required()
});

const update = Joi.object().keys({
    file: Joi.string().required()
});

exports.sliderValidator = {
    add: (data) => Joi.validate(data, add),
    update: (data) => Joi.validate(data, update)
};