'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //return collection_a.filter((a,collection_b)=>a%collection_b!=0);
  return collection_a.filter(a => collection_b.filter(b => a % b == 0).length > 0);

}

module.exports = choose_divisible_integer;
