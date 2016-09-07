var http = require('http');
var server = http.creatServer(function(req,res){
    res.write('hello,world');
    res.end();
});
server.listen(3000);
