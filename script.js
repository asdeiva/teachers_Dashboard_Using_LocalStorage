var users = []
// 82100504842
window.localStorage.setItem("users", JSON.stringify(users));

var users = JSON.parse(window.localStorage.getItem("users") || "[]");

function signup(){
    event.preventDefault()
    console.log("Signup Working");
    let fname = document.querySelector('#fname').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    let cpassword = document.querySelector('#cpassword').value

    if(fname!="" && email!=""&&password!=""){
        if(password ===cpassword){
            var user = {
                email : email,
                pass : password,
                username : fname
            }
            
            users.push(user);
            console.log("Added user # " + user.username);
        
            // Saving
            window.localStorage.setItem("users", JSON.stringify(users));
            console.log("user added");
            window.location.href = "./login.html"
        }
        else{
            alert("<== Password not match ==>")
        }
    }
    else{
        alert("<== Please Enter Required Info ==>")
    }
    
}

function login(e){
    event.preventDefault()
    let crntEmail = document.getElementById('loginEmail').value
    let crntPassword = document.getElementById('loginPassword').value
    if(crntEmail == users.email[email]){

    }
}


