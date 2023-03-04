let UploadDataConsole='\
<h1>Music Upload</h1>\
  <form action="" id="inData">\
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
    <input type="text" placeholder="Enter Music Language" required>\
    <span id="label">Is Your Music Made For Kids</span>\
    <input type="checkbox" >\
    <span id="label">Enter Album Name</span>\
    <input type="text" placeholder="Enter Album Name" required>\
    <span id="label">Enter Artist Name</span>\
    <input type="text" placeholder="Enter Artist  Name" required>\
    <span id="label">Artist Country/span>\
    <input type="text" placeholder="Enter Artist Country " required>\
    <span id="label">Niber Msic Terms and Conditions</span>\
    <input type="checkbox" required>\
    <button id="Dark1">Sumbit</button>\
  </form>\
  ';
  Upload=()=>{
    let DIV2=document.querySelector('#Member');
    DIV2.innerHTML=UploadDataConsole;
};
