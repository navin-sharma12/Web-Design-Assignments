function onFormRestClick() {
    var resetForm = document.getElementById("container")
    element.reset()
}

function onSubmitFormClick(event) {
    let title = document.forms["formData"]["title"].value;
    if(title == "") {
        alert("Title cannot be empty");
        return false;
    }

    let firstName = document.forms["formData"]["firstName"].value;
    if(firstName == "") {
        valueFirstName = document.getElementById("firstName");
        valueFirstName.style.backgroundColor = "red";
    }

    let lastName = document.forms["formData"]["lastName"].value;
    if(lastName == "") {
        valueFirstName = document.getElementById("lastName");
        valueFirstName.style.backgroundColor = "red";
    }

    let emailID = document.forms["formData"]["emailId"].value;
    if(emailID == "") {
        valueFirstName = document.getElementById("emailId");
        valueFirstName.style.backgroundColor = "red";
    }

    let phoneNumber = document.forms["formData"]["phoneNumber"].value;
    if(phoneNumber == "") {
        valueFirstName = document.getElementById("phoneNumber");
        valueFirstName.style.backgroundColor = "red";
    }

    let streetAddress1 = document.forms["formData"]["streetAddress1"].value;
    if(streetAddress1 == "") {
        valueFirstName = document.getElementById("streetAddress1");
        valueFirstName.style.backgroundColor = "red";
    }

    let streetAddress2 = document.forms["formData"]["streetAddress2"].value;
    if(streetAddress2 == "") {
        valueFirstName = document.getElementById("streetAddress2");
        valueFirstName.style.backgroundColor = "red";
    }

    let city = document.forms["formData"]["city"].value;
    if(city == "") {
        valueFirstName = document.getElementById("city");
        valueFirstName.style.backgroundColor = "red";
    }

    let state = document.forms["formData"]["state"].value;
    if(state == "") {
        valueFirstName = document.getElementById("state");
        valueFirstName.style.backgroundColor = "red";
    }

    let zipCode = document.forms["formData"]["zipcode"].value;
    if(zipCode == "") {
        valueFirstName = document.getElementById("zipcode");
        valueFirstName.style.backgroundColor = "red";
    }

    let howDidYouHear = document.forms["formData"]["source"].value;
    if(howDidYouHear == "") {
        alert("How did you hear cannot be empty");
        return false;
    }

    let comments = document.forms["formData"]["text"].value;
    if(comments == "") {
        valueFirstName = document.getElementById("comments");
        valueFirstName.style.backgroundColor = "red";
    }
}