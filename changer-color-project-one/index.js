"use strict";

const button = document.querySelector(".changer-button");
const color = document.querySelector(".color");

const colors = ["#ff5633", "#f9ffaf", "red", "blue"];

button.addEventListener("click", (event) => {
  const changeColor = getHexColor();
  document.body.style.backgroundColor = changeColor;
  color.textContent = changeColor;
});

function getRundoNumber() {
  return Math.floor(Math.random() * hex.length);
}

const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function getHexColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRundoNumber()];
  }
  return hexColor;
}
