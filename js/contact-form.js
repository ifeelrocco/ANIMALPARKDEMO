document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading state
    const submitBtn = document.querySelector('.submit-btn');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Get form values manually
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const timestamp = new Date().toLocaleString();

    // Log the data being sent
    console.log('Sending data:', { name, email, subject, message, timestamp });
    
    // Google Apps Script URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyF17uZQD4CPsKnOJb6icwFXbmDusfSDZlDe7U8oWikNyD49HuGX9HG13cmOJnEhTuJ/exec';

    // Create URL with parameters for GET request
    const url = `${scriptURL}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}&message=${encodeURIComponent(message)}&timestamp=${encodeURIComponent(timestamp)}`;
    
    // Use fetch with GET method
    fetch(url)
        .then(response => {
            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);
            return response.text();
        })
        .then(data => {
            console.log('Response data:', data);
            // Show success message
            alert('Thank you! Your message has been sent successfully.');
            
            // Reset form
            document.getElementById('contactForm').reset();
        })
        .catch(error => {
            console.error('Error details:', error);
            alert('Error: ' + error.message);
        })
        .finally(() => {
            // Reset button
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        });
});
