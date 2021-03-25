function validateForm(contactForm) {
    var validatedForm = true;
    if (contactForm.name.value.length < 5) {
        validatedForm = false;
        console.log('name to short');
        modal = document.getElementById("badNameModal");
        modal.style.display = "block";
    }else{
        modal = document.getElementById("confirmationModal");
    }
    return validatedForm;
}

// send email via emailjs
function sendMail(contactForm) {
    var validatedForm = true;
    validatedForm = validateForm(contactForm);
    console.log(validatedForm);
    if (validatedForm == true) {
        modal.style.display = "block"; // show confirmation modal
        emailjs.send("service_uyji557", "contact-form", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "message": contactForm.featurerequest.value
        })
            .then(
                function (response) {
                    console.log("SUCCESS", response);
                },
                function (error) {
                    console.log("FAILED", error);
                }
            );
        return false;  // To block from loading a new page
    }else{
        return false; // To block from loading a new page
    }
}


// Confirmation modal

// Get the modal
var modal = document.getElementById("confirmationModal");

// Get the button that opens the modal
var btn = document.getElementById("email-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}