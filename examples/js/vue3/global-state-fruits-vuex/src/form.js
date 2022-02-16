let fruitFormC = {
    template: `
    <form action="">
        <fieldset>
        <legend>Add fruit</legend>
            <label for="name">New Fruit</label>
            <input type="text" 
                id="name"
                v-model="name">
            <br>
            <input type="checkbox" 
                id="favorite" 
                v-model="favorite">
            <label for="favorite">
                favorite
            </label>
        <button v-on:click="add">Add</button>
        </fieldset>
    </form>
    `,
    data: function(){
        return {
            name: '',
            favorite: false
        }
    },
    methods: {  
        add: function(event){
            // prevent form submission, since it would refresh page
            event.preventDefault();
            
            // call the mutation by calling store.commit
            store.commit("addFruit", { name: this.name, favorite: this.favorite});
        }
    }
}