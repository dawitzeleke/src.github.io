function validation() {
    var Email = document.getElementById("Email");
    var password = document.getElementById("password");
    if (Email.value.trim()=="" || password.value.trim()==""){
      alert("Please enter an email or password")
      return false;
    }
    else{
       true;
    }
  }
 