// 1.1
// 1. Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
function checkNumber(num) {
  let number = Math.sign(num)
  let result = (number === 0) ? 'Число является нулём' : (number < 0) ? 'Число является отрицательным' : 'Число является положительным';
  console.log(result);
  return result;
};

// 2. Дана строка. Выведите в консоль длину этой строки.
function lengthMeasure(str) {
  console.log(str.length);
};

// 3. Дана строка. Выведите в консоль последний символ строки.
function lastSymbol(str) {
  console.log(str[str.length - 1])
};

// 4. Дано число. Проверьте, четное оно или нет.
function EvenCheck(num) {
  let result = num % 2 === 0 ? 'Number is even' : 'Number is odd';
  return result;
};
 // 5. Даны два слова. Проверьте, что первые буквы этих слов совпадают.
 function firstLettersCheck(str1, str2) {
  let result = str1[0].toLowerCase() === str2[0].toLowerCase() ? 'Characters match' : 'Charecters don\'t match';
  return result;
 };

// 6. Дано слово. Получите его последнюю букву. 
//Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
function letterReturn(str) {
  let result = str.toLowerCase().endsWith('ь') ? str.charAt(str.length -2) : str.charAt(str.length -1);
  return result;
};

// 1.2
// 1. Дано число. Выведите в консоль первую цифру этого числа.
function firstDigitReturn(num) {
  num = num.toString();
  console.log(Number(num[0]));
};

// 2. Дано число. Выведите в консоль последнюю цифру этого числа.
function lastDigitReturn(num) {
  num = num.toString();
  console.log(Number(num[num.length -1]));
};

// 3. Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
function sumOfDigits(num) {
  num = num.toString();
  console.log(Number(num[0]) + Number(num[num.length - 1]));
};

// 4. Дано число. Выведите количество цифр в этом числе.
function numberLength(num) {
  console.log(num.toString().length);
};

// 5. Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
function numbersCheck(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  return num1[0] === num2[0] ? 'First digits of numbers are match' : 'First digits of numbers doesn\'t match';
};


// 2.1

// 1. Дана некоторая строка. Найдите позицию первого нуля в строке.
function findFirstZero() {

}






//  2.6

// 1. Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.
function sorting(str) {
  let IndexList = [];
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      IndexList.push(i);
    }
  };
  return IndexList;
};

// 2. Дан массив с некоторыми числами, например, вот такой:
// [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу:
// [321, 654, 987]
function reverseArray(arr) {
  let revercing = arr.map(item => {
    return parseInt(item.toString().split('').reverse().join(''));
  }
  );
  return revercing;
};

// 3.   '1234567'
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:
//      '1 234 567'
function spacing(str) {
  let newString = '';

  for (let i = str.length - 1, counter = 0; i >= 0; i--) {
    newString = str[i] + newString;
    counter++;
    if (counter % 3 === 0 && i !== 0) {
      newString = ' ' + newString;
    }
  };
  return newString;
};

// 4.   'AbCdE'
// Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее:
//      'aBcDe'
function changeCase(str) {
  let EditedStr = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() !== str[i]) {
      EditedStr = EditedStr + str[i].toUpperCase();
    } else {
      EditedStr = EditedStr + str[i].toLowerCase();
    }
  };
  return EditedStr;
};

// 5.  Дан некоторый массив с числами, например, вот такой:
//    [1, 2, 3, 4, 5, 6]
//    Слейте пары элементов вместе:
//    [12, 34, 56]
function concatElements(array) {
  array = array.join('');
  array = [...array.toString()];
  let editedElements = [];

  for (let i = 0; i < array.length; i += 2) {
    if (i !== array.length - 1 && array.length % 2 !== 0) {
      editedElements = [...editedElements, Number(array[i] + array[i + 1])];
    } else {
      editedElements = [...editedElements, Number(array[i])];
    }
  };
  return editedElements;
};

// 6.   Дана некоторая строка со словами:
//      'aaa bbb ccc eee fff'
// Сделайте заглавным первый символ каждого второго слова в этой строке.
// В нашем случае должно получится следующее:
//        'aaa Bbb ccc Eee fff'
function capitalLetters(str) {
  str = str.split(' ');
  let modyfiedStr = [];

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      modyfiedStr = [...modyfiedStr, str[i]];
    } else {
      let firstChar = str[i].charAt(0);
      modyfiedStr = [...modyfiedStr, firstChar.toUpperCase() + str[i].slice(1, str[i].length)];
    };
  };
  return modyfiedStr.join(', ');
};

// 2.7.

// 1.  Дана некоторая строка:
//    'a bc def ghij'
// Переведите в верхний регистр все подстроки, в которых количество букв
// меньше или равно трем. В нашем случае должно получится следующее:
//    'A BC DEF ghij'
