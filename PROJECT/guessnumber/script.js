let randomNumber=parseInt(Math.random()*1000 +1);
const submit=document.querySelector('#subt');
const userinput=document.querySelector('#guessField');
const guesslot=document.querySelector('.guesses');
const remaning=document.querySelector('.lastResult');
const loworHi=document.querySelector('.lowOrH');
const startOver=document.querySelector('.resultParas');
const p=document.createElement('p')
let prevguess=[]

let numguss=1

let playgame=true

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
       const guess= parseInt(userinput.value)
       console.log(guess)
       validateguss(guess)
    })
}

function validateguss(guess){
if(isNaN(guess)){
    alert('please enter  a valid Number')
}else if(guess<1 ){
    alert('please enter  a number more than or eqaul 1')
}
else if(guess>100){
    alert('please enter  a number less than 1000 ')
}else{
  prevguess.push(guess)
  if(numguss===11){
    displayguss(guess)
    displaymessage(`game over.Random numberr was ${randomNumber}`)
    endGame()
  }else{
    displayguss(guess)
    checkguss(guess)
  }
}
}



function checkguss(guess){
    if(guess==randomNumber){
       displaymessage(`you guess it right`)
       endGame()
    }else if(guess <randomNumber){
        displaymessage(`Number is Too low`)
    }
    else if(guess >randomNumber){
        displaymessage(`Number is Too High`)
         }
}
function displayguss(guess){
    userinput.value=''
    guesslot.innerHTML+=`${guess},`
    numguss++;
    remaning.innerHTML=`${11-numguss}`

}


function displaymessage(message){
    loworHi.innerHTML=`<h2>${message}</h2>`
}




function endGame(){
    userinput.value=''
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">start new Game</h2>`
    startOver.appendChild(p)
    playgame=false
    newGame();
}

function newGame(){
const newGameButton=document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*1000 +1);
    prevguess=[]
    guesslot.innerHTML=''
    remaning.innerHTML=`${11-numguss}`
    userinput.removeAttribute('disabled')
    startOver.removeChild(p)
    playgame=true
})
}

