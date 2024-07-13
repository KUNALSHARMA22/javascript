//filter = creates a new array by filtering out elements
// let array = [1,2,3,4,5,6,7]
// let eve = array.filter(even)
// function even(number){
//     return number%2===0
// }
// console.log(eve)
// console.log(array.filter(odd))
// function odd(number){
//     return number%2!==0
// }

const fruits= [ "apple","pmegranate","orange","banana","peach"];

console.log(fruits.filter(short))
function short(name){
    return name.length <=5
}