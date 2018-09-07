'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  let a = Array.from(new Set(collection));
  return a;

}

module.exports = choose_no_repeat_number;
