const Result = require('../utils/helpers/result');

exports.test = async (data) => {
    try {
        const result = data;
        return Result.response(200, 'Berhasil', result);
    } catch (err) {
        return Result.response(err.code, err.message);
    }
};

module.exports = exports;