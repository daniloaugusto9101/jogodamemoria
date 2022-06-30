const grid = document.querySelector(".grid");


const characters = [
    "beth",
    "jerry",
    "jessica",
    "meeseeks",
    "morty",
    "pessoa-passaro",
    "pickle-rick",
    "rick",
    "scroopy",
    "summer"
];

let firsCard = "";
let secondCard = "";

const checkEndGame = () => {
    const disableCard = document.querySelectorAll(".card-inativo");
    const tArray = characters.length * 2;
    
    if (disableCard.length === tArray) {
        setTimeout(() => {
            alert("voce ganhou");
        }, 9000);
        
    }
}

const checkCard = () => {
    const firstCharacter = firsCard.getAttribute("data-character");
    const secondCharacter = secondCard.getAttribute("data-character");

    if (firstCharacter === secondCharacter) {
        setTimeout(() => {
            console.log("voce acretou");
            firsCard.firstChild.classList.add("card-inativo");
            secondCard.firstChild.classList.add("card-inativo");
            firsCard = "";
            secondCard = "";

            checkEndGame();
        }, 500);


    }else{

        setTimeout(() => {
            console.log("voce errou...");
            firsCard.classList.remove("revelar-carta");
            secondCard.classList.remove("revelar-carta");
            firsCard = "";
            secondCard = "";
        }, 800);


    }
}

const virarCarta = ({ target }) => {
    const card = target.parentNode;

    if (card.className.includes("revelar-carta")) {
        return;
    }
    if (firsCard === "") {
        card.classList.add("revelar-carta");
        firsCard = target.parentNode;
    } else if (secondCard === "") {
        card.classList.add("revelar-carta");
        secondCard = target.parentNode;

        checkCard();
    }
}

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}


const createCard = (character) => {
    const card = createElement("div", "card");
    const front = createElement("div", "face front");
    const back = createElement("div", "face back");

    front.style.backgroundImage = `url(../images/${character}.png)`;


    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener("click", virarCarta);
    card.setAttribute("data-character", character);

    return card;
}

const loadGame = () => {



    const duplicateArray = [...characters, ...characters];

    const embaralharArray = duplicateArray.sort(() => Math.random() - 0.5);

    duplicateArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    })
};


loadGame();
