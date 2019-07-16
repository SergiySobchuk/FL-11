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
executeforEach([1,2,3], function(el) {
    console.log(el);
});

console.log('*************task3**************');

function mapArray(array, func){
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(func(array[i]));
    }
    return newArray;
}
console.log(mapArray([2, 5, 8], function(el) {
    return el + 3 
})); 

console.log('*************task4**************');

function filterArray(array, func){
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if(func(array[i])){
           newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(filterArray([2, 5, 8], function(el) { 
    return el > 3 
})); 

console.log('*************task5**************');

function showFormattedDate(data){
    let formatYear = data.getFullYear();
    let formatMonth = data.getMonth();
    let formatDay = data.getDate();

    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    for (let i = 0; i < month.length; i++) {
        if(formatMonth === i){
            formatMonth = month[i];
        }
    }
    return console.log('Date: '+formatMonth+ ' ' +formatDay+' '+formatYear);
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

console.log('*************task6**************');

function canConvertToDate(data){
    let checkData = new Date(data);
    if(isNaN(checkData.getDate())){
        return console.log(false);
    }else{
        return console.log(true);
    }
} 
canConvertToDate('2016-13-18T00:00:00') 
canConvertToDate('2016-03-18T00:00:00') 

console.log('*************task7**************');

function daysBetween(date1, date2){
    let secInOneDay=1000*60*60*24;
    return Math.round((date2-date1)/secInOneDay);
}
console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));

console.log('*************task8**************');
let data = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      'birthday': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      'birthday': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      'birthday': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      'birthday': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
  ]

function getAmountOfAdultPeople(data) {
    let adultDate = new Date();
    let count = 0;
    adultDate.setFullYear(adultDate.getFullYear() - 18);
    for (let i = 0; i < data.length; i++) {
        let birthday = new Date(data[i].birthday);
         if(daysBetween(birthday, adultDate) > 0){
            count++;
         } 
    }
    return count
}
console.log(getAmountOfAdultPeople(data));

console.log('*************task9**************');

function keys(obj){
    let arr = [];
    for (let key in obj){
        arr.push(key);
    }
    return arr;
}
console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));

console.log('*************task10**************');
function values(obj){
    let arr = [];
    for (let key in obj){
        arr.push(obj[key]);
    }
    return arr;
}
console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));