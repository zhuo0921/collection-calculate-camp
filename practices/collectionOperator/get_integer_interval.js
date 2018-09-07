'use strict';

function get_integer_interval(number_a, number_b) {

  const result = [...Array(Math.abs(number_a - number_b) + 1).keys()]//keys产生每个元素的值为索引
    .map(x => x + Math.min(number_b, number_a));

  return number_a < number_b ? result : result.reverse();
}
module.exports = get_integer_interval;

