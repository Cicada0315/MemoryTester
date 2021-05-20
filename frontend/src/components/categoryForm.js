class CategoryFrom{
    createCategory(){
        const createForm = document.getElementById("form-container");
        createForm.addEventListener("submit", function(e){
            e.preventDefault();
            const form = e.target;
            const nameInput = form.querySelector("#name");
            const newcards_names = document.querySelectorAll('.newcard-name');
            const newcards_urls = document.querySelectorAll('.newcard-url');
            categoryfetch.postCategory(nameInput, newcards_names, newcards_urls);
        });
    }

    listenPlay(){
        const categoryContainer = document.getElementById("category-container");
        categoryContainer.addEventListener("click", (e)=>{
            const btn = e.target;
            const createForm = document.getElementById("form-container");
            if (btn.dataset.action === "create_game"){
                createForm.hidden="true";
                const temparr=btn.parentElement.id.split("-");
                const id = temparr[1];
                categoryfetch.getCategory(id);
            }
        })
    }
}