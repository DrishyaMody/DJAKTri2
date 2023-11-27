---
layout: default
title: Binary
permalink: /game
---

# Binary Game


<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      background-color: #f5f5f5;
    }

    #game-container {
      text-align: center;
      background-color: #ffffff;
      border-radius: 15px;
      padding: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      max-width: 500px; /* Adjust the width as needed */
      width: 100%;
      box-sizing: border-box;
      margin: 20px;
    }

    h1 {
      color: #3498db;
    }

    #decimal-number {
      font-size: 36px;
      margin-bottom: 30px;
      color: #333333;
    }

    #binary-options {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .binary-button {
      font-size: 24px;
      margin: 10px;
      padding: 15px 30px;
      cursor: pointer;
      background-color: #2ecc71;
      color: white;
      border: none;
      border-radius: 5px;
      transition: background-color 0.3s ease;
      flex: 0 0 45%; /* Adjust the width of buttons as needed */
    }

    .binary-button:hover {
      background-color: #27ae60;
    }
  </style>
  <title>Binary Game</title>
</head>
<body>

<div id="game-container">
  <h1>Binary Game</h1>
  <p id="decimal-number"></p>
  <div id="binary-options"></div>
</div>

<script>
  function generateRandomDecimal() {
    return Math.floor(Math.random() * 255) + 1;
  }

  function decimalToBinary(decimal) {
    return (decimal >>> 0).toString(2);
  }

  function generateBinaryOptions(decimal) {
    const binary = decimalToBinary(decimal);
    const options = [];

    for (let i = 0; i < 4; i++) {
      options.push(decimalToBinary(generateRandomDecimal()));
    }

    options.push(binary);
    options.sort(() => Math.random() - 0.5);

    return options;
  }

  function updateGame() {
    const decimalNumber = generateRandomDecimal();
    const binaryOptions = generateBinaryOptions(decimalNumber);

    document.getElementById('decimal-number').innerText = `Convert ${decimalNumber} to binary`;
    document.getElementById('binary-options').innerHTML = '';

    binaryOptions.forEach((option) => {
      const button = document.createElement('button');
      button.classList.add('binary-button');
      button.innerText = option;
      button.addEventListener('click', () => checkAnswer(option, decimalNumber));
      document.getElementById('binary-options').appendChild(button);
    });
  }

  function checkAnswer(selectedOption, decimalNumber) {
    const correctBinary = decimalToBinary(decimalNumber);

    if (selectedOption === correctBinary) {
      alert('Correct! Well done.');
    } else {
      alert(`Incorrect. The correct answer is ${correctBinary}.`);
    }

    updateGame();
  }

  updateGame();
</script>

</body>
</html>

