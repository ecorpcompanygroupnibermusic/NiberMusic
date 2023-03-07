let UploadDataConsole='\
<h1>Music Upload</h1>\
  <form action="https://sheetdb.io/api/v1/3e53ypbsxhqbs" id="inData">\
    <p>Please Upload Your Music In A Zip Format To Prevent Music Loss.</p>\
    <h1 id="Upload">Music Upload Requirements</h1>\
    <ul>\
    <li>Your Music Must Be in The Following Formats\
        <ul>\
            MP3\
        </ul>\
        <ul>\
            WAV\
        </ul>\
    </li>\
    <li>Your Images Must Be in The Following Formats\
        <ul>\
            JPG\
        </ul>\
        <ul>\
            SVG\
        </ul>\
    </li>\
    <li>Your Album Details Must Be in The Following Formats\
        <ul>\
            Pdf\
        </ul>\
        <ul>\
            Text\
        </ul>\
    </li>\
    <h1 id="Upload1">Please Choose ONE Format To Submit Your Music<h1>\
    <h1 id="Upload11">Your Music Can Take ONE OR TWO Weeks To Be Live On The Platform  Due TO THE LARGE VOLUMES OF MUSIC UPLOADS AND QUALITY CHECKING<h1>\
  </ul>\
  <span id="label">Enter Language OF Your Music</span>\
    <input type="text" name="Language" placeholder="Enter Music Language" required>\
    <span id="label">Is Your Music Made For Kids</span>\
    <input type="checkbox" name-"Kids" >\
    <span id="label">Enter Album Name</span>\
    <input type="text" name=" AlbumName" placeholder="Enter Album Name" required>\
    <span id="label">Enter Artist Name</span>\
    <input type="text" name="ArtistName" placeholder="Enter Artist  Name" required>\
    <span id="label">Artist Country</span>\
    <input type="text" name="ArtistCountry" placeholder="Enter Artist Country " required>\
    <span id="label">Number Of Songs</span>\
    <input type="number" name="SongNumber" placeholder="Enter Number Of Songs " required>\
    <span id="label">Song Title</span>\
    <textarea name="SongTitles" placeholder="Enter Song titles Seperated by Commas"  cols="30" rows="10"></textarea>\
    <span id="label">Niber Msic Terms and Conditions</span>\
    <input type="checkbox" name="Terms" required>\
    <button id="Dark1" onClick="UploadMusic()">Sumbit</button>\
  </form>\
  ';
  Upload=()=>{
    let DIV2=document.querySelector('#Member');
    DIV2.innerHTML=UploadDataConsole;
};
UploadMusic=()=>{
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
            DIV.innerHTML='\
            <h1>Music Sumbission Instructions</h1>\
            <h1 id="Dark6">Please Upload Your Music To A Folder On Google Drive And Make The Folder Shareable\
            <br>\
             Then Add our Email Below For Your Music To Be Recieved and Uploaded So Quickly To Our Platforms</h1>\
             <h1 id="Dark6">Email:nibermusiclite@gmail.com</h1>\
             <h1 id="Dark3">Don\'t Unshare The Folder Until Your Music Is Live On Our Platform</h1>\
             <h1 id="Dark6">Your Music Will Be Uploaded On Our Platform within 7 days</h1>\
            ';
          }else{
              return false;
          }
        });
      });
}