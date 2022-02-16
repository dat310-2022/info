// this component is now reactive
let favoriteC= {
    data: function(){
        return {
            // including data fields from the store works (is reactive)
            fruits: store.fruits,
            // using getters from the store inside data, does not work, (not reactive)
            staticfavorites: store.favoriteFruits()
        }
    },
    computed: {
        // using getters inside computed properties works, but
        favorites: function(){ return store.favoriteFruits()},
        // shorthand: 
        // favorites: ()=> store.favoriteFruits(),
        // this does not work, normally
        staticfavorites2: store.favoriteFruits
    },
    template: `
    <div>
    <h1>Favorite fruites</h1>
    <ul>
        <li v-for="fruit in favorites">
            {{ fruit.name }}
        </li>
    </ul>
    <h1>All fuites</h1>
    <ul>
        <li v-for="fruit in fruits">
            {{ fruit.name }}
        </li>
    </ul>
    </div>
    `
}
