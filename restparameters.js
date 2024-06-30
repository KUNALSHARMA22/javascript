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

function combinestrings( ...strings){
    return strings.join("")
}
const fullName = combinestrings("kunal" , "sharma ");
console.log(fullName);