const validCredentials = {
    email: "gupiochenry@gmail.com",
    phone: "72245243",
    password: "henry2005."
  };
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const emailOrPhone = document.getElementById('emailOrPhone').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailOrPhone);
    const isPhone = /^\d{8}$/.test(emailOrPhone);
    //confirmar :v
    if (
      (isEmail && emailOrPhone === validCredentials.email || isPhone && emailOrPhone === validCredentials.phone) &&
      password === validCredentials.password
    ) {
      //si esta bien 
      window.location.href = 'http://127.0.0.1:5500/index.html';
    } else {
      errorMessage.style.display = 'block';
    }
  });