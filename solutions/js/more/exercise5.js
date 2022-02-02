/**
 * Exercise #5: Card board
 */

function init(){
    let form = document.querySelector("form[name='layout_form']");
    form.onsubmit = layCards;
}

function turn(){
    this.style.transform= "rotateY(180deg)";
}

function layCards(event) {
    event.preventDefault();

    let layout = document.querySelector("#layout").value.split("x");
    let board = document.querySelector("#cardboard");
    
    board.innerHTML = "";

    // create cards
    for (let i = 0; i < layout[1] * layout[0]; i++){
        let card = document.createElement("div");
        card.classList.add("card");
    
        card.addEventListener("click", turn);
        board.appendChild(card);
    }

    board.style.width = 114 * layout[0] + 'px';
}

window.onload = init;