var express = require('express');
var router = express.Router();
const method = require('../../methods/transactionMethod');
const passport = require('passport');

router.get('/get-allTestimony', async (req, res, next) => {
  const result = await method.getAllTestimony();
  res.status(result.code).send(result.response);
});

router.get('/get-transactionRandom', async (req, res,next) => {
  const result = await method.getTransactionRandom();
  res.status(result.code).send(result.response);
});

router.post('/add', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
  const result = await method.add(req);
  res.status(result.code).send(result.response);
});

router.put('/update/:id', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
  const result = await method.update(req);
  res.status(result.code).send(result.response);
});

router.get('/getlist', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
  const result = await method.getList(req);
  res.status(result.code).send(result.response);
});

module.exports = router;