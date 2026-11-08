//document.getElementById("myH1").textContent=`Hello!`

// let x=12;

// console.log(typeof x);
// console.log(`you age is ${x}`)

// let firstname="Ayesha";

// document.getElementById("p1").textContent=firstname;

// let username=window.prompt("How are you??");
// console.log(username);

// let username;

// document.getElementById("button").onclick=function(){
//   username=document.getElementById("mytext").value;
//   document.getElementById("myh1").textContent=`Hello ${username}`
// }

// const PI=3.14;
// let radius;
//  let circumference;

// document.getElementById("mybutton").onclick=function(){
//   radius=document.getElementById("myinput").value;
//   radius=Number(radius);
//   circumference=2*PI*radius;
//   document.getElementById("myinput").textContent=circumference;
//   document.getElementById("myh3").textContent=circumference +"cm";
// }

// let username=window.prompt("What is your name?");

//username=username.trim().toUpperCase()+username.trim().slice().toLowerCase();

//OR 
// username=username.trim();

// let letter=username.charAt(0);
// letter=letter.toUpperCase();

// let rchars=username.slice(1);
// rchars=rchars.toLowerCase();

// username=letter+rchars;

// console.log(username);





const min=1;
const max=100;

const answer=Math.floor(Math.random()*(max-min+1)+min);

let guess;
let attempts=0;

guess=window.prompt(`Guess a number between ${min} and ${max}`);

let running=true;

while(running){
  if(guess<min || guess>max){
    guess=window.prompt(`Please enter a number between ${min} and ${max}`);
  }else if(guess<answer){
    attempts++;
    guess=window.prompt(`Too low! Guess again`);
  }else if(guess>answer){
    attempts++;
    guess=window.prompt(`Too high! Guess again`);
  }
  else{
    attempts++;
    running=false;
    alert(`You guessed it! The answer was ${answer}. It took you ${attempts} attempts.`);
  }
}
