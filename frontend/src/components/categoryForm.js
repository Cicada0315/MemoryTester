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

}