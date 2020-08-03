exports.offsetPagination = function (page, limit) {
    const pages = page ? parseInt(page, 10) : 1;
    const limits = limit ? parseInt(limit, 10) : 8;
    let offset = ((pages - 1) * limits);
    offset = offset || 0;
    return offset;
};


module.exports = exports;