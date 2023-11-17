---
layout: default
title: Binary
permalink: /game
---

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
      background-color: #f0f0f0;
    }

    #game-container {
      text-align: center;
      background-color: #ffffff;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h1 {
      color: #333333;
    }

    #decimal-number {
      font-size: 24px;
      margin-bottom: 20px;
      color: #333333;
    }

    .binary-button {
      font-size: 18px;
      margin: 10px;
      padding: 15px 30px;
      cursor: pointer;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    .binary-button:hover {
      background-color: #45a049;
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
