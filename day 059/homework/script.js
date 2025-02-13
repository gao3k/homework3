// ფუნქცია, რომელიც ამოწმებს ფორმის ველებს
function validateForm() {
    // ველების მნიშვნელობების წამოღება
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    // შეტყობინების ელემენტის წამოღება
    var message = document.getElementById('message');
    
    // შემოწმება, თუ ყველა ველი შევსებულია
    if (fullName === "" || email === "" || password === "") {
        message.textContent = "All fields are required.";
    } else {
        message.textContent = "All fields are filled.";
        // მონაცემების დაბეჭდვა კონსოლში
        console.log("Full Name: " + fullName);
        console.log("Email: " + email);
        console.log("Password: " + password);
    }
}
