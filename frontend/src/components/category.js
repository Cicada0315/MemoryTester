class Category{
    constructor({id, name, cards}){
        this.id=id;
        this.name=name;
        this.cards=cards;
    }

    render(){
        return (`<li id="cate-${this.id}"><strong>${this.name}</strong> 
                    <button class="btn btn-outline-primary" data-action="create_game">Play</button>
                </li>
                <br><br>`);
    }

    addToDom(){
        const categoryContainer = document.getElementById("category-container");
        //categoryContainer.addEventListener("click", createGame)
        categoryContainer.innerHTML += this.render();
    }
}