
// add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // get the email address inside the email input field
    const emailField = document.getElementById('user-email');
    // always remember to the use .value to get text from an input field
    const email = emailField.value;
    
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if(email === 'bank@gmail.com' && password ==='12345'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user name or password')
    }
   
});

