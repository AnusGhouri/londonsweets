var text="";
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  document.getElementById("btn").onclick=function(){
    if(name=="" && email=="" && message==""){
      document.getElementById("text").innerHTML=("&nbsp;&nbsp;&nbsp;"+"*Required")
    }
    else("failed")
  }

  
 