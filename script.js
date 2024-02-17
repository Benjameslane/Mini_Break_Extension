const wordText = document.querySelector(".word"),
      hintText = document.querySelector(".hint span"),
      timeText = document.querySelector(".time b"),
      inputField = document.querySelector("input"),
      refreshBtn = document.querySelector(".refresh-word"),
      checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            timeText.innerText = maxTime;
        } else {
            // Replace alert with showModal call
            showModal(`Time off! ${correctWord.toUpperCase()} was the correct word`);
            initGame();
        }
    }, 1000);
}

const initGame = () => {
    initTimer(30); // Adjust the timer as needed for your game
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}

initGame();

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if (!userWord) {
        // Replace alert with showModal call
        showModal("Please enter the word to check!");
        return;
    }
    if (userWord !== correctWord) {
        // Replace alert with showModal call
        showModal(`Oops! ${userWord} is not a correct word`);
    } else {
        // Replace alert with showModal call
        showModal(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
        initGame();
    }
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);

// Implement showModal function to display the modal with a message
function showModal(message) {
    document.getElementById("modal-text").innerText = message;
    document.getElementById("modal").style.display = "block";
}

// Close the modal when the user clicks on <span> (x)
document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("modal").style.display = "none";
}
