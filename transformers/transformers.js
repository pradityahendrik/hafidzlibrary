const transformer = {};

transformer.test = function (data) {
    return {
        nama: data.name,
        alamat: data.alamat ? data.alamat : '-',
        kode: `${data.id}-apa`
    };
};

module.exports = transformer;