class Game{
    constructor({id, name, cards}){
        this.id=id;
        this.name=name;
        this.cards=cards;
    }
    
    setgameboard(){
        const game=document.getElementById("game");
        game.hidden=false;
        const boardContainer = document.getElementById("memory-game");
        boardContainer.innerHTML ="";
        for(let i=0; i<this.cards.length; i++){
            let card=new Card(this.cards[i].id, this.cards[i].name, this.cards[i].url, this.id);
            card.addToDom();
        }
        this.shuffle()
        this.playgame()
    }

    shuffle(){
        const cards = document.querySelectorAll('.memory-card');
        for(let i=0; i<cards.length; i++){
            let randomPos = Math.floor(Math.random() * 12);
            cards[i].style.order = randomPos
        }
    }

    playgame(){
        const resetGame= ()=> {
            timer=0;
            clearInterval(counttimer);
            resetValues();
            startgame=false;
            totalcount=6;
            trialout.innerText=0;
            this.setgameboard();
        }
        const cards = document.querySelectorAll('.memory-card');
        cards.forEach(card => card.addEventListener('click', flipCard));
        const speedinput= document.getElementById("speed");
        speedinput.addEventListener('change', updatespeed);
        const reset_game= document.getElementById("reset_game");
        reset_game.addEventListener('click', resetGame);
        const back= document.getElementById("back");
        back.addEventListener('click', goback);
        let trialout=document.getElementById("counter");
        let trial=parseInt(document.getElementById("counter").innerText);
        let speed=parseInt(speedinput.value);
        let totalcount=6;
        let hasFlippedCard = false;
        let lockBoard = false;
        let firstCard, secondCard;
        let startgame=false;
        
        let timer=0;
        let timerspan=document.getElementById("timer")
        let counttimer = setInterval(myTimer, 1000);
        
        function myTimer() {
            timerspan.innerHTML = timer+" sec";
            timer++;
        }
               

        //Menu Related
        function updatespeed(e) {
            speed=this.value;
        }

        function goback(){
            document.location.reload(true);
        }

        //Game related
        function flipCard() {
            if (lockBoard) return;
            if (this === firstCard) return;
            this.classList.add('flip')
            trialout.innerText=trial+=1;
            if (!hasFlippedCard) {
                hasFlippedCard = true;
                firstCard = this;
                return;
            }
            secondCard = this;
            checkForMatch();
        }

        function checkForMatch() {
            if (firstCard.dataset.set === secondCard.dataset.set){
                disableCards();
                totalcount--;
                if(totalcount===0){
                    //wait until the card fliped.
                    setTimeout(() => {
                        winnerMessage()
                    }, 500)
                };
            }
            else{
                unflipCards();
            }
        }

        function winnerMessage() {
            clearInterval(counttimer);
            alert("You did it!! Great job!");
        }

        function disableCards() {
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
            resetValues();
        }

        function unflipCards() {
            //lock the board while fliping
            lockBoard = true;
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                resetValues();
            }, speed)
        }

        function resetValues() {
            hasFlippedCard= false;
            lockBoard = false;
            firstCard=null;
            secondCard = null;
        }
    }
}