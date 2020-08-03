exports.response = function (code = 500, message = '') {
    throw {
        code,
        message
    };
};