var express = require('express');
var router = express.Router();
const method = require('../../methods/method');

/* GET home page. */
router.get('/', async (req, res, next) => {
  res.status(200).send('hafidzlibrary-api');
});

router.get('/test/:id', async (req, res, next) => {
  const result = await method.test(req.params);
  res.status(result.code).send(result.response);
});

module.exports = router;
