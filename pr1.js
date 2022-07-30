let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;

const message = function(msg) {
    document.querySelector('.message').textContent = msg;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        message('No Number!');
        //document.querySelector('.message').textContent = 'No Number!'
    } else if(guess=== secretNumber) {
        
        document.querySelector('.message').textContent = 'Correct Number!';
       
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#00b300';
        document.querySelector('.number').style.width = '30rem';
        if(score > highScore) {
            highScore = score;
            document.querySelector('.high-score').textContent = highScore;
        }
    } else if(guess !== secretNumber) {
        if(score>1) {
            document.querySelector('.message').textContent = guess > secretNumber ?' Number is larger!' : ' Number is Smaller!';
            score --;
             document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = ' You lost the game!'
            document.querySelector('.score').textContent = 0;
        }
       
    }
    // else if(guess < secretNumber) {
    //     if(score>1) {
    //         document.querySelector('.message').textContent = ' Number is Smaller!'
    //         score --;
    //          document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = ' You lost the game!'
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    document.querySelector('.reset').addEventListener('click', function() {
        score = 20;
        secretNumber = Math.trunc(Math.random()*20) + 1;
        message('...Start Guessing!');
        //document.querySelector('.message').textContent = '...Start Guessing!'
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#FFFFFF';


    });
})
