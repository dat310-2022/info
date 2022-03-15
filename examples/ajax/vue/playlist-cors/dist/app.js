let baseURL = "http://127.0.0.1:5000/";

let app = Vue.createApp({
    data: function(){
        return {
            playlist: [],
            loading: true
        }
    },
    created: async function(){ 
        let response = await fetch(baseURL + "playlist");
        if (response.status == 200){
            let result = await response.json()
            this.playlist = result;
            this.loading = false;
        }
    },
    methods: {
        addSong: async function(song) {
            // add song to playlist and mark as not saved
            song.saving = true;
            this.playlist.push(song);
            this.trysave({name: song.name, band: song.band});
        },
        trysave: async function(song){
            let response = await fetch(baseURL + "add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(song),
            });
            if (response.status == 200){
                let result = await response.json()
                this.playlist = result;
            }
        },
        remove: async function(song){
            // set as saving
            // use $set so change is detected
            // this.$set(this.playlist[index], 'saving', true );
            this.$set(song, 'saving', true );
            console.log(JSON.stringify({name: song.name, band: song.band}));
            let response = await fetch(baseURL + "remove", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name: song.name, band: song.band}),
            });
            if (response.status == 200){
                let result = await response.json()
                this.playlist = result;
            }            
        }
    }
});
app.component("song-form", songFormC);
app.component("song-list-item", songListItemC);
app.mount("#app");

