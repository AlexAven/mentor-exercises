isAnagram('стасционар', 'соратница');     // false
isAnagram('стационар', 'соратницаaaa');     // false
isAnagram('стационар', 'соратница');     // true
isAnagram('покраснение', 'пенсионерка'); // true
isAnagram('внимание', 'Вениамин');       // true
isAnagram('апельсин', 'спаниель');       // true
// работает с несколькими словами
isAnagram('Eleven plus Two', 'Twelve plus one');      // true
isAnagram('Statue of Liberty', 'Built to stay free'); // true
isAnagram('Older and Wiser', 'I learned words');      // true

function isAnagram2(word1, word2) {
  word2 = word2.toLowerCase().replaceAll(' ', '');
  word1 = word1.toLowerCase().replaceAll(' ', '');
  let arr = word1.split('');

  if (word1.length !== word2.length) {
    console.log(word1, word2, false);
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!word2.includes(arr[i])) {
      console.log(word1, word2, false);
      return false;
    } else {
      word2 = word2.replace(arr[i], '');
    }
  };

  console.log(word1, word2, true);
  return true;
}

//////////
function clear(word) {
  return word.toLowerCase().replaceAll(' ', '').split('');
}

function isAnagram(word1, word2) {
  const lettersSet = {};
  clear(word1).forEach(char => {
    if (lettersSet[char]) {
      lettersSet[char]++;
    } else {
      lettersSet[char] = 1;
    }
  });
  const lettersArray = clear(word2);
  
  const isItAnagram = lettersArray.every(letter => {
    if (lettersSet[letter]) {
      lettersSet[letter]--;
      if (!lettersSet[letter]) delete lettersSet[letter];

      return true;
    } else {
      return false;
    }
  });

  console.log(word1, word2, Object.keys(lettersSet).length ? false : isItAnagram);
  return Object.keys(lettersSet).length ? false : isItAnagram;
}


///////////
function sortAndLower(word) { 
  return word.toLowerCase().replaceAll(' ', '').split('').sort().join('');
}

function isAnagram3(word1, word2) {
  return sortAndLower(word1) === sortAndLower(word2);
}





