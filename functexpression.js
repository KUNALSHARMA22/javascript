//function expression = a way to define functions as vales or variables
//1 callbacks in asynchorous operations
//2 higher- order functions
//3 closure
//4 event listeners


// function hello(){
//     console.log("hello")
// }

// setTimeout(hello,5000
// )

//or
// setTimeout(function hello(){
//     console.log("happy birthday ")
// },5000)

//arrow function

// const hello =(namee)=> console.log(`hello ${namee}`)
// hello("kunal")

// setTimeout(()=>console.log("happy birthday to you"),5000)

let arr =[1,2,3,4,5,6,7,8,9,0]
let square =(arrr)=>{
    return arrr*arrr
}
let sq =arr.map(square)
console.log(sq)