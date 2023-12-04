---
layout: default
title: Binary clock
permalink: /Binaryclock
---
<html lang="en">
<head>
  <meta charset="UTF-8">
<<<<<<< HEAD
  <!-- Rest of your head content -->
=======

 
>>>>>>> a54718c55787d59a3259af38bb8ffb7bbafc5095

  <style>
    body {
      background-color: #000;
      margin: 0;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    /* Twinkling stars animation */
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

    #bincont {
      position: relative;
      z-index: 1;
    }

    /* Styles for dots and filled dots */
    .dot,
    .dotfilled,
    .blank {
      position: relative;
      width: 20px;
      height: 20px;
      margin: 10px;
      background-repeat: no-repeat;
    }

    /* Centering text vertically */
    span {
      line-height: 50px;
      display: inline-block;
      vertical-align: middle;
      margin: 10px;
    }

    #universe-text {
      font-family: 'Star Wars', sans-serif;
      font-size: 32px;
      color: #FFFFFF;
    }
  </style>

</head>

<body translate="no">
  <!-- "STARWARS UNIVERSE" text -->
  <div id="universe-text">STARWARS UNIVERSE</div>

  <!-- Script for generating twinkling stars -->
  <script>
    var numberOfStars = 1000;

    for (var i = 0; i < numberOfStars; i++) {
      var randomX = Math.floor(Math.random() * window.innerWidth);
      var randomY = Math.floor(Math.random() * window.innerHeight);

      document.write('<div class="star" style="left:' + randomX + 'px; top:' + randomY + 'px;"></div>');
    }
  </script>

  <!-- Container for the binary clock -->
  <div id="bincont"></div>

  <!-- Displaying digital and actual time -->
  <div id="digital"></div>
  <div id="actual"></div>

  <!-- jQuery library -->
  <script src='//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

  <!-- Binary clock script -->
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

  <!-- Rest of your script content -->

</body>

</html>