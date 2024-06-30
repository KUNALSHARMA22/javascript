// rest parameters = allow a function work with a variable number of arguments by bundling them into array


// function food(...foods){
//     console.log(...foods);
// }
// let food1 = " burger "

// let food2 = " pizza "
// let food3 = " sushi  "
// let food4 = " noodles "
// let food5 = " tofu "

// food(food1,food2, food3, food4 , food5)



// function food(...foods){
//     console.log(foods);
// }
// let food1 = " burger "

// let food2 = " pizza "
// let food3 = " sushi  "
// let food4 = " noodles "
// let food5 = " tofu "

// food(food1,food2, food3, food4 , food5)

// function combinestrings( ...strings){
//     return strings.join("")
// }
// const fullName = combinestrings("kunal" , "sharma ");
// console.log(fullName);


function sum(...numbers){
    let nmber = [...numbers]
    let result = 0 ;
    for( let i of nmber  ){
        result = result + i ;
    }
    console.log(result)
}

sum (1,2,3,4,9999)