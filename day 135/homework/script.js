function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Registration Successful');
  }
  
  function loginUser() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
  
    if (username === localStorage.getItem('username') && password === localStorage.getItem('password')) {
      alert('Login Successful');
    } else {
      alert('Incorrect credentials');
    }
  }
  