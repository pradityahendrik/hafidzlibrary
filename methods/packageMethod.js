const Result = require('../utils/helpers/result');
const repository = require('../repositories/packageRepository');
const transformer = require('../transformers/packageTransformer');
const Helper = require('../utils/helpers/helper');
const Promise = require('bluebird');

exports.getAll = async () => {
    try {
        let result = await repository.findAll();
        return Result.response(200, 'Berhasil', result);
    } catch (error) {
        return Result.response(error.code, error.message);
    }
}

exports.getById = async (data) => {
    try {
        const packageResult = await repository.findById(data);
        const pictureResult = await repository.findPictureByPackageId(data);
        const tagResult = await repository.findTagByPackageId(data);
        
        var tagArray = [];
        tagResult.forEach(data => {
            tagArray.push(data.TagName)
        })
        var tagStringList = tagArray.join();
        const result = transformer.packageDetail(packageResult, pictureResult, tagStringList);
        return Result.response(200, 'Berhasil', result);
    } catch (error) {
        return Result.response(error.code, error.message);
    }
}

exports.getList = async (data) => {
    try {
        let wheres = {
            limit: data.query.limit,
            search: data.query.search,
            filter: data.query.filter,
            category: data.query.category
        }

        let meta = {
            page: data.query.page,
            limit: data.query.limit,
            search: data.query.search,
            filter: data.query.filter,
            category: data.query.category
        }

        wheres.offset = Helper.offsetPagination(meta.page, meta.limit);

        let list = await repository.getList(wheres);
        const count = list.length;


        /** get Tags & Pictures */
        let pictureList = await repository.findAllPictures();
        let tagList = await repository.findAllTags();
        
        list.forEach(row => {
            let pictureResult = pictureList.filter(picture => {
                return (picture.PackageId === row.Id) ? picture : false;
            });
            let tagResult = tagList.filter(tag => {
                return (tag.PackageId === row.Id) ? tag : false;
            });

            var tagArray = [];
            tagResult.forEach(data => {
                tagArray.push(data.TagName)
            })
            var tagStringList = tagArray.join();
            
            row.tag = tagStringList;
            row.pictures = pictureResult;
        });
        
        const row = list.map(list => {
            return transformer.list(list);
        });

        meta.total_data = count;
        meta.total_page = Math.ceil(meta.total_data / meta.limit);

        const result = {
            data: row,
            meta
        };
        return Result.response(200, 'Berhasil', result);
    } catch (error) {
        return Result.response(error.code, error.message);
    }
}

module.exports = exports;