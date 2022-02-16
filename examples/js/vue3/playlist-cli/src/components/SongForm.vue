<template>
    <!-- The template for your component -->
    <form>
        <input type="text" id="songTextInput" size="40" placeholder="Song name" v-model="song">
        <input type="text" id="bandTextInput" size="40" placeholder="Band name" v-model="band">
        <input type="button" id="addButton" value="Add Song" v-on:click="addSong">
    </form>
</template>

<script>
// define your component in JavaScript
import gState from '../data'
export default {
    data: function() {return {
        song: null,
        band:null
    }},

    methods: {
        addSong: function() {
            gState.add(this.song, this.band);
        },
    }
}
</script>