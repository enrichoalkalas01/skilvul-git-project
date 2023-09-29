function NumberSum (a, b) {
    return a + b;
}

console.log(NumberSum(-1,3))

// ---------------------------------------------------------------

function calAge (age) {
    if (age < 0){
        return "Your Age not valid";
    } else {
    return age * 365;
}
}

console.log(calAge(18))

// ----------------------------------------------------------

let getFirstValue = [1, 2, 3, 4];

console.log(getFirstValue[0])

// ---------------------------------------------------------------

function howManySeccond (minutes) {
    if (minutes < 0) {
        return "Minutes not valid";
    } else {
        return minutes * 60;
    }
}

console.log(howManySeccond(12))

// -----------------------------------------------------------------

function frames (a, b) {
    let fps = b * 60;
    return a * fps;
}

console.log(frames(10,25))

// --------------------------------------------------------------------

// let array = [1, 1, 2, 3 , 4, 2]
// let kosong = []
// function same () {
//     for (i = 0; i < array.length; i ++) {
//         if (array[i] !== array[]) {
//             kosong.push(array[i]);
//         }
//     }
// }

// -------------------------------------------------------------------

let ae = [9, 3, 2, 1, 5, 10, 9, 4, 6, 7];
  let jumlah = 0;

for (let i = 0; i < ae.length; i++) {
  jumlah += ae[i];
}

console.log(jumlah);

// -------------------------------

let data = [
    {name: 'lisa', age: 20, domisili: 'jakarta'},
    {name: 'andre', age: 20, domisili: 'depok'},
    {name: 'peter', age: 20, domisili: 'depok'},
    {name: 'wayulu', age: 20, domisili: 'jakarta'},
    {name: 'ican', age: 18, domisili: 'depok'},
    {name: 'hah', age: 20, domisili: 'jakarta'},
    {name: 'gatw', age: 20, domisili: 'jakarta'},
]



function returnValue () {
    let filter = [];
    for (let i = 0; i < data.length; i++){
        if (data[i].domisili === "depok") {
            filter.push(data[i])
        }
    }
    return filter
}

console.log(returnValue())
// ------------------------------------------

function tampil () {
    let tampil = [];
    for (let i = 0; i < data.length; i++){
        tampil.push(data[i]);
    }
    return tampil;
}

console.log(tampil())