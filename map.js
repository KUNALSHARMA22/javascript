// map() = accept sa callback and applies that function to each element of an array , then return a new array

// let arr = [ 1,2,3,4,5,6]
// function power(element){
//     console.log(Math.pow(element,2))
// }
// const p = arr.map(power);
// console.log(p)

// let names = [ "kunal", "sunita", "she " ,"he"];
// names.map(up);
// function up(name){
//     console.log(name.toUpperCase)
// }

//formated dates

let date = [ "22-10-2005" , "4-04-2004","30-12-2005"]
date.map(dates)
function dates(element){
    let parts= element.split("-");
    console.log(`${parts[1]}/${parts[2]}/${parts[0]}`);
}