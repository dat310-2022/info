let app =  Vue.createApp({
    data: function(){
        return {
            playlist: []
        }
    },
    created: async function(){
        let result = await fetch("/playlist");
        if (result.status == 200){
            this.playlist = await result.json();
        }
    },
    methods: {
        addSong: function(song) {
            song.saving = true;

            // this line is necessary so that the update done on line 33
            // will be detected by Vue, and the loading icon will disappear
            song = Vue.reactive(song);
            this.playlist.push(song);
            this.trySave(song);
        },
        trySave: async function(song){
            let response = await fetch("/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: song.name, band: song.band }),
            });
            if (response.status == 200){
                song.saving = false;
            }
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

