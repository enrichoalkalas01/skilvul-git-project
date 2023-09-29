//soal 1
function sum (a,b){
    return a +b ;
}

console.log(sum(10,5));

// soal 2
let daysInYear = 365;
function calcAge (age){
        if (age < 0) {
            return "age wrong!";
        } else {
            return daysInYear * 365;
        }
}

console.log(calcAge(0));

//soal 3
function getFirstValue (array) {
    return array[0];
}
console.log(getFirstValue([1,2,3]));

// soal 4
function howManySecond (hours) {
    return hours * 3600;
}

console.log(howManySecond(2));

//soal 5
function frames (a,b)
{
    return a * 60 * b;
}

console.log(frames(10,25));

//soal 6

function getRataRata(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum / array.length;
}

console.log(getRataRata([9,3,2,1,5,10,9,4,6,7])); // Expected output: 5.6


// soal 7

function penjumlahan (hasil)
{
    let tambah = 0;
    for (let index = 0; index < hasil.length; index++) {
        tambah += hasil[index];
    }
    return tambah;
}

console.log(penjumlahan([9,3,2,1,5,10,9,4,6,7]));

// soal 7
let data = [
    {name: 'lisa', age: 20, domisili: 'jakarta'},
    {name: 'andre', age: 23, domisili: 'depok'},
    {name: 'peter', age: 25, domisili: 'depok'},
    {name: 'najwa', age: 21, domisili: 'bogor'},
    {name: 'habib', age: 21, domisili: 'depok'},
    {name: 'jennie', age: 22, domisili: 'jakarta'},
    {name: 'sakura', age: 20, domisili: 'bogor'},
];

function filterByDomisili(data, domisili) {
    return data.filter(person => person.domisili.toLowerCase() === domisili.toLowerCase());
}

console.log(filterByDomisili(data, 'depok'));

//soal 8

function getFirstData (array)
{
    return array;   
}

console.log(getFirstData(data));






