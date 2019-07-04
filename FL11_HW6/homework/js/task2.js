const A = +prompt('Length sides A', 2);
const B = +prompt('Length sides B', 2);
const C = +prompt('Length sides C', 2);

if( A + B > C && A + C > B && B + C > A && A > 0 && B > 0 && C > 0){
    if (A === B && B === C){
        console.log('Eequivalent triangl');
    }else if(A===Math.sqrt(Math.pow(B, 2) + Math.pow(C, 2)) || 
            B===Math.sqrt(Math.pow(A, 2) + Math.pow(C, 2)) ||
            C===Math.sqrt(Math.pow(B, 2) + Math.pow(A, 2))){
            console.log('Isosceles triangle');
    }else{
        console.log('Normal triangle');
    }
}else {
    console.log('Triangle doesn’t exist');
}