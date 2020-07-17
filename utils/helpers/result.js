exports.response = function (code = 400, message = '', data = null) {
    return {
        code,
        response: {
            message,
            data
        }
    };
};
