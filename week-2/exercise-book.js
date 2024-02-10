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
    if (i !== array.length -1 && array.length % 2 !== 0) {
    editedElements = [...editedElements, Number(array[i] + array[i+1])];
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

    for (let i = 0; i < str.length; i++ ) {
      if (i % 2 === 0) {
        modyfiedStr = [...modyfiedStr, str[i]];
      } else {
        let firstChar = str[i].charAt(0);
        modyfiedStr = [...modyfiedStr, firstChar.toUpperCase() + str[i].slice(1, str[i].length)];
      };
    };
  return modyfiedStr.join(', ');
};
