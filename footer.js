let footerData='\
<img id="Account1" loading="lazy" src="https://drive.google.com/uc?export=download&id=1XP1h-dBj1FTXa4cUPbAoMyFuU0KIRKqu" onclick="News()">\
<img id="Account1" loading="lazy" src="https://drive.google.com/uc?export=download&id=1NdZWbFrAvKzTnMxJ8NUZoSHaTfbYiMgW"  onclick="Music()">\
<img id="Account1" loading="lazy" src="https://drive.google.com/uc?export=download&id=1y-OkfiEgSypeQxPcyyaWRkun8rdaSjhn"  onclick="Artist()">\
<img id="Account1" loading="lazy" src="https://drive.google.com/uc?export=download&id=10crIT7DqaCEI69Drvt-heae-uRohPaig"  onclick="Settings()">\
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
