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




// Random Number Generator

const myButton=document.getElementById("myButton");
const myLabel1=document.getElementById("myLabel1");
const myLabel2=document.getElementById("myLabel2");
const myLabel3=document.getElementById("myLabel3");
const min=1;
const max=6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick=function(){
randomNum1=Math.floor(Math.random()*max)+min;
randomNum2=Math.floor(Math.random()*max)+min;
randomNum3=Math.floor(Math.random()*max)+min;
myLabel1.textContent=randomNum1;
myLabel2.textContent=randomNum2;
myLabel3.textContent=randomNum3;
}
console.log("JavaScript is connected!");
console.log(myButton);
console.log(myLabel);