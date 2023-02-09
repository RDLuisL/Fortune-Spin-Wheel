/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let container = document.querySelector(".container");

let btn = document.getElementById("spin");

let number = Math.ceil(Math.random() * 10000);

btn.onclick = function() {
  container.getElementsByClassName.transform = "rotate(" + number + "deg)";
  number += Math.ceil(Math.random() * 10000);
};
