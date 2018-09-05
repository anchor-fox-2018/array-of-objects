var array = [];
function createObj(name, phase, gender) {
    let objek = {}
    objek.name = name;
    objek.phase = phase;
    objek.gender = gender;
    array.push(objek);
    return objek;
}

createObj("Akbar", 1, "Male");
createObj("Icha", 1, "Female");
createObj("Adhit", 2, "Male");
createObj("Tama", 2, "male");
createObj("Akbar", 1, "Male");
createObj("Rifky", 3, "Male");
console.log(array);

function getData(name) {
    let ojk = {};
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === name) {
            ojk = array[i];
        }
    }
    return ojk;
}

console.log(getData("Icha"));