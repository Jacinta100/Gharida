const form = document.getElementById('signup-form');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // You can perform form validation here
    if (name === '' || email === '' || password === '') {
        alert('Please fill in all fields.');
    } else {
        // You can perform form submission or other actions here
        alert('Form submitted successfully!');
        form.reset(); // Reset the form after submission
    }
});
