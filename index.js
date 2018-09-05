var arr = [];
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