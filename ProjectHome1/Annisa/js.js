
/*function getFormData() {
    let username = document.getElementById("username").value

    // let defaultUsername = username || 'john doe'
    let defaultUsername = username ? username : 'john doe'
    let trueUsername = defaultUsername === 'enricho' ? defaultUsername : 'kosong'
    // console.log(trueUsername)

    let value = 2
    switch(value) {
        case 1: 
            console.log(1)
            break
        case 2:
            console.log(2)
            break
        default:
            console.log(0)
    }
}*/

/*getFormData()

let createElementScript = document.createElement("script")
createElementScript.innerHTML = `
    let namaSaya = "annisa"
    console.log(namaSaya)
`

let bodyElement = document.querySelector("body")
bodyElement.appendChild(createElementScript)
// console.log(createElementScript)

// document.getElementById("button").addEventListener("click", function(e) {
//     console.log(e.currentTarget.style)
// })

// document.getElementById("button").innerHTML = 'Submit'
// document.getElementById("button").textContent = 'Submit'

let hasil = 0
for ( let i = 0; i < 5; i++ ) {
    hasil += i
}

// console.log(hasil)

let angka = 0
while(angka <= 10) {
    console.log(angka)
    angka++
}

let bensin = 0
do {
    console.log("Nyalakan Bensin!")
    bensin++
} while( bensin < 10 )

for ( let i = 0; i < 5; i++ ) {
    for ( let x = 0; x < i; x++ ) {
        console.log(i, x)
    }
}*/

//challenge 1
function a(){
    const hasil = 2 + 3;
    return hasil;
}
const hasilPenjumlahan = a();
console.log(hasilPenjumlahan);

//challenge 2
function ageInDays(ageInYears){
    let ageInDays = ageInYears * 365;
    return ageInDays;
}
let ageYears = 23;
let ageDays = ageInDays(ageYears);
console.log(`${ageYears} years is equal to ${ageDays} days`)

//challenge 3
function getFirstNumber(arr){
    if (arr.length > 0){
        return arr[0];
    } else {
        return "the array is empty";
    }
}
let numbers = [1,2,3]
let firstNumber = getFirstNumber(numbers);
console.log(firstNumber)

//challenge 4
function hoursToSecond(hours){
    let seconds = hours*3600;
    return seconds;
}
let hours = 2;
let second = hoursToSecond(hours);
console.log(`${hours} hours is equal to ${second}.`)

//challenge 5
function fpsPerMinute(minutes,fps){
    let seconds = minutes*60;
    let frames = seconds*fps
    return frames;
}
let minutes = 25;
let fps = 10;
let totalFrame = fpsPerMinute(minutes,fps);
console.log(totalFrame)

//challenge 6 & 7
let array = [9, 3, 2, 1, 5, 10, 9, 4, 6, 7];
let filteredArray = fiterSamevalue(array);
function fiterSamevalue(arr){
    let sameNumber = [];
    for (let i = 0; i < arr.length; i++) {
        if (sameNumber.indexOf(arr[i]) === -1){
            sameNumber.push(arr[i]);
        }
    }
    return sameNumber;
}
console.log(filteredArray)


let total = jumlahArray(array);
function jumlahArray(arr){
    let jumlah = 0;
    for (let i =0; i < arr.length; i++){
        jumlah += arr[i];
    }
    return jumlah;
}
console.log(`jumlah element dalam array adalah ${total}`)

//challenge 8
let data = [
    {name: 'lisa', age: 20, domisili: 'jakarta'},
    {name: 'andre', age: 23, domisili: 'depok'},
    {name: 'peter', age: 25, domisili: 'depok'},
    {name: 'najwa', age: 21, domisili: 'depok'},
    {name: 'habib', age: 21, domisili: 'depok'},
    {name: 'jennie', age: 22, domisili: 'jakarta'},
    {name: 'sakura', age: 20, domisili: 'bogor'},
]
let domisiliDepok = filteredData(array);
function filteredData(arr){
    for (let i = 0; i < data.length; i++){
        if(data[i].domisili === 'depok'){
            domisiliDepok.push(data[i]);
        }
    }
}
console.log(domisiliDepok)

//challenge 9
function dataView(person){
    for (let i =0; i < data.length; i++){
    console.log(`Nama ${person[i].name}, Usia ${person[i].age}, Domisili ${person[i].domisili}`);
    }
}
let person = [
    {name: 'lisa', age: 20, domisili: 'jakarta'},
    {name: 'andre', age: 23, domisili: 'depok'},
    {name: 'peter', age: 25, domisili: 'depok'},
    {name: 'najwa', age: 21, domisili: 'depok'},
    {name: 'habib', age: 21, domisili: 'depok'},
    {name: 'jennie', age: 22, domisili: 'jakarta'},
    {name: 'sakura', age: 20, domisili: 'bogor'},
]

dataView(person);