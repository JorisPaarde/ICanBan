function validateForm(contactForm) {
    var validatedForm = true;
    var modal = document.getElementById("confirmationModal");
    // is the fullname longer than 4 chars?
    if (contactForm.name.value.length < 5) {
        validatedForm = false;
        console.log('to short');
        modal = document.getElementById("badNameModal");
    // does the name include letters?
    }if(!/[a-zA-Z]/.test(contactForm.name.value)){
        validatedForm = false;
        console.log('no letters');
        modal = document.getElementById("badNameModal");
    }
    // does the name include at least one space?
    return [validatedForm, modal];
}

// send email via emailjs
function sendMail(contactForm) {
    // get validation and correct validation modal
    var validatedForm = validateForm(contactForm)[0];
    var modal = validateForm(contactForm)[1];
    // if validation checks out
    if (validatedForm == true) {
        // show confirmation modal
        displayModal(modal);
        // send this email
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
        // To block from loading a new page
        return false;
    }
    // if validation fails
    else {
        // show validation error modal
        displayModal(modal);
        // To block from loading a new page
        return false; 
    }
}


// Confirmation modal
function displayModal(modal) {
    // Get this modal
    var modal = document.getElementById(modal.id);
    // Show this modal
    modal.style.display = "block";
    // When the user clicks on the modal close it
    modal.onclick = function () {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};
