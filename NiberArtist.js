let NiberArtistData='\
<div id="NiberArtist">\
<h1 id="Message"></h1>\
<span id="label">Niber Music Artist Console</span>\
<br><br>\
<span id="label">Niber Music Artist Email</span>\
<input id="EmailArea" type="email" placeholder="Enter Niber Music Email">\
<span id="label">Niber Music Artist Id</span>\
<input id="CodeArea" type="text" maxlength="9" placeholder="Enter Niber Music Id">\
<button id="Send" onclick="ArtistCode()">LogIn</button>\
<button id="Send" onClick="Forget()">Forgot Artist ID</button>\
<button id="Send" onClick="Become()">Become Artist</button>\
</div>\
<div id="Forget">\
<h1 id="Message1">Retrieve Account ID</h1>\
<span id="label">Niber Music Artist Email</span>\
<input id="EmailArea1" type="email" placeholder="Enter Niber Music Email">\
<span id="label">Niber Music Artist Password</span>\
<input id="PasswordArea1" type="password" maxlength="16" minlength="8" placeholder="Enter Niber Music Email">\
<button id="Send" onclick="ArtistID()">Get Artist ID</button>\
</div>\
';
Become=()=>{
    DIV.innerHTML=NewMember;
}
Forget=()=>{
    let Forget=document.getElementById('Forget')
    Forget.style.display="block";
}

