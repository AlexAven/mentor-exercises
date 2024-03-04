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
  let result = str.toLowerCase().endsWith('ь') ? str.charAt(str.length - 2) : str.charAt(str.length - 1);
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
  console.log(Number(num[num.length - 1]));
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


// 1.3
// 1. Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
function returnStr(str) {
  console.log(str.length > 1 ? str[str.length - 2] : 'string length is too short!');
};

// 2. Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
function divideWithoutRemainder(num1, num2) {
  return num1 % num2 === 0;
};


// 1.4
// 1. Выведите в консоль все целые числа от 1 до 100.
(() => {
  let counter = 1;

  while (counter <= 100) {
    console.log(counter);
    counter++
  };
})();

// 2. Выведите в консоль все целые числа от -100 до 0.
(() => {
  let counter = -100;

  while (counter !== 1) {
    console.log(counter);
    counter++
  };
})();

// 4. Выведите в консоль все четные числа из промежутка от 1 до 100.
(() => {
  let counter = 1;

  while (counter <= 100) {
    counter % 2 === 0 ? console.log(counter) : null;
    counter++;
  }
})();

// 5. Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
(() => {
  let counter = 1;

  while (counter <= 100) {
    counter % 3 === 0 ? console.log(counter) : null;
    counter++;
  }
})();


// 1.5
// 1. Найдите сумму всех целых чисел от 1 до 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
};
console.log(sum);

// 2. Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
let sum = 0;
for (let i = 2; i <= 100; i += 2) {
  sum += i;
};
console.log(sum);

// 3. Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
let sum = 0;
for (let i = 1; i <= 100; i += 2) {
  sum += i;
};
console.log(sum);

// 4. Даны два целых числа. Найдите остаток от деления первого числа на второе.
function returnRemainder(num1, num2) {
  return num1 % num2;
};

// 5. Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
function reverseReturn(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
  };
};


// 1.6
// 1. Дан массив с числами. Найдите сумму квадратов элементов этого массива.
function sumOfSquare(arr) {
  return arr.reduce((acc, elem) => acc + Math.pow(elem, 2), 0);
};

// 2. Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
function sumOfSquare(arr) {
  return arr.reduce((acc, elem) => acc + Math.sqrt(elem), 0);
};

// 3. Дан массив с числами. Найдите сумму положительных элементов этого массива.
function sumPositiveElements(arr) {
  return arr.reduce((acc, elem) => {
    if (elem >= 0) {
      return acc + elem
    } else {
      return acc;
    };
  }, 0)
};

// 4. Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
function sumOfNumbers(arr) {
  return arr.reduce((acc, elem) => {
    if (elem > 0 && elem < 10) {
      return acc + elem;
    } else {
      return acc;
    }
  }, 0);
};


// 1.7
// 1. Дана строка:
//   'abcde'
//    Получите массив букв этой строки.

function makeAnArray(str) {
  return str.split('');
};

// 2.  Дано некоторое число:
//     12345
//     Получите массив цифр этого числа.
function makeAnArrayOfDigits(num) {
  num = num.toString().split('');
  return num.map(elem => Number(elem));
};

// or 

function makeAnArrayOfDigits(num) {
  return Array.from(String(num), Number);
};

// 3. Дано некоторое число:
//    12345
//    Переверните его:
//    54321
function reverseNumber(num) {
  return Number(num.toString().split('').reverse().join(''));
};

// 4. Дано некоторое число:
//    12345
//    Найдите сумму цифр этого числа.
function calcSum(num) {
  return Array.from(String(num), Number).reduce((acc, number) => {
    return acc + number;
  }, 0);
};


// 1.8
// 1. Заполните массив целыми числами от 1 до 10.
let arr1 = Array.from({ length: 10 }, (_, i) => i + 1);
console.log(arr1);

// or

let arr2 = [];
for (let i = 1; i <= 10; i++) {
  arr2.push(i);
};
console.log(arr2);


// 2. Заполните массив четными числами из промежутка от 1 до 100.
let arr = [];
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    arr.push(i);
  };
};
console.log(arr);

// 3.  Дан массив с дробями:
//     [1.456, 2.125, 3.32, 4.1, 5.34]
//     Округлите эти дроби до одного знака в дробной части.
function roundFractions(arr) {
  return arr.map(num => Math.round(num * 10) / 10);;
};

// 1.9 
// 1.  Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
function returnStrings(arr) {
  let regExp = /^http:\/\//;
  return arr.filter(item => item.match(regExp));
};

// 2. Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
function returnString2(arr) {
  let regExp = /\.html$/;
  return arr.filter(item => item.match(regExp));
};

// 3. Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
function encreaseOnPercent(arr) {
  return arr.map(num => num * 1.10);
};


// 1.10
// 1. Заполните массив случайными числами из промежутка от 1 до 100.
let length = 10;
let randomArray = Array.from({ length }, () => Math.floor(Math.random() * 100) + 1);

// or 

function randomFilling(length) {
  let randomArray = [];
  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    randomArray.push(randomNumber);
  }
  return randomArray;
}

let length1 = 10; // указываем желаемую длину массива
let randomArray1 = fillArrayWithRandomNumbers(length1);
console.log(randomArray);


// 2.1

// 1. Дана некоторая строка. Найдите позицию первого нуля в строке.
function findFirstZero(string) {
  return string.split('').indexOf('0');
};

// 2. Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
for (let i = 1; i <= 1000; i++) {

};

// 3. Дан массив. Удалите из него элементы с заданным значением.
function deleteFromArray(array, removeElement) {
  return array = array.filter(elem => elem !== removeElement);
};

// 4. Дан некоторый массив, например, вот такой:  [1, 2, 3, 4, 5, 6]
//Найдите сумму первой половины элементов этого массива.
function sumOfElementsOfFirstPartOfArray(array) {
  array = array.slice(0, (array.length));
  return array.reduce((acc, elem) => {
    return acc + elem;
  }, 0)
};

//  2.2
// 1. Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
function negativeDigitCounter(array) {
  let counter = 0;
  for (let element of array) {
    if (element < 0) {
      counter++;
    }
  };
  return counter;
};

// 2. Дан массив с числами. Оставьте в нем только положительные числа.
function positiveOnlyFilter(array) {
  return array = array.filter(element => element >= 0);
};


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
