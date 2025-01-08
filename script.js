const words = [
    "java",
    "javascript",
    "python",
    "pascal",
    "ruby",
    "perl",
    "swift",
    "kotlin",
];


let randomIndex = Math.floor(Math.random() * words.length);
let selectedWord = words[randomIndex];
console.log(selectedWord);


let guessedlist = [];


let Word = "";
for (let i = 0; i < selectedWord.length; i++) {
    Word += "_ ";
}
document.getElementById("Word").textContent = Word;

function guessLetter() {
    let inputElement = 
        document.getElementById("betu");

   
    if (!inputElement.value) {
        alert("Nem adtál meg semmit öcskös, ez így nem jóú");
        return;
    }

    let letter = inputElement.value.toLowerCase();

    
    inputElement.value = "";

    
    if (guessedlist.includes(letter)) {
        alert("Ezt a betűt már kitaláltad.");
        return;
    }

    
    guessedlist.push(letter);


    let updatedDisplay = "";
    let allLettersGuessed = true;
    for (let i = 0; i < selectedWord.length; i++) {
        if (guessedlist.includes(selectedWord[i])) {
            updatedDisplay += selectedWord[i] + " ";
        } else {
            updatedDisplay += "_ ";
            allLettersGuessed = false;
        }
    }
    document.getElementById("Word")
        .textContent = updatedDisplay;

    
    if (allLettersGuessed) {
        alert("Gratulálok, kitaláltad a szót. Most menj és sírj a sarokban, hogy ez minden amit elértél az életben! <3");
    }


}

function resetGame() {
    randomIndex = Math.floor(Math.random() * words.length);
    selectedWord = words[randomIndex];
    console.log(selectedWord);

    guessedlist = [];

    Word = "";
    for (let i = 0; i < selectedWord.length; i++) {
        Word += "_ ";
    }
    document.getElementById("Word").textContent = Word;
    document.getElementById("betu").value = "";
}