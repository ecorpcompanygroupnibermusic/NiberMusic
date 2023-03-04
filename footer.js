let footerData='\
<img id="Account1" src="https://drive.google.com/uc?export=download&id=1W4PUUikwqrvZhM2iFFEce22p6rR0zp3h" onclick="News()">\
<img id="Account1" src="https://drive.google.com/uc?export=download&id=1S2eZR7hgzPI86igsRJhCK-Fa8WOz-FQv"  onclick="Music()">\
<img id="Account1" src="https://drive.google.com/uc?export=download&id=1sMi515ekspF4SYA-9tHNW9puT4j-Joej"  onclick="Artist()">\
<img id="Account1" src="https://drive.google.com/uc?export=download&id=1RWm5Ur0HWH0aBCQLZniprR9_XmKEVRaP"  onclick="Settings()">\
';

News=()=>{
    DIV.innerHTML=NewsData;
}
Music=()=>{
    DIV.innerHTML=MusicData;
}
Artist=()=>{
    DIV.innerHTML=ArtistData;
}
Settings=()=>{
    DIV.innerHTML=SettingsData;
}
