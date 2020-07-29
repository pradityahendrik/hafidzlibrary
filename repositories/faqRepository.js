const knex = require('../configs/database');

exports.findAll = async () => {
    const result = await knex.select('*').from('FAQ');
    return result;
};

module.exports = exports;