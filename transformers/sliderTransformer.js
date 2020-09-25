const transformer = {};

transformer.add = function (data, user) {
    return {
        File: data.file,
        IsActive: data.isActive,
        IsHighlight: data.isHighlight,
        CreatedBy: user
    }
};

transformer.update = function (data, user) {
    return {
        File: data.file,
        IsActive: data.isActive,
        IsHighlight: data.isHighlight,
        UpdatedBy: user,
        UpdatedDate: new Date()
    }
};

module.exports = transformer;