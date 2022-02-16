let store = {
    fruits: Vue.reactive([
            { name: "Apple",   favorite: true },
            { name: "Banana",  favorite: true },
            { name: "Pear",    favorite: true },
            { name: "Grapes",  favorite: false },
            { name: "Oranges", favorite: false },
            { name: "Kiwi",    favorite: false }
        ]),
    //getter
    favoriteFruits: function(){
        return this.fruits.filter(
            (fruit) => fruit.favorite);
    },
    //setter
    addFruit(name, isFavorite){
        this.fruits.push({name: name, favorite: isFavorite});
    }
};
