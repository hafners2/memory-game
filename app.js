let cardId;
let cardImg;
let cardsChosen = [];
let cardsChosenIDs = [];
let cardsWon = [];

let gotAMatch = new Audio('audio/match.mp3');
let gameWon = new Audio('audio/gameWon.mp3');

const grid = document.querySelector('#grid');
const score = document.getElementById('score');

const cardArray = [
    {
        name: 'pikachu',
        img: 'images/pikachu.png'
    },
    {
        name: 'charizard',
        img: 'images/charizard.png'
    },
    {
        name: 'blastoise',
        img: 'images/blastoise.png'
    },
    {
        name: 'gengar',
        img: 'images/gengar.jpg'
    },
    {
        name: 'articuno',
        img: 'images/articuno.png'
    },
    {
        name: 'mewtwo',
        img: 'images/mewtwo.png'
    },
    {
        name: 'pikachu',
        img: 'images/pikachu.png'
    },
    {
        name: 'charizard',
        img: 'images/charizard.png'
    },
    {
        name: 'blastoise',
        img: 'images/blastoise.png'
    },
    {
        name: 'gengar',
        img: 'images/gengar.jpg'
    },
    {
        name: 'articuno',
        img: 'images/articuno.png'
    },
    {
        name: 'mewtwo',
        img: 'images/mewtwo.png'
    }
];

cardArray.sort(() => 0.5 - Math.random());

function createBoard () {
    for (let i = 0; i < 12; i++) {
        const card = document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard);
        grid.append(card);
    }
}

function flipCard() {
    cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIDs.push(cardId);

    this.setAttribute('src', cardArray[cardId].img)

    setTimeout( () => {
        if(cardsChosen.length === 2) {
            checkMatch()
        }
    }
    , 800)
}

function checkMatch() {
    let cardOne = cardsChosen[0];
    let cardTwo = cardsChosen[1];
    if(cardOne === cardTwo) {
        //if the same card is chosen
        if(cardsChosenIDs[0] === cardsChosenIDs[1]) {
            alert("Same card!")
            for(i=0; i < cardsChosen.length; i++) {
                grid.children[cardsChosenIDs[i]].setAttribute('src', 'images/blank.png')
            }
            cardsChosen = [];
            cardsChosenIDs = [];
        }
    }
    //while(cardsWon.length == null || cardsWon.length !== 6 ){
        //console.log('ugh')
    //}
    console.log(cardsWon.length)
    if(cardOne === cardTwo && cardsChosenIDs[0] !== cardsChosenIDs[1]) {
        //if it is indeed a match
        alert('Match Found!')
        for(i=0; i < cardsChosen.length; i++) {
            grid.children[cardsChosenIDs[i]].setAttribute('src', 'images/white.png')
            grid.children[cardsChosenIDs[i]].removeEventListener('click', flipCard)
        }
        if (cardsWon.length == 5) {
            gameWon.play()
            score.innerHTML = "Congrats, you found them all!";
        } else {
            cardsWon.push(cardsChosen)
            score.innerHTML = cardsWon.length;
            gotAMatch.play();
            cardsChosen = [];
            cardsChosenIDs = [];
        }
    }
    if(cardOne !== cardTwo) { //cards are not a match
        //alert('Not a Match!')
        for(i=0; i < cardsChosen.length; i++) {
            grid.children[cardsChosenIDs[i]].setAttribute('src', 'images/blank.png')
        }
        cardsChosen = [];
        cardsChosenIDs = [];
    }
}


createBoard()

    