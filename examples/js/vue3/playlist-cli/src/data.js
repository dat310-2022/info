import { reactive } from 'vue'

class Song {
    constructor(name, band) {
        this.name = name;
        this.band = band;
    }
}

let state = {
    playlist: reactive([]),
    add(songname, band) {
        this.playlist.push(new Song(songname, band));
    },
    remove(index) {
        if (index > -1)
            this.playlist.splice(index, 1);
    },
    init() {
        this.add("My favorite", "This band");
        this.add("Second favorite", "Other band");
    },
    updateBand(name,newBand){
        let song = this.playlist.find(song=> song.name = name)
        if (song) {
            song.band = newBand;
        }
    },
}

state.init();

export default state;