---
layout: default
title: Binary Memory Game
permalink: /memory
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background-color: #000;
            color: #FFF;
            font-family: 'Star Wars', sans-serif;
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

        #game-container {
            display: grid;
            grid-template-columns: repeat(4, 100px);
            grid-gap: 10px;
        }

        .card {
            width: 100px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            cursor: pointer;
            background-color: #000;
            border: 2px solid #FFF;
            transition: background-color 0.3s ease;
        }

        .card:hover {
            background-color: #555;
        }
    </style>
    <title>Binary Memory Game - Star Wars Edition</title>

    <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/star-wars"> <!-- Star Wars font link -->
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

<div id="game-container"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function () {
        const binaryNumbers = ["0000", "0001", "0010", "0011",
            "0100", "0101", "0110", "0111",
            "1000", "1001", "1010", "1011",
            "1100", "1101", "1110", "1111"];

        const cardValues = [...binaryNumbers, ...binaryNumbers];
        let flippedCards = [];
        let correctPairs = 0;

        const gameContainer = document.getElementById('game-container');

        // Shuffle the cards
        cardValues.sort(() => Math.random() - 0.5);

        // Create the game board
        for (let i = 0; i < cardValues.length; i++) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.value = cardValues[i];
            card.addEventListener('click', flipCard);
            gameContainer.appendChild(card);
        }

        function flipCard() {
            if (flippedCards.length < 2) {
                this.textContent = this.dataset.value;
                flippedCards.push(this);

                if (flippedCards.length === 2) {
                    setTimeout(checkMatch, 500);
                }
            }
        }

        function checkMatch() {
            const [card1, card2] = flippedCards;

            if (card1.dataset.value === card2.dataset.value) {
                correctPairs++;
                if (correctPairs === binaryNumbers.length) {
                    alert('Congratulations! You matched all pairs!');
                }
            } else {
                card1.textContent = '';
                card2.textContent = '';
            }

            flippedCards = [];
        }
    });
</script>

</body>
</html>
