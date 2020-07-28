const knex = require('../configs/database');

exports.findAll = async () => {
    const result = await 
        knex.select('*')
            .from('Slider'); 
    return result;
};

module.exports = exports;