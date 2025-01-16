document.getElementById('passwordForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    if (newPassword === confirmPassword) {
        message.textContent = 'Password successfully changed!';
        message.className = 'success';
    } else {
        message.textContent = 'Passwords do not match!';
        message.className = 'error';
    }
});