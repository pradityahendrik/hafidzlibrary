var express = require('express');
var router = express.Router();
const method = require('../../methods/sliderMethod');
const passport = require('passport');

router.get('/get-all', async (req, res, next) => {
    const result = await method.getAll();
    res.status(result.code).send(result.response);
  })

router.post('/add', passport.authenticate('jwt', { session : false }), async (req, res, next) => {
    const result = await method.add(req);
    res.status(result.code).send(result.response);
})

router.put('/update/:id', passport.authenticate('jwt', { session : false }),async (req, res, next) => {
  const result = await method.update(req);
  res.status(result.code).send(result.response);
})

router.delete('/delete/:id', passport.authenticate('jwt', { session : false }), async (req, res, next) => {
  const result = await method.delete(req);
  res.status(result.code).send(result.response);
})

router.get('/getList', passport.authenticate('jwt', { session : false }), async (req, res, next) => {
  const result = await method.getList(req);
  res.status(result.code).send(result.response);
})


module.exports = router;