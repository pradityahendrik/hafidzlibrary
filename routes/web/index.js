var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'hafidzlibrary' });
});

router.get('/login', function(req, res, next) {
  res.render('./admin/login', { title: 'hafidzlibrary CMS' });
});

router.get('/admin', function(req, res, next) {
  res.render('./admin/', { title: 'hafidzlibrary CMS' });
});

module.exports = router;
