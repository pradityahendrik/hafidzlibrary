const transformer = {};

transformer.packageDetail = function (package, picture, tag) {
    return {
        id: package.Id,
        name: package.Name,
        description: package.Description,
        price: package.Price,
        isBest: package.IsBest,
        isSale: package.IsSale,
        salePrice: package.SalePrice,
        categoryId: package.CategoryId,
        categoryName: package.CategoryName,
        createdTime: package.CreatedTime,
        createdBy: package.CreatedBy,
        updatedTime: package.UpdatedTime,
        upeatedBy: package.UpdatedBy,
        tag,
        picture
    }; 
};

module.exports = transformer;