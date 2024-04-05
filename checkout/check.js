document.addEventListener('DOMContentLoaded', function() {
    var proceedButton = document.querySelector('.btn');
    var inputs = document.querySelectorAll('.input');

    proceedButton.addEventListener('click', function() {
        var allFilled = Array.from(inputs).every(input => input.value.trim() !== '');

        if (allFilled) {
            alert('All fields are filled. The form will now refresh for a new submission.');
            // Refresh the page to clear the form
            window.location.reload();
        } else {
            alert('Please fill out all the fields before proceeding.');
        }
    });
});
