let LoginData='\
<div id="login">\
<div id="LoginData">\
<h1>Log In To Continue</h1>\
<br><br>\
<h1 id="Message"></h1>\
<span id="label">UserName</span>\
<input id="User1" type="text" name="UserName" placeholder="UserName" required>\
<br><br>\
<span id="label">Password</span>\
<input id="Code1" type="password" name="UserName" placeholder="Password" maxlength="16" minlength="8" required>\
<br><br>\
<button id="LogIn" onclick="LogIN()">Login</button>\
<br><br>\
<button id="Dark1" onClick="Create()">Create Account</button>\
</div>\
<form action="https://sheetdb.io/api/v1/g1fhaalzpqmhl" method="post" id="sheetdb-form">\
    <h1>Create Account To Continue</h1>\
    <br><br>\
    <span id="label">UserName</span>\
    <input id="User" type="text" name="UserName" placeholder="UserName" required>\
    <br><br>\
    <span id="label">Email</span>\
    <input id="Mail" type="email" name="Email" placeholder="Email" required>\
    <br><br>\
    <span id="label">Password</span>\
    <input id="Code" type="password" name="Password" placeholder="Password" maxlength="16" minlength="8" required>\
    <br><br>\
    <span id="label">Date Of Birth</span>\
    <input type="date" name="Date">\
    <br>\
    <button id="LogIn" onclick="CreateAccount()">Create Account</button>\
</form>\
<br><br>\
<button id="Dark2" onClick="Log()">LogIn</button>\
</div>\
';
Create=()=>{
    let LoginData=document.querySelector('#LoginData');
    let sheetdbform=document.querySelector('#sheetdb-form');
    let Dark1=document.querySelector('#Dark1');
    let Dark2=document.querySelector('#Dark2');
    LoginData.style.display="none";
    sheetdbform.style.display="block";
    Dark1.style.display="none";
    Dark2.style.display="block";
}
Log=()=>{
    let LoginData=document.querySelector('#LoginData');
    let sheetdbform=document.querySelector('#sheetdb-form');
    let Dark1=document.querySelector('#Dark1');
    let Dark2=document.querySelector('#Dark2');
    LoginData.style.display="block";
    sheetdbform.style.display="none";
    Dark2.style.display="none";
    Dark1.style.display="block";
}
CreateAccount=()=>{
    let User=document.querySelector('#User').value;
    let Mail=document.querySelector('#Mail').value;
    let Code=document.querySelector('#Code').value;  
    var form = document.getElementById('sheetdb-form');
    form.addEventListener("submit", e => {
      e.preventDefault();
      fetch(form.action, {
          method : "POST",
          body: new FormData(document.getElementById("sheetdb-form")),
      }).then(
          response => response.json()
      ).then((html) => {
        if (User.length>=1&&Mail.length>=1&&Code.length>=1) {
            localStorage.setItem('NiberUser',User);
            localStorage.setItem('NiberMail',Mail);
            localStorage.setItem('NiberPassword',Code);  
            Login.style.display="none"; 
        }else{
            return false;
        }
      });
    });
}
LogIN=()=>{
 let User1=document.getElementById('User1').value;
 let Code1=document.getElementById('Code1').value;
 let Message=document.getElementById('Message');
 let Data=localStorage.getItem('NiberUser',User);
 let Data1= localStorage.getItem('NiberPassword',Code); 
if (User1===Data&&Code1===Data1) {
    Login.style.display="none";  
} else {
    Message.innerHTML='Wrong User Inputs';
}
}
Auto=()=>{
    let Data=localStorage.getItem('NiberUser',User);
    let Data1= localStorage.getItem('NiberPassword',Code); 
    if (Data&&Data1) {
        Login.style.display="none";  
    } else {
        Login.style.display="block";  
    }
}