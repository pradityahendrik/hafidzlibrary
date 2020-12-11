const knex = require('../configs/database');

exports.login = async (data) => {
    const user = await knex.select('*').from('User').where('Username', data.username).first();
    return user;
};

exports.getUser = async (username) => {
    const user = await knex.select('Username').from('User').where('Username', username).first();
    return user;
};

module.exports = exports;