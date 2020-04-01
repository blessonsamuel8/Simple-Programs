function login(){
    var email1 = document.getElementById("email").value;
    var pass1 = document.getElementById("pass").value;
    var verify = localStorage.getItem(email1);
    if(pass1 == verify){
        alert("welcome");
    }
    else{
        alert("Wrong")
    }
}