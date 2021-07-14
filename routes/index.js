var express = require('express');
var router = express.Router();
var article = require('./mysql/handel/article');
var localData = require('./local/index');
/* mysql */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SQL for MySQL' });
});
router.post('/mysql/add', function(req, res, next) {
    article.add(req, res, next);
});
router.get('/mysql/query/:id', function(req, res, next) {
    article.queryById(req, res, next);
});
router.delete('/mysql/delete/:id', function(req, res, next) {
    article.delete(req, res, next);
});
router.put('/mysql/update/:id', function(req, res, next) {
    article.update(req, res, next);
});
router.get('/mysql/queryByPage', function(req, res, next) {
    article.queryByPage(req, res, next);
});
/* local */
router.get('/local/getBaseData', function(req, res, next) {
    localData.getBaseData(req, res, next);
});
router.post('/local/add', function(req, res, next) {
    localData.add(req, res, next);
});
router.get('/local/query/:id', function(req, res, next) {
    localData.queryById(req, res, next);
});
router.delete('/local/delete/:id', function(req, res, next) {
    localData.delete(req, res, next);
});
router.put('/local/update/:id', function(req, res, next) {
    localData.update(req, res, next);
});
router.get('/local/queryByPage', function(req, res, next) {
    localData.queryByPage(req, res, next);
});
module.exports = router;