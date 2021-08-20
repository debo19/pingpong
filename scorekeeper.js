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
    winningScore=parseInt(this.value);               
    resetting();
})

function updateScores(player,opponent){           
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
})                                              
p2.button.addEventListener('click',function(){
    if(isGameOver!==true){
    updateScores(p2,p1);
    }
})
resetButton.addEventListener('click',resetting);

function resetting(){
    isGameOver=false;              
    for(let p of [p1,p2]){         
        p.score=0;
        p.disp.textContent=0;
        p.button.disabled=false;
        p.disp.classList.remove('winner','loser');
    }   
}