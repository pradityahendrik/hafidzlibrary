const Result = require('../utils/helpers/result');
const repository = require('../repositories/repository');

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
        return Result.response(200, 'Berhasil', result);
    } catch (err) {
        return Result.response(err.code, err.message);
    }
};

module.exports = exports;