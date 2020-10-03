const knex = require('../configs/database');
const { first, where, count } = require('../configs/database');

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
    let data = 
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
        data.andWhere((qB) => 
            qB
                .where('P.IsBest', '=', 1)
                .orWhere('P.IsSale', '=', 1)
        );
    }
    if (wheres.filter !== '') {
        if (wheres.filter == 'unggulan') {
            data.andWhere('P.IsBest', '=', 1);
        } else {
            data.andWhere('P.IsSale', '=', 1);
        }
    }
    if (wheres.category !== '') {
        data.andWhere('P.CategoryId', '=', wheres.category);
    }

    return data;
}

exports.getListCount = async (wheres) => {
    let data = 
        knex.select('P.*').distinct().table('Package as P')
            .leftJoin('PackageTag as PT', 'P.Id', 'PT.PackageId')
            .where((qB) => 
                qB
                    .where('P.Name', 'LIKE', `%${wheres.search}%`)
                    .orWhere('P.Description', 'LIKE', `%${wheres.search}%`)
                    .orWhere('PT.Name', 'LIKE', `%${wheres.search}%`)
            )
            .orderBy('P.Name', 'asc');

    if (wheres.search == '' && wheres.filter == '' && wheres.category == '') {
        data.andWhere((qB) => 
            qB
                .where('P.IsBest', '=', 1)
                .orWhere('P.IsSale', '=', 1)
        );
    }
    if (wheres.filter !== '') {
        if (wheres.filter == 'unggulan') {
            data.andWhere('P.IsBest', '=', 1);
        } else {
            data.andWhere('P.IsSale', '=', 1);
        }
    }
    if (wheres.category !== '') {
        data.andWhere('P.CategoryId', '=', wheres.category);
    }

    return data;    
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

exports.add = async (data) => {
    const result = await knex.table('Package').insert(data);
    return result;
}

exports.update = async (data, id) => {
    await knex('Package')
        .where('Id', id)
        .update(data);
}

exports.getById = async (id) => {
    const result = await knex.select('*').from('Package').where('Id', id).first();
    return result;
}

module.exports = exports;