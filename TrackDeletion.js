let TrackAccount='\
<h1 id="Dark4">Niber Artist Track Deletion</h1>\
<form action="https://sheetdb.io/api/v1/cgv2pc73q9ald" method="Post" id="inData">\
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
<p>Do You Agree to the Terms and Conditions of Account Track Deletion</p>\
<input type="checkbox" name="Terms" required>\
<h1 id="Dark6">Once Form is Sumbitted Process Is Irreversable And Account Cannot Be Retrieved</h1>\
<button id="Dark3" onclick="DeletedTrackUser()">Delete My Track</button>\
</form>\
';
DeletedTrackUser=()=>{
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
            DIV.innerHTML='<h1 id="Dark4">Your Track Will Be Deleted !!!</h1>'
          }else{
              return false;
          }
        });
      });
}