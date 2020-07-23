const Result = require('../utils/helpers/result');
const repository = require('../repositories/categoryRepository');
const transformer = require('../transformers/categoryTransformer');


exports.getAll = async () => {
    try {
        let result = await repository.findAll();
        result = result.map(transformer.categoryList);
        return Result.response(200, 'Berhasil', result);
    } catch (err) {
        console.log(err)
        return Result.response(err.code, err.message);
    }
};

module.exports = exports;