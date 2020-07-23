var express = require('express');
var router = express.Router();
const method = require('../../methods/categoryMethod');

router.get('/get-all', async (req, res, next) => {
    const result = await method.getAll();
    res.status(result.code).send(result.response);
  });

  
module.exports = router;