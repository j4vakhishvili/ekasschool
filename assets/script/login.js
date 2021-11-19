var logo = document.getElementsByClassName("logo");

function validate(){
    var key = document.getElementById("key").value;
    var keyID = "admin";

    if(key == keyID){
        window.location.href='main.html';
        return false;
    } else{
        alert("Wrong key");
    }
}