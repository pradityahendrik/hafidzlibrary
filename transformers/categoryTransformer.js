const transformer = {};

transformer.categoryList = function (data) {
    return {
        id: data.Id,
        name: data.Name,
        createdTime: data.CreatedTime,
        createdBy: data.CreatedBy,
        updatedTime: data.UpdatedTime,
        updatedBy: data.UpdatedBy,
        total: data.Total
    };
};


module.exports = transformer;