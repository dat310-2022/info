/**
 * Assignment 7
 */

/** album-info component should display songs and album cover **/
const albumInfoC = {
    props: ["album_id"],
    template: `
    <div id="album_info">
        <div id="album_cover">
            <img v-bind:src="'/static/images/' + img" alt="">
        </div>
        <div id="album_songs">
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Title</th>
                        <th>Length</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="track, index in tracks">
                        <td class="song_no">{{ index }}</td>
                        <td class="song_title">{{ track.title }}</td>
                        <td class="song_length">{{ track.length }}</td>
                    </tr>
                    <tr>
                        <td colspan="2"><strong>Total length:</strong></td>
                        <td class="song_length"><strong>{{ length }}</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `,
    data: function(){
        return {
            img: "",
            tracks: "",
            length: 0
        }
    },
    watch: {
        album_id: async function(){
            let response = await fetch('/albuminfo?album_id=' + this.album_id);
            if (response.status == 200){
                let result = await response.json();
                console.log(result)
                this.img = result.cover_img;
                this.tracks = result.tracks;
                this.length = result.length;
            }
        }
    }
}
