const myButton=document.getElementById("myButton");
const ageInput=document.getElementById("ageInput");
const myParagraph=document.getElementById("myParagraph");
let age;

myButton.onclick=function(){
  age=ageInput.value;
  age=Number(age);
  if(age>=18){
    myParagraph.textContent="You are eligible to vote!";
  }
  else{
    myParagraph.textContent="You are not eligible to vote!";
  }
}