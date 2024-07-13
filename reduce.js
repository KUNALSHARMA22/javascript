//reduce = reduces the elements of an array to a single value

// let array = [1,2,3];
// let s= array.reduce(sum)
// function sum (accumulator,element){
//     return accumulator+element
// }

// console.log(s)



//find maximum in the array 

let array = [ 1,2,3,4,5,6,8,9,4,11]
let maxNum = array.reduce(max)

function max(Max,nmber){
return Math.max(Max,nmber)
}
console.log(maxNum)