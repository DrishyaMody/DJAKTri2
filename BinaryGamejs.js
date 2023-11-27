"use strict";

let count = 0;
const output = document.getElementById("output");
const gameResult = document.getElementById("gameResult");
const numbers = document.querySelectorAll(".each-number");
const numArray = Array.from(numbers);
const binaries = document.querySelectorAll(".binary-number");
const randomizer = document.getElementById("randomizer");
const oneHundredTwentyEight = document.getElementById("128");
const sixtyFour = document.getElementById("64");
const thirtyTwo = document.getElementById("32");
const sixteen = document.getElementById("16");
const eight = document.getElementById("8");
const four = document.getElementById("4");
const two = document.getElementById("2");
const one = document.getElementById("1");

oneHundredTwentyEight.addEventListener("click", function() {
  if (!oneHundredTwentyEight.classList.contains("light")) {
    document.getElementById("binary-128").textContent = "1";
    addMyValue(128);
  }
});
sixtyFour.addEventListener("click", function() {
  if (!sixtyFour.classList.contains("light")) {
    document.getElementById("binary-64").textContent = "1";
    addMyValue(64);
  }
});
thirtyTwo.addEventListener("click", function() {
  if (!thirtyTwo.classList.contains("light")) {
    document.getElementById("binary-32").textContent = "1";
    addMyValue(32);
  }
});
sixteen.addEventListener("click", function() {
  if (!sixteen.classList.contains("light")) {
    document.getElementById("binary-16").textContent = "1";
    addMyValue(16);
  }
});
eight.addEventListener("click", function() {
  if (!eight.classList.contains("light")) {
    document.getElementById("binary-8").textContent = "1";
    addMyValue(8);
  }
});
four.addEventListener("click", function() {
  if (!four.classList.contains("light")) {
    document.getElementById("binary-4").textContent = "1";
    addMyValue(4);
  }
});
two.addEventListener("click", function() {
  if (!two.classList.contains("light")) {
    document.getElementById("binary-2").textContent = "1";
    addMyValue(2);
  }
});
one.addEventListener("click", function() {
  if (!one.classList.contains("light")) {
    document.getElementById("binary-1").textContent = "1";
    addMyValue(1);
  }
});

for (let i = 0; i < numArray.length; i++) {
  numArray[i].addEventListener("click", function() {
    if (!this.classList.contains("light")) {
      this.classList.add("light");
    }
  });
}

function getRandom() {
  return Math.floor(Math.random() * (128 - 1 + 1)) + 1;
}

randomizer.addEventListener("click", () => {
  for (let i = 0; i < numArray.length; i++) {
    numArray[i].classList.remove("light");
  }

  for (let i = 0; i < binaries.length; i++) {
    binaries[i].textContent = "0";
  }

  gameResult.textContent = "";
  count = 0;
  output.textContent = getRandom();
});

const addMyValue = (num) => {
  count += num;
  console.log(parseInt(output.textContent));

  if (count > parseInt(output.textContent)) {
    gameResult.textContent = "Wrong value, you went over it."
    count = 0;
    output.textContent = "";
  } else if (count === parseInt(output.textContent)) {
    gameResult.textContent = "You got it right!";
    output.textContent = "";
  }
}
