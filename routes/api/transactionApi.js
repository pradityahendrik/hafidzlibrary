var express = require('express');
var router = express.Router();
const method = require('../../methods/transactionMethod');

router.get('/get-allTestimony', async (req, res, next) => {
  const result = await method.getAllTestimony();
  res.status(result.code).send(result.response);
});

router.get('/get-transactionRandom', async (req, res,next) => {
  const result = await method.getTransactionRandom();
  res.status(result.code).send(result.response);
});

module.exports = router;