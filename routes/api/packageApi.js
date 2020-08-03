var express = require ('express');
var router = express.Router();
const method = require('../../methods/packageMethod');

router.get('/get-all', async (req, res, next) => {
  const result = await method.getAll();
  res.status(result.code).send(result.response);
});

router.get('/get-byId/:id', async (req, res, next) => {
  const result = await method.getById(req.params.id);
  res.status(result.code).send(result.response);
})

router.get('/get-list', async (req, res, next) => {
  const result = await method.getList(req);
  res.status(result.code).send(result.response);
})
  
module.exports = router;