ArtistID=()=>{
    let CodeEmail=document.querySelector('#EmailArea1').value;
    let PasswordArea1=document.querySelector('#PasswordArea1').value;
    let Message=document.querySelector('#Message1');
    switch (CodeEmail&&PasswordArea1) {
        //Erou Andrew Richard ID
        case CodeEmail='erouandrewrichard01@gmail.com':
        case PasswordArea1='December05012':
            Message.innerHTML=('---Your Artist Id Is'+'_'+ 'E-523-012---')
            break;
        //Essen ID
        case CodeEmail='nagamiestherruth@gmail.com':
        case PasswordArea1='Essie5191995':
            Message.innerHTML=('---Your Artist Id Is'+'_'+ 'N-271-211---')
            break;
         //Spiff Don ID
        case CodeEmail='marcellinohaaron96@gmail.com':
        case PasswordArea1='Kingstonecity12':
            Message.innerHTML=('---Your Artist Id Is'+'_'+ 'S-303-001---')
            break;
        /*
        //Kib Zord ID
        case CodeEmail='kibzord@gmail.com':
        case PasswordArea1='kibzordi':
            Message.innerHTML=('---Your Artist Id Is'+'_'+ 'W-186-740---')
            break;
        //Timo Keiz ID
        case CodeEmail='timokeiz@gmail.com':
        case PasswordArea1='ManCityi':
            Message.innerHTML=('---Your Artist Id Is'+'_'+ 'T-991-200---')
            break;
     
        //===ID
        case CodeEmail='':
        case PasswordArea1='':
            Message.innerHTML=('---Your Artist Id Is'+'_'+ 'A-060-500---')
            break;
        //===ID
        case CodeEmail='':
        case PasswordArea1='':
            Message.innerHTML=('---Your Artist Id Is'+'_'+ 'L-194-291---')
            break;
        //===ID
        case CodeEmail='':
        case PasswordArea1='':
            Message.innerHTML=('---Your Artist Id Is'+'_'+ 'D-211-027---')
            break;
        //===ID
        case CodeEmail='':
        case PasswordArea1='':
            Message.innerHTML=('---Your Artist Id Is'+'_'+ 'B-642-584---')
            break;
        //===ID
        case CodeEmail='':
        case PasswordArea1='':
            Message.innerHTML=('---Your Artist Id Is'+'_'+ 'L-080-222---')
            break;
        //===ID
        case CodeEmail='':
        case PasswordArea1='':
            Message.innerHTML=('---Your Artist Id Is'+'_'+ 'W-201-301---')
            break;
        //===ID
        case CodeEmail='':
        case PasswordArea1='':
            Message.innerHTML=('---Your Artist Id Is'+'_'+ 'P-141-720---')
            break;
        //===ID
        case CodeEmail='':
        case PasswordArea1='':
            Message.innerHTML=('---Your Artist Id Is'+'_'+ 'M-429-801---')
            break;
        //===ID
        case CodeEmail='':
        case PasswordArea1='':
            Message.innerHTML=('---Your Artist Id Is'+'_'+ 'F-222-109---')
            break;
        //===ID
        case CodeEmail='':
        case PasswordArea1='':
            Message.innerHTML=('---Your Artist Id Is'+'_'+ '===---')
            break;

        */
        default:
            Message.innerHTML=('---Account Does Not Exist---');
            break;
    }  
}
