function reverseNumber(num){
    if (Number.isInteger(num)){
        if(num < 0){
            num = num * (-1);
            return Number('-'+(num.toString().split("").reverse().join("")));            
        }else{
            return Number(num.toString().split("").reverse().join(""));            
        }
    }
    return false;
}
console.log(reverseNumber(435000));
