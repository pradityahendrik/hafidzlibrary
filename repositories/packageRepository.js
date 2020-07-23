const knex = require('../configs/database');
const { first } = require('../configs/database');

exports.findAll = async () => {
    const result = await
        knex.select('P.*', 'PP.Id as PictureId', 'PP.Name as PictureName', 'PP.Sequence')
            .from('Package as P')
            .leftJoin('PackagePicture as PP', 'P.Id', 'PP.PackageId');
    return result;
};

exports.findById = async (data) => {
    const result = await 
        knex.select('*')
            .from('Package')
            .where('Id', data)
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

module.exports = exports;