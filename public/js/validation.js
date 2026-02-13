// Get form and input elements
let form = document.getElementById('vacationForm');
let destinationSelect = document.getElementById('destination');
let departureDateInput = document.getElementById('departureDate');
let travelersInput = document.getElementById('travelers');

// Error message elements
let destinationError = document.getElementById('destinationError');
let dateError = document.getElementById('dateError');
let travelersError = document.getElementById('travelersError');

// Validation functions
function validateDestination() {
    let destination = destinationSelect.value;
    
    if (destination === '' || destination === null) {
        destinationError.textContent = 'Please select a destination';
        destinationSelect.parentElement.classList.add('error');
        return false;
    } else {
        destinationError.textContent = '';
        destinationSelect.parentElement.classList.remove('error');
        return true;
    }
}

function validateTravelers() {
    let travelers = parseInt(travelersInput.value);
    
    if (isNaN(travelers) || travelers <= 0) {
        travelersError.textContent = 'Number of travelers must be greater than 0';
        travelersInput.parentElement.classList.add('error');
        return false;
    } else {
        travelersError.textContent = '';
        travelersInput.parentElement.classList.remove('error');
        return true;
    }
}

function validateDate() {
    let selectedDate = departureDateInput.value;
    
    if (selectedDate === '') {
        dateError.textContent = 'Please select a departure date';
        departureDateInput.parentElement.classList.add('error');
        return false;
    } else {
        dateError.textContent = '';
        departureDateInput.parentElement.classList.remove('error');
        return true;
    }
}

// Clear error messages when user interacts with fields
destinationSelect.addEventListener('change', () => {
    if (destinationSelect.value !== '') {
        destinationError.textContent = '';
        destinationSelect.parentElement.classList.remove('error');
    }
});

departureDateInput.addEventListener('change', () => {
    if (departureDateInput.value !== '') {
        dateError.textContent = '';
        departureDateInput.parentElement.classList.remove('error');
    }
});

travelersInput.addEventListener('input', () => {
    let travelers = parseInt(travelersInput.value);
    if (!isNaN(travelers) && travelers > 0) {
        travelersError.textContent = '';
        travelersInput.parentElement.classList.remove('error');
    }
});

// Form submission validation
form.addEventListener('submit', (e) => {
    // Prevent default form submission
    e.preventDefault();
    
    // Validate all fields
    let isDestinationValid = validateDestination();
    let isTravelersValid = validateTravelers();
    let isDateValid = validateDate();
    
    // If all validations pass, submit the form
    if (isDestinationValid && isTravelersValid && isDateValid) {
        // All validations passed - submit the form
        form.submit();
    } else {
        // Display error messages (already shown by individual validation functions)
        console.log('Form validation failed');
    }
});

// Initialize form - ensure default values don't bypass validation
window.addEventListener('load', () => {
    // Set travelers to 0 by default to force user input
    travelersInput.value = '0';
});