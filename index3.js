// .checked =property is used to check whether a checkbox is checked or not. It returns true if the checkbox is checked, otherwise it returns false.



const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const myButtonn = document.getElementById("myButtonn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

myButtonn.onclick=function(){
  if(myCheckbox.checked){
   subResult.textContent = "You have subscribed to our newsletter.";
  }else{
    subResult.textContent = "You have unsubscribed from our newsletter.";
  }

  if(visaBtn.checked){
    paymentResult.textContent="You are paying using Visa";
  }
  else if(mastercardBtn.checked){
    paymentResult.textContent="You are paying using Mastercard";
  }
  else if(paypalBtn.checked){
    paymentResult.textContent="You are paying using Paypal";
  }
  else{
    paymentResult.textContent="You have not selected any payment method.";
  }
}