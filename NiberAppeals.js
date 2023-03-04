let Appeal='\
<div id="MusicHolder12">\
<img id="Contact" loading="lazy" id src="https://drive.google.com/uc?export=download&id=1gUqQXdrtThJABHcnnJT3g451zLD4ke-1" onClick="AccountDeletion()">\
<img id="Contact" loading="lazy" id src="https://drive.google.com/uc?export=download&id=1gd092T7W0R1s_AYGTGa9C7637n4g89Ne" onClick="TrackDeletion()">\
<img id="Contact" loading="lazy" id src="https://drive.google.com/uc?export=download&id=1ZvDNjuMk6LovI_H9Pi9-VccXfIL3IBRR" onClick="SongAppeal()">\
</div>\
<div id="Member">\
</div>\
';
AccountDeletion=()=>{
    let DIV2=document.querySelector('#Member');
    DIV2.innerHTML=DeleteAccount;
}
TrackDeletion=()=>{
    let DIV2=document.querySelector('#Member');
    DIV2.innerHTML=TrackAccount;
}
SongAppeal=()=>{
    let DIV2=document.querySelector('#Member');
    DIV2.innerHTML=TrackAppeal;
}