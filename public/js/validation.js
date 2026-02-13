document.getElementById("vacationForm").onsubmit = () => {

    clearErrors();

    let isValid = true;
    
    // Validate destination
    let destination = document.getElementById("destination").value;
    if(!destination || destination === "") {
        document.getElementById("destinationError").style.display = "block";
        isValid = false;
    }

    // Validate departure date
    let departureDate = document.getElementById("departureDate").value;
    if(!departureDate) {
        document.getElementById("dateError").style.display = "block";
        isValid = false;
    }

    // Validate number of travelers
    let travelers = parseInt(document.getElementById("travelers").value);
    if(!travelers || travelers <= 0) {
        document.getElementById("travelersError").style.display = "block";
        isValid = false;
    }
   
    return isValid;

}

/* Clear all error messages when form is submitted */
function clearErrors() {
    let errors = document.getElementsByClassName("error-message");
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}