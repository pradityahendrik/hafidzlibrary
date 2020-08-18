const transformer = {};

transformer.add = function (data, user) {
    return {
        Question: data.question,
        Answer: data.answer,
        CreatedBy: user
    }
};

transformer.update = function (data, user) {
    return {
        Question: data.question,
        Answer: data.answer,
        UpdatedBy: user,
        UpdatedDate: new Date()
    }
};

module.exports = transformer;