'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let array = [];

  while (number>=0||Math.abs(number)<interval){
    array.push(number);
    number = parseFloat(((number-interval).toFixed(1)));
  }
  return array;
}

module.exports = spilt_to_zero;
