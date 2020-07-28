const Result = require('../utils/helpers/result');
const repository = require('../repositories/sliderRepository');
//const transformer = require('../transformers/sliderTransformer');

exports.getAll = async () => {
    try {
        const result = await repository.findAll();
        return Result.response(200, 'Berhasil', result);
    } catch (err) {
        return Result.response(err.code, err.message);
    }
};

module.exports = exports;