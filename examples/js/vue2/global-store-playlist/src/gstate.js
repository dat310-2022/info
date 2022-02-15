function Song(name, band){
    this.name = name,
    this.band = band
}

class GState {
    constructor() {
        this.state = Vue.reactive(
            {
                playlist: []
            }
        )
        this.init();
    }
    add(song) {
        if (song && song.name)
            this.state.playlist.push(song);
        else
            throw "Trying to add song without name";
    };
    remove(song) {
        let index = this.state.playlist.indexOf(song)
        if (index > -1)
            this.state.playlist.splice(index, 1);
    };
    init() {
        this.add(new Song("My favorite", "This band"));
        this.add(new Song("Second favorite", "Other band"));
    };
    updateBand(name,newBand){
        let song = this.state.playlist.find(song=> song.name = name)
        if (song) {
            song.band = newBand;
        }
    }
}

let gState = new GState();