/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function myExcuse() {
  let excuse = document.getElementById("excuse");
  excuse.innerHTML = sentence();
  let button = document.querySelector("#generateExcuse");
  button.addEventListener("click", function() {
    excuse.innerHTML = sentence();
  });
};

let excuseWho = ["The dog", "My granma", "His turtle", "My bird"];
let excuseWhat = ["eat", "pissed", "crushed", "broked"];
let excuseWhen = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function sentence() {
  var theSentence =
    excuseWho[Math.floor(Math.random() * excuseWho.length)] +
    " " +
    excuseWhat[Math.floor(Math.random() * excuseWhat.length)] +
    " " +
    excuseWhen[Math.floor(Math.random() * excuseWhen.length)];
  return theSentence;
}
