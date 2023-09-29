console.log('===soal 1===')
// soal 1 Return the Sum of Two Numbers

function sum(a,b){
    return a + b;
}

console.log(sum(3, 2))

// soal 2 Convert Age to Days
console.log('===soal 2===')

let daysInAYear = 365;
function convertAgeToDays(age){
    if (age < 0) {
        return 'Wrong Age';
    } else {
        return daysInAYear * age;
    }
}

console.log(convertAgeToDays(20))
console.log(convertAgeToDays(-20))

// soal 3 Return the First Element in an Array
console.log('===soal 3===')

let num = [1, 2, 3]

function getFirstValue(array){
    return array[0];
}

console.log(getFirstValue(num))
console.log(getFirstValue([80, 5, 100]))

// soal 4 Convert Hours into Seconds
console.log('===soal 4===')

const secondsInHours = 3600;
function convertHoursToSeconds(hours){
    if (hours < 0) {
        return 'Wrong Hours';
    } else {
        return secondsInHours * hours;
    }
}

console.log(convertHoursToSeconds(2));
console.log(convertHoursToSeconds(-20));

// soal 5 Frames per Second
console.log('===soal 5===')

function frames(a, b) {
    return a * 60 * b;
}

console.log(frames(10,25));

// soal 6 duplicate value
console.log('===soal 6===')

let number = [9, 3, 2, 1, 5, 10, 9, 4, 6, 7]

let duplicateNumber = []
function equalArray(number) {
    let nomor = 0
    for (let i = 0; i < number.length; i++) {
        if (number[nomor] === number[i]) {
            duplicateNumber.push(number[nomor]);
        }
    }
    return duplicateNumber;
}

console.log(equalArray(number))

// soal 7 sum all array
console.log('===soal 7===')

let array = [9, 3, 2, 1, 5, 10, 9, 4, 6, 7]

let totalSum = 0;
for (let i = 0; i < array.length; i++) {
    totalSum += array[i];
}

console.log(totalSum)

let data = [
    {name: 'lisa',age: 20,domisili: 'jakarta'},
    {name: 'andre',age: 20,domisili: 'depok'},
    {name: 'peter',age: 20,domisili: 'depok'},
    {name: 'najwa',age: 20,domisili: 'bogor'},
    {name: 'habib',age: 20,domisili: 'depok'},
    {name: 'jennie',age: 20,domisili: 'jakarta'},
    {name: 'sakura',age: 20,domisili: 'bogor'},
]

// soal 8 depok
console.log('===soal 8===')

// cara 1
let arrayDepok = []
function filterKotaDepok(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].domisili === "depok") {
            arrayDepok.push(array[i])
        }
    }
    return arrayDepok;
}
console.log(filterKotaDepok(data))

// cara 2

const filterDomisiliDepok = data.filter((array)=>{
    return array.domisili === "depok"
})
console.log(filterDomisiliDepok)

// soal 9 array value
console.log('===soal 9===')

const ambilValueData = data.map((array)=>{
    return Object.values(array);
})

console.log(ambilValueData);


