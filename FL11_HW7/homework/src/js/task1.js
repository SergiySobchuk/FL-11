let askEmail ='';
let askPass = '';
askEmail = prompt('enter your email', 'user@gmail.com');
if (askEmail === null || askEmail === ''){
    alert('Canceled');
}
else if(askEmail.length < 6){
    do{
        alert('I dont know any emails having name length less than 6 symbols');
        askEmail = prompt('enter your email', 'user@gmail.com');
        if (askEmail === null){
            alert('Canceled');
            break;
        }
    } while (askEmail.length < 6)
    alert('I don’t know you');
}
else if(askEmail === 'user@gmail.com' || askEmail === 'admin@gmail.com') {
    askPass = prompt('enter your password', 'UserPass');
    if (askPass === null || askPass === ''){
        alert('Canceled');
    }
    else if(askEmail === 'user@gmail.com' && askPass !== 'UserPass')
    {
        do{
        alert('Wrong password');
        askPass = prompt('enter your password again', 'UserPass');
        if (askPass === null){
            alert('Canceled');
            break;
        }
        } while (askPass !== 'UserPass')
    }
    else if(askEmail === 'admin@gmail.com' && askPass !== 'AdminPass')
    {
        do{
        alert('Wrong password');
        askPass = prompt('enter your password again', 'AdminPass');
        if (askPass === null){
            alert('Canceled');
            break;
        }
        } while (askPass !== 'AdminPass')
    }
    askChangePass = confirm('Do you want to change your password?');
    if(askChangePass){
        confirmPass = prompt('write the old password', 'UserPass');
        if(askPass === confirmPass){
            askNewPass = prompt('enter your new password', 'UserNewPass');
            if(askNewPass === null){
                alert('Canceled');
            }
            else if(askNewPass.length < 5){
                do{
                    alert('Its too short password. Sorry.');
                    askNewPass = prompt('enter your new password', 'UserNewPass');
                    if (askNewPass === null){
                        alert('Canceled');
                        break;
                    }
                } while(askNewPass.length < 5)
            }
            else{
                askNewPassAgain = prompt('enter your new password again', 'UserNewPass');
                if (askNewPassAgain === null){
                    alert('Canceled');
                }
                else if(askNewPass === askNewPassAgain){
                    alert('You have successfully changed your password.')
                    askPass = askNewPass;
                }
                else{
                    alert('You wrote the wrong password.')
                }
            }
        }
        else if(confirmPass == null){
            alert('Canceled');
        }
        else{
            alert('You wrote the wrong password.')
        }    
    }
    else{
        alert('You have failed the change.');
    }
}
else{
    alert('I don’t know you');
}

