---
layout: default
title: Logc Gates
---

<button onclick = "window.location.href='https://www.youtube.com/watch?v=fw-N9P38mi4';">Intro to Logic Gates Video</button>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        #info-section {
            margin-bottom: 20px;
        }

        table {
            border-collapse: collapse;
            width: 100%;
        }

        th, td {
            border: 1px solid #dddddd;
            text-align: center;
            padding: 10px;
        }

        th {
            background-color: #f2f2f2;
        }

        input {
            width: 50px;
        }

        img {
            max-width: 40px;
            max-height: 40px;
        }

        button {
            padding: 5px 10px;
            cursor: pointer;
        }
    </style>
    <script>
        function calculateOutput() {
            // Get input values
            var inputA = document.getElementById('inputA').checked;
            var inputB = document.getElementById('inputB').checked;

            // Logic gate calculations
            var andOutput = inputA && inputB;
            var orOutput = inputA || inputB;
            var notOutputA = !inputA;
            var notOutputB = !inputB;
            var xorOutput = (inputA || inputB) && !(inputA && inputB);
            var nandOutput = !(inputA && inputB);
            var norOutput = !(inputA || inputB);

            // Display results and gate images in the table
            document.getElementById('andOutput').innerText = andOutput;
            document.getElementById('orOutput').innerText = orOutput;
            document.getElementById('notOutputA').innerText = notOutputA;
            document.getElementById('notOutputB').innerText = notOutputB;
            document.getElementById('xorOutput').innerText = xorOutput;
            document.getElementById('nandOutput').innerText = nandOutput;
            document.getElementById('norOutput').innerText = norOutput;

            // Display gate images
            document.getElementById('andGateImg').src = andOutput ? 'https://de-iitr.vlabs.ac.in/exp/truth-table-gates/images/and.png' : 'https://de-iitr.vlabs.ac.in/exp/truth-table-gates/images/and.png';
            document.getElementById('orGateImg').src = orOutput ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Or-gate-en.svg/1280px-Or-gate-en.svg.png' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Or-gate-en.svg/1280px-Or-gate-en.svg.png';
            document.getElementById('notAGateImg').src = notOutputA ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Not-gate-en.svg/1200px-Not-gate-en.svg.png' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Not-gate-en.svg/1200px-Not-gate-en.svg.png';
            document.getElementById('notBGateImg').src = notOutputB ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Not-gate-en.svg/1200px-Not-gate-en.svg.png' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Not-gate-en.svg/1200px-Not-gate-en.svg.png';
            document.getElementById('xorGateImg').src = xorOutput ? 'https://minecraftredstonelogicgates.weebly.com/uploads/5/8/2/5/58256031/6893209_orig.png' : 'https://minecraftredstonelogicgates.weebly.com/uploads/5/8/2/5/58256031/6893209_orig.png';
            document.getElementById('nandGateImg').src = nandOutput ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Nand-gate-en.svg/2000px-Nand-gate-en.svg.png' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Nand-gate-en.svg/2000px-Nand-gate-en.svg.png';
            document.getElementById('norGateImg').src = norOutput ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/NOR_ANSI_Labelled.svg/1200px-NOR_ANSI_Labelled.svg.png' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/NOR_ANSI_Labelled.svg/1200px-NOR_ANSI_Labelled.svg.png';
        }
    </script>
</head>
<body>
    <div id="info-section">
        <h2>Complex Logic Gates</h2>
        <p>Explore the behavior of various logic gates by toggling input values.</p>
    </div>

    <table>
        <tr>
            <th>Input A</th>
            <th>Input B</th>
            <th>AND</th>
            <th>OR</th>
            <th>NOT A</th>
            <th>NOT B</th>
            <th>XOR</th>
            <th>NAND</th>
            <th>NOR</th>
        </tr>
        <tr>
            <td><input type="checkbox" id="inputA" onchange="calculateOutput()"></td>
            <td><input type="checkbox" id="inputB" onchange="calculateOutput()"></td>
            <td id="andOutput"></td>
            <td id="orOutput"></td>
            <td id="notOutputA"></td>
            <td id="notOutputB"></td>
            <td id="xorOutput"></td>
            <td id="nandOutput"></td>
            <td id="norOutput"></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td><img src="" alt="AND Gate" id="andGateImg"></td>
            <td><img src="" alt="OR Gate" id="orGateImg"></td>
            <td><img src="" alt="NOT A Gate" id="notAGateImg"></td>
            <td><img src="" alt="NOT B Gate" id="notBGateImg"></td>
            <td><img src="" alt="XOR Gate" id="xorGateImg"></td>
            <td><img src="" alt="NAND Gate" id="nandGateImg"></td>
            <td><img src="" alt="NOR Gate" id="norGateImg"></td>
        </tr>
    </table>
</body>
</html>
