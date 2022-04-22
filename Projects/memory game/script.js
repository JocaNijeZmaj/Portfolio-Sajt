document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "ACDC",
      img: "images/ac-dc-logo.png",
    },
    {
      name: "ACDC",
      img: "images/ac-dc-logo.png",
    },
    {
      name: "GunsNRoses",
      img: "images/Guns-N-Roses-Logo.png",
    },
    {
      name: "GunsNRoses",
      img: "images/Guns-N-Roses-Logo.png",
    },
    {
      name: "Metallica",
      img: "images/metallica-logo.png",
    },
    {
      name: "Metallica",
      img: "images/metallica-logo.png",
    },
    {
      name: "PinkFloyd",
      img: "images/pink-floyd-logo.png",
    },
    {
      name: "PinkFloyd",
      img: "images/pink-floyd-logo.png",
    },
    {
      name: "RHCP",
      img: "images/red-hot-chili-peppers-logo.png",
    },
    {
      name: "RHCP",
      img: "images/red-hot-chili-peppers-logo.png",
    },
    {
      name: "TheRollingStones",
      img: "images/the-rolling-stones-logo.png",
    },
    {
      name: "TheRollingStones",
      img: "images/the-rolling-stones-logo.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/back.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", FlipCard);
      grid.appendChild(card);
    }
  }
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("Mach");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/back.jpg");
      cards[optionTwoId].setAttribute("src", "images/back.jpg");
      alert("Pokusaj ponovo");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Cestitam, pobedili ste";
    }
  }

  function FlipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
