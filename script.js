function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
   
    // You can add your own validation logic here
    if (username === 'user' && password === 'password') {
      window.location.href = 'home.html';
    } else {
      alert('Invalid credentials. Please try again.');
    }
   }
   
   function logout() {
    window.location.href = 'index.html';
   }