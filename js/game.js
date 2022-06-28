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

const virarCarta = ({target}) =>{
    const card = target.parentNode;
    card.classList.add("revelar-carta");
}

const createElement = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
}


const createCard = (character) =>{
    const card = createElement("div", "card");
    const front = createElement("div", "face front");
    const back = createElement("div", "face back");

    front.style.backgroundImage = `url(../images/${character}.png)`;
    

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener("click", virarCarta);

    return card;
}

const loadGame = () => {

    

    const duplicateArray = [...characters, ...characters ];

    const embaralharArray = duplicateArray.sort(()=> Math.random() - 0.5); 

    duplicateArray.forEach((character)=>{
        const card = createCard(character); 
        grid.appendChild(card);  
    })
};


loadGame();
