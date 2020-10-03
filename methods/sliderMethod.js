const Result = require('../utils/helpers/result');
const repository = require('../repositories/sliderRepository');
const validator = require('../utils/validators/sliderValidator').sliderValidator;
const transformer = require('../transformers/sliderTransformer');
const ErrorHandler = require('../utils/helpers/errorHandler');
const Helper = require('../utils/helpers/helper');

exports.getAll = async () => {
    try {
        const result = await repository.findAll();
        return Result.response(200, 'Berhasil', result);
    } catch (err) {
        return Result.response(err.code, err.message);
    }
};

exports.add = async (data) => { /** body, user */
    try {
        /** validator, transform, insert */
        await validator.add(data.body).catch((err) => {
            throw ErrorHandler.response(400, err.details[0].message)
        });

        const dataInsert = transformer.add(data.body, data.user.Username);

        await repository.add(dataInsert).catch((err) => {
            throw ErrorHandler.response(400, err.sqlMessage)
        });

        return Result.response(200, 'Berhasil menyimpan data slider');
    } catch (error) {
        return Result.response(error.code, error.message);
    }
};

exports.update = async (data) => { /** body, user, params */
    try {
        /** validator, transform, update, data updated */
        await validator.update(data.body).catch((err) => {
            throw ErrorHandler.response(400, err.details[0].message);
        })

        const dataUpdate = transformer.update(data.body, data.user.Username);

        await repository.update(dataUpdate, data.params.id).catch((err) => {
            throw ErrorHandler.response(400, err.sqlMessage)
        });

        const dataUpdated = await repository.getById(data.params.id);

        return Result.response(200, 'Berhasil mengubah data', dataUpdated);
    } catch (error) {
        return Result.response(error.code, error.message);
    }
};

exports.delete = async (data) => { /** params */
    try {
        await repository.delete(data.params.id);
        return Result.response(200, 'Data berhasil dihapus');
    } catch (error) {
        return Result.response(error.code, error.message);
    }
};

exports.getList = async (data) => { /** query: page, limit, search */
    try {
        let result = '';

        let wheres = {
            limit: data.query.limit,
            search: data.query.search
        }

        let meta = {
            page: data.query.page,
            limit: data.query.limit,
            search: data.query.search
        }

        wheres.offset = Helper.offsetPagination(meta.page, meta.limit);

        let list = await repository.getList(wheres);
        const count = await repository.getListCount(wheres);

        meta.total_data = count.length;
        meta.total_page = Math.ceil(meta.total_data / meta.limit);

        result = {
            data: list,
            meta
        };

        return Result.response(200, 'Berhasil', result);
    } catch (error) {
        return Result.response(error.code, error.message);
    }
};

module.exports = exports;