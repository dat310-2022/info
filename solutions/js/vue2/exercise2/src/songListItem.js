/*
* Component song list item
* emits: delete
*/
let songListItemC = {
    props: ['song'],
    template: /*html*/ `<li>
        <img 
            src="images/delete.png" 
            alt="delete" 
            class="delete" 
            v-on:click="$emit('delete')">
        <div>{{ song.name }}</div>
        <div>{{ song.band }}</div>
    </li>`
}