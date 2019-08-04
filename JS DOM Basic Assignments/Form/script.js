const validate = () => {
  let user = document.getElementById('user').value,
    password = document.getElementById('password').value,
    confPassword = document.getElementById('confPassword').value,
    mobile = document.getElementById('mobile').value,
    email = document.getElementById('email').value;
  if (user == '') {
    document.getElementById('name').innerHTML = '** Please fill the Name field';
    return false;
  }
  if ((user.length <= 2) || (user.length > 20)) {
    document.getElementById('name').innerHTML = '** Name length should be \
  between 2 to 20 characters';
    return false;
  }
  if (!isNaN(user)) {
    document.getElementById('name').innerHTML = '** Only characters are allowed';
    return false;
  }
  if (password == '') {
    document.getElementById('pass').innerHTML = '** Please fill the Password field';
    return false;
  }
  if ((password.length <= 5) || (password.length > 20)) {
    document.getElementById('pass').innerHTML = '** Password length should be \
  between 8 to 20 characters';
    return false;
  }
  if (confPassword == '') {
    document.getElementById('cnfpass').innerHTML = '** Please fill the Confirm \
  Password field';
    return false;
  }
  if (password != confPassword) {
    document.getElementById('cnfpass').innerHTML = '** Password not matching';
    return false;
  }

  if (mobile == '') {
    document.getElementById('mobno').innerHTML = '** Please fill the Mobile \
  Number field';
    return false;
  }
  if (isNaN(mobile)) {
    document.getElementById('mobno').innerHTML = '** Only digits allowed';
    return false;
  }
  if (mobile.length != 10) {
    document.getElementById('mobno').innerHTML = '** 10 digits required';
    return false;
  }
  if (email == '') {
    document.getElementById('emid').innerHTML = '** Please fill the EmailID field';
    return false;
  }
  if (email.indexOf('@') <= 0) {
    document.getElementById('emid').innerHTML = '** @ Invalid Position';
    return false;
  }
  if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
    document.getElementById('emid').innerHTML = '** . Invalid Position';
    return false;
  }
}

function popUp() {
  document.getElementById('submitContainer').style.display = 'block';
}
