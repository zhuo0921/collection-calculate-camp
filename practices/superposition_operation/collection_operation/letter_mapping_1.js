'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  return collection.filter(a=>a%2==0).map(a=>String.fromCharCode(a+96));
}

module.exports = even_to_letter;
