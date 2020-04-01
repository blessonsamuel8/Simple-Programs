function signup(){
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;

    localStorage.setItem(email,pass);
    document.location.href("login.html",true);
    return false;
}