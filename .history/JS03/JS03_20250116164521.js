document.getElementById('passwordForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    // Check if fields are empty
    if (!newPassword || !confirmPassword) {
        alert('Please fill out this field.');
        return;
    }

    // Check if passwords match
    if (newPassword === confirmPassword) {
        message.textContent = 'Password successfully changed!';
        message.className = 'success';
    } else {
        message.textContent = 'Passwords do not match, please try again.';
        message.className = 'error';
    }
});