/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My granma", "His turtle", "My bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function generadorExcusas(quien, que, cuando) {
  let numQuien = Math.floor(Math.random() * quien.length);
  let numQue = Math.floor(Math.random() * que.length);
  let numCuando = Math.floor(Math.random() * cuando.length);
  return (
    quien[numQuien] +
    " " +
    que[numQue] +
    " " +
    "mi tarea" +
    " " +
    cuando[numCuando]
  );
}
function onLoad() {
  var excusa = document.getElementById("excuse");
  excusa.innerHTML = generadorExcusas(who, what, when);
}
onload = onLoad;
