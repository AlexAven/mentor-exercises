// Написать функцию, которая сжимает целочисленный массив следующим образом. 
// Подряд идущие несколько чисел объединяются в диапазон x-y (например, 1,2,3,4,5,6,7,8 => 1-8), 
// вся последовательность сжимается в строку, а ее элементы разделяются запятыми.

function digitRangeCreator(array) {
  let sequenceOfNumbers = [];

  for (let i = 0; i < array.length; i++) {

    if (Math.abs(array[i] - array[i + 1]) === 1) {
      sequenceOfNumbers.push(array[i]);
    } else {
      if (sequenceOfNumbers.length > 0) {
        sequenceOfNumbers.push(array[i]);
        break;
      }
    }
  };

  return sequenceOfNumbers.length > 0
    ?
    `${sequenceOfNumbers.join(',')} => ${String(sequenceOfNumbers.at(0))}-${String(sequenceOfNumbers.at(-1))}`
    :
    'There is no sequence!';
};