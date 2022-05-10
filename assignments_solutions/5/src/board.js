function Card(i, id){
    this.id = id;
    this.img_id = i;
    this.img = "images/" + i + ".png";
    this.flipped = false;
    this.removed = false;
}

class Board{
    constructor(game){
        this.flipped = 0;
        this.firstCard = -1;
        this.cards = mixCards();
    }

}

function mixedCards(){
    let cards = [];
    for (let i = 0; i<= 7; i++){
        cards.push(new Card(i, i.toString()+ "_" + 0));
        cards.push(new Card(i, i.toString()+ "_" + 1));
    }
    let mixedCards = [];
    while(cards.length > 0){
        let rand = Math.floor(Math.random() * cards.length);
        mixedCards.push(cards.splice(rand,1)[0]);
    }
    return mixedCards;
}

const boardC = {
    name: 'board',
    template: `
    <div class="cardboard" style="width: 400px;">
        <div class="outer" v-for="card in cards" v-bind:key="card.id" v-on:click="flip(card)">
            <div class="card front" v-bind:style="{ transform: card.flipped? 'rotateY(180deg)': 'none' }" v-show="!card.removed">
                <img v-bind:src="card.img">
            </div>
            <div class="card back" v-bind:style="{ transform: card.flipped? 'rotateY(180deg)': 'none' }"></div>
        </div>
    </div>
    `,
    data: function() {
        return {
            cards: mixedCards(),
            flips: 0,
            firstCard: null,
            secondCard: null,
            cardsLeft: 8,
        };
    },
    methods: {
        flip: function(card){
            
            switch(this.flips){
            case 0:
                card.flipped = true;
                this.firstCard = card;
                this.flips++;
                theGame.flip()
                break;
            case 1:
                card.flipped = true;
                this.secondCard = card;
                this.flips++;
                theGame.flip();
                setTimeout(()=>{this.resolve()},1000);
            }
        },
        resolve: function(){
            if (this.firstCard.img_id === this.secondCard.img_id){
                this.firstCard.removed = true;
                this.secondCard.removed = true;
                theGame.score();
                this.cardsLeft--;
            } 
            else {
                this.firstCard.flipped = false;
                this.secondCard.flipped = false;
                theGame.switch();
            }
            this.firstCard = null;
            this.secondCard = null;
            this.flips = 0;
           
            if (this.cardsLeft === 0){
                this.$emit("finished");
            }
        }
    }
}