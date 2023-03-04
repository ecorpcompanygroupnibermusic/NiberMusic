let Splash=document.querySelector('#Logo');
let Header=document.querySelector('header');
let DIV=document.querySelector('div');
let Footer=document.querySelector('footer');
let Login=document.querySelector('#Login');
setTimeout(() => {
    Splash.style.display="none";
}, 5000);
DIV.innerHTML=NewsData;
Header.innerHTML=headerData;
Footer.innerHTML=footerData;
Login.innerHTML=LoginData;
Dark=()=>{
    DIV.style.background="#121C42";
}
Light=()=>{
    DIV.style.background=" #2b4094";
}
Auto();


