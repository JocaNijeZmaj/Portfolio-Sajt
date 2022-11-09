let timer = document.querySelector("#timer");
let inputText = document.querySelector("#input-text");
let displayWord = document.querySelector("#game-text");

let words = [
  {
    id: 1,
    word: "Svaka boca se mogla staviti na jednuod petnaest polica",
  },
  {
    id: 2,
    word: "Obrazovanje je najmoćnije oružje",
  },
  {
    id: 3,
    word: "Hodaj tako kao da tri muškarca hodaju iza tebe",
  },
  {
    id: 4,
    word: "Jedini način da se oslobodite",
  },
  {
    id: 5,
    word: "Daj ženi prave cipele i osvojiće svet",
  },
  {
    id: 6,
    word: "Svet je pozornica",
  },
  {
    id: 7,
    word: "Svi smo mi rođeni ludi",
  },
  {
    id: 8,
    word: "Moda je prolazna, stil je večan.",
  },
  {
    id: 9,
    word: "Ljubav nema godina",
  },
  {
    id: 10,
    word: "Ko misli da je srećan, on je zaista srećan",
  },
  {
    id: 11,
    word: "Možete upotrebiti da menjate svet",
  },
  {
    id: 12,
    word: "Neki čak i ostanu takvi",
  },
  {
    id: 13,
    word: "Kojoj svako igra svoju ulogu",
  },
  {
    id: 14,
    word: "Nekog iskušenja jeste da mu podlegnete",
  },
  {
    id: 15,
    word: "Ona se uvek iznova rađa",
  },
];

function clearInput() {
  inputText.value = null;
}
let gameFinish = false;
let isAllCorrect = true;

inputText.addEventListener("input", () => {
  let wordArr = displayWord.querySelectorAll('span');
  let wordValue = inputText.value.split('');
  wordArr.forEach((letterSpan, index) => {
    const letter = wordValue[index];
    if (letter == null ) {
        letterSpan.classList.remove("good");
        letterSpan.classList.remove("bad");
        isAllCorrect = false;
    }
    else if (letter === letterSpan.innerHTML) {
        letterSpan.classList.add("good");
        letterSpan.classList.remove("bad");
    }
    else {
        letterSpan.classList.remove("good");
        letterSpan.classList.add("bad");
        isAllCorrect = false;
    }
  })
  if (isAllCorrect) {
    gameFinish = true;
    goodJob();
  }
});

function goodJob(){
  displayWord.innerHTML = "BRAVO!"
  let finishBtn = document.createElement("button")
  finishBtn.innerHTML = "Igraj Ponovo"
  displayWord.appendChild(finishBtn)
  finishBtn.addEventListener("click", () => {
    isAllCorrect = true;
    gameFinish = false;
    displayWord.innerHTML = "";
    finishBtn.remove();
    getRandomLine();
    })
}

function getRandomLine() {
  gameFinish = false;
  let randomID = Math.floor(Math.random() * 15) + 1;
  let quote = words.filter((word) => word.id === randomID);
  let word = quote.map((e) => e.word).toString();
  displayWord.innerHTML = "";
  word.split("").forEach((letter) => {
    const letterSpan = document.createElement("span");
    letterSpan.innerHTML = letter;
    displayWord.appendChild(letterSpan);
  });
  clearInput();
  timerStart()
}

function timerStart() {
  let timeleft;

  if (window.innerWidth >= 600) timeleft = 4;
  else timeleft = 5;

  let interval = setInterval(function(){
    if(timeleft === -1){
      clearInput();
      clearInterval(interval)
      if (gameFinish) return
      else getRandomLine()
    } else {
      timer.innerHTML = timeleft;
    }
    timeleft--;
  }, 1000);
  
  if (gameFinish === true) clearInput();
}

setTimeout(getRandomLine, 3000);














//  Animacija  //
let textWrapper = document.querySelector(".intro .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
anime
  .timeline({ loop: false })
  .add({
    targets: ".intro .letter",
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".intro",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
