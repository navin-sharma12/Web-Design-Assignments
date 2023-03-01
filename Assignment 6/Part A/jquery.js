$(document).ready(function () {
    $("#error_emailid").hide();
    $("#error_username").hide();
    $("#error_password").hide();

    let usernameError = true;
    let emailidError = true;
    let passwordError = true;

    $("#emailid").keyup(function () {
        let regex = /\w+\.\w+\@northeastern\.edu/;
        let emailidValue = $("#emailid").val();
        if(emailidValue.length == 0 | regex.test(emailidValue) == false) {
            $("#error_emailid").show();
            emailidError = true;
            return false;
        } else {
            $("#error_emailid").hide();
            emailidError = false;
            return true;
        }
    })
    
    $("#username").keyup(function () {
        let usernameValue = $("#username").val();
        if(usernameValue.length == 0) {
            $("#error_username").show();
            usernameError = true;
            return false;
        } else {
            $("#error_username").hide();
            usernameError = false;
            return true;
        }
    })
    
    $("#password").keyup(function () {
        let regexPassword = /(?=.*[@#$%&*()!^])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}/;
        let passwordValue = $("#password").val();
        if(passwordValue.length == 0 | regexPassword.test(passwordValue) == false) {
            $("#error_password").show();
            passwordError = true;
            return false;
        } else {
            $("#error_password").hide();
            passwordError = false;
            return true;
        }
    })

    $("#submitButton").click(function () {
        if(usernameError | emailidError | passwordError == true) {
            if(usernameError == true) {
                $("#error_username").show();
            }
            if(emailidError == true) {
                $("#error_emailid").show();
            }
            if(passwordError == true) {
                $("#error_password").show();
            }
            return false;
        }
    })
})