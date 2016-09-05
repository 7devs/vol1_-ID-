// demo javascript
console.log('hello 世界.');

function myfunction(){
    var x = '', i =0;
    for (i = 0; i<5; i++){
        x = x + 'the number is' + i + '<br>';
    }
    document.getElementById('demo').innerHTML = x;
}

//9.1课堂笔记

//var obj = {
//    name:'zengyichao'
//    walk: function(x){
//        console.log('走', x, '分钟.')
//    }
//}
//console.log(obj.name);
//obj.walk(5);

var arr = [0];
for (i=1;i<100;i++){
    arr.push(i)
}
document.write(arr);

//课堂练习

var str = 'hello, world';
var arr = [1,2,3,4];
var arr2 = [7,8,9];
arr.concat(arr2);

