//This is for all the fetch
class CategoryAdapter{
    constructor(baseURL){
        this.baseURL=baseURL;
    }

    getCategory(){
        fetch(this.baseURL)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            data.forEach(cate => {
                const category=new Category(cate);
                category.addToDom();
            });
        })
        .catch(err => console.log(err))
    }
}