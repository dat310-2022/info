class Game{
    constructor(){
        this.players = ["Player 1", "Player 2"];
        this.reset();
    }
    reset(){
        this.scores = [0,0];
        this.flips = [0,0];
        this.seconds = [0,0];
        this.turn = Math.random() > 0.5? 0: 1;
        this.winner = -1;
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.tick();
        }, 1000);
    }
    flip(){
        this.flips[this.turn]++;
    }
    score(){
        this.scores[this.turn]++;
    }

    switch(){
        this.turn = (this.turn+1)%2;
    }

    end(){
        clearInterval(this.timer);
        if (this.scores[0] > this.scores[1]){
            this.winner = 0;
        }
        else if (this.scores[0] === this.scores[1] && this.seconds[0] < this.seconds[1]) {
            this.winnder = 0;
        }
        else {
            this.winner = 1;
        }
    }

    tick(){
        this.seconds[this.turn]++;
    }
}

const theGame = Vue.reactive(new Game());