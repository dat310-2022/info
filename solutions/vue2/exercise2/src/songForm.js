let songFormC = {
    template: /* html */ `<form>
        <input type="text" id="songTextInput" size="40" placeholder="Song name" v-model="song">
        <input type="text" id="bandTextInput" size="40" placeholder="Band name" v-model="band">
        <input type="button" id="addButton" value="Add Song" v-on:click="addSong">
    </form>`,

    data: function() {return {
        song: null,
        band:null
    }},

    methods: {
        addSong: function() {
            this.$emit('new-song', new Song(this.song, this.band));
        },
    }
}