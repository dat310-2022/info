/*
* Component song list item
*/
let songListItemC = {
    props: ['song'],
    template: /*html*/ `<li>
        <img 
            src="images/delete.png" 
            alt="delete" 
            class="delete" 
            v-on:click="remove">
        <div>{{ song.name }}</div>
        <div>{{ song.band }}</div>
    </li>`,
    methods: {
        remove(){
        gState.remove(this.song);
        }
    }
}