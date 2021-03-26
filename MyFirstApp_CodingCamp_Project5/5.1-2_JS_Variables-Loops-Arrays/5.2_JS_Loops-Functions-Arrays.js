/*For-loops:*/

for(let i=0; i<10; i++){
    console.log(i);
}

for(let i=1; i<=10; i++){
    console.log(i);
}

for(let i=1; i<20; i+2){
    console.log(i);
}


/*Functions:*/
let printNumbersTill = (n) => {
    for(let i=1; i<=n; i++){
        console.log(i);
    }
}

let getGreetingTo = (name) => {
    var greeting = `Hello ${name}!`;
    return greeting;
} 
console.log(getGreetingTo("Márti"));


/*Loops and Arrays:*/

let printValues = (array) => {
    for(let i=0; i<array.length; i++) {
        console.log(array[i])
    };
}

let printValues2 = (myNumbers) => {
    myNumbers.forEach((number) => {
        console.log(number);
    });
}
printValues2([4, 8, 12, 16, 20]);