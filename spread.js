
//spread operator = it spreads or breaks array or strings in its commponents

// let number  = [ 1,2,3,4,5,6,7];
// let maximum = Math.max(...number);
// console.log(maximum)

// let userName= "kunalsharma";
// let letters= [...userName];
// console.log(letters)

//we can combine two or more arrays using spread operator

let class1 =[ "kunal ", "teena" ,"lakshita "];
let class2 = [ "sunita sharma ", "girraj sharma "];

let students = [ ...class1,...class2, "krishna" , "radha "];
console.log(students)


//this is how we can combine two or more array