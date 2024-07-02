let para = document.getElementById("id");

function randomPasswordGenerate(length , lowerCase,upperCase,Numbers,Symbols){
    let allowed = "";
    let password = "";

    

const includerLowercase = "abcdefghijklmnopqrstuvwxyz";
const includerUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const includerNumbers = "0123456789";
const includerrSymbol = "!@#$%^&*_-+~<>";


    allowed += lowerCase? includerLowercase: "";
    allowed += upperCase? includerUppercase: "";
    allowed += Numbers?  includerNumbers: "";
    allowed +=  Symbols? includerrSymbol: "";

 

    for (let i = 0 ; i <= length;i++){
        const len = Math.floor(Math.random()*26);
        password += allowed[len];
        
    }
    para.textContent = password
}


const length = 12 ;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers =true ;
const includeSymbol =true  ;

const randomPass= randomPasswordGenerate(length, includeLowercase,includeUppercase, includeNumbers, includeSymbol);
