function validateContactForm() {

    var fn = document.getElementById("fn").value;
    var ln = document.getElementById("ln").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var cd = document.getElementById("CD").value;

    var fnError = document.getElementById("fnError");
    var lnError = document.getElementById("lnError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");
    var subjectError = document.getElementById("subjectError");
    var cdError = document.getElementById("cdError");

    fnError.style.display = lnError.style.display = emailError.style.display = phoneError.style.display = subjectError.style.display = cdError.style.display = "none";

    var isValid = true;
 
    if (fn === "") {
        fnError.textContent = "First Name is required.";
        fnError.style.display = "block";
        isValid = false;
    }

    if (ln === "") {
        lnError.textContent = "Last Name is required.";
        lnError.style.display = "block";
        isValid = false;
    }

    if (email === "") {
        emailError.textContent = "Email cannot be empty.";
        emailError.style.display = "block";
        isValid = false;
    } else {
        let emailFormat = /^\S+@\S+\.\S+$/;
        if (!emailFormat.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
            emailError.style.display = "block";
            isValid = false;
        }
    }

    if (phone === "") {
        phoneError.textContent = "Phone Number Cannot be empty.";
        phoneError.style.display = "block";
        isValid = false;
    } else {
        let phoneformat = /^[0-9]{10}$/;
        if (!phoneformat.test(phone)) {
            phoneError.textContent = "Please enter a valid phone number.";
            phoneError.style.display = "block";
            isValid = false;
        }
    }

    if (subject === "") {
        subjectError.textContent = "Subject cannot be empty.";
        subjectError.style.display = "block";
        isValid = false;
    }

    if (cd === "") {
        cdError.textContent = "Please enter a description.";
        cdError.style.display = "block";
        isValid = false;
    }
    
    if (isValid) {
        alert("Your details are saved on our database we will reach out you soon")
    }

    return isValid;

}