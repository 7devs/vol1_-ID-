var app = require('express')(),
    bodyParser = require('body-Parser'),
    tool = require('./lib/tool.js');

app.use(bodyParser.urlencoded({
    extended:false
}));

app.use('/news',require('./lib/routers/api'));
// app.use('/news',require('./lib/models/news'));
app.use('/*',function(req,res,next){
    res.status(404).send('not found.');
});

app.listen(3000,function(){
    tool.toolTest();
});
