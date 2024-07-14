//object= a collection of related properties and/or methods 
//can represents real world objects(people,products,places)
//object={key:value,
//        function}


let person1 = {
    firstName :"Kunal",
    lastName:"sharma",
    age:19,
    isEmployed:false,
   // sayHello: function(){
    //     console.log("hello i am kunal")
    // }
  sayHello: ()=> console.log("hello i am kunal sharma")

}
person1.sayHello()