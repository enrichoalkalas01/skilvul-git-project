console.log("===== Soal 1 =====");
const addition = (a, b) => a + b;
console.log(addition(5, 3)); // Output: 8
console.log(addition(-3, -6)); //Output: -9

console.log("===== Soal 2 =====");
const ageToDay = (age) => {
  const day = 365;
  if (age !== Math.abs(age)) {
    return "Umur tidak boleh negatif";
  }
  return age * day;
}
console.log(ageToDay(25)); // Output: 9125
console.log(ageToDay(-30)); // Output: Umur tidak boleh negatif

console.log("===== Soal 3 =====");
const getFirstValue = (...array) => array[0];
console.log(getFirstValue(1, 2, 3, 4, 5)); // Output: 1
console.log(getFirstValue("a", "b", "c")); // Output: a

console.log("===== Soal 4 =====");
const howManySeconds = (hours) => {
  const minutes = hours * 60;
  const seconds = minutes * 60;
  return seconds;
}
console.log(howManySeconds(2)); // Output: 7200
console.log(howManySeconds(1.5)); // Output: 5400

console.log("===== Soal 5 =====");
const frames = (seconds, frame) => {
  const fps = frame * 60;
  return seconds * fps;
}
console.log(frames(10, 30)); // Output: 18000
console.log(frames(5, 25)); // Output: 7500

console.log("===== Soal 6 =====");
let array = [9, 3, 2, 1, 5, 10, 9, 4, 6, 7];
const filterArray = (arrayData) => {
  let result = [];

  for (let i = 0; i < arrayData.length; i++) {
    for (let j = i + 1; j < arrayData.length; j++) {
      if (arrayData[i] === arrayData[j]) {
        result.push(arrayData[i]);
        result.push(arrayData[j]);
      }
    }
  }

  return result;
}
console.log(filterArray(array)); // Output: [9, 9]

console.log("===== Soal 7 =====");
const arraySum = (arrayData) => {
  let sum = 0;
  for (let i = 0; i < arrayData.length; i++) {
    sum += arrayData[i];
  }

  return sum;
}
console.log(arraySum([1, 2, 3, 4, 5])); // Output: 15

console.log("===== Soal 8 =====");
let data = [
  { name: 'lisa', age: 20, domisili: 'jakarta'},
  { name: 'andre', age: 23, domisili: 'depok'},
  { name: 'peter', age: 25, domisili: 'depok'},
  { name: 'najwa', age: 21, domisili: 'bogor'},
  { name: 'habib', age: 21, domisili: 'depok'},
  { name: 'jennie', age: 22, domisili: 'jakarta'},
  { name: 'sakura', age: 20, domisili: 'bogor'},
]
const filterData = (data) => {
  let filtered = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].domisili === 'depok') {
      filtered.push(data[i]);
    }
  }

  return filtered;
}
console.log(filterData(data));
/* Output:
[
  { name: 'andre', age: 23, domisili: 'depok' },
  { name: 'peter', age: 25, domisili: 'depok' },
  { name: 'habib', age: 21, domisili: 'depok' }
]
*/

console.log("===== Soal 9 =====");
const printData = (data) => {
  let dataContainer = [];
  for (let i = 0; i < data.length; i++) {
    let obj = data[i];
    let values = [];
    values.push(obj.name);
    values.push(obj.age);
    values.push(obj.domisili);
    dataContainer.push(values);
  }

  return dataContainer;
}
console.log(printData(data));
/* Output:
[
  [ 'lisa', 20, 'jakarta' ],
  [ 'andre', 23, 'depok' ],
  [ 'peter', 25, 'depok' ],
  [ 'najwa', 21, 'bogor' ],
  [ 'habib', 21, 'depok' ],
  [ 'jennie', 22, 'jakarta' ],
  [ 'sakura', 20, 'bogor' ]
]
*/
