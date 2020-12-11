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

transformer.add = function (data, user) {
    return {
        Name: data.name,
        Description: data.description,
        Price: data.price,
        IsBest: data.isbest,
        IsSale: data.issale,
        SalePrice: data.saleprice,
        CategoryId: data.categoryid,
        CreatedBy: user
    }
};

transformer.update = function (data, user) {
    return {
        Name: data.name,
        Description: data.description,
        Price: data.price,
        IsBest: data.isbest,
        IsSale: data.issale,
        SalePrice: data.saleprice,
        CategoryId: data.categoryid,
        UpdatedBy: user,
        UpdatedTime: new Date()
    }
};

module.exports = transformer;