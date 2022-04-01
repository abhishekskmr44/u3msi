const throw_dice = document.getElementById("throw_dice");
throw_dice.addEventListener("click", () => {
  let colors = [
    "#F44336",
    "#FFEB3B",
    "#FFEB3B",
    "#E91E63",
    "#FF9800",
    "#76FF03",
  ];
  let ran = Math.floor(Math.random() * 6 + 1);
  let dice_no = document.querySelector("h1");
  dice_no.innerText = ran;
  dice_no.style.color = colors[ran - 1];
  // console.log(ran);
});