const Result = require('../utils/helpers/result');
const repo = require('../repositories/faqRepository');

exports.getAll = async () => {
    try {
        const result = await repo.findAll();
        return Result.response(200, 'Berhasil', result);
    } catch (error) {
        console.log(error.message);
        return Result.response(error.code, error.message);
    }
};

module.exports = exports;