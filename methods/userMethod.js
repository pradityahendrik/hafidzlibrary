const Result = require('../utils/helpers/result');
const userRepo = require('../repositories/userRepository');
const userValidator = require('../utils/validators/userValidator').userValidator;
const ErrorHandler = require('../utils/helpers/errorHandler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (data) => {
    try {
        await userValidator.login(data).catch((err) => {
            throw ErrorHandler.response(400, err.details[0].message);
        });

        const user = await userRepo.login(data);
        if (!user) {
            throw ErrorHandler.response(401, 'User tidak ditemukan');
        }
        
        if (!bcrypt.compareSync(data.password, user.Password)) {
            throw ErrorHandler.response(401, 'Password salah');
        }

        const token = jwt.sign({ username: user.Username }, 'secret');
        const result = {
            token
        };

        return Result.response(200, 'Berhasil', result);
    } catch (err) {
        return Result.response(err.code, err.message);
    }
};

exports.getUser = async (data) => {
    try {
        const result = await userRepo.getUser(data.Username);
        return Result.response(200, 'Berhasil', result);
    } catch (error) {
        return Result.response(error.code, error.message)
    }
};