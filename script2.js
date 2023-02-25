let greet = document.getElementById("greet");

let masterData = JSON.parse(localStorage.getItem("users"));
let data = JSON.parse(localStorage.getItem("currentUser"));

let crntName = data[0].username;
let email = data[0].email;

displayinfo(crntName, email);

function changePass() {
  pwd = document.getElementById("OldPassword").value;
  let newpass = document.getElementById("NewPassword").value;
  let confirmnew = document.getElementById("cNewPassword").value;
  let validPass =
    masterData.length &&
    JSON.parse(localStorage.getItem("users")).some(
      (data) => data.email.toLowerCase() == email && data.pass == pwd
    );
  console.log(validPass);

  if (!validPass) {
    alert("Incorrect password");
  } else {
    if (newpass == confirmnew) {
      objIndex = masterData.findIndex((obj) => obj.pass == pwd);

      //Update password to new one
      masterData[objIndex].pass = confirmnew;
      console.log(masterData);
      localStorage.setItem("users", JSON.stringify(masterData));
      let data = JSON.parse(localStorage.getItem("currentUser"));
      data[0].pass = confirmnew;
    }
  }
}

function logout() {
  window.location.href = "/index.html";
  localStorage.removeItem("currentUser");
}

function displayinfo(name, email) {
  console.log(name, email);
  greet.innerHTML = `<p>Welcome Back ${name}</p> <p>Your Email ID : ${email}</p>`;
}
