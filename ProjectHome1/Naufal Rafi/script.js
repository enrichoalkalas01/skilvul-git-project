// No 1 Return the sum of Two Number

function sum (a,b) {
    return a + b;
};
 
console.log (sum(-3,-6));

// No 2 Convert Age to Days

function ageToDays (y) {
    return y * 365;
};

console.log(`Umur Anda dalam hari adalah ${ageToDays(20)}`)

// No 3 Return the First Element in an array

let number = [1, 2, 3];

function getFirstValue (a) {
return a[0]
}

console.log(getFirstValue(number));

// No 4 Convert Hours into Seconds

function howManySeconds (hours) {
        return hours * 60 * 60;
}

console.log(`3 Hours in seconds is ${howManySeconds(3)} seconds`)


// No 5 Frames Per Second


function frames (a,b) {
    return a * b * 60;
}

console.log(frames (1,1))
console.log(frames (10,1))
console.log(frames (10,25))


// No 6 Array Filter for same number

let array = [9, 3, 2, 1, 5, 10, 9, 4, 6, 7]
let arrayFiltered = sameNumberFilter(array);

function sameNumberFilter(arr) {
     let afterFilter = [];
    for (let i = 0; i < arr.length; i++) {
        const beforeFilter = arr[i];
        if (i !== arr.lastIndexOf(beforeFilter)) {
            afterFilter.push(beforeFilter);
        }
    }
    return afterFilter;
}

console.log(arrayFiltered);

// No 7 Hasilkan jumlah dari array menggunakan for loop

let totalArray = 0;

   for (var i  = 0; i < array.length; i++){

      totalArray  += array[i];

   }

   console.log(totalArray);

// No 8 Function yang memfilter domisili

let data = [
    {name: 'lisa', age: 20, domisili: 'jakarta'},
    {name: 'andre', age: 23, domisili: 'depok'},
    {name: 'peter', age: 25, domisili: 'depok'},
    {name: 'najwa', age: 21, domisili: 'bogor'},
    {name: 'habib', age: 21, domisili: 'depok'},
    {name: 'jennie', age: 22, domisili: 'jakarta'},
    {name: 'sakura', age: 20, domisili: 'bogor'},
]



function domisiliFilter (data) {
    let filteredData = [];
    for (let i = 0; i < data.length; i++)
        if (data[i].domisili === "depok") {
        filteredData.push(data[i]);
        }
    return filteredData;
}

console.log(domisiliFilter(data));

// No 9 Function yang mengembalikan data paling atas

function firstData (a) {
    return Object.values(a[0]);

}

console.log(firstData(data));