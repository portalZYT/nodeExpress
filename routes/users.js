var express = require('express');
var router = express.Router();
var fs = require('fs');
var PATH = './public/images/';
var PATHJSON = './public/data/';

router.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});//设置允许跨域访问

// 读取数据文件
ReadImageFile = () => new Promise((resolve, reject) => {
    fs.readFile(PATHJSON + 'imagelist.json', function (err, data) {
        if (err) {
            reject(err)
        }
        resolve(data)
    })
});


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/images', function (req, res) {
    ReadImageFile().then((data) => {
        res.send(data);
    })
});

module.exports = router;
