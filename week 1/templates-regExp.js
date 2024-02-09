var templates = [
  'Hello, {user}!',
  'How was your {dayOfTheWeek}?',
  'Would you like a cup of {drink1}, or maybe some {drink2}?',
  'I\'ve just learned how to play the {instrument}, so I\'m stil a bad {instrument}ist.'
];
// Hello, missingdays!
(template(templates[0], { user: 'missingdays' })); 

// How was your Monday?
(template(templates[1], { dayOfTheWeek: 'Monday' })); 

// Would you like a cup of tea, or maybe some coffee?
(template(templates[2], { drink1: 'tea', drink2: 'coffee' })); 

// I've just learned how to play the guitar, so I'm still a bad guitarist.
(template(templates[3], { instrument: 'guitar' }));

let settings = {
  frameworks: ['Angular', 'Ember', 'Backbone'],
  libraries: ['jQuery', 'Underscore', 'D3']
};

// Popular frameworks: Angular, Ember, Backbone.
template('Popular frameworks: {frameworks}.', settings);

// Popular libraries: jQuery, Underscore, D3.
template('Popular libraries: {libraries}.', settings);

// Popular frameworks and libraries: Angular, Ember, Backbone, jQuery, Underscore, D3.
template('Popular frameworks and libraries: {frameworks}, {libraries}.', settings)


function template(patternString, instructions) {
  const regExp = /{(\w+)}/g;
  const patterns = patternString.match(regExp);
  
  patterns.forEach((pattern) => {
    if (pattern.slice(1, -1) in instructions) {
      if (Array.isArray(instructions[pattern.slice(1, -1)])) {
        patternString = patternString.replace(pattern, instructions[pattern.slice(1, -1)].join(', '));
      } else {
        patternString = patternString.replace(pattern, instructions[pattern.slice(1, -1)]);
      }
    };
  });
  console.log(patternString);
  return patternString; 
};