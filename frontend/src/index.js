const back_face_img="https://image.shutterstock.com/image-vector/turned-playing-card-on-green-600w-69737500.jpg"
document.addEventListener("DOMContentLoaded", () => {
    createCategory()
    fetchCategory()
})

function createCategory(){
    const createForm = document.getElementById("form-container")
    createForm.addEventListener("submit", function(e){
        e.preventDefault()
        const form = e.target
        const nameInput = form.querySelector("#name")
        const newcards_name = document.querySelectorAll('.newcard-name')
        const newcards_url = document.querySelectorAll('.newcard-url')
    
        fetch("http://127.0.0.1:3000/categories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: nameInput.value
            })
        })
        .then(resp => resp.json())
        .then(data => {
            addCardtoCategory(data, 0)
        })
        .catch(err => console.error(err))

        function addCardtoCategory(data, i){
            return fetch("http://127.0.0.1:3000/cards", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: newcards_name[i].value,
                    url: newcards_url[i].value,
                    category_id: data.id
                })
                
            })
            .then(resp => resp.json())
            .catch(err => console.error(err))
        }
    })
}

function fetchCategory(){
    fetch("http://127.0.0.1:3000/categories")
    .then(resp => resp.json())
    .then(data => {
        data.forEach(addCategory)
    })
    .catch(err => console.log(err))
}

function addCategory(category){
    const categoryContainer = document.getElementById("category-container")
    categoryContainer.addEventListener("click", createGame)
    categoryContainer.innerHTML += 
    `<li id="cate-${category.id}"><strong>${category.name}</strong> 
        <button class="btn btn-outline-primary" data-action="create_game">Play</button>
    </li>
    <br><br>`
}

function createGame(e) {
    const btn = e.target
    const createForm = document.getElementById("form-container")
    if (btn.dataset.action === "create_game"){
        createForm.hidden="true"
        const temparr=btn.parentElement.id.split("-")
        const id = temparr[1]
        
        fetch(`http://127.0.0.1:3000/categories/${id}`)
        .then(resp => resp.json())
        .then(data => {
            rearrangeforamt(data)
            setgameboard(data)
        })
        .catch(err => console.error(err))
    }
}

function rearrangeforamt(data){
    const categoryContainer = document.getElementById("category-container")
    categoryContainer.innerHTML = `<h1>Ready to play with ${data.name}?</h1><div id="cate-${data.id}"></div>`
    const makeCate= `cate-${data.id}`
    const getcategory=document.getElementById(makeCate)
    
    for(let i=0; i<data.cards.length; i++){
        getcategory.innerHTML += `<img alt="card-image" src="${data.cards[i].url}" class="img-thumbnail col" width= "210" height="210">`
    }
}

function setgameboard(data){
    const game=document.getElementById("game")
    game.hidden=false
    const boardContainer = document.getElementById("memory-game")
    boardContainer.innerHTML =""
    for(let i=0; i<data.cards.length; i++){
        boardContainer.innerHTML +=
        `<div class="memory-card" data-set="${data.cards[i].name}">
            <img class="front-face" src="${data.cards[i].url}" alt="${data.cards[i].name}" />
            <img class="back-face" src="${back_face_img}" alt="${data.cards[i].name}" />
        </div>
        <div class="memory-card" data-set="${data.cards[i].name}">
            <img class="front-face" src="${data.cards[i].url}" alt="${data.cards[i].name}" />
            <img class="back-face" src="${back_face_img}" alt="${data.cards[i].name}" />
        </div>`
    }
    shuffle()
    playgame(data)
}

function shuffle(){
    const cards = document.querySelectorAll('.memory-card');
    for(let i=0; i<cards.length; i++){
        let randomPos = Math.floor(Math.random() * 12);
        cards[i].style.order = randomPos
    }
}

function playgame(data){
    const cards = document.querySelectorAll('.memory-card')
    cards.forEach(card => card.addEventListener('click', flipCard))
    const timerinput= document.getElementById("timer")
    timerinput.addEventListener('change', updatetimervalue)
    const reset_game= document.getElementById("reset_game")
    reset_game.addEventListener('click', resetGame);
    const back= document.getElementById("back")
    back.addEventListener('click', goback);
    let trialout=document.getElementById("counter")
    let trial=parseInt(document.getElementById("counter").innerText)
    let timer=parseInt(timerinput.value)
    let totalcount=6
    let complete=false
    let hasFlippedCard = false
    let lockBoard = false
    let firstCard, secondCard

    //Menu Related
    function updatetimervalue(e) {
        timer=this.value
    }

    function resetGame() {
        resetValues()
        totalcount=6
        trialout.innerText=0
        setgameboard(data)
    }

    function goback(){
        document.location.reload(true)
    }

    //Game related
    function flipCard() {
        if (lockBoard) return
        if (this === firstCard) return

        this.classList.add('flip')
        trialout.innerText=trial+=1
        if (!hasFlippedCard) {
            hasFlippedCard = true
            firstCard = this
            return
        }
        secondCard = this
        checkForMatch()
    }

    function checkForMatch() {
        if (firstCard.dataset.set === secondCard.dataset.set){
            disableCards()
            totalcount--;
            if(totalcount===0){
                complete=true;
                //wait until the card fliped.
                setTimeout(() => {
                    winnerMessage()
                }, 500)
            }
        }
        else{
            unflipCards()
        }
    }

    function winnerMessage() {
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
        }, timer)
    }

    function resetValues() {
        hasFlippedCard= false 
        lockBoard = false
        firstCard=null 
        secondCard = null
    }
}
