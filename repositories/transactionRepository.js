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

exports.add = async (data) => {
    const result = await knex.table('Transaction').insert(data);
    return result;
}

exports.update = async (data, id) => {
    await knex('Transaction')
        .where('Id', id)
        .update(data);
}

exports.getById = async (id) => {
    const result = await knex.select('*').from('Transaction').where('Id', id).first();
    return result;
}

exports.getList = async (wheres) => {
    let result = 
        knex.select('*').table('Transaction')
            .where('Testimony', 'LIKE', `%${wheres.search}%`)
            .orderBy('Testimony', 'asc')
            .limit(wheres.limit)
            .offset(wheres.offset);

    return result;
}

exports.getListCount = async (wheres) => {
    let result = 
        knex.select('*').table('Transaction')
            .where('Testimony', 'LIKE', `%${wheres.search}%`)
            .orderBy('Testimony', 'asc');

    return result;
}
module.exports = exports;