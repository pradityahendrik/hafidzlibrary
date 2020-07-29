const Result = require('../utils/helpers/result');
const repo = require('../repositories/transactionRepository');

exports.getAllTestimony = async () => {
    try {
        const result = await repo.findAllTestimony();
        return Result.response(200, 'Berhasil', result);
    } catch (err) {
        return Result.response(err.code, err.message);
    } 
};

exports.getTransactionRandom = async () => {
    try {
        const result = await repo.getTransactionRandom();
        return Result.response(200, 'Berhasil', result);
    } catch (error) {
        return Result.response(error.code, error.message);
    }
}
module.exports = exports;