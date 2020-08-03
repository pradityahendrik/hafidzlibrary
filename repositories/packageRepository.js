const knex = require('../configs/database');
const { first, where } = require('../configs/database');

exports.findById = async (data) => {
    const result = await 
        knex.select('P.*', 'C.Name as CategoryName')
            .from('Package as P')
            .join('Category as C', 'P.CategoryId', 'C.Id')
            .where('P.Id', data)
            .first();
    return result;
}

exports.findPictureByPackageId = async (data) => {
    const result = await 
        knex.select('Id as PictureId', 'Name as PictureName', 'Sequence')
            .from('PackagePicture')
            .where('PackageId', data);
    return result;
}

exports.findTagByPackageId = async (data) => {
    const result = await 
        knex.select('Id as TagId', 'Name as TagName')
            .from('PackageTag')
            .where('PackageId', data);
    return result;
}

exports.getList = async (wheres) => {
    let result = 
        knex.select('P.*').distinct().table('Package as P')
            .leftJoin('PackageTag as PT', 'P.Id', 'PT.PackageId')
            .where((qB) => 
                qB
                    .where('P.Name', 'LIKE', `%${wheres.search}%`)
                    .orWhere('P.Description', 'LIKE', `%${wheres.search}%`)
                    .orWhere('PT.Name', 'LIKE', `%${wheres.search}%`)
            )
            .orderBy('P.Name', 'asc')
            .limit(wheres.limit)
            .offset(wheres.offset);

    if (wheres.search == '' && wheres.filter == '' && wheres.category == '') {
        result.andWhere((qB) => 
            qB
                .where('P.IsBest', '=', 1)
                .orWhere('P.IsSale', '=', 1)
        );
    }
    if (wheres.filter !== '') {
        if (wheres.filter == 'unggulan') {
            result.andWhere('P.IsBest', '=', 1);
        } else {
            result.andWhere('P.IsSale', '=', 1);
        }
    }
    if (wheres.category !== '') {
        result.andWhere('P.CategoryId', '=', wheres.category);
    }

    return result;
}

exports.findAllPictures = async () => {
    const result = await 
        knex.select('Id as PictureId', 'Name as PictureName', 'Sequence', 'PackageId')
            .from('PackagePicture');
    return result;
}

exports.findAllTags = async () => {
    const result = await 
        knex.select('Id as TagId', 'Name as TagName', 'PackageId')
            .from('PackageTag')
    return result;
}

module.exports = exports;