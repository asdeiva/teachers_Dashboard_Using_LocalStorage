let greet = document.getElementById("greet");

function signup() {
  console.log("Signup Working");
  let fname = document.querySelector("#fname").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let cpassword = document.querySelector("#cpassword").value;

  var users = JSON.parse(localStorage.getItem("users") || "[]");

  let exist =
    users.length &&
    JSON.parse(localStorage.getItem("users")).some(
      (data) => data.email.toLowerCase() == email.toLowerCase()
    );

  if (fname != "" && email != "" && password != "") {
    if (password === cpassword) {
      var user = {
        email: email,
        pass: password,
        username: fname,
      };
      if (!exist) {
        users.push(user);
        console.log("Added user # " + user.username);

        // Saving
        localStorage.setItem("users", JSON.stringify(users));
        console.log("user added");
        window.location.href = "login.html";
      } else {
        alert("<== Email already registered please signin ==>");
      }
    } else {
      alert("<== Password not match ==>");
    }
  } else {
    alert("<== Please Enter Required Info ==>");
  }
}

function login() {
  let email = document.getElementById("loginEmail").value,
    pwd = document.getElementById("loginPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  var currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]");

  console.log("login clicked");
  if (email != "" && pwd != "") {
    let exist =
      users.length &&
      JSON.parse(localStorage.getItem("users")).some(
        (data) => data.email.toLowerCase() == email && data.pass == pwd
      );
    if (!exist) {
      alert("Incorrect login credentials");
    } else {
      console.log("all test passed");
      let data = JSON.parse(localStorage.getItem("users"));
      let crntUsrData = data.find((usr) => usr.email === email);
      console.log(crntUsrData);

      let token = generateToken();
      let User = {
        email: crntUsrData.email,
        pass: pwd,
        username: crntUsrData.username,
        token: token,
      };
      currentUser.push(User);

      localStorage.setItem("currentUser", JSON.stringify(currentUser));

      window.location.href = "dashboard.html";
      //   displayinfo(crntUsrData.username,crntUsrData.email);
    }
  } else {
    alert("<== Please Enter Required Info ==>");
  }
}

function generateToken() {
  let capital_digit = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let small_digit = "abcdefghijklmnopqrstuvwxyz";
  let number = "0123456789";
  let special = "!@#$%^&*()_+";

  let characters = capital_digit + small_digit + number + special;

  let token = "";
  for (let i = 0; i < 12; i++) {
    let random = Math.floor(Math.random() * characters.length);
    token = token + characters[random];
  }
  return token;
}

function displayinfo(name, email) {
  console.log(name, email);
  greet.innerHTML = `<p>Welcome Back ${name}</p> <p>Your Email ID : ${email}</p>`;
}
