//This is for all the fetch
class CategoryAdapter{
    constructor(baseURL){
        this.baseURL=baseURL;
    }
    
    getCategory(){
        fetch(this.baseURL)
        .then(resp => resp.json())
        .then(data => {
            data.forEach(cate => {
                const category=new Category(cate);
                category.addToDom();
            });
        })
        .catch(err => console.log(err))
    }

    /*createCategory(){
        const createForm = document.getElementById("form-container")
        createForm.addEventListener("submit", function(e){
            e.preventDefault()
            const form = e.target
            const nameInput = form.querySelector("#name")
            const newcards_name = document.querySelectorAll('.newcard-name')
            const newcards_url = document.querySelectorAll('.newcard-url')
            
            fetch("http://127.0.0.1:3000/categories", {
            //not working why?
            //fetch(this.baseURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: nameInput.value,
                    cards_attributes: [{
                            name: newcards_name[0].value,
                            url: newcards_url[0].value
                        }, {
                            name: newcards_name[1].value,
                            url: newcards_url[1].value
                        }, {
                            name: newcards_name[2].value,
                            url: newcards_url[2].value
                        }, {
                            name: newcards_name[3].value,
                            url: newcards_url[3].value
                        }, {
                            name: newcards_name[4].value,
                            url: newcards_url[4].value
                        }, {
                            name: newcards_name[5].value,
                            url: newcards_url[5].value
                        }
                    ]
                })
            })
            .then(resp => resp.json())
            .then(data => {
                const category=new Category(data);
                category.addToDom();
            })
            .catch(err => console.error(err))
        })
    }*/
    postCategory(nameInput, newcards_name, newcards_url){
        fetch("http://127.0.0.1:3000/categories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: nameInput.value,
                cards_attributes: [{
                        name: newcards_name[0].value,
                        url: newcards_url[0].value
                    }, {
                        name: newcards_name[1].value,
                        url: newcards_url[1].value
                    }, {
                        name: newcards_name[2].value,
                        url: newcards_url[2].value
                    }, {
                        name: newcards_name[3].value,
                        url: newcards_url[3].value
                    }, {
                        name: newcards_name[4].value,
                        url: newcards_url[4].value
                    }, {
                        name: newcards_name[5].value,
                        url: newcards_url[5].value
                    }
                ]
            })
        })
        .then(resp => resp.json())
        .then(data => {
            const category=new Category(data);
            category.addToDom();
        })
        .catch(err => console.error(err))
    }
}