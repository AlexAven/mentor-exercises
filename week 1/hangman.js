// Слово с уже разгаданными буквами _ro_t_nd
// Введённые им неправильные буквы через разделитель _ro_t_nd | zae
// Количество оставшихся ошибок _ro_t_nd | za | left: 4
// Правила:

// Не учитывается регистр букв
// Не учитываются пробельные символы внутри строки. 
// При передаче нескольких слов в функцию внутренние пробельные символы не закрываются _. 
// Все внешние пробельные символы удаляются. 
// Например, строка 'Frontend Raccoon' будет выглядеть следующим 
// образом: ________ _______, так же как и строка ' Frontend Raccoon '.


// Пробельные символы не учитываются
var fr = new Hangman('Frontend Raccoon'); // "________ _______ | left: 6"

fr.guess('a'); // "________ _a_____ | left: 6"
fr.guess('z'); // "________ _a_____ | z | left: 5"
fr.guess('t'); // "____t___ _a_____ | z | left: 5"
fr.guess('c'); // "____t___ _acc___ | z | left: 5"
fr.guess('m'); // "____t___ _acc___ | zm | left: 4"
fr.guess('f'); // "F___t___ _acc___ | zm | left: 4"
fr.guess('r'); // "Fr__t___ Racc___ | zm | left: 4"
fr.guess('g'); // "Fr__t___ Racc___ | zmg | left: 3"
fr.guess('o'); // "Fro_t___ Raccoo_ | zmg | left: 3"
fr.guess('n'); // "Front_n_ Raccoon | zmg | left: 3"
fr.guess('c'); // "You have already entered this letter"
fr.guess('b'); // "Front_n_ Raccoon | zmgb | left: 2"
fr.guess('e'); // "Fronten_ Raccoon | zmgb | left: 2"
fr.guess('d'); // "You won! The word was Frontend Raccoon"
fr.guess('v'); // "You have already won! The word was Frontend Raccoon"
// ...
fr.guess('e'); // "Fronten_ Raccoon | zmgb | left: 2"
fr.guess('y'); // "Fronten_ Raccoon | zmgby | left: 1"
fr.guess('k'); // "Fronten_ Raccoon | zmgbyk | left: 0"
fr.guess('i'); // "You lost. 🙁 The word was Frontend Raccoon"
fr.guess('m'); // "You have already lost. 🙁 The word was Frontend Raccoon"



function Hangman(word) {
  this.word = word.trim().toLowerCase();
  this.guessedLetters = [];
  this.wrongLetters = [];
  this.triesLeft = 6;

  this.displayGuessedLetters = function() {
    let displayLetters = '';
    for (let letter of this.word) {
      if (letter === ' ') {
        this.guessedLetters.push(letter);
        displayLetters += letter;
      }

      if (this.guessedLetters.includes(letter)) {
        displayLetters += letter;
      } else {
        displayLetters += '_';
      }
    };
    return displayLetters;
  };

   console.log(`${this.displayGuessedLetters()} | ${this.wrongLetters.join('')} | tries left: ${this.triesLeft}`);

  this.guess = function(letter) {
    if (this.triesLeft <= 0) {
      return console.log(`You have already lost. :( The word was: ${this.word})`);
    };

    if (this.word.length === this.guessedLetters.length) {
      return console.log(`You have already won! The word was: ${this.word}`);
    };

    letter = letter.trim().toLowerCase();

    if (this.word.includes(letter)) {
      if (!this.guessedLetters.includes(letter)) {
        this.guessedLetters.push(letter);
        if (this.word.length === this.guessedLetters.length) {
          return console.log(`You won! The word was: ${this.word}`);
        }
      } else {
        console.log('You have already entered this letter');
      }
    } else {
      if (!this.wrongLetters.includes(letter)) {
        this.wrongLetters.push(letter);
        this.triesLeft--;
        if (this.triesLeft <= 0) {
          return console.log(`You lost. :( The word was: ${this.word})`);
        }
      } else {
        console.log('You have already entered this letter');
      }
    }
    console.log(`${this.displayGuessedLetters()} | ${this.wrongLetters.join('')} | tries left: ${this.triesLeft}`);
  };
  
};

const fr = new Hangman('frontend');