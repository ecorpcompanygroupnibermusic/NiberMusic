let NewMember='\
<form action="https://sheetdb.io/api/v1/fc7x91s4sthwo" method="Post" id="Member">\
<h1 id="label2">Niber Artist Account Sign Up</h1>\
    <span id="label">Artist UserName</span>\
    <input type="text" name="ArtistUserName" id="UserName" required>\
    <span id="label">Artist Email</span>\
    <input type="email" name="ArtistEmail" id="Email" required>\
    <span id="label">Artist Password</span>\
    <input type="password" name="ArtistPassword" maxlength="16" minlength="8" required>\
    <span id="label">Date Of Birth</span>\
    <input type="date" name="Date" required>\
    <span id="label">Music Catergory</span>\
    <input type="text" name="Catergory" required>\
    <span id="label1">Complete Payments On Next Page</span>\
    <button id="Send" onclick="CreateArtistAccount()">Next</button>\
</form>\
';
CreateArtistAccount=()=>{
    var form = document.getElementById('Member');
    form.addEventListener("submit", e => {
        e.preventDefault();
        fetch(form.action, {
            method : "POST",
            body: new FormData(document.getElementById('Member')),
        }).then(
            response => response.json()
        ).then((html) => {
          if (form.length>=1) {
            DIV.innerHTML='<h1 id="Dark6">Once Payments Are Confirmed,Your Account Will Be Created!_This Takes Usually 7 Days</h1> '+'<button onclick="Pay()">PayNow</button>'
            Pay=()=>{
                open('https://tinyurl.com/4nbsbd33');
            }
          }else{
              return false;
          }
        });
      });
}








