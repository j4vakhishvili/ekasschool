function validate(){
    var key = document.getElementById("key").value;
    var keyIDone = "36Sd10Wy";
    var keyIDtwo = "ekaboss";
    var keyIDthree = "admin";

    if(key == keyIDone || key == keyIDtwo || key == keyIDthree){
        window.location.href='main.html';
        return false;
    } else{
        alert("Wrong key");
    }
}
