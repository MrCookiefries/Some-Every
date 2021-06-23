function hasOddNumber(arr) {
    return arr.some(num => num % 2);
}

function hasAZero(num) {
    return num.toString().split("").some(char => char === '0');
}

function hasOnlyOddNumbers(arr) {
    return arr.every(num => num % 2);
}

function hasNoDuplicates(arr) {
    return arr.every(val => arr.indexOf(val) === arr.lastIndexOf(val));
}

function hasCertainKey(arr, key) {
    return arr.every(val => val[key]);
}

function hasCertainValue(arr, key, searchValue) {
    return arr.every(val => val[key] === searchValue);
}
