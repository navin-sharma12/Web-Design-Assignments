$(document).ready(() => {
    $("#error_emailid").hide();
    $("#error_username").hide();
    $("#error_password").hide();
    $("#error_input1").hide();
    $("#error_input2").hide();

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

    $("input[id='output']").attr("readonly", true);

    let input1Error = true;
    let input2Error = true;
    
    $("#input1").keyup(() => {
        let input1 = parseFloat($("#input1").val());
        let regexCalculator = /^[0-9]*\.?[0-9]?.$/;
        if(input1.length == 0 | regexCalculator.test(input1) == false) {
            input1Error = true;
            $("#error_input1").show();
            return false;
        } else {
            input1Error = false;
            $("#error_input1").hide();
        }

        $("#input2").keyup(() => {
            let input2 = parseFloat($("#input2").val());
            regexCalculator = /^[0-9]*\.?[0-9]?.$/;
            if(input2.length == 0 | regexCalculator.test(input2) == false) {
                input2Error = true;
                $("#error_input2").show();
                return false;
            } else {
                input2Error = false;
                $("#error_input2").hide();
            }

            $("button").click((event) => {
                const buttonId = event.target.id;
                switch(buttonId) {
                    case "buttonAdd":
                        $("input#output").val(input1 + input2);
                        break;
                    case "buttonSubtract":
                        $("input#output").val(input1 - input2);
                        break;
                    case "buttonMultiply":
                        $("input#output").val(input1 * input2);
                        break;
                    case "buttonDivide":
                        $("input#output").val(input1 / input2);
                        break;
                }
            })
        })
    })

    

    
    
})