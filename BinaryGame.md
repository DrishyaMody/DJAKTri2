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
            font-family: 'Star Wars', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background-color: #000;
            overflow: hidden;
            color: #FFFFFF;
        }

        #game-container {
            text-align: center;
            background-color: rgba(255, 255, 255, 0.8);
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

        .star {
            position: absolute;
            width: 2px;
            height: 2px;
            background-color: #FFF;
            border-radius: 50%;
            animation: twinkling 1s infinite;
        }

        @keyframes twinkling {
            0% {
                opacity: 0.5;
            }

            50% {
                opacity: 1;
            }

            100% {
                opacity: 0.5;
            }
        }
    </style>
    <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/star-wars">
</head>

<body>
    <script>
        // Number of stars to add
        var numberOfStars = 1000;

        for (var i = 0; i < numberOfStars; i++) {
            // Generate random position for each star
            var randomX = Math.floor(Math.random() * window.innerWidth);
            var randomY = Math.floor(Math.random() * window.innerHeight);

            document.write('<div class="star" style="left:' + randomX + 'px; top:' + randomY + 'px;"></div>');
        }
    </script>

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
