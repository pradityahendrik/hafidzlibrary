const knex = require('../configs/database');

exports.findAll = async () => {
    const result = await
        knex.select('P.*', 'PP.Id as PictureId', 'PP.Name as PictureName', 'PP.Sequence')
        .from('Package as P')
        .leftJoin('PackagePicture as PP', 'P.Id', 'PP.PackageId');
    return result;
};

module.exports = exports;