const knex = require('../configs/database');

exports.findAll = async () => {
    const result = await 
        knex.select('Category.*')
            .count({Total: 'Package.CategoryId'})
            .from('Category')
            .leftJoin('Package', 'Category.Id', 'Package.CategoryId')
            .groupBy('Category.Id'); 
    return result;
};

exports.add = async (data) => {
    const result = await knex.table('Category').insert(data);
    return result;
}

exports.update = async (data, id) => {
    await knex('Category')
        .where('Id', id)
        .update(data);
}

exports.getById = async (id) => {
    const result = await knex.select('*').from('Category').where('Id', id).first();
    return result;
}

exports.delete = async (id) => {
    await knex('Category')
        .where('Id', id)
        .del();
}

exports.getList = async (wheres) => {
    let result = 
        knex.select('*').table('Category')
            .where('Name', 'LIKE', `%${wheres.search}%`)
            .orderBy('Name', 'asc')
            .limit(wheres.limit)
            .offset(wheres.offset);

    return result;
}

exports.getListCount = async (wheres) => {
    let result = 
        knex.select('*').table('Category')
            .where('Name', 'LIKE', `%${wheres.search}%`)
            .orderBy('Name', 'asc');

    return result;
}

module.exports = exports;