let app = Vue.createApp({
    data() {
        return gState.state;
    }
});
app.component("song-form", songFormC);
app.component("song-list-item", songListItemC);
app.mount("#app");

