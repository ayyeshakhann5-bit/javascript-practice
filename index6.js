function rollDice(){
  const numOfDice=document.getElementById("numOfDice").value;
  const DiceResult=document.getElementById("DiceResult");
  const Diceimages=document.getElementById("Diceimages");
  const values=[];
  const images=[];

  for(let i=0;i<numOfDice;i++){
    const value=Math.floor(Math.random()*6)+1;
   values.push(value);
    console.log(value)
     images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);

  }
   DiceResult.textContent=`dice:${values.join(',')}`;
   Diceimages.innerHTML=images.join('');
}