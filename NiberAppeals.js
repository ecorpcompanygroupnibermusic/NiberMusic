let Appeal='\
<div id="MusicHolder12">\
<img id="Contact" loading="lazy" src="https://drive.google.com/uc?export=download&id=1BqHaDPEoEnZlPXWB_gdHg_VKXauXOCha" onClick="AccountDeletion()">\
<img id="Contact" loading="lazy" src="https://drive.google.com/uc?export=download&id=1-ryE5Wi8VPZ8dhZxKQ6F1ILpZ4HratfR" onClick="TrackDeletion()">\
<img id="Contact" loading="lazy" src="https://drive.google.com/uc?export=download&id=1fWxV7bNtB2nlTsCTXHQUNV8bUueLZ8Sb" onClick="SongAppeal()">\
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