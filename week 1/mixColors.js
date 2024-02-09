// Стандартно любой цвет кодируется шестью шестнадцатеричными
// цифрами, например белый это ffffff, красный — ff0000, зеленый — 00ff00,
// синий — 0000ff. Все остальные цвета получаются их смешением: 
// серый = белый + черный, желтый = красный + зеленый и т.д.

// Напишите функцию mixColors, которая принимает два цвета и возвращает новый цвет - их смесь.

mixColors('000000', 'ffffff');   // 808080
mixColors('ff0000', '00ff00');   // 808000
mixColors('ff00ff', 'ff00ff');   // ff00ff
mixColors('ff0000', '0000ff');   // 800080
mixColors('777777', '999999');   // 888888
mixColors('111222', '222444');   // 1a1b33
mixColors('abcdef', 'fedcba');   // d5d5d5
mixColors('000000', '000222');   // 000111

// Подсказка: смешивать стоит отдельно красную
// составляющую, отдельно зеленую, отдельно синюю.

// Дополнительное задание: улучшить функцию, 
// чтобы в аргументах можно было передавать и 
// цвета в формате #xxxxxx. Возвращается всегда цвет с ведущим #.

mixColors('000000', 'ffffff');   // #808080
mixColors('#ff0000', '00ff00');  // #808000
mixColors('ff00ff', '#ff00ff');  // #ff00ff
mixColors('#ff0000', '#0000ff'); // #800080

function mixColors(color1, color2) {
  color1 = color1.replace('#', '');
  color2 = color2.replace('#', '');

  let r1 = parseInt(color1.substring(0, 2), 16);
  let g1 = parseInt(color1.substring(2, 4), 16);
  let b1 = parseInt(color1.substring(4, 6), 16);

  let r2 = parseInt(color2.substring(0, 2), 16);
  let g2 = parseInt(color2.substring(2, 4), 16);
  let b2 = parseInt(color2.substring(4, 6), 16);

  let r = Math.round((r1 + r2) / 2);
  let g = Math.round((g1 + g2) / 2);
  let b = Math.round((b1 + b2) / 2);

  let result = '#' + ('0' + r.toString(16)).slice(-2) + ('0' + g.toString(16)).slice(-2) + ('0' + b.toString(16)).slice(-2);
  console.log(result);
  return result;
  
};

console.log(mixColors('000000', 'ffffff'));   // 808080
console.log(mixColors('ff0000', '00ff00'));   // 808000
console.log(mixColors('ff00ff', 'ff00ff'));   // ff00ff
console.log(mixColors('ff0000', '0000ff'));   // 800080
console.log(mixColors('777777', '999999'));   // 888888
console.log(mixColors('111222', '222444'));   // 1a1b33
console.log(mixColors('abcdef', 'fedcba'));   // d5d5d5
console.log(mixColors('000000', '000222'));   // 000111