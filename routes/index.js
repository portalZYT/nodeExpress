var express = require('express');
var router = express.Router();
router.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});//设置允许跨域访问
/* GET home page. */
router.get('/', function (req, res, next) {
    // var test=`<div><hr/>这是GET home page<h2>dddddddddddddddddddd</h2></div>`;
    res.render('index', {title: 89899898});
});

module.exports = router;
