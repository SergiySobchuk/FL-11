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

