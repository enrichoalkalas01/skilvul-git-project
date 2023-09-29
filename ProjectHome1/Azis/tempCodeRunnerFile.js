function getRataRata(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum / array.length;
}

console.log(getRataRata([9,3,2,1,5,10,9,4,6,7]));