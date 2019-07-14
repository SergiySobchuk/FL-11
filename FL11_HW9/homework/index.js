console.log('*************task1**************');

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

console.log('*************task2**************');

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

console.log('*************task3**************');
