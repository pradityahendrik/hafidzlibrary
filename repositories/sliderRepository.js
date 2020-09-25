const knex = require('../configs/database');

exports.findAll = async () => {
    const result = await 
        knex.select('*')
            .from('Slider'); 
    return result;
};

exports.add = async (data) => {
    const result = await knex.table('Slider').insert(data);
    return result;
};

exports.update = async (data, id) => {
    await knex('Slider')
        .where('Id', id)
        .update(data);
};

exports.getById = async (id) => {
    const result = await knex.table('Slider').where('Id', id).first();
    return result;
};

exports.delete = async (id) => {
    await knex('Slider')
        .where('Id', id)
        .del();
};

exports.getList = async (wheres) => {
    let result = 
        knex.select('*').table('Slider')
        .where('File', 'LIKE', `%${wheres.search}%`)
        .orderBy('File', 'ASC')
        .limit(wheres.limit)
        .offset(wheres.offset);

    return result;
};

module.exports = exports;