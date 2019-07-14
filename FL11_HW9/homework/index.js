console.log('*************task0**************');

function getNumbers(inStr){
    let inArr = inStr.split('');
    let outArr = [];
    for (let i = 0; i < inArr.length; i++) {
        if (!isNaN(parseInt(inArr[i]))){
            outArr.push(parseInt(inArr[i]));
        }
    }
    return outArr;
}
console.log(getNumbers('1e2y3wd-sd5ds7fadsf9@ds'));

console.log('*************task1**************');

function findTypes(){
    let arrayCountType = {object: 0, number: 0, boolean: 0, string: 0};
    for (let i = 0; i < arguments.length; i++) {
        if(typeof arguments[i] === 'number'){
            arrayCountType.number =+ 1;
        }else if(typeof arguments[i] === 'string'){
            arrayCountType.string =+ 1;
        }else if (typeof arguments[i] === 'boolean'){
            arrayCountType.boolean =+ 1;
        }else if (typeof arguments[i] === 'object'){
            arrayCountType.object =+ 1;
        }
    }
    return arrayCountType;
}
console.log(findTypes(5, 'hello', false, null));

console.log('*************task2**************');

function executeforEach(array, func){
    for (let i = 0; i < array.length; i++) {
        func(array[i]);
    }
}
executeforEach([1,2,3], function(el) { console.log(el) })

console.log('*************task3**************');

function mapArray(array, func){
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(func(array[i]));
    }
    return console.log(newArray);
}
mapArray([2, 5, 8], function(el) { return el + 3 }) // returns [5, 8, 11]

console.log('*************task4**************');

function filterArray(array, func){
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if(func(array[i])){
           newArray.push(array[i]);
        }
    }
    return console.log(newArray);
}
filterArray([2, 5, 8], function(el) { return el > 3 }) // returns [5, 8]

console.log('*************task5**************');
