// ## Задача "Последовательность скобок"
// Вы пишите текстовый редактор с крутой подсветкой синтаксиса. 
// Вы хотите проверять ошибки программиста, в том числе неправильно расставленные скобки.
// Напишите функцию, которая будет проверять последовательность скобок на предмет ее правильности 
// (то есть открывающие и закрывающие скобки разных типов расставлены на своих местах). 
// Возможные скобки [], (), {}, <>. 
// Пример последовательностей скобок:
// - ()[()]{()()[]}  — верно
// - [(]{}) — неверно

// Метод должен принимать строку, состоящую только из разрешенных скобок, и возвращать true если последовательность правильная, false - если неправильная.

// isCorrectBrackets("[}"); // false
// isCorrectBrackets("[()]"); // true
// isCorrectBrackets("[[[)])"); // false
// isCorrectBrackets("<{[(>}])"); // false
// isCorrectBrackets("<{[()]}>"); // true
// isCorrectBrackets("]]"); // false
// isCorrectBrackets("{(())}"); // true
// isCorrectBrackets("{((])]"); // false


function isCorrectBrackets(brackets) {
  if (brackets.length % 2 !== 0) {
    console.log('скобки непарны!', false);
    return false;
  };
  
  for (let i = brackets.length / 2; i > 0; i--) {
    if (brackets.length !== 0 && brackets.startsWith('[')) {
      if (brackets.endsWith(']')) {
          console.log('было1', brackets);
        brackets = brackets.slice(1, -1);
        console.log('стало1', brackets);
        continue;
      } else {
        console.log(false);
        return false;
      };
    }

    else if (brackets.startsWith('(')) {
      if (brackets.endsWith(')')) {
          console.log('было2', brackets);
        brackets = brackets.slice(1, -1);
        console.log('стало2', brackets);
        continue;
      } else {
        console.log(false);
        return false;
      };
    }

    else if (brackets.startsWith('{')) {
      if (brackets.endsWith('}')) {
          console.log('было3', brackets);
        brackets = brackets.slice(1, -1);
        console.log('стало3', brackets)
        continue;
      } else {
        console.log(false)
        return false;
      };
    }

    else if (brackets.startsWith('<')) {
      if (brackets.endsWith('>')) {
          console.log('было4', brackets);
        brackets = brackets.slice(1, -1);
        console.log('стало4', brackets);
        continue;
      } else {
        console.log(false);
        return false;
      };
    } else {
      console.log('нет совпадений', false);
      return false;
    };
  };
  console.log(true);
  return true;
};