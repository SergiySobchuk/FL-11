let askEmail ='';
let askPass = '';
const sixLeter = 6;
const fiveLeter = 5;
askEmail = prompt('enter your email', 'user@gmail.com');
if (askEmail === null || askEmail === ''){
    alert('Canceled');
}else if(askEmail.length < sixLeter){
    do{
        alert('I dont know any emails having name length less than 6 symbols');
        askEmail = prompt('enter your email', 'user@gmail.com');
        if (askEmail === null){
            alert('Canceled');
            break;
        }
    } while (askEmail.length < sixLeter)
    alert('I don’t know you');
}else if(askEmail === 'user@gmail.com' || askEmail === 'admin@gmail.com') {
    askPass = prompt('enter your password', 'UserPass');
    if (askPass === null || askPass === ''){
        alert('Canceled');
    }else if(askEmail === 'user@gmail.com' && askPass !== 'UserPass'){
        do{
        alert('Wrong password');
        askPass = prompt('enter your password again', 'UserPass');
        if (askPass === null){
            alert('Canceled');
            break;
        }
        } while (askPass !== 'UserPass')
    }else if(askEmail === 'admin@gmail.com' && askPass !== 'AdminPass'){
        do{
        alert('Wrong password');
        askPass = prompt('enter your password again', 'AdminPass');
        if (askPass === null){
            alert('Canceled');
            break;
        }
        } while (askPass !== 'AdminPass')
    }
    let askChangePass = '';
    askChangePass = confirm('Do you want to change your password?');
    if(askChangePass){
        let confirmPass = '';
        confirmPass = prompt('write the old password', 'UserPass');
        if(askPass === confirmPass){
            let askNewPass = '';
            askNewPass = prompt('enter your new password', 'UserNewPass');
            if(askNewPass === null){
                alert('Canceled');
            }else if(askNewPass.length < fiveLeter){
                do{
                    alert('Its too short password. Sorry.');
                    askNewPass = prompt('enter your new password', 'UserNewPass');
                    if (askNewPass === null){
                        alert('Canceled');
                        break;
                    }
                } while(askNewPass.length < fiveLeter)
            }else{
                let askNewPassAgain = '';
                askNewPassAgain = prompt('enter your new password again', 'UserNewPass');
                if (askNewPassAgain === null){
                    alert('Canceled');
                }else if(askNewPass === askNewPassAgain){
                    alert('You have successfully changed your password.')
                    askPass = askNewPass;
                }else{
                    alert('You wrote the wrong password.')
                }
            }
        }else if(confirmPass === null){
            alert('Canceled');
        }else{
            alert('You wrote the wrong password.')
        }    
    }else{
        alert('You have failed the change.');
    }
}else{
    alert('I don’t know you');
}

