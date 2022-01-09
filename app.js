document.addEventListener("DOMContentLoaded", () => {

    // card options
    const cardArray = [
        {
        name: "maizy1",
        img: "images/maizy1.png"
        },
        {
            name: "maizy1",
            img: "images/maizy1.png"
        },
        {
            name: "maizy2",
            img: "images/maizy2.png"
        },
        {
            name: "maizy2",
            img: "images/maizy2.png"
        },
        {
            name: "marnie",
            img: "images/marnie.png"
        },
        {
            name: "marnie",
            img: "images/marnie.png"
        },
        {
            name: "duke",
            img: "images/duke.png"
        },
        {
            name: "duke",
            img: "images/duke.png"
        },
        {
            name: "huck",
            img: "images/huck.png"
        },
        {
            name: "huck",
            img: "images/huck.png"
        },
        {
            name: "kaizer",
            img: "images/kaizer.png"
        },
        {
            name: "kaizer",
            img: "images/kaizer.png"
        }
    ]
   
    // randomize cards

    cardArray.sort(() => 0.5 - Math.random());
    
    const grid = document.querySelector(".grid");
    const resultDisplay = document.querySelector("#result");
    var cardsChosen = [];
    var cardsChosenId = [];
    
    // create board
    
    function createBoard() {
        for (let i= 0; i < cardArray.length; i++) {
            var card = document.createElement("img")
            card.setAttribute("src","images/blank.png")
            card.setAttribute("data-id", i)
            card.addEventListener("click", flipCard)
            grid.appendChild(card)
        }
    }

    // checking for matches

    function checkForMatch() {
        var cards = document.querySelectorAll("img");
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        
        if (cardsChosen[0] === cardsChosen[1]) {
            alert("Good Job!");
            cards[optionOneId].setAttribute("src", "images/white.png");
            cards[optionTwoId].setAttribute("src", "images/white.png");
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute("src", "images/blank.png")
            cards[optionTwoId].setAttribute("src", "images/blank.png")
            alert("Not quite, try again!")

        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = "Congratulations, you have matched all cards!"
        }
    }

    // flip card
    function flipCard() {
        var cardId = this.getAttribute("data-id")
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute("src", cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 450)
        }

    }

    createBoard();





})