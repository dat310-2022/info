<template>
    <li>
        <img 
            src="../assets/delete.png" 
            alt="delete" 
            class="delete" 
            v-on:click="remove">
        <div>{{ song.name }}</div>
        <div>{{ song.band }}</div>
    </li>
</template>

<script>
import gState from '../data.js'

export default {
    props: ['song', 'index'],
    methods: {
        remove: function(){
            gState.remove(this.index);
        }
    }
}
</script>

<style scoped>
li {
    border-bottom: 1px solid #a9a9a9;
    padding: 10px;
    background-image: linear-gradient(#f9f9f9, #e3e3e3);
}
li:last-child {
    border-bottom: none;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
}
li:first-child {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}
li {
    position: relative;
}
img.delete {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 32px;
}
</style>