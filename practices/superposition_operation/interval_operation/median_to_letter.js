'use strict';

function median_to_letter(collection) {
  if(collection.length % 2 == 0){
    return convert(Math.ceil((collection[collection.length / 2 - 1] + collection[collection.length / 2]) / 2));
  }
  else{
    return convert(collection[(collection.length / 2)]);
  }

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
  //在这里写入代码
}

module.exports = median_to_letter;
