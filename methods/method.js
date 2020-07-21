const Result = require('../utils/helpers/result');
const repository = require('../repositories/repository');
const transformer = require('../transformers/transformers');

exports.test = async (data) => {
    try {
        const result = data;
        return Result.response(200, 'Berhasil', result);
    } catch (err) {
        return Result.response(err.code, err.message);
    }
};

exports.getAll = async () => {
    try {
        const result = await repository.findAll();
        const rsss = result.map(transformer.test);
        // const rsss = transformer.test(result);
        return Result.response(200, 'Berhasil', rsss);
    } catch (err) {
        return Result.response(err.code, err.message);
    }
};

module.exports = exports;