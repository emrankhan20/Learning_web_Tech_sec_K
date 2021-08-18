
    function userVal() {
        var username=document.getElementById("username").value;

        var regex= /^[0-9a-zA-Z-_]{2,}[^\s.]$/ ;


        if (regex.test(username)) {
            document.getElementById("userErr").innerHTML= "";
            //return true;
            //document.getElementById("username").style.backgroundColor="Green";
            
        }
        else
        {

            //document.getElementById("username").style.backgroundColor="RED";

            document.getElementById("userErr").innerHTML= "User Name must contain at least two (2) characters and can contain alpha numeric characters, period, dash or underscore only";
        }


    }



    function passVal() {
        var password=document.getElementById("password").value;
        var regex= /^[0-9a-zA-Z@%#$]{8,}$/ ;
        

        if (regex.test(password)) {
            document.getElementById("passErr").innerHTML= ""; 
        }
        else
        {
            document.getElementById("passErr").innerHTML= "UPassword must not be less than eight (8) characters contain at least one of the special characters (@, #, $, %)";
        }


    }






