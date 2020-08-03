var express = require('express');
var router = express.Router();
const userMethod = require('../../methods/userMethod');
const passport = require('passport');

router.post('/login', async (req, res, next) => {
    const result = await userMethod.login(req.body);
    res.status(result.code).json(result.response);
});

router.get('/get-user', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    const result = await userMethod.getUser(req.user);
    res.status(result.code).json(result.response);
});

module.exports = router;