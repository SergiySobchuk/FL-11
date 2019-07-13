function getMin(){
    let min = 0;
    for (let i = 0; i < (arguments.length); i++) {
        if (arguments[i] < min){
            min = arguments[i];
        }
    }
    return min;
} 
console.log(getMin(3, 0, -3, 5, 6, 7, -13, -5, 6, 3, 2, 100, -8));