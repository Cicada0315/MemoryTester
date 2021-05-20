class Card{
    constructor(id, name, url, category_id){
        this.id=id;
        this.name=name;
        this.url=url;
        this.category_id=category_id;
    }

    gameboardrender(){
        return (`<div class="memory-card" data-set="${this.name}">
                    <img class="front-face" src="${this.url}" alt="${this.name}" />
                    <img class="back-face" src="${back_face_img}" alt="${this.name}" />
                </div>
                <div class="memory-card" data-set="${this.name}">
                    <img class="front-face" src="${this.url}" alt="${this.name}" />
                    <img class="back-face" src="${back_face_img}" alt="${this.name}" />
                </div>`
        );                
    }

    addToDom(){
        const boardContainer = document.getElementById("memory-game");
        boardContainer.innerHTML += this.gameboardrender();
    }
}