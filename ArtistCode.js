ArtistCode=()=>{
    let Code=document.querySelector('#CodeArea').value;
    let CodeEmail=document.querySelector('#EmailArea').value;
    let Message=document.querySelector('#Message');
    switch (Code&&CodeEmail) {
        //Erou Andrew Richard ID
        case Code='E-523-012':
        case CodeEmail='erouandrewrichard01@gmail.com':
            DIV.innerHTML=ErouConsole;
            break;
        //Essen ID
        case Code='N-271-211':
        case CodeEmail='nagamiestherruth@gmail.com':
            DIV.innerHTML=EssenConsole;
            break;
        //Spiff Don ID
        case Code='S-303-001':
        case CodeEmail='marcellinohaaron96@gmail.com':
            DIV.innerHTML=SpiffDonConsole;
            break;
             /*
        //Timo Keiz ID
        case Code='T-991-200':
        case CodeEmail='timokeiz@gmail.com':
            DIV.innerHTML=TimoConsole;
            break;
        //kib Zord ID
        case Code='W-186-740':
        case CodeEmail='kibzord@gmail.com':
            DIV.innerHTML=TimoConsole;
            break;
        //=== ID
        case Code='A-060-500':
        case CodeEmail='':
            DIV.innerHTML=TimoConsole;
        break;
        //=== ID
        case Code='L-194-291':
        case CodeEmail='':
            DIV.innerHTML=TimoConsole;
        break;
        //=== ID
        case Code='D-211-027':
        case CodeEmail='':
            DIV.innerHTML=TimoConsole;
        break;
        //=== ID
        case Code='B-642-584':
        case CodeEmail='':
            DIV.innerHTML=TimoConsole;
        break;
        //=== ID
        case Code='':
        case CodeEmail='L-080-222':
            DIV.innerHTML=TimoConsole;
        break;
        //=== ID
        case Code='':
        case CodeEmail='W-201-301':
            DIV.innerHTML=TimoConsole;
        break;
        //=== ID
        case Code='':
        case CodeEmail='P-141-720':
            DIV.innerHTML=TimoConsole;
        break;
        //=== ID
        case Code='M-429-801':
        case CodeEmail='':
            DIV.innerHTML=TimoConsole;
        break;
        //=== ID
        case Code='F-222-109':
        case CodeEmail='':
            DIV.innerHTML=TimoConsole;
        break;
        //=== ID
        case Code='':
        case CodeEmail='':
            DIV.innerHTML=TimoConsole;
        break;
            */
        default:
            Message.innerHTML=('---Account Does Not Exist---');
            break;
    }  
}
