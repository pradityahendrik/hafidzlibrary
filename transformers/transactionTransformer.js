const transformer = {};

// transformer.packageDetail = function (transaction, package) {
//     return {
//         id: transaction.Id,
//         name: transaction.Name,
//         testimony: transaction.Testimony,
//         orderDate: transaction.OrderDate,
//         packageName: package.Name,
//         createdDate: transaction.CreatedDate,
//         createdBy: transaction.CreatedBy,
//         updatedDate: transaction.UpdatedDate,
//         upeatedBy: transaction.UpdatedBy
//     };
// };

transformer.add = function (data, user) {
    return {
        Name: data.name,
        Testimony: data.testimony,
        OrderDate: data.orderdate,
        PackageId: data.packageid,
        CreatedBy: user
    }
};

transformer.update = function (data, user) {
    return {
        Name: data.name,
        Testimony: data.testimony,
        OrderDate: data.orderdate,
        PackageId: data.packageid,
        UpdatedBy: user,
        UpdatedDate: new Date()
    }
};

module.exports = transformer;