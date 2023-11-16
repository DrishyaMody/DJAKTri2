---
layout: default
title: Binary
permalink: /Binary
---

<button onclick = "window.location.href='https://www.youtube.com/watch?v=RrJXLdv1i74&ab_channel=PracticalNetworking';">In case you forget</button>


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }
        #analog-clock {
            position: relative;
            width: 200px;
            height: 200px;
            border: 2px solid #333;
            border-radius: 150%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .hand {
            position: absolute;
            transform-origin: 50% 100%;
            background-color: #333;
        }
        #hour-hand {
            width: 6px;
            height: 50px;
        }
        #minute-hand {
            width: 4px;
            height: 80px;
        }
        #second-hand {
            width: 2px;
            height: 75px;
            background-color: red;
        }

        .hour-marking {
            position: absolute;
            transform-origin: 50% 100%;
            height: 10px;
            background-color: #333;
            width: 1px;
        }
    </style>
    <title>Analog Clock</title>
</head>
<body>

<h1>Analog Clock</h1>

<div id="analog-clock">
    <!-- Add hour markings dynamically -->
    <script>
        for (let i = 0; i < 12; i++) {
            const hourMarking = document.createElement('div');
            const angle = (360 / 12) * i;
            const radius = 85; // Adjust this to control the distance from the center
            const x = 4 + radius * Math.sin((angle * Math.PI) / 180);
            const y = -3 - radius * Math.cos((angle * Math.PI) / 180);

            hourMarking.style.transform = `translate(${x - 0.5}px, ${y}px) rotate(${angle}deg)`;
            hourMarking.classList.add('hour-marking');
            document.getElementById('analog-clock').appendChild(hourMarking);
        }
    </script>

    <div id="hour-hand" class="hand"></div>
    <div id="minute-hand" class="hand"></div>
    <div id="second-hand" class="hand"></div>
</div>

<script>
    function updateAnalogClock() {
        const time = new Date();
        const hours = time.getHours() % 12;
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        const hourHand = document.getElementById('hour-hand');
        const minuteHand = document.getElementById('minute-hand');
        const secondHand = document.getElementById('second-hand');

        const hourRotation = 360 / 12 * hours + 360 / 12 * (minutes / 60);
        const minuteRotation = 360 / 60 * minutes + 360 / 60 * (seconds / 60);
        const secondRotation = 360 / 60 * seconds;

        hourHand.style.transform = `translate(-50%, -80%) rotate(${hourRotation}deg)`;
        minuteHand.style.transform = `translate(-50%, -70%) rotate(${minuteRotation}deg)`;
        secondHand.style.transform = `translate(-50%, -70%) rotate(${secondRotation}deg)`;
    }

    // Update the clock every second
    setInterval(updateAnalogClock, 1000);

    // Initial update
    updateAnalogClock();
</script>

</body>
</html>





