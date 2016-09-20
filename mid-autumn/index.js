
//第一部分 包引入
var app = require('express')();
    bodyParser = require('body-parser');


//中间件
app.use(bodyParser.urlencoded({
    extended:true
}))

//第二部分 路由
app.use('/user',require('./lib/routers/user.js'));
app.use('/album',require('./lib/routers/album.js'));

//第三部分 监听
app.listen('3000',function(){
    console.log('来来来，来一个测试呗')
});
