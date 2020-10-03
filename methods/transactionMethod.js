const Result = require('../utils/helpers/result');
const repo = require('../repositories/transactionRepository');
const transformer = require('../transformers/transactionTransformer');
const ErrorHandler = require('../utils/helpers/errorHandler');
const validator = require('../utils/validators/transactionValidator').transactionValidator;
const Helper = require('../utils/helpers/helper');

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
};

exports.add = async (data) => {
    try {
        await validator.add(data.body).catch((err) => {
            throw ErrorHandler.response(400, err.details[0].message)
        });

        const dataInsert = transformer.add(data.body, data.user.Username);

        await repo.add(dataInsert).catch((err) => {
            throw ErrorHandler.response(400, err.sqlMessage)
        });
        return Result.response(200, 'Berhasil menyimpan data transaksi');
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
        await repo.update(dataUpdate, data.params.id);

        const dataUpdated = await repo.getById(data.params.id);
        return Result.response(200, 'Data berhasil diubah', dataUpdated);
    } catch (error) {
        return Result.response(error.code, error.message);
    }
};

exports.getList = async (data) => {
    try {
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
        let listCount = await repo.getListCount(wheres);

        meta.total_data = listCount.length;
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