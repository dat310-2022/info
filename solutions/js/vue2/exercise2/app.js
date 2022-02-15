function Song(name, band){
    this.name = name,
    this.band = band
}

let app = Vue.createApp({
    data() {
        return {
            playlist: [
                new Song("My favorite", "This band"),
                new Song("Second favorite", "Other band")
            ]
        }   
    },
    methods: {
        addSong: function(song) {
            this.playlist.push(song);
        },
        remove: function(index){
            if (index > -1) {
                this.playlist.splice(index, 1);
              }
        }
        
    }
});
app.component("song-form", songFormC);
app.component("song-list-item", songListItemC);
app.mount("#app");

