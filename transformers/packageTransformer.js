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
        updatedBy: package.UpdatedBy,
        tag,
        picture
    }; 
};

transformer.list = function (package) {
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
        updatedBy: package.UpdatedBy,
        tag: package.tag,
        pictures: package.pictures
    }
};

module.exports = transformer;