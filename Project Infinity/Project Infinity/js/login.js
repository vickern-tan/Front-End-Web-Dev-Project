var returnLoginPage = document.getElementById("label-register");
function openLoginPage() {
    returnLoginPage.click();
    console.log("Message: Login page opened.");
}

function hideLogin() {
    var loginLink = document.getElementById("login-btn");
    loginLink.style.visibility = "hidden";
};

// Signup function
document.getElementById("signup").onsubmit = store;
function store(event) {
    event.preventDefault();

    var storeUserID = document.getElementById("SU_userID").value;
    var storeUserEmail = document.getElementById("SU_emailadd").value;
    var storeUserPass = document.getElementById("SU_password").value;
    var checkConfPassword = document.getElementById("SU_confpass").value;
    // Checking checkbox
    var selectedCheckbox = document.querySelectorAll("input[type=checkbox][name=agree]:checked");
    if (checkConfPassword != storeUserPass) {
        alert("Error: Passwords does not match. Please try again.");
        console.log("Error: Password does not match.");

        //console.log("Message: Input cleared!");
    } else if (selectedCheckbox.length !== 1) {
        alert("Error: Please agree to the terms and conditions.");
        console.log("Error: Terms and Conditions not checked!");
    } else {
        console.log("Message: Validation checking done!");

        localStorage.setItem("userID", storeUserID);
        console.log("Message: UserID stored!");

        localStorage.setItem("EmailAddress", storeUserEmail);
        console.log("Message: User email stored!");

        localStorage.setItem("Password", storeUserPass);
        console.log("Message: User password stored!");

        alert("Message: Sign up Successfully! Please press the \"Login\" button to proceed login");
        openLoginPage();
    }
};

function nameDisplay() {
    if (sessionStorage.length == 0) {
        alert("Welcome to Infinity Restaurant, " + localStorage.getItem("userid") + " !");
        //document.getElementById("displayName").innerHTML = localStorage.getItem("userid");
    }
    else
        alert("Welcome to Infinity Restaurant, " + sessionStorage.getItem("OneTimeUserID") + " !");
    //document.getElementById("displayName").innerHTML = sessionStorage.getItem("OneTimeName");
}

//User Loging In and check with local storage
var loginCheck = false;

document.getElementById("login").onsubmit = check;
function check(event) {
    event.preventDefault();
    var getUserID = localStorage.getItem("userID");
    console.log("Message: Retrieving UserID from local.....");

    var getUserPass = localStorage.getItem("Password");
    console.log("Message: Retrieving Password from local.....");

    var inputUserID = document.getElementById("LI_userID").value;
    var inputPass = document.getElementById("LI_password").value;
    //var rememberMeCheckBox = document.querySelectorAll("input[type=checkbox][name=remember-me]:checked");
    //Check User ID and Password
    if (inputUserID === getUserID && inputPass === getUserPass) {
        console.log("Message: UserID and Password match! Logging in...");

        window.location.href = "index.html";   // bring user to mainpage
        nameDisplay();
        loginCheck = true;
    } else if (loginCheck === true) {
        hideLogin();
    } else {
        alert("Error: Incorrect username or password.");
        console.log("Error: UserID or password incorrect!");
    }
};


//User login as guest
document.getElementById("guest-login").onclick = guestLogin;
function guestLogin(event) {
    event.preventDefault();
    var OTUserID = prompt("Please Enter Your Name");
    while (OTUserID == "") {  // while user does not enter their name, ask again
        var OTUserID = prompt("Please Enter Your Name");
    }
    if (OTUserID == null) {   // if user press cancel for prompt window
        return;
    }
    else {
        sessionStorage.setItem("OneTimeUserID", OTUserID);
        window.location.href = "index.html";
        nameDisplay();
    }
};

// Forget password function
document.getElementById("forget").onclick = forgetPass;
function forgetPass(event) {
    event.preventDefault();
    var Email = prompt("Message: Please enter your email.");
    while (Email == "") {  // while user does not enter their name, ask again
        var Email = prompt("Message: Please enter your username.");
    }
    if (Email == null) {   // if user press cancel for prompt window
        return;
    }
    else if (localStorage.getItem("EmailAddress") != Email) {
        alert("Error: Undefined Email. Please signup or try another email.");
    }
    else {
        alert("Username : " + localStorage.getItem("userID") + "\nPassword: " + localStorage.getItem("Password"));
    }
};

function showPassword() {
    var x = document.getElementById("SU_password");
    var y = document.getElementById("SU_confpass")
    if ((x.type === "password") || (y.type === "password")) {
        x.type = "text";
        y.type = "text";
    } else {
        x.type = "password";
        y.type = "password";
    }
}

//To Delete Account (Clear Storage)
document.getElementById("delete").onclick = clearStorage;
function clearStorage(event) {
    event.preventDefault();
    var Confirm = confirm("Message: Are You Sure To Delete Your Account?");
    if (Confirm) {
        localStorage.removeItem("userID");
        localStorage.removeItem("EmailAddress");
        localStorage.removeItem("Password");
        alert("Message:\nAccount Deleted! Press\"Back\" To back To Home Page!");
    }
}