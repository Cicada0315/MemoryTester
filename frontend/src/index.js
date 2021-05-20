const back_face_img="https://image.shutterstock.com/image-vector/turned-playing-card-on-green-600w-69737500.jpg"
const categoryfetch=new CategoryAdapter("http://127.0.0.1:3000/categories");
const categoryForms=new CategoryFrom;

document.addEventListener("DOMContentLoaded", () => {
    categoryForms.createCategory();
    categoryfetch.getCategories();
    categoryForms.listenPlay();; 
})