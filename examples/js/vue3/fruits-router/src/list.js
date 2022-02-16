let favoriteC= {
    computed: {
        // using getters inside computed properties works, but
        favorites: function(){ return store.favoriteFruits()},
    },
    template: `
    <div>
    <h1>Favorite fruites</h1>
    <ul>
        <li v-for="fruit in favorites">
            {{ fruit.name }}
        </li>
    </ul>
    </div>
    `
}

let allC= {
    computed: {
        // using getters inside computed properties works, but
        fruits: function(){ return store.fruits},
    },
    template: `
    <div>
    <h1>All fruites</h1>
    <ul>
        <li v-for="fruit in fruits">
            {{ fruit.name }}
        </li>
    </ul>
    </div>
    `
}