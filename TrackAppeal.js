let TrackAppeal='\
<h1 id="Dark5">Niber Artist Track Or Album Appeal</h1>\
<form action="https://sheetdb.io/api/v1/as33dvglfivrf" method="Post" id="inData">\
<span id="label">Artist UserName</span>\
<input type="text" name="ArtistUserName" required>\
<span id="label">Artist Email</span>\
<input type="email" name="ArtistEmail" required>\
<span id="label">Artist Password</span>\
<input type="password" name="ArtistPassword" maxlength="16" minlength="8" required>\
<span id="label">Niber Music ID</span>\
<input type="text" name="ArtitsMusicID" maxlength="9" required>\
<span id="label">Track Or Album Name</span>\
<input type="text" name="TrackName" maxlength="100" required>\
<span id="label">Reason For Track Deletion</span>\
<input type="text" name="Reason" maxlength="100" required>\
<span id="label">Niber Music Terms And Condtions</span>\
<p>Do You Agree to the Terms and Conditions of Account Track Appeal</p>\
<input type="checkbox" name="Terms" required>\
<h1 id="Dark6">Niber Appeal Team Will Look Into Your Appeal And Return A Response In One Week</h1>\
<button id="Dark5" onclick="AppealTrackUser()">Appel My Track</button>\
</form>\
';
AppealTrackUser=()=>{
    var form = document.getElementById('inData');
    form.addEventListener("submit", e => {
        e.preventDefault();
        fetch(form.action, {
            method : "POST",
            body: new FormData(document.getElementById("inData")),
        }).then(
            response => response.json()
        ).then((html) => {
          if (form.length>=1) {
            DIV.innerHTML='<h1 id="Dark5">Niber Appeal Will Get Back To You Within A 7 Days!!!</h1>'
          }else{
              return false;
          }
        });
      });
}