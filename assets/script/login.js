var logo = document.getElementsByClassName("logo");

function validate(){
    var key = document.getElementById("key").value;
    var keyIDone = "36Sd10Wy";
    var keyIDtwo = "ekaboss";

    if(key == keyIDone || key == keyIDtwo){
        window.location.href='main.html';
        return false;
    } else{
        alert("Wrong key");
    }
}