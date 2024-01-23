---
toc: true
comments: true
layout: post
title: Signup Page demographics
description: Team teach about SASS Javascript login and signup page
courses: { compsci: {week: 20} }
type: hacks
---



<html lang="en">

<head>
<script>
    //import { uri, options } from '{{site.baseurl}}/assets/js/api/config.js';

    function signUp_user() {
        const enteredName = document.getElementById("name").value;
        const enteredUid = document.getElementById("uid").value;
        const enteredPassword = document.getElementById("password").value;
        const enteredDOB = document.getElementById("DOB").value;
        console.log("Name = " + enteredName)
        console.log("Uid = " + enteredUid)
        console.log("Password = " + enteredPassword)
        console.log("DOB = " + enteredDOB)
        signUp_api(enteredName, enteredUid, enteredPassword, enteredDOB)
        
      }
    

    function signUp_api(name, uid, pw, DOB){
      var myHeaders = new Headers();
      myHeaders.append("Accept", "*/*");
      myHeaders.append("Accept-Language", "en-US,en;q=0.9");
      myHeaders.append("Content-Type", "application/json");
      //myHeaders.append("Cookie", "jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfdWlkIjoidG9ueSJ9.jEShka0oXI1-uCuSTfo3ed5WRw3ASLNV0Tpn1kc5GB0");


      var raw = JSON.stringify({
          "name" : name,
          "uid": uid,
          "password": pw,
          "DOB": DOB
        });

      var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

      fetch("http://127.0.0.1:8086/api/users", requestOptions)
          .then(response => {
            if (response.ok) {
                console.log("Successfully Signed Up");
                window.location.href = "http://127.0.0.1:4200/DJAKTri2//2023/01/22/SASS_Javascript_Login.html"
              } else {
                console.error("Sign Up Failed");
                // You can handle failed login attempts here
                const errorMessageDiv = document.getElementById('errorMessage');
                errorMessageDiv.innerHTML = '<label style="color: red;">User Sign Up Failed</label>';
              }
          })
          .then(result => { 
            console.log(result);
            
            })
          .catch(error => console.log('error', error));
          

      
      //return response
    }


  </script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Page</title>
  <link rel="stylesheet" href="styles.css"> <!-- Include the compiled CSS file -->
</head>

<body>
    <div class="container">
    <form action="javascript:signUp_user()">
    <p><label for="Name">First Name:</label>
     <input type="text" id="name" placeholder="Your First Name" />
    </p>
    <p><label for="uid">User ID:</label> 
    <input type="text" id="uid" placeholder="User ID" />
    </p>
    <p><label for="password">Password:</label>
    <input type="text" id="password" placeholder="Password" />
    </p>
    <p><label for="DOB">Date Of Birth:</label>
    <input type="text" id="DOB" placeholder="Date of Birth (YYYY-MM-DD)" />
    </p>
    <button class="button-spacing" onclick="signUp_user()">Submit</button>

    </form>
  </div>
   

   
</body>

</html>


