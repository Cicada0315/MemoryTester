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
        categoryContainer.innerHTML += this.render();
    }

    rearrangeforamt(){
        const categoryContainer = document.getElementById("category-container")
        categoryContainer.innerHTML = `<h1>Ready to play with ${this.name}?</h1><div id="cate-${this.id}"></div>`
        const makeCate= `cate-${this.id}`
        const getcategory=document.getElementById(makeCate)
        
        for(let i=0; i<this.cards.length; i++){
            getcategory.innerHTML += `<img alt="card-image" src="${this.cards[i].url}" class="img-thumbnail col" width= "210" height="210">`
        }
    }
}