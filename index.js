//Release 0
var arr = [];
function createObj(name,phase,gender){
    arr.push({name,phase,gender});
}
createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');

//console.log(arr);

//Release 1
function getData(name){
    for(let i = 0;i < arr.length;i++){
        if(arr[i].name === name){
            return arr[i];
        }
    }
}
console.log(getData('Icha'));