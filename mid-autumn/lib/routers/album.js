var router = require('express').Router(),
    albumModel = require('../models/album.js');

//返回所有专辑
router.route('/').get(function(req,res,next){
    res.status(200).send(albumModel);
});

//返回指定索引的唱片数据

router.route('/:id').get(function(req,res,next){
    var id = req.params.id-1;
    if(albumModel[id]){
        res.status(200).send(album[id])
    }else{
        res.status(404).send('你找的歌曲不存在哟')
    }
});

//修改指定唱片的时长并返回
router.route('/:id').put(function(req,res,next){
    var id = req.params.id-1;
    var newLength = parseInt(req.body.length);
    var newTitle = req.body.title;

    if(albumModel[id]){
        if(newLength){
            albumModel[id].length = newLength;
            res.status(200).send(albumModel[id]);
        }else{
            res.status(404).send('请输入数字哟')
        }
    }else{
        res.status(404).send('对不起，木有找到你想找的东西')
    }
});

//返回歌唱时间大于三分钟的歌曲
router.route('/longerSong').get(function(req,res,next){
    var songList = [];
    for(i=0;i<albumModel[i].length;i++){
        var minLength = albumModel[i].length/60;
        if(minLength > 3){
            songList = songList.concat(albumModel[i]);
        }
    }
    res.status(200).send(songList);
});

router.route('/singer/:name').get(function(req,res,next){
  var singerName = req.params.name;
  var hisSong = [];
  for (i=0; i<albumModel.length; i=i+1){
    if (albumModel[i].singer === singerName){
      hisSong = hisSong.concat(albumModel[i]);
    }
  }


  if (hisSong.length===0){
    res.status(404).send('没有这个歌手记录');
  } else {
    res.status(200).send(hisSong);
  }

});

//获取指定分类下的歌曲列表
router.route('/search').get(function(req,res,next){
  var type = req.query.type;
  var thisType = [];
  //console.log(type);
  for (i=0; i<albumModel.length; i=i+1){
    if(type===albumModel[i].type){
      thisType = thisType.concat(albumModel[i]);
    }
  }

  if (thisType.length===0){
    res.status(404).send('木有这个类型');
  } else {
    res.status(200).send(thisType);
  }
});

module.exports = router;
