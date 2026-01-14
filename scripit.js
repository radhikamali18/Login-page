function validateLogin() {
    let user = document.getElementById("loginUsername").value;

    alert("Login Successful! Welcome " + user);
    return false; // page reload stop
}

function validateSignup() {
    let pass = document.getElementById("signupPassword").value;
    let confirm = document.getElementById("confirmPassword").value;

    if (pass !== confirm) {
        alert("Passwords do not match!");
        return false;
    }

    alert("Account Created Successfully!");
    showLogin();
    return false;
}

function forgotPassword() {
    alert("Password recovery link has been sent to your email.");
}

function showSignup() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupForm").classList.remove("hidden");
}

function showLogin() {
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
}
