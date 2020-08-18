const knex = require('../configs/database');

exports.findAll = async () => {
    const result = await knex.select('*').from('FAQ');
    return result;
};

exports.add = async (data) => {
    const result = await knex.table('FAQ').insert(data);
    return result;
};

exports.update = async (data, id) => {
    await knex('FAQ')
        .where('Id', id)
        .update(data);
};

exports.getById = async (id) => {
    const result = await knex.table('FAQ').where('Id', id).first();
    return result;
};

exports.delete = async (id) => {
    await knex('FAQ')
        .where('Id', id)
        .del();
};

exports.getList = async (wheres) => {
    let result = 
        knex.select('*').table('FAQ')
        .where((qB) => 
                qB
                .where('Question', 'LIKE', `%${wheres.search}%`)
                .orWhere('Answer', 'LIKE', `%${wheres.search}%`)
        )
        .orderBy('Question', 'ASC')
        .limit(wheres.limit)
        .offset(wheres.offset);

    return result;
};

module.exports = exports;