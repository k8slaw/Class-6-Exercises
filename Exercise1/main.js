//Beginning Exercise\\
let x = myFunction(4, 3);

function myFunction(a, b) {
    return a * b / 2;
}
console.log(myFunction(4, 3));


function myFunction2(a, b) {
    console.log(a * b / 2);
}
myFunction2(4, 6);



//Intermediate Excercise\\
let start = 28;
let end = 15;

if(start < end) {
    for(let i=start; i<=end; i++) {
    console.log(i);
    } 
}else {
    for(let i=start; i>=end; i--) {
    console.log(i);
    }
}