// Return the sum of two numbers
function addiction(a, b) {
  return a + b;
}

// convert  Age to Days
function calcAge(age) {
  const dayInYear = 365;
  if (age < 0) return 'Age wrong';
  return age * dayInYear;
}

// return the first element in an array
function getFirstValue(arr) {
  return arr[0];
}

// convert hours to seconds
function howManySeconds(hours) {
  const seconds = 3600;
  return hours * seconds;
}

// frames per second
function frames(minutes, fps) {
  const seconds = 60;
  return minutes * seconds * fps;
}

// filter array get the same value using for loop
function getSameValue(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        newArr.push(arr[i]);
      }
    }
  }
  return newArr;
}

//  sum of array using for loop
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
    }
  }
  return sum;
}

// filter data yang hanya berdomisili depok
let data = [
  {
    name: 'lisa',
    age: 20,
    domisili: 'jakarta',
  },
  {
    name: 'andre',
    age: 23,
    domisili: 'depok',
  },
  {
    name: 'peter',
    age: 25,
    domisili: 'depok',
  },
  {
    name: 'najwa',
    age: 21,
    domisili: 'bogor',
  },
  {
    name: 'habib',
    age: 21,
    domisili: 'depok',
  },
  {
    name: 'jennie',
    age: 21,
    domisili: 'jakarta',
  },
  {
    name: 'sakura',
    age: 20,
    domisili: 'bogor',
  },
];

// filter data yang hanya berdomisili depok
function filterData(data) {
  const newArr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].domisili === 'depok') {
      newArr.push(data[i]);
    }
  }
  return newArr;
}

// function to show data
function showData(data) {
  for (let i = 0; i < data.length; i++) {
    console.log(
      `Nama : ${data[i].name} , Umur : ${data[i].age} , Domisili : ${data[i].domisili}`
    );
  }
}

const navLink = document.querySelectorAll('.nav-link');

// if navlink clicked add class active using for loop
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener('click', function () {
    const active = document.querySelector('.active');
    active.classList.remove('active');
    navLink[i].classList.add('active');
  });
}
