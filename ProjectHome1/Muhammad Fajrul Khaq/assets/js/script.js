// Soal 1 ( Return the Sum of Two Numbers )

function sum(a, b) {
  return a + b;
}

console.log(sum(-3, -6));

// Soal 2 ( Convert Age to Days )

function ageInDay(age) {
  return age * 360;
}

console.log(ageInDay(21));

//  Soal 3 ( Return the First Element in an Array )
let sports = ["football", "basketball", "golf"];
let myArray = [1, 2, 3];
let merekHp = ["samsung", "poco", "iphone", "nokia"];

function firstElement(arr) {
  return arr[2];
}

console.log(firstElement(sports));
console.log(firstElement(myArray));
console.log(firstElement(merekHp));

//  Soal 4 ( Convert Hours into Seconds )

// Cara 1
let SecondInHour = 3600;

function hoursInSecond(hour) {
  if (hour < 0) {
    return "err";
  } else {
    return hour * SecondInHour;
  }
}

console.log(hoursInSecond(24));

// Cara 2
function hoursInSecond(hour) {
  return hour * 3600;
}

console.log(hoursInSecond(10));

//  Soal 5 ( Frames Per Second )

// Cara 1
function framesPerSecond(menit, frame) {
  return menit * frame * 60;
}

console.log(framesPerSecond(10, 25));

// Cara 2
function framesPerSecond(menit, frame) {
  if (frame < 0) {
    return "err";
  } else {
    return menit * frame * 60;
  }
}
console.log(framesPerSecond(10, 25));

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

// Soal 9 ( Buatkan function untuk menampilkan data dibawah ini )

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
