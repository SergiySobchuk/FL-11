function formatTime(num){
    let day = 0;
    let hour = 0;
    let minute = 0;

    if(num > 1440){
        day = Math.floor(num/1440)
        num = num - day * 1440;
    }
    if(num > 59){
        hour = Math.floor(num/60)
        num = num - hour * 60;
    }
    if(num < 59 && num > 0){
        minute = num;
    }
    return day+" day(s) "+hour+" hour(s) "+minute+" minute(s)."
}
console.log(formatTime(3));
console.log(formatTime(67));
console.log(formatTime(1505));
