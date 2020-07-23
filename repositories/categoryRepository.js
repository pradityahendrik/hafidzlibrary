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

module.exports = exports;