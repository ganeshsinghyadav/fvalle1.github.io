function contacted() {
  document.getElementById('telegram').style.color="#AAAAAA";
  document.getElementById('mail').style.color="#AAAAAA";
  document.getElementById('contact-thanks').innerHTML="Thank you for your message!";
}

function getAppVersion(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var version=JSON.parse(this.responseText);
            document.getElementById("app-version").innerHTML ="My app is now at version "+version["version"];
       }
    };
  xhttp.open("GET","https://phil-personal-api.herokuapp.com/Temperature_version.php?key=xenoncursedavitindiesyb",true);
  xhttp.send();
}
