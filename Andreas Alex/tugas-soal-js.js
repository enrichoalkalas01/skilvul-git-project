/*

Kumpulkan Di Sini
Dibuat Folder Sesuai Namanya

*/
// SOAL 1
function penjumlahan(num1, num2) {
    return num1 + num2;
}
const hasil = penjumlahan(3, 2);

function penjumlahan(num1, num2) {
    return num1 + num2;
}
const hasil = penjumlahan(-3, -6);

// SOAL 2

function ageInDays(ageInYears) {
    const daysInYear = 365.25;
    const ageInDays = ageInYears * daysInYear;
    return ageInDays;
}
const ageInYears = 25; 
const ageInDaysResult = ageInDays(ageInYears);
console.log(`Age in days: ${ageInDaysResult}`);

// SOAL 3

function getFirstElement(numbersArray) {
    if (Array.isArray(numbersArray) && numbersArray.length > 0) {
        return numbersArray[0];
    } else {
        return undefined; 
    }
}


const numbers = [10, 20, 30, 40, 50];
const firstNumber = getFirstElement(numbers);
console.log(`The first number is: ${firstNumber}`);

// SOAL 4

function hoursToSeconds(hours) {
    const secondsInHour = 60 * 60; 
    return hours * secondsInHour;
}
const hours = 2; 
const seconds = hoursToSeconds(hours);
console.log(`${hours} hours is equal to ${seconds} seconds.`);

// SOAL 5

function calculateFrames(minutes, fps) {
    const seconds = minutes * 60; 
    const frames = seconds * fps;
    return frames;
}

const minutes = 1;
const fps = 60;  
const totalFrames = calculateFrames(minutes, fps);
console.log(calculateFrames(1, 60))

// SOAL 6
let array = [9, 3, 2, 1, 5, 10, 9, 4, 6, 7];
let hasilFilter = [];

for (let i = 0; i < array.length; i++) {
    for (let a = i + 1; a < array.length; a++) {
        if (array[i] === array[a]) {
            hasilFilter.push(array[i])
        }
    }
}

console.log(hasilFilter);

// SOAL 7
function hitungJumlahArray(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }

    return total;
}

let array = [9, 3, 2, 1, 5, 10, 9, 4, 6, 7];
let hasil = hitungJumlahArray(array);

console.log(hasil); 

// SOAL 8 

let data = [
    { name: 'lisa', age: 20, domisili: 'jakarta' },
    { name: 'andre', age: 23, domisili: 'depok' },
    { name: 'peter', age: 25, domisili: 'depok' },
    { name: 'najwa', age: 21, domisili: 'bogor' },
    { name: 'habib', age: 21, domisili: 'depok' },
    { name: 'jennie', age: 22, domisili: 'jakarta' },
    { name: 'sakura', age: 29, domisili: 'bogor' },
];

function filterDataDepok(data) {
    let hasilFilter = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].domisili === 'depok') {
            hasilFilter.push(data[i]);
        }
    }

    return hasilFilter;
}

let hasilDepok = filterDataDepok(data);
console.log(hasilDepok);


// SOAL 9

let data = [
    { name: 'lisa', age: 20, domisili: 'jakarta' },
    { name: 'andre', age: 23, domisili: 'depok' },
    { name: 'peter', age: 25, domisili: 'depok' },
    { name: 'najwa', age: 21, domisili: 'bogor' },
    { name: 'habib', age: 21, domisili: 'depok' },
    { name: 'jennie', age: 22, domisili: 'jakarta' },
    { name: 'sakura', age: 29, domisili: 'bogor' }
];

function tampilkanData(data) {
    for (let i = 0; i < data.length; i++) {
        console.log(`Nama: ${data[i].name}, Umur: ${data[i].age}, Domisili: ${data[i].domisili}`);
    }
}

tampilkanData(data);
