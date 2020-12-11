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

transformer.add = function (data, user) {
    return {
        Name: data.name,
        CreatedBy: user
    }
};

transformer.update = function (data, user) {
    return {
        Name: data.name,
        UpdatedBy: user,
        UpdatedTime: new Date()
    }
};

module.exports = transformer;