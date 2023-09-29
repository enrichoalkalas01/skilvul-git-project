function sum(a,b){
    return a + b;
}

console.log(sum(5,7))







let daysInAYear = 365;
function ageInDays(age){
    if (age < 0) {
        return "Age Wrong";
    } else {
        return daysInAYear * age;
    }
}

console.log(ageInDays(65))
console.log(ageInDays(0))
console.log(ageInDays(20))
console.log(ageInDays(-20))







let fruits = ['jeruk','apel','mangga']
let numbers = [0,1,2,3,4]

function getFirstElementFromArrays(array){
    return array[0];
}

console.log(getFirstElementFromArrays(fruits))
console.log(getFirstElementFromArrays(numbers))
console.log(getFirstElementFromArrays([0,1,3]))




const secondsInHour = 3600;
function hoursToSeconds(hour){
    if (hour < 0) {
        return "hour Wrong";
    } else {
        return secondsInHour * hour;
    }
}

console.log(hoursToSeconds(2))
console.log(hoursToSeconds(10))
console.log(hoursToSeconds(24))
console.log(hoursToSeconds(-20))





const frames = (a,b) => a*b*60;

console.log(frames(1,1))
console.log(frames(10,1))
console.log(frames(10,25))
console.log(frames(30,26))



let angka = [9,3,2,1,5,10,9,4,6,7]

let news = []
function equalArray(angka) {
    let nomor = 0
    for (let i = 0; i < angka.length; i++) {
        if (angka[nomor] === angka[i]) {
            news.push(angka[nomor]);
        }
    }
    return news;
}

console.log(equalArray(angka))



let nomor = [9,3,2,1,5,10,9,4,6,7]

let totalSums = 0;
for (let i = 0; i < nomor.length; i++) {
    totalSums += nomor[i];
}

console.log(totalSums)


let data = [
    {name: 'lisa',age: 20,domisili: 'jakarta'},
    {name: 'andre',age: 20,domisili: 'depok'},
    {name: 'peter',age: 20,domisili: 'depok'},
    {name: 'najwa',age: 20,domisili: 'bogor'},
    {name: 'habib',age: 20,domisili: 'depok'},
    {name: 'jennie',age: 20,domisili: 'jakarta'},
    {name: 'sakura',age: 20,domisili: 'bogor'},
]

let newDepok = []
function filterDepok(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].domisili === "depok") {
            newDepok.push(array[i])
        }
    }
    return newDepok;
}
console.log(filterDepok(data))



const baruDepok = data.filter((array)=>{
    return array.domisili === "depok"
})
console.log(baruDepok)



const baruDiatas = data.map((array)=>{
    return Object.values(array)
})

console.log(baruDiatas)


