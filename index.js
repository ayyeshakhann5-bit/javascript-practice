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


// CounterProgram



const decreaseBtn =document.getElementById("decreaseBtn");
const resetBtn =document.getElementById("resetBtn");
const increaseBtn =document.getElementById("increaseBtn");
const countLabel =document.getElementById("countLabel");

let count=0;

decreaseBtn.onclick=function(){
  count--;
  countLabel.textContent=count;
}

increaseBtn.onclick=function(){
  count++;
  countLabel.textContent=count;
}

resetBtn.onclick=function(){
  count=0;
  countLabel.textContent=count;
}


