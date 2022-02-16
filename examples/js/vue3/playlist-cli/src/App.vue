<template>
    <song-form></song-form>

    <ul id="playlist">
      <song-list-item 
        v-for="(song, index) in playlist"
        v-bind:song="song"
        v-bind:index="index"
        v-bind:key="index"
      ></song-list-item>
    </ul>
</template>

<script>
import gState from './data.js'

import songForm from './components/SongForm'
import songListItem from './components/SongListItem'

export default {
  name: 'App',
  data: function(){
    return {
      playlist: gState.playlist,
    }
  },
  components: {
    songForm,
    songListItem
  }
}
</script>

<style>
body {
    font-family: Arial, sans-serif;
}

ul#playlist {
    border: 1px solid #a9a9a9;
    border-radius: 5px;
    margin-top: 10px;
    padding: 0px;
    list-style-type: none;
}
</style>