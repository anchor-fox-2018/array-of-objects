var arr = [];
function createObj(name, phase, gender) {
  let object = {
    name: name,
    phase: phase,
    gender: gender
  };
  arr.push(object)
}
createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');

console.log(arr);
