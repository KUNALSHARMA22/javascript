//foreach() = method used to iterate over the elments of an array and apply a specified function (callback) to each element 
// array.forEach(callback)
// element, index, array are provided



let arr= [ 1,2,3,4,5]
arr.forEach(display);
function display(element,index,array){
    console.log(element*2)
    console.log(index,array)
}