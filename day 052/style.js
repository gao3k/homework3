
function showMessage() {
    alert('Thank you for clicking the button!');
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;


    const feedback = `Thank you, ${name}! We have received your message and will get back to you at ${email}.`;
    document.getElementById('formFeedback').textContent = feedback;

   
    document.getElementById('contactForm').reset();
});
