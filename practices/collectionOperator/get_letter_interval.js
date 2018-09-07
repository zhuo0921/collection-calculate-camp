'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码

  const result = [...Array(Math.abs(number_a-number_b)+1).keys()]//keys产生每个元素的值为索引
    .map(x=>String.fromCharCode(x+Math.min(number_b,number_a)+96));

  return number_a<number_b?result:result.reverse();
 }

module.exports = get_letter_interval;
