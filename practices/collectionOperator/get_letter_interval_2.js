'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码

  // const result = [...Array(Math.abs(number_a-number_b)+1).keys()]//keys产生每个元素的值为索引
  //   .map(x=>String.fromCharCode(x+Math.min(number_b,number_a)+96));
  //
  // return number_a<number_b?result:result.reverse();

  let arr = [];
  if(number_a>=number_b)
  {
    for(let i=number_a;i>=number_b;i--)
      arr.push(convert(i));
  }
  else
  {
    for(let i=number_a;i<=number_b;i++)
      arr.push(convert(i));
  }
  return arr;
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

module.exports = get_letter_interval_2;

