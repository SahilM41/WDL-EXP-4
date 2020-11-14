$(document).ready(function(){
    // set initially button state hidden
    
    // use keyup event on email field
    $("#email").keyup(function(){
        if(validateEmail()){
            // if the email is validated
            // set input email border green
            $("#email").css("border","2px solid green");
            // and set label 
            $("#emailMsg").html("<p class='text-success'>Validated</p>");
        }else{
            // if the email is not validated
            // set border red
            $("#email").css("border","2px solid red");
            $("#emailMsg").html("<p class='text-danger'>Plz enter valid email</p>");
        }
        
    });
    // use keyup event on password
    $("#pswrd_1").keyup(function(){
        // check
        if(validatePassword()){
            // set input password border green
            $("#pswrd_1").css("border","2px solid green");
            //set passMsg 
            $("#passMsg").html("<p class='text-success'>Strong password</p> <br> <br>");
        }else{
                // set input password border red
            $("#pswrd_1").css("border","2px solid red");
            //set passMsg 
            $("#passMsg").html("<p class='text-danger'>weak password</p> <br> <br>");
        }
        
    });
$("#mob").keyup(function(){
    if(validateMob()){
      $("#mob").css("border","2px solid green");
      $("#MobMsg").html("<p class='text-success'>Valid</p> <br> <br>");
    }else{
      $("#mob").css("border","2px solid red");
      $("#MobMsg").html("<p class='text-danger'>invalid</p> <br> <br>");
    }

});
});

function validateEmail(){
    // get value of input email
    var email=$("#email").val();
    // use reular expression
     var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
     if(reg.test(email)){
         return true;
     }else{
         return false;
     }

}
function validatePassword(){
    //get input password value
    var pass=$("#pswrd_1").val();
    // check it s length
    if(pass.length > 7){
        return true;
    }else{
        return false;
    }

}

function validateMob(){
var mob=$('#mob').val();
var regmob = /^[789]\d{9}$/;
if(regmob.test(mob)){
  return true;
}else{
  return false;
}
}