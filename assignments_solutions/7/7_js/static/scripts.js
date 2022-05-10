/**
 * Assignment 9 (solved using regular JavaScript)
 */

/** Load the list of albums */
async function listAlbums() {
    let response = await fetch("/albums");
    if (response.status==200){
        let result = await response.json();
        var ul = document.getElementById("albums_list");
        for (var i=0; i< result.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = "<a href='#' onclick='showAlbum(" + result[i].album_id + ")'>" + result[i].artist + " - " + result[i].title + "</a>";
            ul.appendChild(li);
        }
    }
}


/** Show details of a given album */
async function showAlbum(album_id) {
    let url = "/albuminfo?album_id=" + album_id;
    let response = await fetch(url);
    if (response.status==200){
        let result = await response.json();
        document.getElementById("album_cover").innerHTML = "<img src='/static/images/" + result.cover_img + "' />";
        // table with track list and total length
        var table = "<table>\n<tr>\n<th>No.</th>\n<th>Title</th>\n<th>Length</th>\n</tr>\n";
        for (var i=0; i< result.tracks.length; i++) {
            table += "<tr>\n";
            table += "<td class='song_no'>" + (i+1) + "</td>\n";
            table += "<td class='song_title'>" + result.tracks[i].title + "</td>\n";
            table += "<td class='song_length'>" + result.tracks[i].length + "</td>\n";
            table += "</tr>\n";
        }
        table += "<tr>\n";
        table += "<td colspan='2'><strong>Total length:</strong></td>\n";
        table += "<td class='song_length'><strong>" + result.length + "</strong></td>\n";
        table += "</tr>\n";
        table += "</table>"
        document.getElementById("album_songs").innerHTML = table;
    }
}
