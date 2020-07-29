const Result = require('../utils/helpers/result');
const repository = require('../repositories/packageRepository');
const transformer = require('../transformers/packageTransformer');

exports.getAll = async () => {
    try {
        let result = await repository.findAll();
        return Result.response(200, 'Berhasil', result);
    } catch (error) {
        return Result.response(error.code, error.message);
    }
}

exports.getById = async (data) => {
    try {
        const packageResult = await repository.findById(data);
        const pictureResult = await repository.findPictureByPackageId(data);
        const tagResult = await repository.findTagByPackageId(data);
        
        var tagArray = [];
        tagResult.forEach(data => {
            tagArray.push(data.TagName)
        })
        var tagStringList = tagArray.join();
        const result = transformer.packageDetail(packageResult, pictureResult, tagStringList);
        return Result.response(200, 'Berhasil', result);
    } catch (error) {
        return Result.response(error.code, error.message);
    }
}

module.exports = exports;