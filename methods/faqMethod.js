const Result = require('../utils/helpers/result');
const repo = require('../repositories/faqRepository');
const validator = require('../utils/validators/faqValidator').faqValidator;
const transformer = require('../transformers/faqTransformer');
const ErrorHandler = require('../utils/helpers/errorHandler');
const Helper = require('../utils/helpers/helper');

exports.getAll = async () => {
    try {
        const result = await repo.findAll();
        return Result.response(200, 'Berhasil', result);
    } catch (error) {
        return Result.response(error.code, error.message);
    }
};

exports.add = async (data) => { /** body, user */
    try {
        /** validator, transform, insert */
        await validator.add(data.body).catch((err) => {
            throw ErrorHandler.response(400, err.details[0].message)
        });

        const dataInsert = transformer.add(data.body, data.user.Username);

        await repo.add(dataInsert).catch((err) => {
            throw ErrorHandler.response(400, err.sqlMessage)
        });

        return Result.response(200, 'Berhasil menyimpan data FAQ');
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

        await repo.update(dataUpdate, data.params.id).catch((err) => {
            throw ErrorHandler.response(400, err.sqlMessage)
        });

        const dataUpdated = await repo.getById(data.params.id);

        return Result.response(200, 'Berhasil mengubah data', dataUpdated);
    } catch (error) {
        return Result.response(error.code, error.message);
    }
};

exports.delete = async (data) => { /** params */
    try {
        await repo.delete(data.params.id);
        return Result.response(200, 'Data berhasil dihapus');
    } catch (error) {
        return Result.response(error.code, error.message);
    }
}

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

        let list = await repo.getList(wheres);
        const count = list.length;

        meta.total_data = count;
        meta.total_page = Math.ceil(meta.total_data / meta.limit);

        result = {
            data: list,
            meta
        };

        return Result.response(200, 'Berhasil', result);
    } catch (error) {
        return Result.response(error.code, error.message);
    }
} 
module.exports = exports;