// demo javascript
console.log('hello 世界.');

function myfunction(){
    var x = '', i =0;
    for (i = 0; i<5; i++){
        x = x + 'the number is' + i + '<br>';
    }
    document.getElementById('demo').innerHTML = x;
}