/*

Kumpulkan Di Sini
Dibuat Folder Sesuai Namanya

*/
// RETURN OF THE NUMBER
function penjumlahan(num1, num2) {
    return num1 + num2;
}
const hasil = penjumlahan(3, 2);

function penjumlahan(num1, num2) {
    return num1 + num2;
}
const hasil = penjumlahan(-3, -6);

//CONVERT AGE TO DAYS

function ageInDays(ageInYears) {
    const daysInYear = 365.25;
    const ageInDays = ageInYears * daysInYear;
    return ageInDays;
}
const ageInYears = 25; 
const ageInDaysResult = ageInDays(ageInYears);
console.log(`Age in days: ${ageInDaysResult}`);

//return the first element in a aray

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

// convert hours into second

function hoursToSeconds(hours) {
    const secondsInHour = 60 * 60; 
    return hours * secondsInHour;
}
const hours = 2; 
const seconds = hoursToSeconds(hours);
console.log(`${hours} hours is equal to ${seconds} seconds.`);

// frames per second 

function calculateFrames(minutes, fps) {
    const seconds = minutes * 60; 
    const frames = seconds * fps;
    return frames;
}

const minutes = 1;
const fps = 60;  
const totalFrames = calculateFrames(minutes, fps);
console.log(calculateFrames(1, 60))

//
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

//
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

// 

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


//

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
