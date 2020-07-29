const knex = require('../configs/database');

exports.findAllTestimony = async () => {
    const result = await
        knex.select('T.*', 'P.Name as PackageName')
            .from('Transaction as T')
            .join('Package as P', 'P.Id', 'T.PackageId');
    return result;
};

exports.getTransactionRandom = async () => {
    const result = await
        knex.select('T.*', 'P.Name as PackageName')
            .from('Transaction as T')
            .join('Package as P', 'P.Id', 'T.PackageId')
            .orderByRaw('rand()')
            .limit(1)
            .first();
    return result;
};

module.exports = exports;