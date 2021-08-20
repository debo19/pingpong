// const p1button=document.querySelector('#p1button');
// const p2button=document.querySelector('#p2button');
// const p1disp=document.querySelector('#p1disp');
// const p2disp=document.querySelector('#p2disp');
// let p1score=0;
// let p2score=0;
const p1={
    button: document.querySelector('#p1button'),
    disp: document.querySelector('#p1disp'),
    score:0
}
const p2={
    button: document.querySelector('#p2button'),
    disp: document.querySelector('#p2disp'),
    score:0
}

const resetButton=document.querySelector('#reset');
const select=document.querySelector('#playTo');


let winningScore=3;
let isGameOver=false;

select.addEventListener('change',function(){
    winningScore=parseInt(this.value);               //"this" refers to whatever option is selected in select playTo
    resetting();
})

function updateScores(player,opponent){           //refactoring to avoid repetition of code 
    player.score+=1;
    if(player.score===winningScore){
        isGameOver=true;
        player.button.disabled=true;
        opponent.button.disabled=true;
        player.disp.classList.add('winner');
        opponent.disp.classList.add('loser');
    }
    player.disp.textContent=player.score;
    }

p1.button.addEventListener('click',function(){
    if(isGameOver!==true){
        updateScores(p1,p2);  
    } 
})                                              //if either one reaches winning score first, isGameOver is true and neither code runs it just stops game further 
p2.button.addEventListener('click',function(){
    if(isGameOver!==true){
    updateScores(p2,p1);
    }
})
resetButton.addEventListener('click',resetting);

function resetting(){
    isGameOver=false;               //back to initial condition
    for(let p of [p1,p2]){          //to avoid repetition of code and also easier if multiple users are required
        p.score=0;
        p.disp.textContent=0;
        p.button.disabled=false;
        p.disp.classList.remove('winner','loser');
    }   
}