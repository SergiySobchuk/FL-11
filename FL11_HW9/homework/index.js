console.log('*************task0**************');

function getNumbers(inStr){
    let inArr = inStr.split('');
    let outArr = [];
    inArr.forEach(element => {
        if (!isNaN(parseInt(element))){
            outArr.push(parseInt(element));
        }
    });
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
    array.forEach(element => {
        func(element);
    });
}
executeforEach([1,2,3], function(el) { console.log(el) })

console.log('*************task3**************');

function mapArray(array, func){
    let newArray = [];
    array.forEach(element => {
        newArray.push(func(element));
    });
    return console.log(newArray);
}
mapArray([2, 5, 8], function(el) { return el + 3 }) // returns [5, 8, 11]

console.log('*************task4**************');
