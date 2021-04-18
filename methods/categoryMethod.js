const Result = require('../utils/helpers/result');
const repository = require('../repositories/categoryRepository');
const transformer = require('../transformers/categoryTransformer');
const ErrorHandler = require('../utils/helpers/errorHandler');
const validator = require('../utils/validators/categoryValidator').categoryValidator;
const Helper = require('../utils/helpers/helper');

exports.getAll = async () => {
    try {
        let result = await repository.findAll();
        result = result.map(transformer.categoryList);
        return Result.response(200, 'Berhasil', result);
    } catch (err) {
        return Result.response(err.code, err.message);
    }
};

exports.add = async (data) => {
    try {
        await validator.add(data.body).catch((err) => {
            throw ErrorHandler.response(400, err.details[0].message)
        });
        const dataInsert = transformer.add(data.body, data.user.Username);

        await repository.add(dataInsert).catch((err) => {
            throw ErrorHandler.response(400, err.sqlMessage)
        });
        return Result.response(200, 'Berhasil menyimpan data kategori');
    } catch (error) {
        return Result.response(error.code, error.message);
    }
};

exports.update = async (data) => {
    try {
        await validator.update(data.body).catch((err) => {
            throw ErrorHandler.response(400, err.details[0].message);
        });

        const dataUpdate = transformer.update(data.body, data.user.Username);
        await repository.update(dataUpdate, data.params.id);

        const dataUpdated = await repository.getById(data.params.id);
        return Result.response(200, 'Data berhasil diubah', dataUpdated);
    } catch (error) {
        return Result.response(error.code, error.message);
    }
};

exports.delete = async (data) => {
    try {
        await repository.delete(data.params.id);
        return Result.response(200, 'Data berhasil dihapus');
    } catch (error) {
        return Result.response(error.code, error.message);
    }
};

exports.getList = async (data) => { /** query: page, limit, search  */
    try {
        let wheres = {
            page: data.query.page || 1,
            limit: data.query.limit || 10,
        }

        if (data.query.search) wheres.search = data.query.search;

        let meta = {
            page: wheres.page,
            limit: wheres.limit,
        }

        wheres.offset = Helper.offsetPagination(meta.page, meta.limit);

        let list = await repository.getList(wheres);
        let listCount = await repository.getListCount(wheres);

        meta.total_data = listCount.length - 1;
        meta.total_page = Math.ceil(meta.total_data / meta.limit);

        const result = {
            data: list,
            meta
        };
        return Result.response(200, 'Berhasil', result);
    } catch (error) {
        return Result.response(error.code, error.message);
    }
};

module.exports = exports;