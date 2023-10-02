//soal no.1
// function addition(a, b) {
//   return a + b;
// }

// console.log(addition(3, 2));
// console.log(addition(-3, -6));
// console.log(addition(7, 3));

//soal no.2
// function calcAge(age) {
//   if (age < 0) {
//     return "Tidak Mungkin";
//   } else {
//     return age * 365;
//   }
//   //   return Math.abs(age * 365);
// }

// console.log(calcAge(65));
// console.log(calcAge(0));
// console.log(calcAge(20));

//soal no.3
// function getFirstValue(a) {
//   return a[0];
// }

// console.log(getFirstValue([1, 2, 3]));
// console.log(getFirstValue([80, 70, 60]));
// console.log(getFirstValue([-300, 20, 0]));

//soal no.4
// function hoursToSecond(hours) {
//   return hours * 60 * 60;
// }

// console.log(hoursToSecond(2));
// console.log(hoursToSecond(10));
// console.log(hoursToSecond(24));

//soal no.5
// function frames(x, y) {
//   return x * y * 60;
// }

// console.log(frames(1, 1));
// console.log(frames(10, 1));
// console.log(frames(10, 25));

//soal no.6
let nilai = [9, 3, 2, 1, 5, 10, 9, 4, 6, 7]; // expected output [9,9]

function checkSameNumber(array) {
  let sameValue = [];
  for (let numberValue = 0; numberValue < array.length; numberValue++) {
    for (let checkNumber = 0; checkNumber < array.length; checkNumber++) {
      if (numberValue !== checkNumber) {
        if (array[numberValue] === array[checkNumber]) {
          sameValue.push(array[numberValue]);
        }
      }
    }
  }
  return sameValue;
}

console.log(checkSameNumber(nilai));

//soal no.7
// let nilai = [9, 3, 2, 1, 5, 10, 9, 4, 6, 7]; //56

// function sumArray(array) {
//   let sumNilai = 0;
//   for (let i = 0; i < array.length; i++) {
//     sumNilai = sumNilai + array[i];
//   }
//   return sumNilai;
// }
// console.log(sumArray(nilai));

//soal no.8
// data untuk soal no.8 dan 9
let data = [
  { nama: "lisa", age: 20, domisili: "jakarta" },
  { nama: "andre", age: 23, domisili: "depok" },
  { nama: "peter", age: 25, domisili: "depok" },
  { nama: "najwa", age: 21, domisili: "bogor" },
  { nama: "habib", age: 21, domisili: "depok" },
  { nama: "jennie", age: 22, domisili: "jakarta" },
  { nama: "sakura", age: 20, domisili: "bogor" },
];

// for (let index = 0; index < data.length; index++) {
//   if (data[index].domisili == "depok") {
//     console.log(data[index]);
//   }
// }

// function filterDataObject(object) {
//   for (let index = 0; index < object.length; index++) {
//     if (object[index].domisili == "depok") {
//       console.log(object[index]);
//     }
//   }
// }

// filterDataObject(data);

//soal no.9
// function tampilData(object) {
//   for (let i = 0; i < object.length; i++) {
//     // dataArray = [];
//     // dataArray.push(object[i].nama);
//     // dataArray.push(object[i].age);
//     // dataArray.push(object[i].domisili);
//     // console.log(dataArray);

//     console.log("Nilai Data Objek ke - " + i);
//     console.log(object[i].nama);
//     console.log(object[i].age);
//     console.log(object[i].domisili);
//   }
// }

// tampilData(data);
