/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our", "his", "my"];
let adj = ["great", "big", "fantastic", "rational"];
let noun = ["jogger", "racoon", "chipmunk", "walrus"];
let at = [".com", ".edu", "io", ".gov"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < at.length; l++) {
        console.log(`${pronoun[i]}${adj[j]}${noun[k]}${at[l]}`);
      }
    }
  }
}
