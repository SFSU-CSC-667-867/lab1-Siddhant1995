// Arrays in js

// arrays can be delared explicitly
const arrayTest = [9, 3, 4];
arrayTest[3] = 9;

// or with new keyword
const anotherArray = new Array(5);

// access array elements
console.log(arrayTest[0]);

// change elements
arrayTest[1] = 'hello';

// for practice

// use forEach
arrayTest.forEach((n)=>{
    console.log(n);
});
// use map
const newArray = arrayTest.map(i => i + 1);
console.log(newArray);

// use pop
newArray.pop();
console.log(newArray);
// use push
newArray.push(4);
console.log(newArray);
// use shift
newArray.shift();
console.log(newArray);
// use unshift
newArray.unshift(10);
console.log(newArray);
// use filter