"use strict";

// document variables to grab elements
const count = document.querySelector(".count");
const edit = document.querySelector(".edit");
const landfall = document.querySelector(".landfall");
const panharmonicon = document.querySelector(".panharmonicon");
const yarok = document.querySelector(".yarok");
const reset = document.querySelector(".reset");
const attackers = document.querySelector(".attackers");
const modal = document.getElementById("modal");
const close = document.querySelector(".close");
const submit = document.getElementById("submit");
const scutesNum = document.getElementById("scutesNum");
const attackersNumDOM = document.getElementById("attackersNum");
const newTurn = document.querySelector(".newTurn");

// variables for functions
let counter = 1;
let attackersNum = 0;
let panActive = false;
let yarokActive = false;

// event listeners to throw functions into
reset.addEventListener("click", () => {
  counter = 1;
  panActive = false;
  yarokActive = false;
  attackersNum = 0;
  count.textContent = `${counter}`;
  attackers.textContent = `${attackersNum} Available for Attack`;
  yarok.classList.remove("active");
  panharmonicon.classList.remove("active");
});
landfall.addEventListener("click", () => {
  landfallTrigger();
});
panharmonicon.addEventListener("click", () => {
  if (panActive == false) {
    panActive = true;
  } else {
    panActive = false;
  }
  // update css class for Panharmonicon
  panharmonicon.classList.toggle("active");
});
yarok.addEventListener("click", () => {
  if (yarokActive == false) {
    yarokActive = true;
  } else {
    yarokActive = false;
  }
  yarok.classList.toggle("active");
});
edit.addEventListener("click", () => {
  modal.style.display = "block";
});
close.addEventListener("click", () => {
  modal.style.display = "none";
});
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
submit.addEventListener("click", () => {
  if (scutesNum.value != "") {
    counter = Number(scutesNum.value);
    count.textContent = `${counter}`;
  }
  if (attackersNumDOM.value != "") {
    attackersNum = Number(attackersNumDOM.value);
    attackers.textContent = `${attackersNum} Available for Attack`;
  }
  modal.style.display = "none";
  scutesNum.value = "";
  attackersNumDOM.value = "";
});

newTurn.addEventListener("click", () => {
  attackersNum = counter;
  attackers.textContent = `${attackersNum} Available for Attack`;
});
// functions
function landfallTrigger() {
  if (yarokActive && panActive) {
    counter *= 4;
  } else if (!yarokActive && !panActive) {
    counter *= 2;
  } else {
    counter *= 3;
  }
  count.textContent = `${counter}`;
}
