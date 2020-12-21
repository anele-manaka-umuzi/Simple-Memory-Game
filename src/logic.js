const cards = document.querySelectorAll('.memory-card');

let cardFlipped = false;
let firstCard, secondCard;
let numberOfFlips = 1;
let numberOfCards = 6;

function flipCard(){
    
    if (numberOfFlips > 2 )  return; 

    numberOfFlips++;
    
  this.classList.add('flip');

  if (!cardFlipped){
    cardFlipped = true; 
    firstCard = this;
    return;
} else{
    cardFlipped = false;
    secondCard = this;
}

match()

}

function match(){
    
   if(firstCard.childNodes[3].src == secondCard.childNodes[3].src){
    firstCard.removeEventListener('click',flipCard); 
    secondCard.removeEventListener('click',flipCard);
    numberOfFlips = 1;
    numberOfCards --;

} else{
        setTimeout(() => {
        firstCard.classList.remove('flip');  
        secondCard.classList.remove('flip');
        numberOfFlips = 1;
        console.log('flipback');
    }, 1500);

   
}
}

(function shuffle() {

    cards.forEach(card => {
  
      let randomPosition = Math.floor(Math.random() * 12); 
  
      card.style.order = randomPosition;
  
    });
  
})();

cards.forEach(card => card.addEventListener('click', flipCard));  

let timer = document.getElementById('timer');
let count = 0;

setInterval(function() {
    
    if (numberOfCards > 0){
        timer.innerHTML = count++;
    }
    else{
        alert("Congratulations!!! You've won!");
        window.location = window.location.href;
    }
}, 1000);
module.exports = {flipCard, match, shuffle}