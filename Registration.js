

  //Basic info validation 


      function nameVal() {
        var name=document.getElementById("name").value;

        var regex= /^[a-zA-Z][a-zA-Z.\_\-\ ][\ a-zA-Z.\-\_]+/ ;


        if (regex.test(name)) {
            document.getElementById("nameErr").innerHTML= "";
            //return true;
            //document.getElementById("username").style.backgroundColor="Green";
            
        }
        else
        {

            //document.getElementById("username").style.backgroundColor="RED";

            document.getElementById("nameErr").innerHTML= "Only Can contain a-z, A-Z, period(.) , dash only(-) and at least two words";
        }


    }



    function lastNameVal() {
        var lastName=document.getElementById("lastName").value;
        regex= /^[a-zA-Z][a-zA-Z.\_\-\ ][\ a-zA-Z.\-\_]+/ ;
        

        if (regex.test(lastName)) {
            document.getElementById("lastNameErr").innerHTML= ""; 
        }
        else
        {
            document.getElementById("lastNameErr").innerHTML= "Only Can contain a-z, A-Z, period(.) , dash only(-) and at least two words";
        }


    }


    function religionVal(){
        var Religion= document.getElementById("Religion").value;
        if(Religion == ""){

            document.getElementById("religionErr").innerHTML= "*Please select religion";

        }
        else
          document.getElementById("religionErr").innerHTML= "";


    }



    function emailVal() {
        var email=document.getElementById("email").value;
        regex= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
        

        if (regex.test(email)) {
            document.getElementById("emailErr").innerHTML= ""; 
        }
        else
        {
            document.getElementById("emailErr").innerHTML= "Must be a valid email_address : anything@example.Com";
        }


    }


    
    /*function gender(src) {

      
        //var male=document.getElementById("male").value;
        //var female=document.getElementById("female").value;
        //var other=document.getElementById("other").value;


        //if (male.checked=true) {
            document.getElementById("genderErr").innerHTML= "vdvdvdvd"; 
        /*}
        else
        {
            document.getElementById("genderErr").innerHTML= "Gender is required dvfddcdc";
        }
      

      //document.getElementById("genderErr").innerHTML= "";

    }*/






    //account info validation 
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


    function RePassVal() {
        var rePassword=document.getElementById("rePassword").value;
        var regex= /^[0-9a-zA-Z@%#$]{8,}$/ ;
        

        if (regex.test(rePassword)) {
            document.getElementById("rePasswordErr").innerHTML= "";

            if(document.getElementById("password").value != document.getElementById("rePassword").value){

                document.getElementById("rePasswordErr").innerHTML= "didn't macth the password ";
                
            }
        }
        else
        {
            document.getElementById("rePasswordErr").innerHTML= "UPassword must not be less than eight (8) characters contain at least one of the special characters (@, #, $, %)";
        }


    }


