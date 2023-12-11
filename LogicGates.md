---
layout: default
title: Logic Gates
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
    <!-- Inside the table cell for the AND gate -->
</body>
</html>
<hr>

- **Input A and Input B**: These columns represent the input states for the logic gates. Each input can be either true (1) or false (0).

- **AND, OR, NOT A, NOT B, XOR, NAND, NOR**: These columns represent the output of different logic gates based on the given inputs.

  - **AND Gate**: Outputs true (1) only if both Input A and Input B are true (1).

  - **OR Gate**: Outputs true (1) if at least one of the inputs (Input A or Input B) is true (1).

  - **NOT A Gate**: Outputs the opposite of Input A. If Input A is true (1), NOT A is false (0), and vice versa.

  - **NOT B Gate**: Outputs the opposite of Input B. If Input B is true (1), NOT B is false (0), and vice versa.

  - **XOR Gate (Exclusive OR)**: Outputs true (1) if only one of the inputs (Input A or Input B) is true (1), but not both.

  - **NAND Gate (NOT-AND)**: Outputs false (0) only if both Input A and Input B are true (1).

  - **NOR Gate (NOT-OR)**: Outputs false (0) if at least one of the inputs (Input A or Input B) is true (1).

Each row in the table represents a combination of input states, and the corresponding outputs for each logic gate are filled in based on the defined logic operations.

<html>
<div style = "background-image: url('image-2.png'); height:47vh; width:auto; background-repeat: no-repeat;background-size: cover;" >
</div>
</html>

## Understanding Logic Circuits

In the realm of digital electronics, a logic circuit is a fundamental building block that processes binary information. It operates based on the principles of Boolean logic, where inputs and outputs are binary states (0 or 1).

### Components of a Logic Circuit

- **Inputs**: Binary signals (0 or 1) provided to the circuit.
  
- **Logic Gates**: Fundamental units that perform logical operations on the input signals. Common types include AND, OR, NOT, XOR, NAND, and NOR gates.

- **Outputs**: The resulting binary signals produced by the logic gates.

### Basic Logic Gates

1. **AND Gate**:
   - Output is true (1) only if all inputs are true (1).

2. **OR Gate**:
   - Output is true (1) if at least one input is true (1).

3. **NOT Gate**:
   - Outputs the opposite of the input. If the input is true (1), the output is false (0), and vice versa.

4. **XOR Gate (Exclusive OR)**:
   - Output is true (1) if only one input is true (1), but not both.

5. **NAND Gate (NOT-AND)**:
   - Output is false (0) only if all inputs are true (1).

6. **NOR Gate (NOT-OR)**:
   - Output is false (0) if at least one input is true (1).

### Operation

1. **Input Signal Reception**:
   - Binary signals (0 or 1) are fed into the circuit.

2. **Logical Processing**:
   - Logic gates process the input signals based on their defined operations.

3. **Output Generation**:
   - The processed signals result in binary outputs.

4. **Signal Propagation**:
   - Outputs can further serve as inputs for subsequent logic gates, forming complex circuits.

### Applications

- **Digital Computers**: Logic circuits are the foundation of digital computing, where complex operations are achieved through combinations of simple logic gates.

- **Electronic Devices**: Found in various electronic devices to control and process information in a binary format.

Understanding the principles of logic circuits is crucial for anyone delving into the field of digital electronics and computer science.

