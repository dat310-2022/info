const gameStatC = {
    name: 'game-stat',
    template: `
    <div id="gamestat">
    <div id="player1"><span>{{ game.players[0] }}:</span>&nbsp;<span class="score">{{ game.scores[0] }}</span></div>
    <div id="stat">
        <span id="playerWrapper">{{ game.players[game.turn] }}</span><br />
        <span id="time">{{ time }}</span><br />
        <span id="flips">{{ game.flips[game.turn] }} flips</span>
    </div>
    <div id="player2"><span>{{ game.players[1] }}:</span>&nbsp;<span class="score">{{ game.scores[1] }}</span></div>
</div>
    `,
    data: ()=>{
        return {
            game: theGame
        };
    },
    computed: {
        time: function(){ 
            let seconds = this.game.seconds[this.game.turn];
            const min = Math.floor(seconds/60);
            seconds = seconds % 60;
            let str = (min < 10) ? "0": "";
            str += min + ":";
            str += (seconds <10) ? "0" + seconds: seconds;
            return str;
        } 
    }
}