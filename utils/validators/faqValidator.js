const Joi = require('joi');

const add = Joi.object().keys({
    question: Joi.string().required(),
    answer: Joi.string().required()
});

const update = Joi.object().keys({
    question: Joi.string().required(),
    answer: Joi.string().required()
});

exports.faqValidator = {
    add: (data) => Joi.validate(data, add),
    update: (data) => Joi.validate(data, update)
};