const knex = require('../configs/database');

exports.findAll = async () => {
    const result = await knex.select().table('test');
    return result;
};



module.exports = exports;
