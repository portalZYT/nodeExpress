var express=require('express'); 
var mysql=require('mysql');
var app =express();
 
//设置跨域访问
app.all('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
   res.header("X-Powered-By",' 3.2.1');
   res.header("Content-Type", "application/json;charset=utf-8");
   next();
});
//配置服务端口
 
var server = app.listen(3000, function () {
 
    var host = server.address().address;
 
    var port = server.address().port;
 
    console.log('开启服务成功',host,port);
})

var connection = mysql.createConnection({      //创建mysql实例
    host:'localhost',
    port:'3306',
    user:'root',
    password:'youtian1994',
    database:'test'
});
connection.connect();
var sql = 'SELECT * FROM stuinfo';
var questions;

 
//写个接口123
app.get('/people',function(req,res){
    connection.query(sql, function (err,result) {
        if(err){
            console.log('连接失败',err.message);
        }
        questions=result;
        res.status(200);
        res.json(questions);
        console.log(result);  //数据库查询结果返回到result中
    });
    
});
 
