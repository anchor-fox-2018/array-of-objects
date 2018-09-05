//Release 0
var arr = [];
function createObj (name, phase, gender){
    let obj = {
        name : name,
        phase: phase,
        gender: gender
    }
    arr.push(obj);
    return arr;
}

console.log(createObj('Akbar', 1, 'male'));
console.log(createObj('Ica', 1, 'female'));
console.log(createObj('Wika', 2, 'male'));

// Release 1
function getData (name){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].name == name){
            return arr[i]
        }
    }
}

console.log(getData('Ica'));