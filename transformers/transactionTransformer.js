const transformer = {};

transformer.packageDetail = function (transaction, package) {
    return {
        id: transaction.Id,
        name: transaction.Name,
        testimony: transaction.Testimony,
        orderDate: transaction.OrderDate,
        packageName: package.Name,
        createdTime: transaction.CreatedTime,
        createdBy: transaction.CreatedBy,
        updatedTime: transaction.UpdatedTime,
        upeatedBy: transaction.UpdatedBy
    };
};

module.exports = transformer;