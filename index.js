//RELEASE 0
const arr = [];
function createObj (name, phase, gender) {
    //code
    let tempObj = {
        name: name,
        phase: phase,
        gender: gender,
    }

    arr.push(tempObj);
}
createObj('Akbar', 1, 'Male');
createObj('Icha', 1, 'Female');
createObj('Adhit', 2, 'Male');
createObj('Tama', 2, 'Male');
createObj('Rizky', 2, 'Male');

console.log(arr);

//RELEASE 1
function getData (name) {
    //code
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === name) {
            return arr[i];
        }
    }
}

console.log('GET DATA || RELEASE 1')
console.log(getData('Icha'));
console.log(getData('Tama'));