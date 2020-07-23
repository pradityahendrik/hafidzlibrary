const Result = require('../utils/helpers/result');
const repository = require('../repositories/packageRepository');
//const transformer = require('../transformers/packageTransformer');

exports.getAll = async () => {
    try {
        let result = await repository.findAll();
        return Result.response(200, 'Berhasil', result);
    } catch (error) {
        console.log(error);
        return Result.response(error.code, error.message);
    }
}


module.exports = exports;