/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

start ()

function start() {
  let keys = showObjectKeys(audi)
  console.log(keys);
}

function showObjectKeys(data) {
  return Object.keys(data)
}
