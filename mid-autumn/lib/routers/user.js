var router = require('express').Router(),
    userModel = require('../Models/user.js');

//返回全部
router.route('/')
    .get(function(req,res,next){
        res.status(200).send(userModel);
        console.log('做的不错，获取了全部的users信息');
    });

//用户的年龄值

router.route('/avaAvg').get(function(req,res,next){
    var Totalage = 0;
    for(i=0;i<userModel.length;i++){
        Totalage = Totalage+userModel[i].age;
        console.log(Totalage);
    }
    var ageAvg = Totalage/(userModel.length);
    res.status(200).send('用户的平均年龄是：'+ ageAvg +'岁。');
});

//根据ID获得姓名

router.route('/:id').get(function(req,res,next){
    var id = req.params.id;
    if(userModel[id-1]){
        res.status(200).send(userModel[id-1].firstName+''+userModel[id-1].lastame);
    }else{
        res.status(404).send('对不起，你输入的ID被狗吃掉了')
    }
});

//修改年龄

router.route('/:id').put(function(req,res,next){
    var id = req.params.id-1;
    var inputingage = req.body.age;
    var ageNumber = parseInt(inputingage);

    if(userModel[id]){
        if(ageNumber){
            userModel[id].age = ageNumber;
            res.status(200).send(userModel[id]);
        }else{
            res.status(403).send('需要修改age,然后提交数字');
        }
    }else{
        res.status(404).send('对不起，没有这个ID哟')
    }
})
module.exports = router;
