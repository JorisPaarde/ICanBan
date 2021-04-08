function validateForm(contactForm) {
    var validatedForm = false;
    var modal = document.getElementById("confirmationModal");

    // is the fullname longer than 4 chars?
    if (contactForm.name.value.length < 5) {
        console.log('name to short');
        modal = document.getElementById("badNameModal");

        // does the name include letters?
    } if (!/[a-zA-Z]/.test(contactForm.name.value)) {
        console.log('name has no letters');
        modal = document.getElementById("badNameModal");

        // does the name include at least one space?
    } if (!/\s/.test(contactForm.name.value)) {
        console.log('name has no space');
        modal = document.getElementById("badNameModal");

        // does the feature request input include any letters?
    } if (!/[a-zA-Z]/.test(contactForm.featurerequest.value)) {
        console.log('feature has no letters');
        modal = document.getElementById("badFeatureModal");

        // does the feature request input include letters or numbers?
    } if (contactForm.featurerequest.value.match(/\w/g) != null) {
        // does the feature request input include at least 4 letters or numbers?
        if (contactForm.featurerequest.value.match(/\w/g).length < 4) {
            console.log('feature has less than 4 letters');
            modal = document.getElementById("badFeatureModal");
        }

        // is the feature request input longer than 4 chars?
    } if (contactForm.featurerequest.value.length < 4) {
        console.log('feature to short');
        modal = document.getElementById("badFeatureModal");

        // is the email input longer than 5 chars?
    } if (contactForm.emailaddress.value.length < 5) {
        console.log('email to short');
        modal = document.getElementById("badEmailModal");

        // does the email input include a dot?
    } if (!/\u002E/.test(contactForm.emailaddress.value)) {
        console.log('email has no .');
        modal = document.getElementById("badEmailModal");
    }else{
        validatedForm = true;
    }
    return [validatedForm, modal];
}

// send email via emailjs edited from https://github.com/Code-Institute-Solutions/InteractiveFrontendDevelopment-Resume/blob/master/03-SendingEmailsUsingEmailJS/06-sending_emails/assets/js/sendEmail.js
function sendMail(contactForm) {
    // get validation and correct validation modal
    var validatedForm = validateForm(contactForm);
    var modal = validatedForm[1];
    validatedForm = validatedForm[0];
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
        contactForm.reset();
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

// Confirmation modal edited from https://www.w3schools.com/howto/howto_css_modals.asp
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
