'use strict';

function find_first_even(collection) {
  //在这里写入代码
   return collection.filter(a=>a%2==0)[0];

}

module.exports = find_first_even;

