'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(a=>convert(a));

  function convert(number){
    if (number <= 26){
      return String.fromCharCode(96 + number);
    }
    else if(number % 26 == 0){
      return convert((number / 26) - 1) + convert(26);
    }
    else {
      return convert((number / 26)) + convert(number % 26);
    }
  }

};

module.exports = number_map_to_word_over_26;
