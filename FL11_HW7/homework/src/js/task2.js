let startGame = false;
startGame = confirm('Do you want to play a game?');
if (startGame === false){
    alert('You did not become a billionaire, but can.');
}else{
    let stopGame = false;
    let playAgan = false;
    let randomNumber = 0;
    do{
    randomNumber = Math.floor(Math.random() * (9 - 0) + 0);
    console.log('randomNumber: '+randomNumber);
    let guessNumber = 0;
    let prize = 100;
    for (let index = 0; index < 3; index++) {
        guessNumber = prompt('enter a number of pocket on which the ball could land', 5);
        console.log('guessNumber: '+ guessNumber);  
        if(Number(randomNumber) === Number(guessNumber)){
            alert('Congratulation, you won!   Your prize is: '+prize+'$.');
            let startGame2Level = confirm('Do you want to continue?');
            if(startGame2Level === true){
                randomNumber = Math.floor(Math.random() * (9 - 0) + 0) + Math.floor(Math.random() * (5 - 0) + 0);
                console.log('randomNumber: '+randomNumber);
                let newPrize = 200;
                for (let index = 0; index < 3; index++) {
                    if(stopGame === true){
                        console.log('work');
                        break;
                    }
                    let guessNumber = prompt('enter a number of pocket on which the ball could land', 4);
                    console.log('newGuessNumber: '+ guessNumber);  
                    if(Number(randomNumber) === Number(guessNumber)){
                        alert('Congratulation, you won!   Your prize is: '+(Number(prize)+Number(newPrize))+'$.');
                        stopGame = true;
                    }else if(guessNumber === null){
                        break;
                    }
                    newPrize = newPrize / 2;
                }
            }else{
                break;
            }
        }
        if(stopGame === true){
            console.log('work2');
            break;
        }
        prize = prize / 2;
        if(guessNumber === null){
            prize = 0;
        }
    }
    if(stopGame === true){
        console.log('work3');
        break;
    }
    playAgan = false;
    alert('Thank you for your participation. Your prize is: '+prize+'$.');
    playAgan = confirm('Do you want to play again?')
    } while (playAgan === true)
}