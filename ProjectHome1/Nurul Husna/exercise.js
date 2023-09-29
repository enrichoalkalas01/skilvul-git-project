//sum a +b
 function sum(a,b){
    return  a + b;
  }
  
console.log (sum(3,2));

//Age todays
function calcAge(a) {
    return (a * 365);
}

console.log (calcAge(65));

//FirstArray
function getFirstValue(a,b,c) {
    let array = [a,b,c];
    return array[0];
}
console.log (getFirstValue(1,2,3));

//Hours to second
function howManySecond(hour) {
    return hour * 3600;
}
console.log (howManySecond(2));


//Frames per Second
function frames(a,b) {
    return a * (60 * b);
}

console.log(frames(1,1));

//Show all duplicate value in Array
let array = [9, 3, 2, 1, 5, 10, 9, 4, 6, 7];
let showAllDuplicate = filterSameValues(array);

function filterSameValues(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let currentValue = arr[i];
        if (arr.indexOf(currentValue) !== arr.lastIndexOf(currentValue)){
            result.push(currentValue);
        }
    }
    return result;
}

console.log(filteredArray);

//Sum All Data in Array
let array = [9, 3, 2, 1, 5, 10, 9, 4, 6, 7];

function sumArray(array) {
  let sum = 0;

  array.forEach(item => {
    sum += item;
  });

  console.log(sum);
  return sum;
}

sumArray(array);


//calling data domisili: Depok using for loop
let data = [
    { name: 'lisa', age: 20, domisili: 'jakarta'},
    { name: 'andre', age: 23, domisili: 'depok'},
    { name: 'peter', age: 25, domisili: 'depok'},
    { name: 'najwa', age: 21, domisili: 'bogor'},
    { name: 'habib', age: 22, domisili: 'jakarta'},
    { name: 'sakura', age: 20, domisili: 'bogor'},
    ];

let city = [];
function showDepok(cities) {
    for (let i = 0; i < cities.length; i++) {
        if (cities[i].domisili === 'depok') {
            city.push(cities[i])
        }
    }
    return city;
}

console.log(showDepok(data));

//show all data value in array
let data = [
    { name: 'lisa', age: 20, domisili: 'jakarta'},
    { name: 'andre', age: 23, domisili: 'depok'},
    { name: 'peter', age: 25, domisili: 'depok'},
    { name: 'najwa', age: 21, domisili: 'bogor'},
    { name: 'habib', age: 22, domisili: 'jakarta'},
    { name: 'sakura', age: 20, domisili: 'bogor'},
    ]
data.forEach(function(entry) {
  console.log(entry);
});



