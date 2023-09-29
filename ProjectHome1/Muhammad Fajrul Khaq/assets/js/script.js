// Soal 1

let numA = 2;
let numB = 3;

function sum(a, b) {
  let c = a + b;
  return c;
}
console.log(sum(2, 3));

// Soal 2
let dayInAYear = 365;

function ageInADay(age) {
  if (age < 0) {
    return "Age Wrong";
  } else return dayInAYear * age;
}

console.log(ageInADay(21));

// Soal 3
let = myArray = [1, 2, 3];
let firstElement = getFirstValue(myArray);

function getFirstValue(arr) {
  if (arr.length > 0) {
    return arr[0];
  } else {
    return undefined;
  }
}

console.log(firstElement);

// Soal 4

function jamKeDetik(jam) {
  return jam * 3600;
}

const jumlahJam = 5;
const jumlahDetik = jamKeDetik(jumlahJam);
console.log(`${jumlahJam} jam sama dengan ${jumlahDetik} detik.`);

// Soal 5

function frames(minutes, fps) {
  return minutes * fps * 60;
}

console.log(frames(1, 1));

// Soal 6

const array = [9, 3, 2, 1, 5, 10, 9, 4, 6, 7];
const filteredArray = filterSameValues(array);

function filterSameValues(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    if (arr.indexOf(currentValue) !== arr.lastIndexOf(currentValue)) {
      result.push(currentValue);
    }
  }
  return result;
}

console.log(filteredArray);

// Soal 7

// let array = [9, 3, 2, 1, 5, 10, 9, 4, 6, 7];
let jumlah = 0;

for (let i = 0; i < array.length; i++) {
  jumlah += array[i];
}

console.log(jumlah);

// Soal 8

// let data = [
//   { name: "lisa", age: 20, domisili: "jakarta" },
//   { name: "andre", age: 20, domisili: "depok" },
//   { name: "peter", age: 20, domisili: "depok" },
//   { name: "lisa", age: 20, domisili: "bogor" },
//   { name: "habib", age: 20, domisili: "depok" },
//   { name: "lisa", age: 20, domisili: "jakarta" },
//   { name: "lisa", age: 20, domisili: "bogor" },
// ];

function filterDomisiliDepok(data) {
  return data.filter((item) => item.domisili === "depok");
}

const filteredData = filterDomisiliDepok(data);
console.log(filteredData);

// Soal 9

// Buatkan function untuk menampilkan data dibawah ini

let data = [
  { name: "lisa", age: 20, domisili: "jakarta" },
  { name: "andre", age: 20, domisili: "depok" },
  { name: "peter", age: 20, domisili: "depok" },
  { name: "lisa", age: 20, domisili: "bogor" },
  { name: "habib", age: 20, domisili: "depok" },
  { name: "lisa", age: 20, domisili: "jakarta" },
  { name: "lisa", age: 20, domisili: "bogor" },
];

function tampilkanData(data) {
  for (let i = 0; i < data.length; i++) {
    console.log(
      `Nama: ${data[i].name}, Umur: ${data[i].age}, Domisili: ${data[i].domisili}`
    );
  }
}

tampilkanData(data);
