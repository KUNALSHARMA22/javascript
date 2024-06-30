let input = document.getElementById("input");
let button = document.getElementById("btn");
let diceResult = document.getElementById("diceResult");
let diceImage = document.getElementById("diceImage");
let values= [];
let image = [];
button.onclick = function btn() {
 for(let i = 1; i <= input.value ; i++){
  let value= Math.floor( Math.random()*6 )+1 ;
    values.push(value)
    image.push(`<img src = "dice_images/${value}.png">`)
   
 }
 diceResult.textContent = `${values.join(' ')}`;
 diceImage.innerHTML = image.join(' ');
}