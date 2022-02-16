// this component is now reactive
let favoritC= {
    data: function(){
        return {
            // including data fields from the store works (is reactive)
            fruits: store.state.fruits,
        }
    },
    computed: {
        // using getters in computed properties
        favorites: function(){ return store.getters.favoriteFruits },
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