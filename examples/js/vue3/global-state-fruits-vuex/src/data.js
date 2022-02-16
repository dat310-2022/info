let store = Vuex.createStore({
    state: function(){
    // state is a function that returns the state stored in the store. 
    // this is similar to data in Vue components.
        return {
            fruits: [
                { name: "Apple",   favorite: true },
                { name: "Banana",  favorite: true },
                { name: "Pear",    favorite: true },
                { name: "Grapes",  favorite: false },
                { name: "Oranges", favorite: false },
                { name: "Kiwi",    favorite: false }
            ]
        }
    },
    getters: {
        // a getter must be a function that takes the state as argument.
        favoriteFruits(state){
            return state.fruits.filter(
                (fruit) => fruit.favorite);
        }
    },
    mutations: {
        // setters are called mutaions.
        addFruit(state, fruit){
            // also mutations need to receive state as argument. They have one additional optional argument
            
            // check that fruit is an object { name, favorite }
            if (fruit.hasOwnProperty("name")){
                state.fruits.push(fruit);
            }
        }
    }
});