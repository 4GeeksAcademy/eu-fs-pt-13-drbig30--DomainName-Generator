/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let tld = [".com", ".es", ".io"];
  for (let i in pronoun) {
    for (let j in adj) {
      for (let k in noun) {
        for (let l in tld) {
          console.log(`${pronoun[i]}${adj[j]}${noun[k]}${tld[l]}`);
        }
      }
    }
  }
};
